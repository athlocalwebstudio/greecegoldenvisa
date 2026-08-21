"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  BedDouble,
  Ruler,
} from "lucide-react";

import styles from "./propertyOpportunities.module.css";

const properties = [
  {
    id: "athens-residence",
    number: "01",
    title: "Contemporary Athens Residence",
    location: "Athens, Attica",
    category: "RESIDENTIAL",
    investment: "€250,000+",
    price: "€285,000",
    type: "Apartment",
    size: "92 m²",
    bedrooms: "2 Bedrooms",
    route: "€250K Investment Route",
    description:
      "A contemporary residence in Athens, selected for investors seeking a well-connected location with strong lifestyle appeal and long-term investment potential.",
    image: "/ready-to-move.jpg",
    href: "/program/eligibility",
  },

  {
    id: "athens-riviera",
    number: "02",
    title: "Athens Riviera Residence",
    location: "Athens Riviera",
    category: "RESIDENTIAL",
    investment: "€400,000+",
    price: "€425,000",
    type: "Premium Residence",
    size: "118 m²",
    bedrooms: "3 Bedrooms",
    route: "€400K Investment Route",
    description:
      "A premium coastal residence positioned in one of the most sought-after areas of the Athens metropolitan region, combining lifestyle and investment appeal.",
    image: "/alternative-investments.jpg",
    href: "/program/eligibility",
  },

  {
    id: "island-villa",
    number: "03",
    title: "Private Island Villa",
    location: "Greek Islands",
    category: "VILLA",
    investment: "Lifestyle",
    price: "€650,000",
    type: "Private Villa",
    size: "164 m²",
    bedrooms: "4 Bedrooms",
    route: "Lifestyle Investment",
    description:
      "A distinctive Greek island property combining privacy, architectural character and the Mediterranean lifestyle that makes Greece a compelling investment destination.",
    image: "/third_scene.jpg",
    href: "/program/eligibility",
  },

  {
    id: "urban-investment",
    number: "04",
    title: "Central Athens Investment",
    location: "Central Athens",
    category: "INVESTMENT",
    investment: "€800,000+",
    price: "€820,000",
    type: "Investment Residence",
    size: "156 m²",
    bedrooms: "3 Bedrooms",
    route: "€800K Investment Route",
    description:
      "A strategically located urban property for investors seeking a premium Athens asset with strong positioning within one of Greece's most established property markets.",
    image: "/commercial-image.jpg",
    href: "/program/eligibility",
  },
];

