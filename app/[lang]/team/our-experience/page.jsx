"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import styles from "./page.module.css";

const portfolioStats = [
  {
    value: "417",
    labelKey: "ourExperience.portfolioStats.listings.label",
    textKey: "ourExperience.portfolioStats.listings.text",
  },
  {
    value: "340",
    labelKey: "ourExperience.portfolioStats.residential.label",
    textKey: "ourExperience.portfolioStats.residential.text",
  },
  {
    value: "48",
    labelKey: "ourExperience.portfolioStats.land.label",
    textKey: "ourExperience.portfolioStats.land.text",
  },
  {
    value: "23",
    labelKey: "ourExperience.portfolioStats.commercial.label",
    textKey: "ourExperience.portfolioStats.commercial.text",
  },
];

const portfolioBreakdown = [
  {
    number: "340",
    percentage: "81.5%",
    titleKey: "ourExperience.portfolioBreakdown.residential.title",
    statusKey: "ourExperience.portfolioBreakdown.residential.status",
    detailKey: "ourExperience.portfolioBreakdown.residential.detail",
  },
  {
    number: "48",
    percentage: "11.5%",
    titleKey: "ourExperience.portfolioBreakdown.land.title",
    statusKey: "ourExperience.portfolioBreakdown.land.status",
    detailKey: "ourExperience.portfolioBreakdown.land.detail",
  },
  {
    number: "22",
    percentage: "5.3%",
    titleKey: "ourExperience.portfolioBreakdown.commercial.title",
    statusKey: "ourExperience.portfolioBreakdown.commercial.status",
    detailKey: "ourExperience.portfolioBreakdown.commercial.detail",
  },
  {
    number: "7",
    percentage: "1.7%",
    titleKey: "ourExperience.portfolioBreakdown.rental.title",
    statusKey: "ourExperience.portfolioBreakdown.rental.status",
    detailKey: "ourExperience.portfolioBreakdown.rental.detail",
  },
];

const experienceCards = [
  {
    number: "01",
    eyebrowKey: "ourExperience.experienceCards.realEstate.eyebrow",
    titleKey: "ourExperience.experienceCards.realEstate.title",
    textKey: "ourExperience.experienceCards.realEstate.text",
    pointsKeys: [
      "ourExperience.experienceCards.realEstate.points.residential",
      "ourExperience.experienceCards.realEstate.points.land",
      "ourExperience.experienceCards.realEstate.points.commercial",
      "ourExperience.experienceCards.realEstate.points.investment",
    ],
  },
  {
    number: "02",
    eyebrowKey: "ourExperience.experienceCards.engineering.eyebrow",
    titleKey: "ourExperience.experienceCards.engineering.title",
    textKey: "ourExperience.experienceCards.engineering.text",
    pointsKeys: [
      "ourExperience.experienceCards.engineering.points.surveys",
      "ourExperience.experienceCards.engineering.points.certificates",
      "ourExperience.experienceCards.engineering.points.legality",
      "ourExperience.experienceCards.engineering.points.assessment",
    ],
  },
  {
    number: "03",
    eyebrowKey: "ourExperience.experienceCards.residency.eyebrow",
    titleKey: "ourExperience.experienceCards.residency.title",
    textKey: "ourExperience.experienceCards.residency.text",
    pointsKeys: [
      "ourExperience.experienceCards.residency.points.guidance",
      "ourExperience.experienceCards.residency.points.assessment",
      "ourExperience.experienceCards.residency.points.documents",
      "ourExperience.experienceCards.residency.points.collaboration",
    ],
  },
];

const engineeringServices = [
  "ourExperience.engineeringServices.01",
  "ourExperience.engineeringServices.02",
  "ourExperience.engineeringServices.03",
  "ourExperience.engineeringServices.04",
  "ourExperience.engineeringServices.05",
  "ourExperience.engineeringServices.06",
  "ourExperience.engineeringServices.07",
  "ourExperience.engineeringServices.08",
  "ourExperience.engineeringServices.09",
  "ourExperience.engineeringServices.10",
  "ourExperience.engineeringServices.11",
  "ourExperience.engineeringServices.12",
];

