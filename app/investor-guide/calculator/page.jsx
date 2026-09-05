"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const ROUTES = {
  standard800: {
    label: "€800K",
    title: "Higher-threshold areas",
    description:
      "For qualifying real estate investments in Attica, Thessaloniki, Mykonos, Santorini and islands with a population above 3,100.",
    minimum: 800000,
  },
  standard400: {
    label: "€400K",
    title: "Other areas",
    description:
      "For qualifying real estate investments outside the locations subject to the €800,000 threshold.",
    minimum: 400000,
  },
  special250: {
    label: "€250K",
    title: "Specific qualifying routes",
    description:
      "Certain qualifying routes, including specific change-of-use and listed-building cases.",
    minimum: 250000,
  },
};

const COST_RATES = {
  transferTax: 0.03,
  professional: 0.012,
  dueDiligence: 1500,
  application: 2016,
  insurance: 500,
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

export default function InvestmentCalculatorPage() {
  const [route, setRoute] = useState("standard400");
  const [propertyPrice, setPropertyPrice] = useState(400000);

  const selectedRoute = ROUTES[route];

  const costs = useMemo(() => {
    const transferTax = propertyPrice * COST_RATES.transferTax;
    const professionalFees =
      propertyPrice * COST_RATES.professional;

    const dueDiligence = COST_RATES.dueDiligence;
    const application = COST_RATES.application;
    const insurance = COST_RATES.insurance;

    const additionalCosts =
      transferTax +
      professionalFees +
      dueDiligence +
      application +
      insurance;

    const estimatedTotal = propertyPrice + additionalCosts;

    return {
      transferTax,
      professionalFees,
      dueDiligence,
      application,
      insurance,
      additionalCosts,
      estimatedTotal,
    };
  }, [propertyPrice]);

  const belowMinimum = propertyPrice < selectedRoute.minimum;

  function handleRouteChange(nextRoute) {
    setRoute(nextRoute);

    const minimum = ROUTES[nextRoute].minimum;

    setPropertyPrice((current) =>
      current < minimum ? minimum : current
    );
  }

  function handlePriceChange(event) {
    const value = Number(event.target.value);

    if (!Number.isNaN(value)) {
      setPropertyPrice(value);
    }
  }

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
              Know your budget
              <em> before you invest.</em>
            </h1>

            <p>
              Estimate the capital you may need for a Greek Golden Visa
              property investment, including key purchase and application
              costs.
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

      <section className={styles.calculatorSection}>
        <div className={styles.container}>
          <div className={styles.calculatorIntro}>
            <div>
              <div className={styles.sectionLabel}>
                01 / CHOOSE YOUR ROUTE
              </div>

              <h2>
                Start with the
                <span> investment route.</span>
              </h2>
            </div>

            <p>
              The minimum investment depends on the location and structure of
              the qualifying investment. Select the route you are considering
              to build your estimate.
            </p>
          </div>

          <div className={styles.routeSelector}>
            {Object.entries(ROUTES).map(([key, item]) => (
              <button
                type="button"
                key={key}
                className={`${styles.routeOption} ${
                  route === key ? styles.routeOptionActive : ""
                }`}
                onClick={() => handleRouteChange(key)}
              >
                <span className={styles.routeNumber}>
                  {key === "standard800"
                    ? "01"
                    : key === "standard400"
                      ? "02"
                      : "03"}
                </span>

                <strong>{item.label}</strong>

                <span>{item.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.selectedRoute}>
            <div>
              <span className={styles.miniLabel}>
                SELECTED ROUTE
              </span>

              <strong>{selectedRoute.label}</strong>

              <h3>{selectedRoute.title}</h3>
            </div>

            <p>{selectedRoute.description}</p>
          </div>

          {/* =================================================
              INPUT
          ================================================= */}

          <div className={styles.calculatorGrid}>
            <div className={styles.inputPanel}>
              <div className={styles.sectionLabel}>
                02 / YOUR PROPERTY
              </div>

              <h2>
                What are you planning
                <span> to invest?</span>
              </h2>

              <p className={styles.inputDescription}>
                Enter the expected acquisition price of the property you are
                considering.
              </p>

              <div className={styles.priceInput}>
                <span>€</span>

                <input
                  type="number"
                  min={0}
                  step={5000}
                  value={propertyPrice}
                  onChange={handlePriceChange}
                  aria-label="Property investment amount"
                />
              </div>

              <input
                className={styles.priceRange}
                type="range"
                min="200000"
                max="1200000"
                step="5000"
                value={propertyPrice}
                onChange={handlePriceChange}
                aria-label="Adjust investment amount"
              />

              <div className={styles.rangeLabels}>
                <span>€200K</span>
                <span>€1.2M</span>
              </div>

              {belowMinimum && (
                <div className={styles.warning}>
                  <strong>Below the selected threshold.</strong>

                  <p>
                    The amount entered is below the indicative minimum for
                    this route. The property and investment structure must be
                    assessed against the applicable legal requirements.
                  </p>
                </div>
              )}

              <div className={styles.inputFootnote}>
                <span>✓</span>
                <p>
                  This calculator provides an estimate, not a quotation or
                  legal assessment.
                </p>
              </div>
            </div>

            {/* =================================================
                RESULT
            ================================================= */}

            <div className={styles.resultPanel}>
              <div className={styles.resultTop}>
                <div className={styles.sectionLabel}>
                  03 / ESTIMATED CAPITAL
                </div>

                <span className={styles.estimateTag}>
                  ESTIMATE
                </span>
              </div>

              <div className={styles.total}>
                {formatCurrency(costs.estimatedTotal)}
              </div>

              <p className={styles.totalDescription}>
                Approximate total capital requirement based on the property
                price and the illustrative costs below.
              </p>

              <div className={styles.breakdown}>
                <div className={styles.breakdownRow}>
                  <span>Property investment</span>
                  <strong>
                    {formatCurrency(propertyPrice)}
                  </strong>
                </div>

                <div className={styles.breakdownRow}>
                  <span>Transfer tax*</span>
                  <strong>
                    {formatCurrency(costs.transferTax)}
                  </strong>
                </div>

                <div className={styles.breakdownRow}>
                  <span>Professional / transaction estimate*</span>
                  <strong>
                    {formatCurrency(costs.professionalFees)}
                  </strong>
                </div>

                <div className={styles.breakdownRow}>
                  <span>Technical due diligence*</span>
                  <strong>
                    {formatCurrency(costs.dueDiligence)}
                  </strong>
                </div>

                <div className={styles.breakdownRow}>
                  <span>Residence application fee*</span>
                  <strong>
                    {formatCurrency(costs.application)}
                  </strong>
                </div>

                <div className={styles.breakdownRow}>
                  <span>Insurance allowance*</span>
                  <strong>
                    {formatCurrency(costs.insurance)}
                  </strong>
                </div>
              </div>

              <div className={styles.resultFooter}>
                <span>ESTIMATED ADDITIONAL COSTS</span>

                <strong>
                  {formatCurrency(costs.additionalCosts)}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW TO READ IT
      ===================================================== */}

      <section className={styles.explanationSection}>
        <div className={styles.container}>
          <div className={styles.explanationGrid}>
            <div className={styles.explanationIntro}>
              <div className={styles.sectionLabel}>
                04 / READ THE NUMBER
              </div>

              <h2>
                The purchase price
                <span> is only the beginning.</span>
              </h2>

              <p>
                A realistic investment budget should leave room for the costs
                surrounding the purchase and residence application.
              </p>
            </div>

            <div className={styles.explanationCards}>
              <article>
                <span>01</span>

                <h3>Acquisition</h3>

                <p>
                  The property itself represents the largest part of the
                  investment and must satisfy the applicable Golden Visa
                  requirements.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Transaction</h3>

                <p>
                  Taxes, registration, notarial, legal and other transaction
                  costs can add to the amount required to complete the
                  purchase.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Due diligence</h3>

                <p>
                  Technical and legal checks help establish whether the
                  property is suitable before you commit capital.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Residence</h3>

                <p>
                  Application, insurance and supporting professional costs
                  should also be considered when planning the total budget.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DUE DILIGENCE
      ===================================================== */}

      <section className={styles.dueDiligenceSection}>
        <div className={styles.container}>
          <div className={styles.dueDiligenceCard}>
            <div className={styles.dueDiligenceIcon}>
              ✓
            </div>

            <div className={styles.dueDiligenceContent}>
              <div className={styles.sectionLabel}>
                BEFORE YOU COMMIT
              </div>

              <h2>
                A property can qualify
                <span> and still be the wrong investment.</span>
              </h2>

              <p>
                Golden Visa eligibility and investment quality are different
                questions. Before committing capital, the property should be
                reviewed for ownership, encumbrances, planning and building
                legality, technical condition and location.
              </p>
            </div>

            <Link
              href="/team/contact"
              className={styles.dueDiligenceButton}
            >
              Request Property Review
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          ROUTE DETAILS
      ===================================================== */}

      <section className={styles.routeDetailsSection}>
        <div className={styles.container}>
          <div className={styles.routeDetailsHeader}>
            <div>
              <div className={styles.sectionLabel}>
                05 / UNDERSTAND THE ROUTES
              </div>

              <h2>
                The minimum figure
                <span> needs context.</span>
              </h2>
            </div>

            <p>
              Different investment routes have different conditions. The
              threshold should never be considered independently from the
              property, location and legal structure.
            </p>
          </div>

          <div className={styles.routeDetailsGrid}>
            <article className={styles.routeDetailsCard}>
              <span>€800K</span>

              <h3>Higher-threshold locations</h3>

              <p>
                Applies to qualifying real estate investments in specific
                higher-threshold locations under the current framework.
              </p>

              <small>
                Location and property requirements apply.
              </small>
            </article>

            <article className={styles.routeDetailsCard}>
              <span>€400K</span>

              <h3>Other qualifying locations</h3>

              <p>
                Applies to qualifying real estate investments outside the
                areas subject to the €800,000 threshold.
              </p>

              <small>
                Property requirements apply.
              </small>
            </article>

            <article className={styles.routeDetailsCard}>
              <span>€250K</span>

              <h3>Specific investment structures</h3>

              <p>
                Certain change-of-use and listed-building investments may
                qualify at €250,000 when the specific legal conditions are met.
              </p>

              <small>
                Not a general €250K property threshold.
              </small>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>↗</div>

            <div className={styles.ctaContent}>
              <div className={styles.sectionLabel}>
                NEXT STEP
              </div>

              <h2>
                Know your number.
                <span> Now build the right strategy.</span>
              </h2>

              <p>
                Your budget is only the starting point. The next step is
                understanding which route, property and investment strategy
                actually fits your circumstances.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link
                href="/program/eligibility"
                className={styles.ctaPrimary}
              >
                Check Your Eligibility
              </Link>

              <Link
                href="/team/contact"
                className={styles.ctaSecondary}
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

      <section className={styles.legalSection}>
        <div className={styles.container}>
          <div className={styles.legalInner}>
            <span className={styles.legalIcon}>i</span>

            <p>
              <strong>Important:</strong> This calculator provides
              illustrative estimates for general planning purposes only.
              Actual taxes, professional fees, transaction expenses,
              insurance and application-related costs can vary according to
              the property, investment route and individual circumstances.
              It does not constitute legal, tax, financial or investment
              advice. Golden Visa rules may change and should be verified
              against current official requirements before proceeding.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}