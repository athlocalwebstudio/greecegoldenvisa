"use client";

import LocalizedLink from "@/app/components/LocalizedLink";

import styles from "../Final-CTA/finalCTA.module.css";

import { useLanguage } from "@/app/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section
      className={styles.finalCta}
      aria-labelledby="final-cta-heading"
    >
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />

            <span>
              {t("finalCta.eyebrow")}
            </span>
          </div>

          <h2 id="final-cta-heading">
            {t("finalCta.title")}
            <br />
            {t("finalCta.highlight")}
          </h2>

          <p>
            {t("finalCta.description")}
          </p>

          <div className={styles.actions}>

            <LocalizedLink
              href="/investor-guide/application-checklist"
              className={styles.primaryButton}
            >
              <span>
                {t("finalCta.primaryButton")}
              </span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M8 3L13 8L8 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </LocalizedLink>

            <LocalizedLink
              href="/team/contact"
              className={styles.secondaryButton}
            >
              {t("finalCta.secondaryButton")}
            </LocalizedLink>

          </div>
        </div>

        <div className={styles.sideNote}>

          <span>
            {t("finalCta.sideNote.label")}
          </span>

          <div className={styles.sideLine} />

          <p>
            {t("finalCta.sideNote.description")}
          </p>

        </div>
      </div>
    </section>
  );
}