const serviceNetwork = [
  {
    number: "01",
    titleKey: "ourExperience.serviceNetwork.engineering.title",
    textKey: "ourExperience.serviceNetwork.engineering.text",
  },
  {
    number: "02",
    titleKey: "ourExperience.serviceNetwork.legal.title",
    textKey: "ourExperience.serviceNetwork.legal.text",
  },
  {
    number: "03",
    titleKey: "ourExperience.serviceNetwork.notarial.title",
    textKey: "ourExperience.serviceNetwork.notarial.text",
  },
  {
    number: "04",
    titleKey: "ourExperience.serviceNetwork.accounting.title",
    textKey: "ourExperience.serviceNetwork.accounting.text",
  },
];

const investorBenefits = [
  {
    number: "01",
    titleKey: "ourExperience.investorBenefits.questions.title",
    textKey: "ourExperience.investorBenefits.questions.text",
  },
  {
    number: "02",
    titleKey: "ourExperience.investorBenefits.attention.title",
    textKey: "ourExperience.investorBenefits.attention.text",
  },
  {
    number: "03",
    titleKey: "ourExperience.investorBenefits.professional.title",
    textKey: "ourExperience.investorBenefits.professional.text",
  },
  {
    number: "04",
    titleKey: "ourExperience.investorBenefits.process.title",
    textKey: "ourExperience.investorBenefits.process.text",
  },
];

const proofPoints = [
  {
    value: "15+",
    titleKey: "ourExperience.proofPoints.years.title",
    textKey: "ourExperience.proofPoints.years.text",
  },
  {
    value: "1,000+",
    titleKey: "ourExperience.proofPoints.properties.title",
    textKey: "ourExperience.proofPoints.properties.text",
  },
  {
    value: "3",
    titleKey: "ourExperience.proofPoints.languages.title",
    textKey: "ourExperience.proofPoints.languages.text",
  },
  {
    value: "1",
    titleKey: "ourExperience.proofPoints.perspective.title",
    textKey: "ourExperience.proofPoints.perspective.text",
  },
];

