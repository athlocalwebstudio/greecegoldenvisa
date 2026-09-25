"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import styles from "./page.module.css";

const CALCULATOR_QUERY = `*[
  _type == "calculatorSettings" &&
  _id == "calculatorSettings"
][0]`;

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function calculateCost(
  cost,
  propertyPrice,
  investmentAmount
) {
  if (
    !cost ||
    cost.enabled === false ||
    typeof cost.amount !== "number"
  ) {
    return 0;
  }

  if (cost.calculationType === "percentage") {
    const base =
      cost.calculationBase ===
      "investmentAmount"
        ? investmentAmount
        : propertyPrice;

    return base * (cost.amount / 100);
  }

  return cost.amount;
}

export default function InvestmentCalculatorPage() {
  /*
   * ============================================================
   * SANITY DATA
   * ============================================================
   */

  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /*
   * ============================================================
   * CALCULATOR STATE
   * ============================================================
   *
   * These MUST be declared before any conditional return.
   */

  const [route, setRoute] = useState("");
  const [propertyPrice, setPropertyPrice] =
    useState(400000);
  const [includeSpouse, setIncludeSpouse] =
    useState(false);
  const [includeChild, setIncludeChild] =
    useState(false);

  /*
   * ============================================================
   * FETCH SANITY SETTINGS
   * ============================================================
   */

  useEffect(() => {
    let mounted = true;

    async function loadCalculatorSettings() {
      try {
        const data = await client.fetch(
          CALCULATOR_QUERY
        );

        if (!mounted) {
          return;
        }

        setSettings(data);
        setError(false);
      } catch (err) {
        console.error(
          "Failed to load calculator settings:",
          err
        );

        if (mounted) {
          setError(true);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadCalculatorSettings();

    return () => {
      mounted = false;
    };
  }, []);

  /*
   * ============================================================
   * SANITY DATA DERIVED VALUES
   * ============================================================
   */

  const enabledRoutes = useMemo(() => {
    return (settings?.routes || []).filter(
      (item) => item?.enabled !== false
    );
  }, [settings]);

  const visaCosts = useMemo(() => {
    return settings?.visaCosts || [];
  }, [settings]);

  const purchaseCosts = useMemo(() => {
    return settings?.purchaseCosts || [];
  }, [settings]);

  /*
   * ============================================================
   * INITIALISE ROUTE AFTER SANITY LOAD
   * ============================================================
   */

  useEffect(() => {
    if (!enabledRoutes.length) {
      return;
    }

    setRoute((currentRoute) => {
      const currentRouteStillExists =
        enabledRoutes.some(
          (item) => item.label === currentRoute
        );

      if (currentRouteStillExists) {
        return currentRoute;
      }

      return enabledRoutes[0].label;
    });
  }, [enabledRoutes]);

  /*
   * ============================================================
   * SELECTED ROUTE
   * ============================================================
   */

  const selectedRoute = useMemo(() => {
    return (
      enabledRoutes.find(
        (item) => item.label === route
      ) || null
    );
  }, [enabledRoutes, route]);

  /*
   * ============================================================
   * MAKE SURE PRICE IS NOT BELOW ROUTE MINIMUM
   * ============================================================
   */

  useEffect(() => {
    if (!selectedRoute) {
      return;
    }

    const minimum =
      Number(
        selectedRoute.minimumInvestment
      ) || 0;

    setPropertyPrice((currentPrice) => {
      if (currentPrice < minimum) {
        return minimum;
      }

      return currentPrice;
    });
  }, [selectedRoute]);

  /*
   * ============================================================
   * CALCULATIONS
   * ============================================================
   */

  const costs = useMemo(() => {
    const enabledVisaCosts =
      visaCosts.filter(
        (cost) => cost?.enabled !== false
      );

    /*
     * Investment amount used for percentage-based
     * costs when the CMS selects "Investment Amount".
     *
     * This is the minimum investment amount
     * configured for the selected route.
     */

    const investmentAmount =
      Number(
        selectedRoute?.minimumInvestment
      ) || 0;

    /*
     * Main investor:
     *
     * Includes:
     * - general
     * - mainInvestor
     *
     * Current Sanity data:
     * Lawyer €2,000
     * Government fee €2,000
     * Residence card €16
     * Health insurance €240
     *
     * Total = €4,256
     */

    const mainInvestorCosts =
      enabledVisaCosts
        .filter(
          (cost) =>
            !cost.category ||
            cost.category === "general" ||
            cost.category ===
              "mainInvestor"
        )
        .reduce(
          (total, cost) =>
            total +
            calculateCost(
              cost,
              propertyPrice,
              investmentAmount
            ),
          0
        );

    /*
     * Spouse
     */

    const spouseCosts = includeSpouse
      ? enabledVisaCosts
          .filter(
            (cost) =>
              cost.category ===
              "spouse"
          )
          .reduce(
            (total, cost) =>
              total +
              calculateCost(
                cost,
                propertyPrice,
                investmentAmount
              ),
            0
          )
      : 0;

    /*
     * Child 0–13
     */

    const childCosts = includeChild
      ? enabledVisaCosts
          .filter(
            (cost) =>
              cost.category === "child"
          )
          .reduce(
            (total, cost) =>
              total +
              calculateCost(
                cost,
                propertyPrice,
                investmentAmount
              ),
            0
          )
      : 0;

    /*
     * Golden Visa application costs
     */

    const applicationCosts =
      mainInvestorCosts +
      spouseCosts +
      childCosts;

    /*
     * Purchase costs
     *
     * Each purchase cost can now choose in Sanity:
     *
     * - Property Price
     * - Investment Amount
     *
     * for percentage-based calculations.
     */

    const enabledPurchaseCosts =
      purchaseCosts.filter(
        (cost) => cost?.enabled !== false
      );

    const propertyPurchaseCosts =
      enabledPurchaseCosts.reduce(
        (total, cost) =>
          total +
          calculateCost(
            cost,
            propertyPrice,
            investmentAmount
          ),
        0
      );

    /*
     * Technical property inspection
     *
     * Current Sanity:
     * Enabled = true
     * Amount = €450
     */

    const technicalInspection =
      settings?.inspectionEnabled
        ? Number(
            settings.inspectionAmount || 0
          )
        : 0;

    /*
     * Total additional costs
     */

    const totalAdditionalCosts =
      applicationCosts +
      propertyPurchaseCosts +
      technicalInspection;

    /*
     * Complete estimated capital
     */

    const estimatedTotal =
      propertyPrice +
      totalAdditionalCosts;

    return {
      mainInvestorCosts,
      spouseCosts,
      childCosts,
      applicationCosts,
      propertyPurchaseCosts,
      technicalInspection,
      totalAdditionalCosts,
      estimatedTotal,
      enabledPurchaseCosts,
      enabledVisaCosts,
      investmentAmount,
    };
  }, [
    visaCosts,
    purchaseCosts,
    propertyPrice,
    includeSpouse,
    includeChild,
    selectedRoute,
    settings?.inspectionEnabled,
    settings?.inspectionAmount,
  ]);

  /*
   * ============================================================
   * PREVIEW FAMILY COSTS
   * ============================================================
   */

  const spouseCostPreview = useMemo(() => {
    const investmentAmount =
      Number(
        selectedRoute?.minimumInvestment
      ) || 0;

    return visaCosts
      .filter(
        (cost) =>
          cost?.enabled !== false &&
          cost.category === "spouse"
      )
      .reduce(
        (total, cost) =>
          total +
          calculateCost(
            cost,
            propertyPrice,
            investmentAmount
          ),
        0
      );
  }, [
    visaCosts,
    propertyPrice,
    selectedRoute,
  ]);

  const childCostPreview = useMemo(() => {
    const investmentAmount =
      Number(
        selectedRoute?.minimumInvestment
      ) || 0;

    return visaCosts
      .filter(
        (cost) =>
          cost?.enabled !== false &&
          cost.category === "child"
      )
      .reduce(
        (total, cost) =>
          total +
          calculateCost(
            cost,
            propertyPrice,
            investmentAmount
          ),
        0
      );
  }, [
    visaCosts,
    propertyPrice,
    selectedRoute,
  ]);

  /*
   * ============================================================
   * ROUTE HANDLER
   * ============================================================
   */

  function handleRouteChange(nextRoute) {
    setRoute(nextRoute);

    const selected =
      enabledRoutes.find(
        (item) => item.label === nextRoute
      );

    if (!selected) {
      return;
    }

    const minimum =
      Number(
        selected.minimumInvestment
      ) || 0;

    setPropertyPrice((currentPrice) => {
      if (currentPrice < minimum) {
        return minimum;
      }

      return currentPrice;
    });
  }

  /*
   * ============================================================
   * PRICE HANDLER
   * ============================================================
   */

  function handlePriceChange(event) {
    const value = Number(
      event.target.value
    );

    if (!Number.isNaN(value)) {
      setPropertyPrice(value);
    }
  }

  /*
   * ============================================================
   * LOADING STATE
   * ============================================================
   */

  if (loading) {
    return (
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid} />

          <div className={styles.container}>
            <div
              className={
                styles.heroContent
              }
            >
              <div
                className={styles.eyebrow}
              >
                <span />
                INVESTMENT CALCULATOR
              </div>

              <h1>
                Know your budget
                <em>
                  {" "}
                  before you invest.
                </em>
              </h1>

              <p>
                Loading calculator...
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  /*
   * ============================================================
   * ERROR / MISSING SANITY DOCUMENT
   * ============================================================
   */

  if (error || !settings) {
    return (
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid} />

          <div className={styles.container}>
            <div
              className={
                styles.heroContent
              }
            >
              <div
                className={styles.eyebrow}
              >
                <span />
                INVESTMENT CALCULATOR
              </div>

              <h1>
                Know your budget
                <em>
                  {" "}
                  before you invest.
                </em>
              </h1>

              <p>
                The calculator could not
                be loaded. Please try again
                later.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  /*
   * ============================================================
   * NORMALISED DISPLAY VALUES
   * ============================================================
   */

  const belowMinimum =
    selectedRoute &&
    propertyPrice <
      Number(
        selectedRoute.minimumInvestment ||
          0
      );

  const inspectionLabel =
    settings.inspectionLabel ||
    `From ${formatCurrency(
      costs.technicalInspection
    )}`;

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              INVESTMENT CALCULATOR
            </div>

            <h1>
              {settings.title ||
                "Know Your Investment Budget"}
              <em>
                {" "}
                before you invest.
              </em>
            </h1>

            <p>
              {settings.description ||
                "Estimate the capital required for your Greek Golden Visa investment."}
            </p>
          </div>

          <div className={styles.heroMeta}>
            <strong>2026</strong>
            <span>ESTIMATE</span>
            <span>GREECE</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CALCULATOR
      ===================================================== */}

      <section
        className={
          styles.calculatorSection
        }
      >
        <div className={styles.container}>
          <div
            className={
              styles.calculatorIntro
            }
          >
            <div>
              <div
                className={
                  styles.sectionLabel
                }
              >
                01 / CHOOSE YOUR ROUTE
              </div>

              <h2>
                Start with the
                <span>
                  {" "}
                  investment route.
                </span>
              </h2>
            </div>

            <p>
              Select the investment route
              you are considering. The
              applicable minimum depends on
              the location and structure of
              the qualifying investment.
            </p>
          </div>

          <div
            className={
              styles.routeSelector
            }
          >
            {enabledRoutes.map(
              (item, index) => (
                <button
                  type="button"
                  key={
                    item._key ||
                    item.label
                  }
                  className={`${styles.routeOption} ${
                    route === item.label
                      ? styles.routeOptionActive
                      : ""
                  }`}
                  onClick={() =>
                    handleRouteChange(
                      item.label
                    )
                  }
                >
                  <span
                    className={
                      styles.routeNumber
                    }
                  >
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <strong>
                    {item.label}
                  </strong>

                  <span>
                    {item.title}
                  </span>
                </button>
              )
            )}
          </div>

          {selectedRoute && (
            <div
              className={
                styles.selectedRoute
              }
            >
              <div>
                <span
                  className={
                    styles.miniLabel
                  }
                >
                  SELECTED ROUTE
                </span>

                <strong>
                  {selectedRoute.label}
                </strong>

                <h3>
                  {selectedRoute.title}
                </h3>
              </div>

              <p>
                {selectedRoute.description}
              </p>
            </div>
          )}

          {/* =================================================
              PROPERTY + APPLICANTS + RESULTS
          ================================================= */}

          <div
            className={
              styles.calculatorGrid
            }
          >
            {/* =================================================
                INPUT PANEL
            ================================================= */}

            <div
              className={
                styles.inputPanel
              }
            >
              <div
                className={
                  styles.sectionLabel
                }
              >
                02 / YOUR PROPERTY
              </div>

              <h2>
                What are you planning
                <span>
                  {" "}
                  to invest?
                </span>
              </h2>

              <p
                className={
                  styles.inputDescription
                }
              >
                Enter the expected
                acquisition price of the
                property you are considering.
              </p>

              <div
                className={
                  styles.priceInput
                }
              >
                <span>€</span>

                <input
                  type="number"
                  min="0"
                  step="5000"
                  value={propertyPrice}
                  onChange={
                    handlePriceChange
                  }
                  aria-label="Property investment amount"
                />
              </div>

              <input
                className={
                  styles.priceRange
                }
                type="range"
                min="200000"
                max="1200000"
                step="5000"
                value={propertyPrice}
                onChange={
                  handlePriceChange
                }
                aria-label="Adjust investment amount"
              />

              <div
                className={
                  styles.rangeLabels
                }
              >
                <span>€200K</span>
                <span>€1.2M</span>
              </div>

              {belowMinimum && (
                <div
                  className={
                    styles.warning
                  }
                >
                  <strong>
                    Below the selected
                    threshold.
                  </strong>

                  <p>
                    The amount entered is
                    below the indicative
                    minimum for this route.
                    The property and
                    investment structure
                    must be assessed against
                    the applicable
                    requirements.
                  </p>
                </div>
              )}

              {/* =================================================
                  APPLICANTS
              ================================================= */}

              <div
                className={
                  styles.familySelector
                }
              >
                <div
                  className={
                    styles.sectionLabel
                  }
                >
                  03 / APPLICANTS
                </div>

                <h3>
                  Who will be applying?
                </h3>

                <p>
                  Select any additional
                  family members included in
                  the application.
                </p>

                <label
                  className={
                    styles.checkboxOption
                  }
                >
                  <input
                    type="checkbox"
                    checked={
                      includeSpouse
                    }
                    onChange={(event) =>
                      setIncludeSpouse(
                        event.target.checked
                      )
                    }
                  />

                  <span>
                    Spouse
                  </span>

                  <strong>
                    +
                    {formatCurrency(
                      spouseCostPreview
                    )}
                  </strong>
                </label>

                <label
                  className={
                    styles.checkboxOption
                  }
                >
                  <input
                    type="checkbox"
                    checked={
                      includeChild
                    }
                    onChange={(event) =>
                      setIncludeChild(
                        event.target.checked
                      )
                    }
                  />

                  <span>
                    Child 0–13 years
                  </span>

                  <strong>
                    +
                    {formatCurrency(
                      childCostPreview
                    )}
                  </strong>
                </label>
              </div>

              <div
                className={
                  styles.inputFootnote
                }
              >
                <span>✓</span>

                <p>
                  {settings.disclaimer ||
                    "The figures shown are estimates based on the supplied cost information and are not a legal or financial quotation."}
                </p>
              </div>
            </div>

            {/* =================================================
                RESULTS PANEL
            ================================================= */}

            <div
              className={
                styles.resultPanel
              }
            >
              <div
                className={
                  styles.resultTop
                }
              >
                <div
                  className={
                    styles.sectionLabel
                  }
                >
                  04 / ESTIMATED CAPITAL
                </div>

                <span
                  className={
                    styles.estimateTag
                  }
                >
                  ESTIMATE
                </span>
              </div>

              <div
                className={
                  styles.total
                }
              >
                {formatCurrency(
                  costs.estimatedTotal
                )}
              </div>

              <p
                className={
                  styles.totalDescription
                }
              >
                Estimated property investment
                plus the costs currently
                included in this calculator.
              </p>

              <div
                className={
                  styles.breakdown
                }
              >
                <div
                  className={
                    styles.breakdownRow
                  }
                >
                  <span>
                    Property investment
                  </span>

                  <strong>
                    {formatCurrency(
                      propertyPrice
                    )}
                  </strong>
                </div>

                <div
                  className={
                    styles.breakdownRow
                  }
                >
                  <span>
                    Golden Visa application
                  </span>

                  <strong>
                    {formatCurrency(
                      costs.applicationCosts
                    )}
                  </strong>
                </div>

                {costs.propertyPurchaseCosts >
                  0 && (
                  <div
                    className={
                      styles.breakdownRow
                    }
                  >
                    <span>
                      Property purchase costs
                    </span>

                    <strong>
                      {formatCurrency(
                        costs.propertyPurchaseCosts
                      )}
                    </strong>
                  </div>
                )}

                {settings.inspectionEnabled && (
                  <div
                    className={
                      styles.breakdownRow
                    }
                  >
                    <span>
                      Technical property
                      inspection
                    </span>

                    <strong>
                      {inspectionLabel}
                    </strong>
                  </div>
                )}
              </div>

              <div
                className={
                  styles.resultFooter
                }
              >
                <span>
                  ADDITIONAL COSTS
                </span>

                <strong>
                  {formatCurrency(
                    costs.totalAdditionalCosts
                  )}
                </strong>
              </div>

              {/* =================================================
                  COST DETAILS
              ================================================= */}

              <div
                className={
                  styles.costDetails
                }
              >
                <div
                  className={
                    styles.costDetailsHeader
                  }
                >
                  <span>
                    INCLUDED IN APPLICATION
                    COSTS
                  </span>
                </div>

                {costs.enabledVisaCosts
                  .filter(
                    (cost) =>
                      !cost.category ||
                      cost.category ===
                        "general" ||
                      cost.category ===
                        "mainInvestor"
                  )
                  .map((cost) => (
                    <div
                      className={
                        styles.breakdownRow
                      }
                      key={
                        cost._key ||
                        cost.name
                      }
                    >
                      <span>
                        {cost.name}
                      </span>

                      <strong>
                        {cost.displayLabel ||
                          (cost.calculationType ===
                          "percentage"
                            ? `${cost.amount}%`
                            : formatCurrency(
                                cost.amount
                              ))}
                      </strong>
                    </div>
                  ))}

                {includeSpouse &&
                  costs.enabledVisaCosts
                    .filter(
                      (cost) =>
                        cost.category ===
                        "spouse"
                    )
                    .map((cost) => (
                      <div
                        className={
                          styles.breakdownRow
                        }
                        key={
                          cost._key ||
                          cost.name
                        }
                      >
                        <span>
                          {cost.name}
                        </span>

                        <strong>
                          {cost.displayLabel ||
                            (cost.calculationType ===
                            "percentage"
                              ? `${cost.amount}%`
                              : formatCurrency(
                                  cost.amount
                                ))}
                        </strong>
                      </div>
                    ))}

                {includeChild &&
                  costs.enabledVisaCosts
                    .filter(
                      (cost) =>
                        cost.category ===
                        "child"
                    )
                    .map((cost) => (
                      <div
                        className={
                          styles.breakdownRow
                        }
                        key={
                          cost._key ||
                          cost.name
                        }
                      >
                        <span>
                          {cost.name}
                        </span>

                        <strong>
                          {cost.displayLabel ||
                            (cost.calculationType ===
                            "percentage"
                              ? `${cost.amount}%`
                              : formatCurrency(
                                  cost.amount
                                ))}
                        </strong>
                      </div>
                    ))}

                {costs.enabledPurchaseCosts.map(
                  (cost) => (
                    <div
                      className={
                        styles.breakdownRow
                      }
                      key={
                        cost._key ||
                        cost.name
                      }
                    >
                      <span>
                        {cost.name}
                      </span>

                      <strong>
                        {cost.displayLabel ||
                          (cost.calculationType ===
                          "percentage"
                            ? `${cost.amount}%`
                            : formatCurrency(
                                cost.amount
                              ))}
                      </strong>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT IS INCLUDED
      ===================================================== */}

      <section
        className={
          styles.explanationSection
        }
      >
        <div className={styles.container}>
          <div
            className={
              styles.explanationGrid
            }
          >
            <div
              className={
                styles.explanationIntro
              }
            >
              <div
                className={
                  styles.sectionLabel
                }
              >
                05 / KNOW WHAT YOU ARE
                PAYING FOR
              </div>

              <h2>
                Only the
                <span>
                  {" "}
                  relevant costs.
                </span>
              </h2>

              <p>
                The calculator displays
                only the costs configured and
                enabled in the calculator
                settings.
              </p>
            </div>

            <div
              className={
                styles.explanationCards
              }
            >
              <article>
                <span>01</span>

                <h3>
                  Golden Visa application
                </h3>

                <p>
                  Includes the
                  application-related costs
                  configured for the selected
                  applicants.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>
                  Technical inspection
                </h3>

                <p>
                  Technical property
                  inspection is shown
                  separately from the Golden
                  Visa application costs.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>
                  Property purchase
                </h3>

                <p>
                  Purchase-related costs
                  appear here only when they
                  have been configured and
                  enabled in the CMS.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>
                  Legal scope
                </h3>

                <p>
                  Application-related
                  professional costs are
                  calculated according to
                  the values configured in
                  the CMS.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DUE DILIGENCE
      ===================================================== */}

      {settings.inspectionEnabled && (
        <section
          className={
            styles.dueDiligenceSection
          }
        >
          <div className={styles.container}>
            <div
              className={
                styles.dueDiligenceCard
              }
            >
              <div
                className={
                  styles.dueDiligenceIcon
                }
              >
                ✓
              </div>

              <div
                className={
                  styles.dueDiligenceContent
                }
              >
                <div
                  className={
                    styles.sectionLabel
                  }
                >
                  BEFORE YOU COMMIT
                </div>

                <h2>
                  Check the property
                  <span>
                    {" "}
                    before you invest.
                  </span>
                </h2>

                <p>
                  {settings.inspectionDescription ||
                    "Technical property inspection to assess the property before proceeding with the investment."}
                </p>
              </div>

              <Link
                href="/team/contact"
                className={
                  styles.dueDiligenceButton
                }
              >
                Request Property Review
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          ROUTES
      ===================================================== */}

      <section
        className={
          styles.routeDetailsSection
        }
      >
        <div className={styles.container}>
          <div
            className={
              styles.routeDetailsHeader
            }
          >
            <div>
              <div
                className={
                  styles.sectionLabel
                }
              >
                06 / UNDERSTAND THE ROUTES
              </div>

              <h2>
                The minimum figure
                <span>
                  {" "}
                  needs context.
                </span>
              </h2>
            </div>

            <p>
              Different investment routes
              have different conditions. The
              threshold should always be
              considered together with the
              property, location and legal
              structure.
            </p>
          </div>

          <div
            className={
              styles.routeDetailsGrid
            }
          >
            {enabledRoutes.map(
              (item) => (
                <article
                  className={
                    styles.routeDetailsCard
                  }
                  key={
                    item._key ||
                    item.label
                  }
                >
                  <span>
                    {item.label}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <small>
                    Location and property
                    requirements apply.
                  </small>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className={styles.ctaSection}
      >
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              ↗
            </div>

            <div
              className={
                styles.ctaContent
              }
            >
              <div
                className={
                  styles.sectionLabel
                }
              >
                NEXT STEP
              </div>

              <h2>
                Know your number.
                <span>
                  {" "}
                  Now build the right
                  strategy.
                </span>
              </h2>

              <p>
                Your investment budget is
                only the starting point. The
                next step is confirming the
                right route and property for
                your circumstances.
              </p>
            </div>

            <div
              className={
                styles.ctaActions
              }
            >
              <Link
                href="/program/eligibility"
                className={
                  styles.ctaPrimary
                }
              >
                Check Your Eligibility
              </Link>

              <Link
                href="/team/contact"
                className={
                  styles.ctaSecondary
                }
              >
                Book a Private Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEGAL
      ===================================================== */}

      <section
        className={
          styles.legalSection
        }
      >
        <div className={styles.container}>
          <div
            className={
              styles.legalInner
            }
          >
            <span
              className={
                styles.legalIcon
              }
            >
              i
            </span>

            <p>
              <strong>
                Important:
              </strong>{" "}
              {settings.disclaimer ||
                "This calculator provides illustrative estimates for general planning purposes only. Costs may change depending on the property, transaction and applicant circumstances."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}