"use client";

import Link from "next/link";
import styles from "./realEstatePotential.module.css";

const marketStats = [
  {
    value: "5.7%",
    label: "APARTMENT PRICE GROWTH",
    period: "Q1 2026 · YEAR-ON-YEAR",
    source: "Bank of Greece",
  },
  {
    value: "41.2%",
    label: "RESIDENTIAL INVESTMENT GROWTH",
    period: "Q4 2025 · YEAR-ON-YEAR",
    source: "Bank of Greece / ELSTAT",
  },
  {
    value: "€23.63bn",
    label: "TRAVEL RECEIPTS",
    period: "2025",
    source: "Bank of Greece",
  },
  {
    value: "€2.75bn",
    label: "REAL-ESTATE FDI",
    period: "2024",
    source: "Bank of Greece",
  },
  {
    value: "244.7m",
    label: "NON-RESIDENT OVERNIGHT STAYS",
    period: "2025",
    source: "Bank of Greece",
  },
  {
    value: "3.9%",
    label: "RESIDENTIAL INVESTMENT / GDP",
    period: "Q4 2025",
    source: "Bank of Greece / ELSTAT",
  },
];

const regionalGrowth = [
  {
    name: "Other areas of Greece",
    value: 6.9,
  },
  {
    name: "Thessaloniki",
    value: 6.4,
  },
  {
    name: "Other cities",
    value: 5.4,
  },
  {
    name: "Athens",
    value: 5.2,
  },
];

const cityValues = [
  {
    city: "Paris",
    value: 18600,
  },
  {
    city: "Milan",
    value: 15000,
  },
  {
    city: "Rome",
    value: 14300,
  },
  {
    city: "Lisbon",
    value: 13800,
  },
  {
    city: "Athens",
    value: 11600,
    featured: true,
  },
  {
    city: "Berlin",
    value: 11400,
  },
  {
    city: "Madrid",
    value: 11000,
  },
];

const marketSignals = [
  {
    number: "01",
    title: "PRICE MOMENTUM",
    value: "+5.7%",
    text:
      "Greek apartment prices continued to rise in Q1 2026, although at a slower pace than during the strongest years of the recent cycle.",
  },
  {
    number: "02",
    title: "CAPITAL FORMATION",
    value: "+41.2%",
    text:
      "Residential investment increased sharply in Q4 2025, reaching 3.9% of GDP.",
  },
  {
    number: "03",
    title: "INTERNATIONAL DEMAND",
    value: "€23.63bn",
    text:
      "Travel receipts reached a new high in 2025, reinforcing the importance of international demand to the Greek economy.",
  },
];

function Source({ children }) {
  return <span className={styles.source}>{children}</span>;
}

