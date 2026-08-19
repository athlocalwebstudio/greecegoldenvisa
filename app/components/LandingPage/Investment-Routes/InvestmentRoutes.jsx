"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import styles from "./investmentRoutes.module.css";

const investmentRoutes = [
  {
    id: "ready-properties",
    number: "01",
    title: "Ready-to-Move Properties",
    description:
      "Explore completed properties ready for purchase, designed for investors seeking a straightforward path to their Greek Golden Visa.",
    bestFor:
      "Investors looking for a simple, ready-to-use property investment.",
    image: "/ready-to-move.jpg",
    href: "/investments/ready-properties",
  },

  {
    id: "strategic-properties",
    number: "02",
    title: "Strategic Property Opportunities",
    description:
      "Discover properties with renovation or redevelopment potential, offering a more strategic approach to your investment in Greece.",
    bestFor:
      "Investors looking for flexibility and carefully selected opportunities.",
    image: "/strategic-option.jpg",
    href: "/investments/strategic-properties",
  },

  {
    id: "commercial-hospitality",
    number: "03",
    title: "Commercial & Hospitality",
    description:
      "Explore commercial and hospitality properties for investors seeking a more specialized investment opportunity in Greece.",
    bestFor:
      "Investors considering larger or more specialized property opportunities.",
    image: "/commercial-image.jpg",
    href: "/investments/commercial-hospitality",
  },

  {
    id: "alternative",
    number: "04",
    title: "Alternative Routes",
    description:
      "Explore alternative investment approaches beyond traditional property ownership, depending on your individual circumstances.",
    bestFor:
      "Investors looking beyond the conventional property investment route.",
    image: "/alternative-investments.jpg",
    href: "/investments/alternative",
  },
];

export default function InvestmentRoutes() {
  const [activeIndex, setActiveIndex] = useState(0);

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
            INVESTMENT ROUTES
          </span>

          <h2>
            Choose the route
            <br />
            that fits your goals.
          </h2>

          <p>
            Every investor has different priorities.
            Explore the available investment approaches
            and discover which strategy may be right for you.
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
            aria-label="Previous investment route"
          >
            <ArrowLeft
              size={20}
              strokeWidth={1.8}
            />
          </button>


          {/* =========================================
              CARD
          ========================================= */}

          <Link
            href={activeRoute.href}
            className={styles.card}
            aria-label={`Explore ${activeRoute.title}`}
          >

            {/* IMAGE */}

            <div className={styles.imageWrapper}>

              <img
                key={activeRoute.image}
                src={activeRoute.image}
                alt={activeRoute.title}
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
                  INVESTMENT ROUTE
                </span>

                <span className={styles.routeIndex}>
                  {activeRoute.number}
                </span>

              </div>


              {/* TITLE */}

              <div className={styles.titleArea}>

                <h3>
                  {activeRoute.title}
                </h3>

              </div>


              {/* DESCRIPTION */}

              <div className={styles.descriptionArea}>

                <p className={styles.description}>
                  {activeRoute.description}
                </p>

              </div>


              {/* BEST FOR */}

              <div className={styles.bestFor}>

                <span>
                  BEST FOR
                </span>

                <p>
                  {activeRoute.bestFor}
                </p>

              </div>


              {/* =========================================
                  CTA
              ========================================= */}

              <div className={styles.exploreArea}>

                <span className={styles.explore}>

                  <span className={styles.exploreText}>
                    Explore this route
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

          </Link>


          {/* RIGHT ARROW */}

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={nextSlide}
            aria-label="Next investment route"
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
                aria-label={`Go to ${route.title}`}
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
              NOT SURE WHERE TO START?
            </span>

            <span className={styles.assessmentDescription}>
              Find the investment route that matches your goals.
            </span>

          </div>


          <Link
            href="/program/eligibility"
            className={styles.assessmentButton}
          >

            <span>
              Find Your Route
            </span>

            <ArrowRight
              size={17}
              strokeWidth={2}
            />

          </Link>

        </div>

      </div>
    </section>
  );
}