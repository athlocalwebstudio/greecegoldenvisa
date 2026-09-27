"use client";

import { useEffect, useMemo, useState } from "react";
import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
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
      cost.calculationBase === "investmentAmount"
        ? investmentAmount
        : propertyPrice;

    return base * (cost.amount / 100);
  }

  return cost.amount;
}

export default function InvestmentCalculatorPage() {
  const { t } = useLanguage();

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

    const investmentAmount =
      Number(
        selectedRoute?.minimumInvestment
      ) || 0;

    const mainInvestorCosts =
      enabledVisaCosts
        .filter(
          (cost) =>
            !cost.category ||
            cost.category === "general" ||
            cost.category === "mainInvestor"
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

    const spouseCosts = includeSpouse
      ? enabledVisaCosts
          .filter(
            (cost) =>
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
          )
      : 0;

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

    const applicationCosts =
      mainInvestorCosts +
      spouseCosts +
      childCosts;

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

    const technicalInspection =
      settings?.inspectionEnabled
        ? Number(
            settings.inspectionAmount || 0
          )
        : 0;

    const totalAdditionalCosts =
      applicationCosts +
      propertyPurchaseCosts +
      technicalInspection;

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
                {t(
                  "calculator.eyebrow"
                )}
              </div>

              <h1>
                {t(
                  "calculator.loading.title"
                )}
                <em>
                  {" "}
                  {t(
                    "calculator.hero.emphasis"
                  )}
                </em>
              </h1>

              <p>
                {t(
                  "calculator.loading.description"
                )}
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
                {t(
                  "calculator.eyebrow"
                )}
              </div>

              <h1>
                {t(
                  "calculator.loading.title"
                )}
                <em>
                  {" "}
                  {t(
                    "calculator.hero.emphasis"
                  )}
                </em>
              </h1>

              <p>
                {t(
                  "calculator.error.description"
                )}
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
    `${t(
      "calculator.inspection.from"
    )} ${formatCurrency(
      costs.technicalInspection
    )}`;

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              {t("calculator.eyebrow")}
            </div>

            <h1>
              {settings.title ||
                t(
                  "calculator.hero.title"
                )}
              <em>
                {" "}
                {t(
                  "calculator.hero.emphasis"
                )}
              </em>
            </h1>

            <p>
              {settings.description ||
                t(
                  "calculator.hero.description"
                )}
            </p>
          </div>

          <div className={styles.heroMeta}>
            <strong>2026</strong>
            <span>
              {t(
                "calculator.hero.estimate"
              )}
            </span>
            <span>
              {t(
                "calculator.hero.greece"
              )}
            </span>
          </div>
        </div>
      </section>

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
                {t(
                  "calculator.route.label"
                )}
              </div>

              <h2>
                {t(
                  "calculator.route.heading"
                )}
                <span>
                  {" "}
                  {t(
                    "calculator.route.headingAccent"
                  )}
                </span>
              </h2>
            </div>

            <p>
              {t(
                "calculator.route.description"
              )}
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
                  {t(
                    "calculator.route.selected"
                  )}
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

          <div
            className={
              styles.calculatorGrid
            }
          >
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
                {t(
                  "calculator.property.label"
                )}
              </div>

              <h2>
                {t(
                  "calculator.property.heading"
                )}
                <span>
                  {" "}
                  {t(
                    "calculator.property.headingAccent"
                  )}
                </span>
              </h2>

              <p
                className={
                  styles.inputDescription
                }
              >
                {t(
                  "calculator.property.description"
                )}
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
                  aria-label={t(
                    "calculator.property.inputLabel"
                  )}
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
                aria-label={t(
                  "calculator.property.rangeLabel"
                )}
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
                    {t(
                      "calculator.property.warning.title"
                    )}
                  </strong>

                  <p>
                    {t(
                      "calculator.property.warning.description"
                    )}
                  </p>
                </div>
              )}

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
                  {t(
                    "calculator.applicants.label"
                  )}
                </div>

                <h3>
                  {t(
                    "calculator.applicants.heading"
                  )}
                </h3>

                <p>
                  {t(
                    "calculator.applicants.description"
                  )}
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
                    {t(
                      "calculator.applicants.spouse"
                    )}
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
                    {t(
                      "calculator.applicants.child"
                    )}
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
                    t(
                      "calculator.disclaimer"
                    )}
                </p>
              </div>
            </div>

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
                  {t(
                    "calculator.results.label"
                  )}
                </div>

                <span
                  className={
                    styles.estimateTag
                  }
                >
                  {t(
                    "calculator.hero.estimate"
                  )}
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
                {t(
                  "calculator.results.description"
                )}
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
                    {t(
                      "calculator.results.propertyInvestment"
                    )}
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
                    {t(
                      "calculator.results.application"
                    )}
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
                      {t(
                        "calculator.results.purchaseCosts"
                      )}
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
                      {t(
                        "calculator.results.inspection"
                      )}
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
                  {t(
                    "calculator.results.additionalCosts"
                  )}
                </span>

                <strong>
                  {formatCurrency(
                    costs.totalAdditionalCosts
                  )}
                </strong>
              </div>

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
                    {t(
                      "calculator.results.includedCosts"
                    )}
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
                {t(
                  "calculator.explanation.label"
                )}
              </div>

              <h2>
                {t(
                  "calculator.explanation.heading"
                )}
                <span>
                  {" "}
                  {t(
                    "calculator.explanation.headingAccent"
                  )}
                </span>
              </h2>

              <p>
                {t(
                  "calculator.explanation.description"
                )}
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
                  {t(
                    "calculator.explanation.card1.title"
                  )}
                </h3>

                <p>
                  {t(
                    "calculator.explanation.card1.description"
                  )}
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>
                  {t(
                    "calculator.explanation.card2.title"
                  )}
                </h3>

                <p>
                  {t(
                    "calculator.explanation.card2.description"
                  )}
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>
                  {t(
                    "calculator.explanation.card3.title"
                  )}
                </h3>

                <p>
                  {t(
                    "calculator.explanation.card3.description"
                  )}
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>
                  {t(
                    "calculator.explanation.card4.title"
                  )}
                </h3>

                <p>
                  {t(
                    "calculator.explanation.card4.description"
                  )}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

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
                  {t(
                    "calculator.dueDiligence.label"
                  )}
                </div>

                <h2>
                  {t(
                    "calculator.dueDiligence.heading"
                  )}
                  <span>
                    {" "}
                    {t(
                      "calculator.dueDiligence.headingAccent"
                    )}
                  </span>
                </h2>

                <p>
                  {settings.inspectionDescription ||
                    t(
                      "calculator.dueDiligence.description"
                    )}
                </p>
              </div>

              <LocalizedLink
                href="/team/contact"
                className={
                  styles.dueDiligenceButton
                }
              >
                {t(
                  "calculator.dueDiligence.button"
                )}
                <span>→</span>
              </LocalizedLink>
            </div>
          </div>
        </section>
      )}

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
                {t(
                  "calculator.routes.label"
                )}
              </div>

              <h2>
                {t(
                  "calculator.routes.heading"
                )}
                <span>
                  {" "}
                  {t(
                    "calculator.routes.headingAccent"
                  )}
                </span>
              </h2>
            </div>

            <p>
              {t(
                "calculator.routes.description"
              )}
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
                    {t(
                      "calculator.routes.requirements"
                    )}
                  </small>
                </article>
              )
            )}
          </div>
        </div>
      </section>

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
                {t(
                  "calculator.cta.label"
                )}
              </div>

              <h2>
                {t(
                  "calculator.cta.heading"
                )}
                <span>
                  {" "}
                  {t(
                    "calculator.cta.headingAccent"
                  )}
                </span>
              </h2>

              <p>
                {t(
                  "calculator.cta.description"
                )}
              </p>
            </div>

            <div
              className={
                styles.ctaActions
              }
            >
              <LocalizedLink
                href="/program/eligibility"
                className={
                  styles.ctaPrimary
                }
              >
                {t(
                  "calculator.cta.primary"
                )}
              </LocalizedLink>

              <LocalizedLink
                href="/team/contact"
                className={
                  styles.ctaSecondary
                }
              >
                {t(
                  "calculator.cta.secondary"
                )}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

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
                {t(
                  "calculator.legal.important"
                )}
              </strong>{" "}
              {settings.disclaimer ||
                t(
                  "calculator.legal.description"
                )}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}