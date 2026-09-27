"use client";

import { useState } from "react";
import LocalizedLink from "@/app/components/LocalizedLink";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "@/app/LanguageContext";

import styles from "./whatWeDo.module.css";

const approaches = [
  {
    number: "01",
    key: "propertySelection",
  },
  {
    number: "02",
    key: "technicalDueDiligence",
  },
  {
    number: "03",
    key: "legalVisaCoordination",
  },
  {
    number: "04",
    key: "ongoingSupport",
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { t } = useLanguage();

  const activeApproach = approaches[activeIndex];

  return (
    <section
      className={styles.whatWeDo}
      id="what-we-do"
    >
      <div className={styles.container}>
        {/* =====================================================
            INTRO
        ===================================================== */}

        <header className={styles.intro}>
          <span className={styles.eyebrow}>
            {t("whatWeDo.intro.eyebrow")}
          </span>

          <h2>
            {t("whatWeDo.intro.title")}
            <br />
            {t("whatWeDo.intro.highlight")}
          </h2>

          <p className={styles.introDescription}>
            {t("whatWeDo.intro.description")}
          </p>
        </header>

        {/* =====================================================
            APPROACH
        ===================================================== */}

        <div className={styles.approachSection}>
          <div className={styles.approachHeader}>
            <div>
              <span className={styles.sectionEyebrow}>
                {t("whatWeDo.approach.eyebrow")}
              </span>

              <h3>
                {t("whatWeDo.approach.title")}
                <br />
                {t("whatWeDo.approach.highlight")}
              </h3>
            </div>

            <span className={styles.approachCounter}>
              {activeApproach.number} / 04
            </span>
          </div>

          {/* =================================================
              TABS
          ================================================= */}

          <div className={styles.approachTabs}>
            {approaches.map((approach, index) => (
              <button
                key={approach.number}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`${styles.approachTab} ${
                  index === activeIndex
                    ? styles.approachTabActive
                    : ""
                }`}
              >
                <span className={styles.tabNumber}>
                  {approach.number}
                </span>

                <span className={styles.tabContent}>
                  <span className={styles.tabTitle}>
                    {t(
                      `whatWeDo.approaches.${approach.key}.title`
                    )}
                  </span>

                  <span className={styles.tabDescription}>
                    {t(
                      `whatWeDo.approaches.${approach.key}.tabDescription`
                    )}
                  </span>
                </span>

                <span className={styles.tabArrow}>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                  />
                </span>
              </button>
            ))}
          </div>

          {/* =================================================
              ACTIVE APPROACH
          ================================================= */}

          <div className={styles.approachDetail}>
            <div className={styles.detailNumber}>
              {activeApproach.number}
            </div>

            <div className={styles.detailContent}>
              <span className={styles.detailLabel}>
                {activeApproach.number} / 04
              </span>

              <h4>
                {t(
                  `whatWeDo.approaches.${activeApproach.key}.shortTitle`
                )}
              </h4>

              <p>
                {t(
                  `whatWeDo.approaches.${activeApproach.key}.description`
                )}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            COORDINATED APPROACH
        ===================================================== */}

        <div className={styles.coordinated}>
          <div className={styles.coordinatedContent}>
            <span className={styles.coordinatedEyebrow}>
              {t("whatWeDo.coordinated.eyebrow")}
            </span>

            <h3>
              {t("whatWeDo.coordinated.title")}
              <br className={styles.desktopBreak} />
              {t("whatWeDo.coordinated.highlight")}
            </h3>

            <p>
              {t("whatWeDo.coordinated.description")}
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>15+</strong>
              <span>
                {t("whatWeDo.stats.experience")}
              </span>
            </div>

            <div className={styles.stat}>
              <strong>1,000+</strong>
              <span>
                {t("whatWeDo.stats.properties")}
              </span>
            </div>

            <div className={styles.stat}>
              <strong>3</strong>
              <span>
                {t("whatWeDo.stats.languages")}
              </span>
            </div>
          </div>

          <LocalizedLink
            href="/program/eligibility"
            className={styles.coordinatedButton}
          >
            <span>
              {t("whatWeDo.coordinated.button")}
            </span>

            <span className={styles.buttonIcon}>
              <ArrowUpRight
                size={17}
                strokeWidth={2}
              />
            </span>
          </LocalizedLink>
        </div>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <div className={styles.finalCta}>
          <div className={styles.finalCtaContent}>
            <span className={styles.finalCtaEyebrow}>
              {t("whatWeDo.finalCta.eyebrow")}
            </span>

            <h3>
              {t("whatWeDo.finalCta.title")}
            </h3>
          </div>

          <LocalizedLink
            href="/program/eligibility"
            className={styles.finalCtaButton}
          >
            <span>
              {t("whatWeDo.finalCta.button")}
            </span>

            <ArrowRight
              size={18}
              strokeWidth={2}
            />
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}