export default function RealEstatePotentialPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <span>WHY GREECE / REAL ESTATE POTENTIAL</span>
          <span>MARKET DATA · 2026</span>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            THE GREEK PROPERTY MARKET
          </div>

          <h1>
            Greece,
            <br />
            <em>by the numbers.</em>
          </h1>

          <p>
            A data-led view of price growth, investment, international demand
            and housing supply across the Greek real-estate market.
          </p>
        </div>

        <div className={styles.heroBottom}>
          <span>01</span>
          <span>REAL ESTATE POTENTIAL</span>
          <span>UPDATED 2026</span>
        </div>
      </section>

      {/* MARKET AT A GLANCE */}
      <section className={styles.overviewSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span>01 / 06</span>
            <span>THE MARKET AT A GLANCE</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              The market,
              <br />
              <em>in six numbers.</em>
            </h2>

            <p>
              The Greek property market is no longer defined simply by
              recovery. Price growth, residential investment and international
              demand continue to shape a market that has become increasingly
              relevant to investors.
            </p>
          </div>
        </div>

        <div className={styles.statGrid}>
          {marketStats.map((stat) => (
            <article className={styles.statCard} key={stat.label}>
              <div className={styles.statTop}>
                <span>{stat.period}</span>
                <span>↗</span>
              </div>

              <strong>{stat.value}</strong>

              <div className={styles.statBottom}>
                <h3>{stat.label}</h3>
                <Source>Source · {stat.source}</Source>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRICE MOMENTUM */}
      <section className={styles.priceSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span>02 / 06</span>
            <span>PRICE MOMENTUM</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              Prices are still
              <br />
              <em>moving upward.</em>
            </h2>

            <p>
              Greek apartment prices increased by 5.7% year-on-year in Q1
              2026. Growth has moderated from the 8.1% average recorded in
              2025, but remains positive across every major geographical
              category tracked by the Bank of Greece.
            </p>
          </div>
        </div>

        <div className={styles.priceMainGrid}>
          <div className={styles.bigMetric}>
            <span>GREECE · Q1 2026</span>

            <strong>+5.7%</strong>

            <p>Apartment prices · year-on-year</p>

            <Source>
              Source · Bank of Greece · provisional Q1 2026 data
            </Source>
          </div>

          <div className={styles.comparisonCard}>
            <div className={styles.comparisonHeader}>
              <div>
                <span>Q1 2026</span>
                <h3>Greece vs European Union</h3>
              </div>

              <span>ANNUAL CHANGE</span>
            </div>

            <div className={styles.compareRows}>
              <div className={styles.compareRow}>
                <div className={styles.compareLabel}>
                  <span>Greece</span>
                  <strong>5.7%</strong>
                </div>

                <div className={styles.compareTrack}>
                  <span
                    className={styles.compareFill}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className={styles.compareRow}>
                <div className={styles.compareLabel}>
                  <span>European Union</span>
                  <strong>5.1%</strong>
                </div>

                <div className={styles.compareTrack}>
                  <span
                    className={styles.compareFill}
                    style={{ width: "89.5%" }}
                  />
                </div>
              </div>
            </div>

            <Source>
              Greece · Bank of Greece · Q1 2026
              <br />
              EU · Eurostat · Q1 2026
            </Source>
          </div>
        </div>

        <div className={styles.regionalSection}>
          <div className={styles.regionalHeader}>
            <div>
              <span>REGIONAL PERFORMANCE</span>
              <h3>Growth was broad-based.</h3>
            </div>

            <Source>Bank of Greece · Q1 2026</Source>
          </div>

          <div className={styles.regionalBars}>
            {regionalGrowth.map((region) => (
              <div className={styles.regionalRow} key={region.name}>
                <div className={styles.regionalLabel}>
                  <span>{region.name}</span>
                  <strong>+{region.value}%</strong>
                </div>

                <div className={styles.regionalTrack}>
                  <span
                    className={styles.regionalFill}
                    style={{
                      width: `${(region.value / 7) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPITAL */}
      <section className={styles.capitalSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span>03 / 06</span>
            <span>CAPITAL FORMATION</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              Investment is
              <br />
              <em>coming back.</em>
            </h2>

            <p>
              The recovery of residential construction and investment is one of
              the clearest signals that the Greek housing market is moving
              beyond simple price appreciation.
            </p>
          </div>
        </div>

        <div className={styles.capitalFeature}>
          <div className={styles.capitalNumber}>
            <span>RESIDENTIAL INVESTMENT</span>
            <strong>+41.2%</strong>
            <p>Q4 2025 · year-on-year</p>
          </div>

          <div className={styles.capitalExplanation}>
            <span>WHY IT MATTERS</span>
            <h3>
              More capital is flowing into the residential side of the
              economy.
            </h3>

            <p>
              Residential investment increased by 41.2% year-on-year in Q4
              2025 and reached 3.9% of GDP. This points to a substantial
              increase in residential capital formation.
            </p>

            <Source>
              Source · Bank of Greece / ELSTAT · Q4 2025
            </Source>
          </div>
        </div>

        <div className={styles.investmentGrid}>
          <article>
            <span>2025</span>
            <strong>3.9%</strong>
            <h3>OF GDP</h3>
            <p>
              Residential investment as a percentage of Greek GDP in Q4 2025.
            </p>
          </article>

          <article>
            <span>2024</span>
            <strong>€2.75bn</strong>
            <h3>REAL-ESTATE FDI</h3>
            <p>
              Foreign direct investment in Greek real estate, according to
              Bank of Greece data.
            </p>
          </article>

          <article>
            <span>2024</span>
            <strong>45%+</strong>
            <h3>OF TOTAL FDI</h3>
            <p>
              More than 45% of Greece's €6bn direct-investment inflow was
              directed towards real estate.
            </p>
          </article>
        </div>
      </section>

      {/* DEMAND VS SUPPLY */}
      <section className={styles.demandSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span>04 / 06</span>
            <span>DEMAND VS SUPPLY</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              Demand is strong.
              <br />
              <em>Supply is catching up.</em>
            </h2>

            <p>
              Greece combines substantial international demand with a housing
              supply that remains below the European average. Together, these
              forces help explain the market's recent price behaviour.
            </p>
          </div>
        </div>

        <div className={styles.demandGrid}>
          <div className={styles.demandColumn}>
            <div className={styles.columnHeader}>
              <span>DEMAND</span>
              <span>01</span>
            </div>

            <div className={styles.demandMetric}>
              <strong>€23.63bn</strong>
              <span>TRAVEL RECEIPTS · 2025</span>
            </div>

            <div className={styles.demandMetric}>
              <strong>244.7m</strong>
              <span>NON-RESIDENT OVERNIGHT STAYS · 2025</span>
            </div>

            <div className={styles.demandMetric}>
              <strong>+6.4%</strong>
              <span>INBOUND TRAVELLER GROWTH · 2025</span>
            </div>

            <Source>
              Source · Bank of Greece · 2025 travel services data
            </Source>
          </div>

          <div className={styles.supplyColumn}>
            <div className={styles.columnHeader}>
              <span>SUPPLY</span>
              <span>02</span>
            </div>

            <div className={styles.supplyMetric}>
              <strong>60%</strong>
              <span>OF EU AVERAGE</span>
            </div>

            <h3>Housing investment remains structurally constrained.</h3>

            <p>
              The European Commission reports that housing supply is
              constrained by years of sluggish housing investment, which has
              only started to grow since 2020 and remains at around 60% of the
              EU average.
            </p>

            <Source>
              Source · European Commission · Greece Country Report 2026
            </Source>
          </div>
        </div>
      </section>

      {/* ATHENS IN CONTEXT */}
      <section className={styles.athensSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span>05 / 06</span>
            <span>ATHENS IN CONTEXT</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              Athens in the
              <br />
              <em>European context.</em>
            </h2>

            <p>
              Prime residential capital values put Athens below several major
              European capitals in Savills' 2025 World Cities Prime Residential
              Index.
            </p>
          </div>
        </div>

        <div className={styles.cityChart}>
          <div className={styles.cityChartHeader}>
            <div>
              <span>PRIME RESIDENTIAL CAPITAL VALUE</span>
              <h3>€ / m²</h3>
            </div>

            <Source>Savills Research · 2025</Source>
          </div>

          <div className={styles.cityRows}>
            {cityValues.map((city) => (
              <div
                className={`${styles.cityRow} ${
                  city.featured ? styles.cityFeatured : ""
                }`}
                key={city.city}
              >
                <div className={styles.cityLabel}>
                  <span>{city.city}</span>
                  <strong>
                    €{city.value.toLocaleString("en-US")}
                  </strong>
                </div>

                <div className={styles.cityTrack}>
                  <span
                    className={styles.cityFill}
                    style={{
                      width: `${(city.value / 18600) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className={styles.chartDisclaimer}>
            Prime residential capital value is a market comparison indicator,
            not an average residential transaction price.
          </p>
        </div>
      </section>

      {/* BALANCED VIEW */}
      <section className={styles.riskSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span>06 / 06</span>
            <span>A BALANCED VIEW</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              Strong signals.
              <br />
              <em>Selective decisions.</em>
            </h2>

            <p>
              The data supports a compelling market story — but it does not
              remove the need for careful property selection, financial
              analysis or technical due diligence.
            </p>
          </div>
        </div>

        <div className={styles.signalGrid}>
          {marketSignals.map((signal) => (
            <article className={styles.signalCard} key={signal.number}>
              <div className={styles.signalTop}>
                <span>{signal.number}</span>
                <span>↗</span>
              </div>

              <span className={styles.signalLabel}>{signal.title}</span>

              <strong>{signal.value}</strong>

              <p>{signal.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.riskNotice}>
          <div className={styles.riskMark}>!</div>

          <div>
            <span>IMPORTANT MARKET CONTEXT</span>

            <h3>
              Growth does not mean every property is a good investment.
            </h3>

            <p>
              The European Commission reports that housing affordability has
              deteriorated and that recent price developments show signs of
              overvaluation. Market-wide indicators therefore need to be
              combined with property-level analysis before an investment
              decision is made.
            </p>

            <Source>
              Source · European Commission · Greece Country Report 2026
            </Source>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalSection}>
        <div className={styles.finalContent}>
          <div className={styles.finalMarker}>
            <span>REAL ESTATE POTENTIAL</span>
            <span>THE NEXT STEP</span>
          </div>

          <h2>
            The market tells
            <br />
            <em>only half the story.</em>
          </h2>

          <p>
            Market data can identify where opportunity exists. The right
            property requires a much closer look — from technical condition
            and documentation to location, value and investment suitability.
          </p>

          <div className={styles.finalActions}>
            <Link href="/team/contact" className={styles.primaryButton}>
              Request Property Review
              <span>↗</span>
            </Link>

            <Link
              href="/program/eligibility"
              className={styles.secondaryButton}
            >
              Check Your Eligibility
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}