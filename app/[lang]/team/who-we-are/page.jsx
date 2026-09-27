"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import styles from "./page.module.css";

const credentials = [
  {
    value: "15+",
    labelKey: "whoWeAre.credentials.years.label",
    textKey: "whoWeAre.credentials.years.text",
  },
  {
    value: "1,000+",
    labelKey: "whoWeAre.credentials.properties.label",
    textKey: "whoWeAre.credentials.properties.text",
  },
  {
    value: "3",
    labelKey: "whoWeAre.credentials.languages.label",
    textKey: "whoWeAre.credentials.languages.text",
  },
];

const expertise = [
  {
    number: "01",
    titleKey: "whoWeAre.expertise.01.title",
    textKey: "whoWeAre.expertise.01.text",
  },
  {
    number: "02",
    titleKey: "whoWeAre.expertise.02.title",
    textKey: "whoWeAre.expertise.02.text",
  },
  {
    number: "03",
    titleKey: "whoWeAre.expertise.03.title",
    textKey: "whoWeAre.expertise.03.text",
  },
  {
    number: "04",
    titleKey: "whoWeAre.expertise.04.title",
    textKey: "whoWeAre.expertise.04.text",
  },
];

const professionals = [
  {
    number: "01",
    titleKey: "whoWeAre.professionals.01.title",
    textKey: "whoWeAre.professionals.01.text",
  },
  {
    number: "02",
    titleKey: "whoWeAre.professionals.02.title",
    textKey: "whoWeAre.professionals.02.text",
  },
  {
    number: "03",
    titleKey: "whoWeAre.professionals.03.title",
    textKey: "whoWeAre.professionals.03.text",
  },
  {
    number: "04",
    titleKey: "whoWeAre.professionals.04.title",
    textKey: "whoWeAre.professionals.04.text",
  },
];

