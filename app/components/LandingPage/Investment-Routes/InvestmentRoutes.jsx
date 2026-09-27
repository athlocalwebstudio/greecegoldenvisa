"use client";

import { useState } from "react";
import LocalizedLink from "@/app/components/LocalizedLink";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "@/app/LanguageContext";

import styles from "./investmentRoutes.module.css";

const investmentRoutes = [
  {
    id: "ready-properties",
    number: "01",
    image: "/ready-to-move.jpg",
    href: "/investments/ready-properties",
  },

  {
    id: "strategic-properties",
    number: "02",
    image: "/strategic-option.jpg",
    href: "/investments/strategic-opportunities",
  },

  {
    id: "commercial-hospitality",
    number: "03",
    image: "/commercial-image.jpg",
    href: "/investments/compare-options",
  },

  {
    id: "alternative",
    number: "04",
    image: "/alternative-investments.jpg",
    href: "/investments/alternative-investments",
  },
];

export default function InvestmentRoutes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { t } = useLanguage();

  const activeRoute = investmentRoutes[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0
        ? investmentRoutes.length - 1
        : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === investmentRoutes.length - 1
        ? 0
        : current + 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.investmentRoutes}>
      <div className={styles.container}>
        {/* =========================================
            INTRO
        ========================================= */}

        <div className={styles.intro}>
          <span className={styles.eyebrow}>
            {t("investmentRoutes.intro.eyebrow")}
          </span>

          <h2>
            {t("investmentRoutes.intro.title")}
            <br />
            {t("investmentRoutes.intro.highlight")}
          </h2>

          <p>
            {t("investmentRoutes.intro.description")}
          </p>
        </div>

        {/* =========================================
            CAROUSEL
        ========================================= */}

        <div className={styles.carousel}>
          {/* LEFT ARROW */}

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={previousSlide}
            aria-label={t(
              "investmentRoutes.navigation.previous"
            )}
          >
            <ArrowLeft
              size={20}
              strokeWidth={1.8}
            />
          </button>

          {/* =========================================
              CARD
          ========================================= */}

          <LocalizedLink
            href={activeRoute.href}
            className={styles.card}
            aria-label={`${t(
              "investmentRoutes.navigation.explore"
            )}: ${t(
              `investmentRoutes.routes.${activeRoute.id}.title`
            )}`}
          >
            {/* IMAGE */}

            <div className={styles.imageWrapper}>
              <img
                key={activeRoute.image}
                src={activeRoute.image}
                alt={t(
                  `investmentRoutes.routes.${activeRoute.id}.title`
                )}
                className={styles.image}
              />

              <div className={styles.imageOverlay} />

              <span className={styles.routeNumber}>
                {activeRoute.number} / 04
              </span>
            </div>

            {/* =========================================
                CONTENT
            ========================================= */}

            <div className={styles.cardContent}>
              {/* TOP */}

              <div className={styles.cardTop}>
                <span className={styles.routeLabel}>
                  {t("investmentRoutes.card.routeLabel")}
                </span>

                <span className={styles.routeIndex}>
                  {activeRoute.number}
                </span>
              </div>

              {/* TITLE */}

              <div className={styles.titleArea}>
                <h3>
                  {t(
                    `investmentRoutes.routes.${activeRoute.id}.title`
                  )}
                </h3>
              </div>

              {/* DESCRIPTION */}

              <div className={styles.descriptionArea}>
                <p className={styles.description}>
                  {t(
                    `investmentRoutes.routes.${activeRoute.id}.description`
                  )}
                </p>
              </div>

              {/* BEST FOR */}

              <div className={styles.bestFor}>
                <span>
                  {t("investmentRoutes.card.bestFor")}
                </span>

                <p>
                  {t(
                    `investmentRoutes.routes.${activeRoute.id}.bestFor`
                  )}
                </p>
              </div>

              {/* =========================================
                  CTA
              ========================================= */}

              <div className={styles.exploreArea}>
                <span className={styles.explore}>
                  <span className={styles.exploreText}>
                    {t(
                      "investmentRoutes.card.explore"
                    )}
                  </span>

                  <span className={styles.exploreIcon}>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                    />
                  </span>
                </span>
              </div>
            </div>
          </LocalizedLink>

          {/* RIGHT ARROW */}

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={nextSlide}
            aria-label={t(
              "investmentRoutes.navigation.next"
            )}
          >
            <ArrowRight
              size={20}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* =========================================
            CONTROLS
        ========================================= */}

        <div className={styles.controls}>
          <div className={styles.progress}>
            {investmentRoutes.map((route, index) => (
              <button
                type="button"
                key={route.id}
                onClick={() => goToSlide(index)}
                className={`${styles.progressItem} ${
                  index === activeIndex
                    ? styles.progressActive
                    : ""
                }`}
                aria-label={`${t(
                  "investmentRoutes.navigation.goTo"
                )}: ${t(
                  `investmentRoutes.routes.${route.id}.title`
                )}`}
              />
            ))}
          </div>

          <span className={styles.progressText}>
            {activeRoute.number} / 04
          </span>
        </div>

        {/* =========================================
            ASSESSMENT CTA
        ========================================= */}

        <div className={styles.assessment}>
          <div className={styles.assessmentText}>
            <span className={styles.assessmentLabel}>
              {t(
                "investmentRoutes.assessment.label"
              )}
            </span>

            <span
              className={
                styles.assessmentDescription
              }
            >
              {t(
                "investmentRoutes.assessment.description"
              )}
            </span>
          </div>

          <LocalizedLink
            href="/program/eligibility"
            className={styles.assessmentButton}
          >
            <span>
              {t("investmentRoutes.assessment.button")}
            </span>

            <ArrowRight
              size={17}
              strokeWidth={2}
            />
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}