export default function PropertyOpportunities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProperty = properties[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? properties.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === properties.length - 1 ? 0 : current + 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.propertyOpportunities}>
      <div className={styles.container}>

        {/* =========================================
            INTRO
        ========================================= */}

        <div className={styles.intro}>

          <div className={styles.introEyebrow}>
            <span className={styles.eyebrowLine} />
            <span>PROPERTY OPPORTUNITIES</span>
          </div>

          <div className={styles.introHeading}>
            <h2>
              Explore properties
              <br />
              selected for your investment.
            </h2>
          </div>

          <div className={styles.introDescription}>
            <p>
              Discover a selection of properties that may fit different
              investment strategies across Greece.
            </p>

            <span className={styles.introNote}>
              Each opportunity is reviewed around your goals before you move
              forward.
            </span>
          </div>

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
            aria-label="Previous property"
          >
            <ArrowLeft
              size={19}
              strokeWidth={1.8}
            />
          </button>


          {/* =========================================
              CLICKABLE PROPERTY CARD
          ========================================= */}

          <Link
            href={activeProperty.href}
            className={styles.propertyCardLink}
            aria-label={`Explore ${activeProperty.title}`}
          >

            <article className={styles.propertyCard}>

              {/* =========================================
                  IMAGE
              ========================================= */}

              <div className={styles.imageWrapper}>

                <img
                  key={activeProperty.image}
                  src={activeProperty.image}
                  alt={activeProperty.title}
                  className={styles.image}
                />

                <div className={styles.imageOverlay} />

                <div className={styles.imageTop}>

                  <span className={styles.propertyNumber}>
                    {activeProperty.number} /{" "}
                    {String(properties.length).padStart(2, "0")}
                  </span>

                  <span className={styles.propertyCategory}>
                    {activeProperty.category}
                  </span>

                </div>


                <div className={styles.imageBottom}>

                  <div className={styles.location}>
                    <MapPin
                      size={15}
                      strokeWidth={1.8}
                    />

                    <span>
                      {activeProperty.location}
                    </span>
                  </div>

                  <span className={styles.illustrativeLabel}>
                    ILLUSTRATIVE PROPERTY
                  </span>

                </div>

              </div>


              {/* =========================================
                  PROPERTY CONTENT
              ========================================= */}

              <div className={styles.propertyContent}>

                <div className={styles.contentTop}>

                  <div className={styles.titleArea}>

                    <span className={styles.contentEyebrow}>
                      SELECTED OPPORTUNITY
                    </span>

                    <h3>
                      {activeProperty.title}
                    </h3>

                  </div>


                  <div className={styles.priceArea}>

                    <span className={styles.priceLabel}>
                      INDICATIVE VALUE
                    </span>

                    <strong>
                      {activeProperty.price}
                    </strong>

                  </div>

                </div>


                {/* =========================================
                    PROPERTY DETAILS
                ========================================= */}

                <div className={styles.propertyDetails}>

                  <div className={styles.detailItem}>

                    <span className={styles.detailLabel}>
                      TYPE
                    </span>

                    <span className={styles.detailValue}>
                      {activeProperty.type}
                    </span>

                  </div>


                  <div className={styles.detailItem}>

                    <span className={styles.detailLabel}>
                      SIZE
                    </span>

                    <span className={styles.detailValue}>
                      <Ruler
                        size={14}
                        strokeWidth={1.8}
                      />

                      {activeProperty.size}
                    </span>

                  </div>


                  <div className={styles.detailItem}>

                    <span className={styles.detailLabel}>
                      BEDROOMS
                    </span>

                    <span className={styles.detailValue}>
                      <BedDouble
                        size={14}
                        strokeWidth={1.8}
                      />

                      {activeProperty.bedrooms}
                    </span>

                  </div>


                  <div className={styles.detailItem}>

                    <span className={styles.detailLabel}>
                      INVESTMENT ROUTE
                    </span>

                    <span className={styles.detailValue}>
                      {activeProperty.route}
                    </span>

                  </div>

                </div>


                {/* =========================================
                    DESCRIPTION
                ========================================= */}

                <p className={styles.description}>
                  {activeProperty.description}
                </p>


                <div className={styles.propertyDivider} />


                {/* =========================================
                    BOTTOM CONTENT
                ========================================= */}

                <div className={styles.bottomContent}>

                  <div className={styles.selectionNote}>

                    <span>
                      OUR APPROACH
                    </span>

                    <p>
                      Properties are considered around your investment
                      objectives — not simply available inventory.
                    </p>

                  </div>


                  <span className={styles.exploreButton}>

                    <span>
                      Explore property
                    </span>

                    <span className={styles.exploreIcon}>
                      <ArrowUpRight
                        size={17}
                        strokeWidth={2}
                      />
                    </span>

                  </span>

                </div>

              </div>

            </article>

          </Link>


          {/* RIGHT ARROW */}

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={nextSlide}
            aria-label="Next property"
          >
            <ArrowRight
              size={19}
              strokeWidth={1.8}
            />
          </button>

        </div>


        {/* =========================================
            CONTROLS
        ========================================= */}

        <div className={styles.controls}>

          <div className={styles.progress}>

            {properties.map((property, index) => (
              <button
                type="button"
                key={property.id}
                onClick={() => goToSlide(index)}
                className={`${styles.progressItem} ${
                  index === activeIndex
                    ? styles.progressActive
                    : ""
                }`}
                aria-label={`Go to ${property.title}`}
              />
            ))}

          </div>

          <span className={styles.progressText}>
            {activeProperty.number} /{" "}
            {String(properties.length).padStart(2, "0")}
          </span>

        </div>


        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <div className={styles.bottomCta}>

          <div className={styles.ctaCopy}>

            <span className={styles.ctaEyebrow}>
              HAVE A SPECIFIC PROPERTY IN MIND?
            </span>

            <h3>
              Let us review it with you.
            </h3>

            <p>
              Share a property or tell us what you are looking for and we can
              discuss the next step.
            </p>

          </div>


          <Link
            href="/program/eligibility"
            className={styles.ctaButton}
          >
            <span>
              Request a property review
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