export default function WhoWeArePage() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.sectionLabel}>
              {t("whoWeAre.hero.label")}
            </span>

            <h1>
              {t("whoWeAre.hero.titleLine1")}
              <span>{t("whoWeAre.hero.titleLine2")}</span>
            </h1>

            <p>{t("whoWeAre.hero.description")}</p>

            <div className={styles.heroActions}>
              <LocalizedLink
                href="/team/contact"
                className={styles.primaryButton}
              >
                {t("whoWeAre.hero.primaryButton")}
                <span aria-hidden="true">→</span>
              </LocalizedLink>

              <LocalizedLink
                href="/investor-guide/investor-handbook"
                className={styles.secondaryButton}
              >
                {t("whoWeAre.hero.secondaryButton")}
              </LocalizedLink>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <div>
              <span>{t("whoWeAre.hero.metaBuiltAround")}</span>
              <strong>{t("whoWeAre.hero.metaValues")}</strong>
            </div>

            <div>
              <span>{t("whoWeAre.hero.metaGuide")}</span>
              <strong>01 / 06</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SVETLANA STORY
      ===================================================== */}

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.photoColumn}>
              <div className={styles.photoFrame}>
                <img
                  src="/portait_image_for_website.jpg"
                  alt={t("whoWeAre.story.imageAlt")}
                  className={styles.svetlanaImage}
                />

                <div className={styles.photoBadge}>
                  <span>SVETLANA NOVIKOVA</span>
                  <strong>{t("whoWeAre.story.photoBadge")}</strong>
                </div>
              </div>

              <div className={styles.photoCaption}>
                <span>{t("whoWeAre.story.photoCaption1")}</span>
                <span>{t("whoWeAre.story.photoCaption2")}</span>
              </div>
            </div>

            <div className={styles.storyContent}>
              <span className={styles.sectionLabel}>
                {t("whoWeAre.story.label")}
              </span>

              <h2>
                {t("whoWeAre.story.titleLine1")}
                <span>{t("whoWeAre.story.titleLine2")}</span>
              </h2>

              <p className={styles.lead}>
                {t("whoWeAre.story.lead")}
              </p>

              <p>{t("whoWeAre.story.paragraph1")}</p>

              <p>{t("whoWeAre.story.paragraph2")}</p>

              <p>{t("whoWeAre.story.paragraph3")}</p>

              <div className={styles.signature}>
                <strong>Svetlana Novikova</strong>
                <span>{t("whoWeAre.story.signature")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CREDIBILITY
      ===================================================== */}

      <section className={styles.credibility}>
        <div className={styles.container}>
          <div className={styles.credibilityHeader}>
            <div>
              <span className={styles.sectionLabel}>
                {t("whoWeAre.credibility.label")}
              </span>

              <h2>
                {t("whoWeAre.credibility.titleLine1")}
                <span>{t("whoWeAre.credibility.titleLine2")}</span>
              </h2>
            </div>

            <p>{t("whoWeAre.credibility.description")}</p>
          </div>

          <div className={styles.statsGrid}>
            {credentials.map((credential) => (
              <article
                key={credential.value}
                className={styles.statCard}
              >
                <div className={styles.statValue}>
                  {credential.value}
                </div>

                <div className={styles.statLine} />

                <h3>{t(credential.labelKey)}</h3>

                <p>{t(credential.textKey)}</p>
              </article>
            ))}
          </div>

          <div className={styles.credentialStrip}>
            <div className={styles.credentialMain}>
              <span className={styles.credentialIcon}>✓</span>

              <div>
                <strong>{t("whoWeAre.credentialStrip.title")}</strong>
                <span>
                  {t("whoWeAre.credentialStrip.description")}
                </span>
              </div>
            </div>

            <div className={styles.credentialLanguages}>
              <span>GREEK</span>
              <span>ENGLISH</span>
              <span>RUSSIAN</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERTISE
      ===================================================== */}

      <section className={styles.expertise}>
        <div className={styles.container}>
          <div className={styles.expertiseIntro}>
            <span className={styles.sectionLabel}>
              {t("whoWeAre.expertiseIntro.label")}
            </span>

            <h2>
              {t("whoWeAre.expertiseIntro.titleLine1")}
              <span>{t("whoWeAre.expertiseIntro.titleLine2")}</span>
            </h2>

            <p>{t("whoWeAre.expertiseIntro.description")}</p>
          </div>

          <div className={styles.expertiseGrid}>
            {expertise.map((item) => (
              <article
                key={item.number}
                className={styles.expertiseCard}
              >
                <div className={styles.expertiseTop}>
                  <span>{item.number}</span>
                  <span className={styles.expertiseArrow}>↗</span>
                </div>

                <div className={styles.expertiseBottom}>
                  <h3>{t(item.titleKey)}</h3>
                  <p>{t(item.textKey)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COORDINATED TEAM
      ===================================================== */}

      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.teamCard}>
            <div className={styles.teamHeading}>
              <span className={styles.sectionLabel}>
                {t("whoWeAre.team.label")}
              </span>

              <h2>
                {t("whoWeAre.team.titleLine1")}
                <span>{t("whoWeAre.team.titleLine2")}</span>
              </h2>

              <p>{t("whoWeAre.team.description")}</p>
            </div>

            <div className={styles.professionalList}>
              {professionals.map((professional) => (
                <div
                  key={professional.number}
                  className={styles.professional}
                >
                  <span className={styles.professionalNumber}>
                    {professional.number}
                  </span>

                  <div>
                    <h3>{t(professional.titleKey)}</h3>
                    <p>{t(professional.textKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className={styles.philosophy}>
        <div className={styles.container}>
          <div className={styles.philosophyGrid}>
            <div>
              <span className={styles.sectionLabel}>
                {t("whoWeAre.philosophy.label")}
              </span>

              <h2>
                {t("whoWeAre.philosophy.titleLine1")}
                <span>{t("whoWeAre.philosophy.titleLine2")}</span>
              </h2>
            </div>

            <div className={styles.philosophyContent}>
              <div className={styles.philosophyQuote}>
                <span>01</span>

                <blockquote>
                  “{t("whoWeAre.philosophy.quote")}”
                </blockquote>
              </div>

              <p>{t("whoWeAre.philosophy.paragraph1")}</p>

              <p>{t("whoWeAre.philosophy.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PERSONAL CTA
      ===================================================== */}

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaOrbOne} />
            <div className={styles.ctaOrbTwo} />

            <div className={styles.ctaContent}>
              <span className={styles.ctaLabel}>
                {t("whoWeAre.cta.label")}
              </span>

              <h2>
                {t("whoWeAre.cta.titleLine1")}
                <span>{t("whoWeAre.cta.titleLine2")}</span>
              </h2>

              <p>{t("whoWeAre.cta.description")}</p>
            </div>

            <div className={styles.ctaActions}>
              <LocalizedLink
                href="/team/contact"
                className={styles.ctaPrimary}
              >
                {t("whoWeAre.cta.primaryButton")}
                <span aria-hidden="true">→</span>
              </LocalizedLink>

              <LocalizedLink
                href="/investor-guide/investor-handbook"
                className={styles.ctaSecondary}
              >
                {t("whoWeAre.cta.secondaryButton")}
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
          <p>{t("whoWeAre.disclaimer")}</p>
        </div>
      </section>
    </main>
  );
}