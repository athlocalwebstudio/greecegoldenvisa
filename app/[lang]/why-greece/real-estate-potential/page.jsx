"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import styles from "./realEstatePotential.module.css";

const marketStats = [
  {
    id: "apartmentGrowth",
    value: "5.7%",
    period: "Q1 2026 · YEAR-ON-YEAR",
    source: "Bank of Greece",
  },
  {
    id: "residentialInvestment",
    value: "41.2%",
    period: "Q4 2025 · YEAR-ON-YEAR",
    source: "Bank of Greece / ELSTAT",
  },
  {
    id: "travelReceipts",
    value: "€23.63bn",
    period: "2025",
    source: "Bank of Greece",
  },
  {
    id: "realEstateFdi",
    value: "€2.75bn",
    period: "2024",
    source: "Bank of Greece",
  },
  {
    id: "overnightStays",
    value: "244.7m",
    period: "2025",
    source: "Bank of Greece",
  },
  {
    id: "investmentGdp",
    value: "3.9%",
    period: "Q4 2025",
    source: "Bank of Greece / ELSTAT",
  },
];

const regionalGrowth = [
  {
    id: "otherAreas",
    value: 6.9,
  },
  {
    id: "thessaloniki",
    value: 6.4,
  },
  {
    id: "otherCities",
    value: 5.4,
  },
  {
    id: "athens",
    value: 5.2,
  },
];

const cityValues = [
  {
    id: "paris",
    value: 18600,
  },
  {
    id: "milan",
    value: 15000,
  },
  {
    id: "rome",
    value: 14300,
  },
  {
    id: "lisbon",
    value: 13800,
  },
  {
    id: "athens",
    value: 11600,
    featured: true,
  },
  {
    id: "berlin",
    value: 11400,
  },
  {
    id: "madrid",
    value: 11000,
  },
];

const marketSignals = [
  {
    number: "01",
    id: "priceMomentum",
    value: "+5.7%",
  },
  {
    number: "02",
    id: "capitalFormation",
    value: "+41.2%",
  },
  {
    number: "03",
    id: "internationalDemand",
    value: "€23.63bn",
  },
];

function Source({ children }) {
  return <span className={styles.source}>{children}</span>;
}

