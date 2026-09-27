"use client";

import Image from "next/image";
import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import styles from "./gatewayToEurope.module.css";

const facts = [
  {
    number: "01",
    id: "eu",
  },
  {
    number: "02",
    id: "schengen",
  },
  {
    number: "03",
    id: "mediterranean",
  },
];

const residencePoints = [
  {
    number: "01",
    id: "base",
  },
  {
    number: "02",
    id: "connectivity",
  },
  {
    number: "03",
    id: "connection",
  },
];

const processSteps = [
  {
    number: "01",
    id: "eligibility",
  },
  {
    number: "02",
    id: "investment",
  },
  {
    number: "03",
    id: "dueDiligence",
  },
  {
    number: "04",
    id: "coordination",
  },
  {
    number: "05",
    id: "residence",
  },
];

export default function GatewayToEuropeClient() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/why-greece/gateway-to-europe/hero.jpg"
            alt={t("gatewayToEurope.hero.imageAlt")}
            fill
            priority
            sizes="100vw"
            className={styles.heroImagePhoto}
          />

          <div className={styles.heroOverlay} />
          <div className={styles.heroVignette} />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            {t("gatewayToEurope.hero.eyebrow")}
          </span>

          <h1>
            <span>{t("gatewayToEurope.hero.titleLineOne")}</span>
            <br />
            <em>{t("gatewayToEurope.hero.titleLineTwo")}</em>
          </h1>

          <p>{t("gatewayToEurope.hero.description")}</p>

          <div className={styles.heroFacts}>
            <span>{t("gatewayToEurope.hero.facts.eu")}</span>
            <span className={styles.heroDot}>·</span>
            <span>{t("gatewayToEurope.hero.facts.schengen")}</span>
            <span className={styles.heroDot}>·</span>
            <span>{t("gatewayToEurope.hero.facts.mediterranean")}</span>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>01</span>
          <span>{t("gatewayToEurope.hero.bottom")}</span>
        </div>
      </section>

      {/* =========================================================
          POSITION
      ========================================================= */}
      <section className={styles.positionSection}>
        <div className={styles.sectionIntro}>
          <div className={styles.sectionMarker}>
            <span className={styles.sectionNumber}>01 / 05</span>
            <span className={styles.sectionLabel}>
              {t("gatewayToEurope.position.label")}
            </span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              {t("gatewayToEurope.position.titleLineOne")}
              <br />
              <em>{t("gatewayToEurope.position.titleLineTwo")}</em>
            </h2>

            <p>{t("gatewayToEurope.position.description")}</p>
          </div>
        </div>

        <div className={styles.positionStatement}>
          <div className={styles.positionLine} />

          <div className={styles.positionQuote}>
            <span>{t("gatewayToEurope.position.quoteLabel")}</span>

            <h3>
              {t("gatewayToEurope.position.quoteLineOne")}
              <br />
              {t("gatewayToEurope.position.quoteLineTwo")}
            </h3>
          </div>

          <div className={styles.positionBody}>
            <p>{t("gatewayToEurope.position.paragraphOne")}</p>

            <p>{t("gatewayToEurope.position.paragraphTwo")}</p>
          </div>
        </div>

        <div className={styles.factGrid}>
          {facts.map((fact) => {
            const path = `gatewayToEurope.position.facts.${fact.id}`;

            return (
              <article
                className={styles.factCard}
                key={fact.number}
                tabIndex={0}
              >
                <div className={styles.factCardTop}>
                  <span className={styles.factNumber}>{fact.number}</span>

                  <span className={styles.factArrow}>↗</span>
                </div>

                <div className={styles.factContent}>
                  <h3>{t(`${path}.title`)}</h3>

                  <div className={styles.factReveal}>
                    <span className={styles.factRevealLine} />
                    <p>{t(`${path}.text`)}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          OFFICIAL DOCUMENT
      ========================================================= */}
      <section className={styles.documentSection}>
        <div className={styles.documentHeader}>
          <div>
            <span className={styles.sectionNumber}>02 / 05</span>
            <span className={styles.sectionLabel}>
              {t("gatewayToEurope.document.sectionLabel")}
            </span>
          </div>

          <p>{t("gatewayToEurope.document.intro")}</p>
        </div>

        <div className={styles.documentLayout}>
          <div className={styles.documentStage}>
            <div className={styles.documentGlow} />

            <div className={styles.documentCard}>
              <Image
                src="/images/why-greece/gateway-to-europe/passport.jpg"
                alt={t("gatewayToEurope.document.imageAlt")}
                fill
                sizes="(max-width: 768px) 92vw, 62vw"
                className={styles.documentImage}
              />
            </div>

            <div className={styles.documentCaption}>
              <span>{t("gatewayToEurope.document.captionLabel")}</span>
              <span>{t("gatewayToEurope.document.captionTitle")}</span>
            </div>
          </div>

          <div className={styles.documentCopy}>
            <span className={styles.documentIndex}>01</span>

            <h2>
              {t("gatewayToEurope.document.titleLineOne")}
              <br />
              <em>{t("gatewayToEurope.document.titleLineTwo")}</em>
            </h2>

            <p className={styles.documentLead}>
              {t("gatewayToEurope.document.lead")}
            </p>

            <p>{t("gatewayToEurope.document.body")}</p>

            <div className={styles.documentNote}>
              <span className={styles.noteMark}>i</span>

              <p>{t("gatewayToEurope.document.note")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT RESIDENCE MAKES POSSIBLE
      ========================================================= */}
      <section className={styles.residenceSection}>
        <div className={styles.residenceWatermark}>
          {t("gatewayToEurope.residence.watermark")}
        </div>

        <div className={styles.residenceTop}>
          <div className={styles.residenceMeta}>
            <span className={styles.sectionNumber}>03 / 05</span>
            <span className={styles.sectionLabel}>
              {t("gatewayToEurope.residence.sectionLabel")}
            </span>

            <div className={styles.residenceMetaLine} />
          </div>

          <div className={styles.residenceHeading}>
            <div className={styles.residenceKicker}>
              <span>{t("gatewayToEurope.residence.kicker")}</span>
              <span>↘</span>
            </div>

            <h2>
              {t("gatewayToEurope.residence.titleLineOne")}
              <br />
              <em>{t("gatewayToEurope.residence.titleLineTwo")}</em>
            </h2>

            <p>{t("gatewayToEurope.residence.description")}</p>
          </div>
        </div>

        <div className={styles.residenceFeature}>
          <div className={styles.residenceFeatureNumber}>
            <span>03</span>
            <span>{t("gatewayToEurope.residence.featureLabel")}</span>
          </div>

          <div className={styles.residenceFeatureContent}>
            <span className={styles.residenceFeatureEyebrow}>
              {t("gatewayToEurope.residence.featureEyebrow")}
            </span>

            <h3>
              {t("gatewayToEurope.residence.featureTitleLineOne")}
              <br />
              <em>{t("gatewayToEurope.residence.featureTitleLineTwo")}</em>
            </h3>
          </div>

          <div className={styles.residenceFeatureMark}>
            <span>+</span>
          </div>
        </div>

        <div className={styles.residenceGrid}>
          {residencePoints.map((point) => {
            const path = `gatewayToEurope.residence.points.${point.id}`;

            return (
              <article
                className={styles.residencePoint}
                key={point.number}
                tabIndex={0}
              >
                <div className={styles.residencePointTop}>
                  <span>{point.number}</span>
                  <span className={styles.residencePointArrow}>↗</span>
                </div>

                <div className={styles.residencePointBody}>
                  <h3>{t(`${path}.title`)}</h3>

                  <p>{t(`${path}.text`)}</p>
                </div>

                <div className={styles.residencePointLine} />
              </article>
            );
          })}
        </div>

        <div className={styles.residenceBottom}>
          <span>{t("gatewayToEurope.residence.importantLabel")}</span>

          <p>{t("gatewayToEurope.residence.importantText")}</p>
        </div>
      </section>

      {/* =========================================================
          COORDINATED PROCESS
      ========================================================= */}
      <section className={styles.verificationSection}>
        <div className={styles.verificationTop}>
          <div>
            <span className={styles.sectionNumber}>04 / 05</span>
            <span className={styles.sectionLabel}>
              {t("gatewayToEurope.process.sectionLabel")}
            </span>
          </div>

          <div>
            <h2>
              {t("gatewayToEurope.process.titleLineOne")}
              <br />
              <em>{t("gatewayToEurope.process.titleLineTwo")}</em>
            </h2>

            <p className={styles.verificationIntro}>
              {t("gatewayToEurope.process.description")}
            </p>
          </div>
        </div>

        <div className={styles.process}>
          <div className={styles.processLine} />

          {processSteps.map((step) => {
            const path = `gatewayToEurope.process.steps.${step.id}`;

            return (
              <article className={styles.processStep} key={step.number}>
                <div className={styles.processNumber}>{step.number}</div>

                <h3>{t(`${path}.title`)}</h3>

                <p>{t(`${path}.text`)}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className={styles.finalSection}>
        <div className={styles.finalContent}>
          <div className={styles.finalTop}>
            <span className={styles.sectionNumber}>05 / 05</span>
            <span className={styles.sectionLabel}>
              {t("gatewayToEurope.final.sectionLabel")}
            </span>
          </div>

          <h2>
            {t("gatewayToEurope.final.titleLineOne")}
            <br />
            <em>{t("gatewayToEurope.final.titleLineTwo")}</em>
          </h2>

          <p>{t("gatewayToEurope.final.description")}</p>

          <div className={styles.finalActions}>
            <LocalizedLink
              href="/team/contact"
              className={styles.primaryButton}
            >
              {t("gatewayToEurope.final.primaryButton")}
              <span>↗</span>
            </LocalizedLink>

            <LocalizedLink
              href="/program/eligibility"
              className={styles.secondaryButton}
            >
              {t("gatewayToEurope.final.secondaryButton")}
              <span>↗</span>
            </LocalizedLink>
          </div>
        </div>
      </section>
    </main>
  );
}