export default function OurExperiencePage() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroTop}>
            <span className={styles.sectionLabel}>
              {t("ourExperience.hero.sectionLabel")}
            </span>
            <span className={styles.heroIndex}>02 / 06</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.heroKicker}>
                {t("ourExperience.hero.kicker")}
              </p>

              <h1>
                {t("ourExperience.hero.titleLine1")}
                <span>{t("ourExperience.hero.titleLine2")}</span>
              </h1>

              <p className={styles.heroDescription}>
                {t("ourExperience.hero.description")}
              </p>

              <div className={styles.heroActions}>
                <LocalizedLink
                  href="/team/contact"
                  className={styles.primaryButton}
                >
                  {t("ourExperience.hero.primaryButton")}
                  <span>→</span>
                </LocalizedLink>

                <LocalizedLink
                  href="/investor-guide/investor-handbook"
                  className={styles.secondaryButton}
                >
                  {t("ourExperience.hero.secondaryButton")}
                </LocalizedLink>
              </div>
            </div>

            <div className={styles.heroNumbers}>
              <div className={styles.heroNumberMain}>
                <span className={styles.numberLabel}>
                  {t("ourExperience.hero.mainNumberLabel")}
                </span>

                <strong>15+</strong>

                <p>{t("ourExperience.hero.mainNumberText")}</p>
              </div>

              <div className={styles.heroNumberGrid}>
                <div>
                  <strong>1,000+</strong>
                  <span>{t("ourExperience.hero.propertiesExamined")}</span>
                </div>

                <div>
                  <strong>3</strong>
                  <span>{t("ourExperience.hero.languages")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <span>{t("ourExperience.hero.bottom.realEstate")}</span>
            <span>{t("ourExperience.hero.bottom.engineering")}</span>
            <span>{t("ourExperience.hero.bottom.dueDiligence")}</span>
            <span>{t("ourExperience.hero.bottom.residency")}</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS IDENTITY
      ===================================================== */}

      <section className={styles.business}>
        <div className={styles.container}>
          <div className={styles.businessCard}>
            <div className={styles.businessContent}>
              <span className={styles.sectionLabel}>
                {t("ourExperience.business.sectionLabel")}
              </span>

              <h2>
                {t("ourExperience.business.titleLine1")}
                <span>{t("ourExperience.business.titleLine2")}</span>
              </h2>

              <p>{t("ourExperience.business.paragraph1")}</p>

              <p>{t("ourExperience.business.paragraph2")}</p>
            </div>

            <div className={styles.businessDetails}>
              <div className={styles.businessDetail}>
                <span>01</span>

                <div>
                  <small>{t("ourExperience.business.details.ownerLabel")}</small>
                  <strong>Svetlana Novikova</strong>
                </div>
              </div>

              <div className={styles.businessDetail}>
                <span>02</span>

                <div>
                  <small>{t("ourExperience.business.details.businessLabel")}</small>
                  <strong>Homes in Greece</strong>
                </div>
              </div>

              <div className={styles.businessDetail}>
                <span>03</span>

                <div>
                  <small>
                    {t("ourExperience.business.details.baseLabel")}
                  </small>
                  <strong>Athens · Greece</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRACK RECORD
      ===================================================== */}

      <section className={styles.trackRecord}>
        <div className={styles.container}>
          <div className={styles.trackGrid}>
            <div>
              <span className={styles.sectionLabel}>
                {t("ourExperience.trackRecord.sectionLabel")}
              </span>

              <h2>
                {t("ourExperience.trackRecord.titleLine1")}
                <span>{t("ourExperience.trackRecord.titleLine2")}</span>
              </h2>
            </div>

            <div className={styles.trackText}>
              <p>{t("ourExperience.trackRecord.paragraph1")}</p>

              <p>{t("ourExperience.trackRecord.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BIG NUMBERS
      ===================================================== */}

      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {portfolioStats.map((stat) => (
              <article key={stat.value} className={styles.stat}>
                <div className={styles.statNumber}>{stat.value}</div>

                <span>{t(stat.labelKey)}</span>

                <p>{t(stat.textKey)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <section className={styles.portfolio}>
        <div className={styles.container}>
          <div className={styles.portfolioHeader}>
            <div>
              <span className={styles.sectionLabel}>
                {t("ourExperience.portfolio.sectionLabel")}
              </span>

              <h2>
                {t("ourExperience.portfolio.titleLine1")}
                <span>{t("ourExperience.portfolio.titleLine2")}</span>
              </h2>
            </div>

            <div className={styles.portfolioSummary}>
              <strong>98.3%</strong>
              <span>{t("ourExperience.portfolio.summaryLabel")}</span>

              <p>{t("ourExperience.portfolio.summaryText")}</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <div className={styles.portfolioTop}>
              <div>
                <span>{t("ourExperience.portfolio.cardTitle")}</span>
                <strong>417</strong>
                <small>{t("ourExperience.portfolio.cardSubtitle")}</small>
              </div>

              <div className={styles.saleRental}>
                <div>
                  <strong>98.3%</strong>
                  <span>{t("ourExperience.portfolio.sale")}</span>
                </div>

                <div>
                  <strong>1.7%</strong>
                  <span>{t("ourExperience.portfolio.rental")}</span>
                </div>
              </div>
            </div>

            <div className={styles.portfolioBar}>
              <span />
            </div>

            <div className={styles.breakdownGrid}>
              {portfolioBreakdown.map((item) => (
                <article
                  key={item.titleKey}
                  className={styles.breakdownItem}
                >
                  <strong className={styles.breakdownNumber}>
                    {item.number}
                  </strong>

                  <div>
                    <div className={styles.breakdownTitle}>
                      <strong>{t(item.titleKey)}</strong>
                      <span>{item.percentage}</span>
                    </div>

                    <p>{t(item.detailKey)}</p>
                    <small>{t(item.statusKey)}</small>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.portfolioNote}>
              <span>01</span>

              <p>{t("ourExperience.portfolio.note")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE AREAS
      ===================================================== */}

      <section className={styles.experience}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              {t("ourExperience.experience.sectionLabel")}
            </span>

            <h2>
              {t("ourExperience.experience.titleLine1")}
              <span>{t("ourExperience.experience.titleLine2")}</span>
            </h2>

            <p>{t("ourExperience.experience.description")}</p>
          </div>

          <div className={styles.experienceGrid}>
            {experienceCards.map((card) => (
              <article
                key={card.number}
                className={`${styles.experienceCard} ${
                  card.number === "02" ? styles.experienceCardDark : ""
                }`}
              >
                <div className={styles.cardTop}>
                  <span>{card.number}</span>
                  <span>↗</span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardEyebrow}>
                    {t(card.eyebrowKey)}
                  </span>

                  <h3>{t(card.titleKey)}</h3>

                  <p>{t(card.textKey)}</p>

                  <div className={styles.cardPoints}>
                    {card.pointsKeys.map((pointKey) => (
                      <div key={pointKey}>
                        <span>✓</span>
                        <strong>{t(pointKey)}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING
      ===================================================== */}

      <section className={styles.engineering}>
        <div className={styles.container}>
          <div className={styles.engineeringCard}>
            <div className={styles.engineeringIntro}>
              <span className={styles.sectionLabel}>
                {t("ourExperience.engineering.sectionLabel")}
              </span>

              <h2>
                {t("ourExperience.engineering.titleLine1")}
                <span>{t("ourExperience.engineering.titleLine2")}</span>
                {t("ourExperience.engineering.titleLine3")}
              </h2>

              <p>{t("ourExperience.engineering.paragraph1")}</p>

              <p>{t("ourExperience.engineering.paragraph2")}</p>
            </div>

            <div className={styles.engineeringServices}>
              <div className={styles.servicesHeader}>
                <span>{t("ourExperience.engineering.practiceLabel")}</span>
                <strong>12</strong>
              </div>

              <div className={styles.serviceList}>
                {engineeringServices.map((serviceKey, index) => (
                  <div key={serviceKey} className={styles.serviceItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{t(serviceKey)}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INVESTOR BENEFIT
      ===================================================== */}

      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              {t("ourExperience.benefits.sectionLabel")}
            </span>

            <h2>
              {t("ourExperience.benefits.titleLine1")}
              <span>{t("ourExperience.benefits.titleLine2")}</span>
            </h2>

            <p>{t("ourExperience.benefits.description")}</p>
          </div>

          <div className={styles.benefitGrid}>
            {investorBenefits.map((benefit) => (
              <article
                key={benefit.number}
                className={styles.benefitCard}
              >
                <span>{benefit.number}</span>

                <div>
                  <h3>{t(benefit.titleKey)}</h3>
                  <p>{t(benefit.textKey)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKET FOOTPRINT
      ===================================================== */}

      <section className={styles.market}>
        <div className={styles.container}>
          <div className={styles.marketGrid}>
            <div className={styles.marketContent}>
              <span className={styles.sectionLabel}>
                {t("ourExperience.market.sectionLabel")}
              </span>

              <h2>
                {t("ourExperience.market.titleLine1")}
                <span>{t("ourExperience.market.titleLine2")}</span>
              </h2>

              <p>{t("ourExperience.market.paragraph1")}</p>

              <p>{t("ourExperience.market.paragraph2")}</p>
            </div>

            <div className={styles.marketProof}>
              <div>
                <span>01</span>

                <div>
                  <small>{t("ourExperience.market.proof.propertyLabel")}</small>
                  <strong>{t("ourExperience.market.proof.propertyTitle")}</strong>
                  <p>{t("ourExperience.market.proof.propertyText")}</p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <small>{t("ourExperience.market.proof.engineeringLabel")}</small>
                  <strong>
                    {t("ourExperience.market.proof.engineeringTitle")}
                  </strong>
                  <p>{t("ourExperience.market.proof.engineeringText")}</p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <small>{t("ourExperience.market.proof.athensLabel")}</small>
                  <strong>{t("ourExperience.market.proof.athensTitle")}</strong>
                  <p>{t("ourExperience.market.proof.athensText")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COORDINATION
      ===================================================== */}

      <section className={styles.coordination}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              {t("ourExperience.coordination.sectionLabel")}
            </span>

            <h2>
              {t("ourExperience.coordination.titleLine1")}
              <span>{t("ourExperience.coordination.titleLine2")}</span>
            </h2>

            <p>{t("ourExperience.coordination.description")}</p>
          </div>

          <div className={styles.coordinationGrid}>
            {serviceNetwork.map((item) => (
              <article
                key={item.number}
                className={styles.coordinationCard}
              >
                <span>{item.number}</span>
                <h3>{t(item.titleKey)}</h3>
                <p>{t(item.textKey)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROOF WALL
      ===================================================== */}

      <section className={styles.proofWall}>
        <div className={styles.container}>
          <div className={styles.proofWallCard}>
            <div className={styles.proofWallHeader}>
              <span className={styles.sectionLabel}>
                {t("ourExperience.proofWall.sectionLabel")}
              </span>

              <h2>
                {t("ourExperience.proofWall.titleLine1")}
                <span>{t("ourExperience.proofWall.titleLine2")}</span>
              </h2>
            </div>

            <div className={styles.proofWallGrid}>
              {proofPoints.map((point) => (
                <article key={point.titleKey}>
                  <strong className={styles.proofValue}>
                    {point.value}
                  </strong>

                  <div>
                    <h3>{t(point.titleKey)}</h3>
                    <p>{t(point.textKey)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SVETLANA
      ===================================================== */}

      <section className={styles.svetlana}>
        <div className={styles.container}>
          <div className={styles.svetlanaGrid}>
            <div className={styles.svetlanaImageWrap}>
              <img
                src="/portait_image_for_website.jpg"
                alt={t("ourExperience.svetlana.imageAlt")}
                className={styles.svetlanaImage}
              />

              <div className={styles.svetlanaCaption}>
                <span>SVETLANA NOVIKOVA</span>
                <strong>DIPL. CIVIL ENGINEER</strong>
              </div>
            </div>

            <div className={styles.svetlanaContent}>
              <span className={styles.sectionLabel}>
                {t("ourExperience.svetlana.sectionLabel")}
              </span>

              <h2>
                {t("ourExperience.svetlana.titleLine1")}
                <span>{t("ourExperience.svetlana.titleLine2")}</span>
              </h2>

              <p>{t("ourExperience.svetlana.paragraph1")}</p>

              <p>{t("ourExperience.svetlana.paragraph2")}</p>

              <div className={styles.roles}>
                <span>{t("ourExperience.svetlana.roles.engineer")}</span>
                <span>{t("ourExperience.svetlana.roles.advisor")}</span>
                <span>{t("ourExperience.svetlana.roles.dueDiligence")}</span>
                <span>{t("ourExperience.svetlana.roles.consultant")}</span>
              </div>

              <LocalizedLink
                href="/team/who-we-are"
                className={styles.textLink}
              >
                {t("ourExperience.svetlana.link")}
                <span>→</span>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span>{t("ourExperience.cta.label")}</span>

              <h2>
                {t("ourExperience.cta.titleLine1")}
                <strong>{t("ourExperience.cta.titleLine2")}</strong>
              </h2>

              <p>{t("ourExperience.cta.description")}</p>
            </div>

            <div className={styles.ctaActions}>
              <LocalizedLink
                href="/team/contact"
                className={styles.ctaPrimary}
              >
                {t("ourExperience.cta.primaryButton")}
                <span>→</span>
              </LocalizedLink>

              <LocalizedLink
                href="/investor-guide/investor-handbook"
                className={styles.ctaSecondary}
              >
                {t("ourExperience.cta.secondaryButton")}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DISCLAIMER
      ===================================================== */}

      <section className={styles.disclaimer}>
        <div className={styles.container}>
          <p>{t("ourExperience.disclaimer")}</p>
        </div>
      </section>
    </main>
  );
} 