export default function RealEstatePotentialPage() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <span>{t("realEstatePotential.hero.eyebrow")}</span>
          <span>{t("realEstatePotential.hero.dataLabel")}</span>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            {t("realEstatePotential.hero.kicker")}
          </div>

          <h1>
            {t("realEstatePotential.hero.titleLineOne")}
            <br />
            <em>{t("realEstatePotential.hero.titleLineTwo")}</em>
          </h1>

          <p>{t("realEstatePotential.hero.description")}</p>
        </div>

        <div className={styles.heroBottom}>
          <span>01</span>
          <span>{t("realEstatePotential.hero.bottomLabel")}</span>
          <span>{t("realEstatePotential.hero.updatedLabel")}</span>
        </div>
      </section>

      {/* MARKET AT A GLANCE */}
      <section className={styles.overviewSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span>01 / 06</span>
            <span>{t("realEstatePotential.overview.label")}</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              {t("realEstatePotential.overview.titleLineOne")}
              <br />
              <em>{t("realEstatePotential.overview.titleLineTwo")}</em>
            </h2>

            <p>{t("realEstatePotential.overview.description")}</p>
          </div>
        </div>

        <div className={styles.statGrid}>
          {marketStats.map((stat) => (
            <article className={styles.statCard} key={stat.id}>
              <div className={styles.statTop}>
                <span>{stat.period}</span>
                <span>↗</span>
              </div>

              <strong>{stat.value}</strong>

              <div className={styles.statBottom}>
                <h3>
                  {t(`realEstatePotential.marketStats.${stat.id}.label`)}
                </h3>

                <Source>
                  {t("realEstatePotential.common.source")} · {stat.source}
                </Source>
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
            <span>{t("realEstatePotential.price.label")}</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              {t("realEstatePotential.price.titleLineOne")}
              <br />
              <em>{t("realEstatePotential.price.titleLineTwo")}</em>
            </h2>

            <p>{t("realEstatePotential.price.description")}</p>
          </div>
        </div>

        <div className={styles.priceMainGrid}>
          <div className={styles.bigMetric}>
            <span>{t("realEstatePotential.price.bigMetric.label")}</span>

            <strong>+5.7%</strong>

            <p>{t("realEstatePotential.price.bigMetric.description")}</p>

            <Source>
              {t("realEstatePotential.price.bigMetric.source")}
            </Source>
          </div>

          <div className={styles.comparisonCard}>
            <div className={styles.comparisonHeader}>
              <div>
                <span>Q1 2026</span>
                <h3>{t("realEstatePotential.price.comparison.title")}</h3>
              </div>

              <span>{t("realEstatePotential.price.comparison.annual")}</span>
            </div>

            <div className={styles.compareRows}>
              <div className={styles.compareRow}>
                <div className={styles.compareLabel}>
                  <span>{t("realEstatePotential.price.comparison.greece")}</span>
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
                  <span>
                    {t("realEstatePotential.price.comparison.eu")}
                  </span>
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
              {t("realEstatePotential.price.comparison.sourceGreece")}
              <br />
              {t("realEstatePotential.price.comparison.sourceEu")}
            </Source>
          </div>
        </div>

        <div className={styles.regionalSection}>
          <div className={styles.regionalHeader}>
            <div>
              <span>{t("realEstatePotential.price.regional.label")}</span>
              <h3>{t("realEstatePotential.price.regional.title")}</h3>
            </div>

            <Source>
              {t("realEstatePotential.price.regional.source")}
            </Source>
          </div>

          <div className={styles.regionalBars}>
            {regionalGrowth.map((region) => (
              <div className={styles.regionalRow} key={region.id}>
                <div className={styles.regionalLabel}>
                  <span>
                    {t(
                      `realEstatePotential.price.regional.items.${region.id}`
                    )}
                  </span>

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
            <span>{t("realEstatePotential.capital.label")}</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              {t("realEstatePotential.capital.titleLineOne")}
              <br />
              <em>{t("realEstatePotential.capital.titleLineTwo")}</em>
            </h2>

            <p>{t("realEstatePotential.capital.description")}</p>
          </div>
        </div>

        <div className={styles.capitalFeature}>
          <div className={styles.capitalNumber}>
            <span>
              {t("realEstatePotential.capital.feature.metricLabel")}
            </span>

            <strong>+41.2%</strong>

            <p>{t("realEstatePotential.capital.feature.period")}</p>
          </div>

          <div className={styles.capitalExplanation}>
            <span>{t("realEstatePotential.capital.feature.whyLabel")}</span>

            <h3>{t("realEstatePotential.capital.feature.title")}</h3>

            <p>{t("realEstatePotential.capital.feature.text")}</p>

            <Source>
              {t("realEstatePotential.capital.feature.source")}
            </Source>
          </div>
        </div>

        <div className={styles.investmentGrid}>
          <article>
            <span>2025</span>
            <strong>3.9%</strong>
            <h3>{t("realEstatePotential.capital.cards.gdp.title")}</h3>
            <p>{t("realEstatePotential.capital.cards.gdp.text")}</p>
          </article>

          <article>
            <span>2024</span>
            <strong>€2.75bn</strong>
            <h3>{t("realEstatePotential.capital.cards.fdi.title")}</h3>
            <p>{t("realEstatePotential.capital.cards.fdi.text")}</p>
          </article>

          <article>
            <span>2024</span>
            <strong>45%+</strong>
            <h3>{t("realEstatePotential.capital.cards.totalFdi.title")}</h3>
            <p>{t("realEstatePotential.capital.cards.totalFdi.text")}</p>
          </article>
        </div>
      </section>

      {/* DEMAND VS SUPPLY */}
      <section className={styles.demandSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span>04 / 06</span>
            <span>{t("realEstatePotential.demand.label")}</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              {t("realEstatePotential.demand.titleLineOne")}
              <br />
              <em>{t("realEstatePotential.demand.titleLineTwo")}</em>
            </h2>

            <p>{t("realEstatePotential.demand.description")}</p>
          </div>
        </div>

        <div className={styles.demandGrid}>
          <div className={styles.demandColumn}>
            <div className={styles.columnHeader}>
              <span>{t("realEstatePotential.demand.demandLabel")}</span>
              <span>01</span>
            </div>

            <div className={styles.demandMetric}>
              <strong>€23.63bn</strong>
              <span>{t("realEstatePotential.demand.travelReceipts")}</span>
            </div>

            <div className={styles.demandMetric}>
              <strong>244.7m</strong>
              <span>{t("realEstatePotential.demand.overnightStays")}</span>
            </div>

            <div className={styles.demandMetric}>
              <strong>+6.4%</strong>
              <span>
                {t("realEstatePotential.demand.travellerGrowth")}
              </span>
            </div>

            <Source>
              {t("realEstatePotential.demand.sourceDemand")}
            </Source>
          </div>

          <div className={styles.supplyColumn}>
            <div className={styles.columnHeader}>
              <span>{t("realEstatePotential.demand.supplyLabel")}</span>
              <span>02</span>
            </div>

            <div className={styles.supplyMetric}>
              <strong>60%</strong>
              <span>{t("realEstatePotential.demand.euAverage")}</span>
            </div>

            <h3>{t("realEstatePotential.demand.supplyTitle")}</h3>

            <p>{t("realEstatePotential.demand.supplyText")}</p>

            <Source>
              {t("realEstatePotential.demand.sourceSupply")}
            </Source>
          </div>
        </div>
      </section>

      {/* ATHENS IN CONTEXT */}
      <section className={styles.athensSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span>05 / 06</span>
            <span>{t("realEstatePotential.athens.label")}</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              {t("realEstatePotential.athens.titleLineOne")}
              <br />
              <em>{t("realEstatePotential.athens.titleLineTwo")}</em>
            </h2>

            <p>{t("realEstatePotential.athens.description")}</p>
          </div>
        </div>

        <div className={styles.cityChart}>
          <div className={styles.cityChartHeader}>
            <div>
              <span>{t("realEstatePotential.athens.chartLabel")}</span>
              <h3>€ / m²</h3>
            </div>

            <Source>{t("realEstatePotential.athens.source")}</Source>
          </div>

          <div className={styles.cityRows}>
            {cityValues.map((city) => (
              <div
                className={`${styles.cityRow} ${
                  city.featured ? styles.cityFeatured : ""
                }`}
                key={city.id}
              >
                <div className={styles.cityLabel}>
                  <span>
                    {t(`realEstatePotential.athens.cities.${city.id}`)}
                  </span>

                  <strong>€{city.value.toLocaleString("en-US")}</strong>
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
            {t("realEstatePotential.athens.disclaimer")}
          </p>
        </div>
      </section>

      {/* BALANCED VIEW */}
      <section className={styles.riskSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span>06 / 06</span>
            <span>{t("realEstatePotential.risk.label")}</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              {t("realEstatePotential.risk.titleLineOne")}
              <br />
              <em>{t("realEstatePotential.risk.titleLineTwo")}</em>
            </h2>

            <p>{t("realEstatePotential.risk.description")}</p>
          </div>
        </div>

        <div className={styles.signalGrid}>
          {marketSignals.map((signal) => (
            <article className={styles.signalCard} key={signal.number}>
              <div className={styles.signalTop}>
                <span>{signal.number}</span>
                <span>↗</span>
              </div>

              <span className={styles.signalLabel}>
                {t(`realEstatePotential.signals.${signal.id}.title`)}
              </span>

              <strong>{signal.value}</strong>

              <p>
                {t(`realEstatePotential.signals.${signal.id}.text`)}
              </p>
            </article>
          ))}
        </div>

        <div className={styles.riskNotice}>
          <div className={styles.riskMark}>!</div>

          <div>
            <span>{t("realEstatePotential.risk.notice.label")}</span>

            <h3>{t("realEstatePotential.risk.notice.title")}</h3>

            <p>{t("realEstatePotential.risk.notice.text")}</p>

            <Source>{t("realEstatePotential.risk.notice.source")}</Source>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalSection}>
        <div className={styles.finalContent}>
          <div className={styles.finalMarker}>
            <span>{t("realEstatePotential.final.markerOne")}</span>
            <span>{t("realEstatePotential.final.markerTwo")}</span>
          </div>

          <h2>
            {t("realEstatePotential.final.titleLineOne")}
            <br />
            <em>{t("realEstatePotential.final.titleLineTwo")}</em>
          </h2>

          <p>{t("realEstatePotential.final.description")}</p>

          <div className={styles.finalActions}>
            <LocalizedLink
              href="/team/contact"
              className={styles.primaryButton}
            >
              {t("realEstatePotential.final.primaryButton")}
              <span>↗</span>
            </LocalizedLink>

            <LocalizedLink
              href="/program/eligibility"
              className={styles.secondaryButton}
            >
              {t("realEstatePotential.final.secondaryButton")}
              <span>↗</span>
            </LocalizedLink>
          </div>
        </div>
      </section>
    </main>
  );
}