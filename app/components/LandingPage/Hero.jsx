"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { urlFor } from "@/sanity/lib/image";
import styles from "./hero.module.css";
import { useLanguage } from "@/app/LanguageContext";

export default function Hero({ homepage }) {
  const { language, t } = useLanguage();

  const heroImage = homepage?.heroImage
    ? urlFor(homepage.heroImage).width(1600).quality(85).url()
    : "/greek_background.jpg";

  const heroTitle =
    language === "ru"
      ? t("hero.title")
      : homepage?.heroTitle || "Invest in Greece.";

  const heroHighlight =
    language === "ru"
      ? t("hero.highlight")
      : homepage?.heroHighlight ||
        "Unlock European Residency.";

  const heroDescription =
    language === "ru"
      ? t("hero.description")
      : homepage?.heroDescription ||
        "Explore the right investment path in Greece and receive expert guidance throughout your residency journey.";

  const primaryCtaText =
    language === "ru"
      ? t("hero.primaryCta")
      : homepage?.primaryCtaText ||
        "Check Your Eligibility";

  const secondaryCtaText =
    language === "ru"
      ? t("hero.secondaryCta")
      : homepage?.secondaryCtaText ||
        "Explore Investment Routes →";

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* HERO CONTENT */}

        <div className={styles.content}>

          <h1 className={styles.title}>
            {heroTitle}
            <br />
            {heroHighlight}
          </h1>

          <p className={styles.description}>
            {heroDescription}
          </p>

          <div className={styles.actions}>

            <LocalizedLink
              href={
                homepage?.primaryCtaLink ||
                "/program/eligibility"
              }
              className={styles.primaryButton}
            >
              {primaryCtaText}
            </LocalizedLink>

            <LocalizedLink
              href={
                homepage?.secondaryCtaLink ||
                "/investments/compare-options"
              }
              className={styles.secondaryButton}
            >
              {secondaryCtaText}
            </LocalizedLink>

          </div>

          {/* TRUST */}

          <div className={styles.trust}>
            {language === "en" &&
            homepage?.trustItems?.length > 0 ? (
              homepage.trustItems.map((item) => (
                <div
                  className={styles.trustItem}
                  key={`${item.title}-${item.description}`}
                >
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              ))
            ) : language === "ru" ? (
              <>
                <div className={styles.trustItem}>
                  <strong>{t("hero.trust.family.title")}</strong>
                  <span>
                    {t("hero.trust.family.description")}
                  </span>
                </div>

                <div className={styles.trustItem}>
                  <strong>{t("hero.trust.eu.title")}</strong>
                  <span>
                    {t("hero.trust.eu.description")}
                  </span>
                </div>

                <div className={styles.trustItem}>
                  <strong>{t("hero.trust.expert.title")}</strong>
                  <span>
                    {t("hero.trust.expert.description")}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className={styles.trustItem}>
                  <strong>Family</strong>
                  <span>Residency Benefits</span>
                </div>

                <div className={styles.trustItem}>
                  <strong>EU</strong>
                  <span>Schengen Access</span>
                </div>

                <div className={styles.trustItem}>
                  <strong>Expert</strong>
                  <span>Guidance</span>
                </div>
              </>
            )}
          </div>

        </div>

        {/* HERO IMAGE */}

        <div className={styles.visual}>
          <div className={styles.imageWrapper}>

            <img
              src={heroImage}
              alt="Luxury Greek property overlooking the Aegean Sea"
              className={styles.heroImage}
            />

            <div className={styles.imageOverlay}></div>

          </div>
        </div>

      </div>
    </section>
  );
}