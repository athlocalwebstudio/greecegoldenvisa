"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  BedDouble,
  Ruler,
} from "lucide-react";

import styles from "./propertyOpportunities.module.css";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

/*
|--------------------------------------------------------------------------
| SANITY QUERY
|--------------------------------------------------------------------------
*/

const PROPERTIES_QUERY = `
  *[
    _type == "property"
    && visibility == "Published"
  ] {
    _id,
    title,
    mainImage,
    location,
    city,
    price,
    route,
    type,
    status,
    visibility,
    size,
    bedrooms,
    bathrooms,
    description,
    features,
    propertyUrl,
    featured
  }
`;

/*
|--------------------------------------------------------------------------
| HELPERS
|--------------------------------------------------------------------------
*/

function formatPrice(price) {
  if (!price) return "Price on request";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

function formatSize(size) {
  if (!size) return "—";

  return `${size} m²`;
}

function formatBedrooms(bedrooms) {
  if (
    typeof bedrooms !== "number" ||
    bedrooms < 1
  ) {
    return null;
  }

  return bedrooms;
}

function getCategory(type) {
  if (type === "Land") {
    return "LAND";
  }

  if (type === "Commercial") {
    return "COMMERCIAL";
  }

  return "RESIDENTIAL";
}

function getRouteLabel(route) {
  if (
    !route ||
    route === "Not Yet Verified"
  ) {
    return "Route to be verified";
  }

  return `${route} Investment Route`;
}

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

export default function PropertyOpportunities() {
  const [properties, setProperties] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  /*
  |--------------------------------------------------------------------------
  | FETCH PUBLISHED SANITY PROPERTIES
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    let isMounted = true;

    async function fetchProperties() {
      try {
        const data = await client.fetch(
          PROPERTIES_QUERY
        );

        if (isMounted) {
          setProperties(data || []);
        }
      } catch (error) {
        console.error(
          "Failed to load Sanity properties:",
          error
        );

        if (isMounted) {
          setProperties([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchProperties();

    return () => {
      isMounted = false;
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | MAP SANITY DATA → CARD DATA
  |--------------------------------------------------------------------------
  */

  const mappedProperties = useMemo(() => {
    const sortedProperties = [
      ...properties,
    ].sort((a, b) => {
      const aTitle =
        a.title?.toLowerCase() || "";

      const bTitle =
        b.title?.toLowerCase() || "";

      /*
      |----------------------------------------------------------------
      | CAROUSEL ORDER
      |
      | 01 — Luxury 260 sqm Villa in Anavyssos
      | 02 — Luxury 157 sqm Maisonette in Varkiza
      | 03 — Coastal Development Land in Ermioni
      |----------------------------------------------------------------
      */

      const aIsAnavyssos =
        aTitle.includes("anavyssos") ||
        aTitle.includes("villa");

      const bIsAnavyssos =
        bTitle.includes("anavyssos") ||
        bTitle.includes("villa");

      const aIsVarkiza =
        aTitle.includes("varkiza") ||
        aTitle.includes("maisonette");

      const bIsVarkiza =
        bTitle.includes("varkiza") ||
        bTitle.includes("maisonette");

      if (
        aIsAnavyssos &&
        !bIsAnavyssos
      ) {
        return -1;
      }

      if (
        !aIsAnavyssos &&
        bIsAnavyssos
      ) {
        return 1;
      }

      if (
        aIsVarkiza &&
        !bIsVarkiza
      ) {
        return -1;
      }

      if (
        !aIsVarkiza &&
        bIsVarkiza
      ) {
        return 1;
      }

      return 0;
    });

    return sortedProperties.map(
      (property, index) => {
        const bedrooms =
          formatBedrooms(
            property.bedrooms
          );

        return {
          id:
            property._id ||
            `property-${index}`,

          number: String(
            index + 1
          ).padStart(2, "0"),

          title:
            property.title ||
            "Property Opportunity",

          location:
            property.city &&
            property.location
              ? `${property.city}, ${property.location}`
              : property.city ||
                property.location ||
                "Greece",

          category:
            getCategory(property.type),

          price:
            formatPrice(property.price),

          type:
            property.type ||
            "Property",

          size:
            formatSize(property.size),

          bedrooms,

          bathrooms:
            property.bathrooms || null,

          route:
            getRouteLabel(
              property.route
            ),

          description:
            property.description ||
            "A selected property opportunity in Greece.",

          image:
            property.mainImage
              ? urlFor(property.mainImage)
                  .width(1400)
                  .height(900)
                  .fit("crop")
                  .url()
              : "/ready-to-move.jpg",

          href:
            property.propertyUrl ||
            "/program/eligibility",

          status:
            property.status ||
            "Available",

          featured:
            property.featured || false,
        };
      }
    );
  }, [properties]);

  /*
  |--------------------------------------------------------------------------
  | KEEP INDEX VALID
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (
      activeIndex >=
      mappedProperties.length
    ) {
      setActiveIndex(0);
    }
  }, [
    activeIndex,
    mappedProperties.length,
  ]);

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (
    isLoading ||
    !mappedProperties.length
  ) {
    return null;
  }

  const activeProperty =
    mappedProperties[activeIndex];

  /*
  |--------------------------------------------------------------------------
  | SLIDER CONTROLS
  |--------------------------------------------------------------------------
  */

  const previousSlide = () => {
    setActiveIndex(
      (current) =>
        current === 0
          ? mappedProperties.length - 1
          : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex(
      (current) =>
        current ===
        mappedProperties.length - 1
          ? 0
          : current + 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className={
        styles.propertyOpportunities
      }
    >
      <div
        className={styles.container}
      >

        {/* =========================================
            INTRO
        ========================================= */}

        <div className={styles.intro}>

          <div
            className={
              styles.introEyebrow
            }
          >
            <span
              className={
                styles.eyebrowLine
              }
            />

            <span>
              PROPERTY OPPORTUNITIES
            </span>
          </div>

          <div
            className={
              styles.introHeading
            }
          >
            <h2>
              Explore properties
              <br />
              selected for your investment.
            </h2>
          </div>

          <div
            className={
              styles.introDescription
            }
          >
            <p>
              Discover a selection of
              properties across Greece
              that may fit different
              investment strategies.
            </p>

            <span
              className={
                styles.introNote
              }
            >
              Each opportunity is
              considered around your
              goals before you move
              forward.
            </span>
          </div>

        </div>

        {/* =========================================
            CAROUSEL
        ========================================= */}

        <div
          className={styles.carousel}
        >

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
              PROPERTY CARD
          ========================================= */}

          <a
            href={activeProperty.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              styles.propertyCardLink
            }
            aria-label={`Explore ${activeProperty.title}`}
          >

            <article
              className={
                styles.propertyCard
              }
            >

              {/* =========================================
                  IMAGE
              ========================================= */}

              <div
                className={
                  styles.imageWrapper
                }
              >

                <img
                  key={
                    activeProperty.image
                  }
                  src={
                    activeProperty.image
                  }
                  alt={
                    activeProperty.title
                  }
                  className={
                    styles.image
                  }
                />

                <div
                  className={
                    styles.imageOverlay
                  }
                />

                <div
                  className={
                    styles.imageTop
                  }
                >

                  <span
                    className={
                      styles.propertyNumber
                    }
                  >
                    {
                      activeProperty.number
                    }{" "}
                    /{" "}
                    {String(
                      mappedProperties.length
                    ).padStart(2, "0")}
                  </span>

                  <span
                    className={
                      styles.propertyCategory
                    }
                  >
                    {
                      activeProperty.category
                    }
                  </span>

                </div>

                <div
                  className={
                    styles.imageBottom
                  }
                >

                  <div
                    className={
                      styles.location
                    }
                  >

                    <MapPin
                      size={15}
                      strokeWidth={1.8}
                    />

                    <span>
                      {
                        activeProperty.location
                      }
                    </span>

                  </div>

                  <span
                    className={
                      styles.illustrativeLabel
                    }
                  >
                    SELECTED PROPERTY
                  </span>

                </div>

              </div>

              {/* =========================================
                  PROPERTY CONTENT
              ========================================= */}

              <div
                className={
                  styles.propertyContent
                }
              >

                <div
                  className={
                    styles.contentTop
                  }
                >

                  <div
                    className={
                      styles.titleArea
                    }
                  >

                    <span
                      className={
                        styles.contentEyebrow
                      }
                    >
                      SELECTED OPPORTUNITY
                    </span>

                    <h3>
                      {
                        activeProperty.title
                      }
                    </h3>

                  </div>

                  <div
                    className={
                      styles.priceArea
                    }
                  >

                    <span
                      className={
                        styles.priceLabel
                      }
                    >
                      INDICATIVE VALUE
                    </span>

                    <strong>
                      {
                        activeProperty.price
                      }
                    </strong>

                  </div>

                </div>

                {/* =========================================
                    PROPERTY DETAILS
                ========================================= */}

                <div
                  className={
                    styles.propertyDetails
                  }
                >

                  <div
                    className={
                      styles.detailItem
                    }
                  >

                    <span
                      className={
                        styles.detailLabel
                      }
                    >
                      TYPE
                    </span>

                    <span
                      className={
                        styles.detailValue
                      }
                    >
                      {
                        activeProperty.type
                      }
                    </span>

                  </div>

                  <div
                    className={
                      styles.detailItem
                    }
                  >

                    <span
                      className={
                        styles.detailLabel
                      }
                    >
                      SIZE
                    </span>

                    <span
                      className={
                        styles.detailValue
                      }
                    >

                      <Ruler
                        size={14}
                        strokeWidth={1.8}
                      />

                      {
                        activeProperty.size
                      }

                    </span>

                  </div>

                  <div
                    className={
                      styles.detailItem
                    }
                  >

                    <span
                      className={
                        styles.detailLabel
                      }
                    >
                      {
                        activeProperty.bedrooms
                          ? "BEDROOMS"
                          : "STATUS"
                      }
                    </span>

                    <span
                      className={
                        styles.detailValue
                      }
                    >

                      {activeProperty.bedrooms ? (
                        <>
                          <BedDouble
                            size={14}
                            strokeWidth={1.8}
                          />

                          {
                            activeProperty.bedrooms
                          }
                        </>
                      ) : (
                        activeProperty.status
                      )}

                    </span>

                  </div>

                  <div
                    className={
                      styles.detailItem
                    }
                  >

                    <span
                      className={
                        styles.detailLabel
                      }
                    >
                      INVESTMENT ROUTE
                    </span>

                    <span
                      className={
                        styles.detailValue
                      }
                    >
                      {
                        activeProperty.route
                      }
                    </span>

                  </div>

                </div>

                {/* =========================================
                    DESCRIPTION
                ========================================= */}

                <p
                  className={
                    styles.description
                  }
                >
                  {
                    activeProperty.description
                  }
                </p>

                <div
                  className={
                    styles.propertyDivider
                  }
                />

                {/* =========================================
                    BOTTOM CONTENT
                ========================================= */}

                <div
                  className={
                    styles.bottomContent
                  }
                >

                  <div
                    className={
                      styles.selectionNote
                    }
                  >

                    <span>
                      OUR APPROACH
                    </span>

                    <p>
                      Properties are
                      considered around
                      your investment
                      objectives — not simply
                      available inventory.
                    </p>

                  </div>

                  <span
                    className={
                      styles.exploreButton
                    }
                  >

                    <span>
                      View property
                    </span>

                    <span
                      className={
                        styles.exploreIcon
                      }
                    >

                      <ArrowUpRight
                        size={17}
                        strokeWidth={2}
                      />

                    </span>

                  </span>

                </div>

              </div>

            </article>

          </a>

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

        <div
          className={styles.controls}
        >

          <div
            className={styles.progress}
          >

            {mappedProperties.map(
              (property, index) => (
                <button
                  type="button"
                  key={property.id}
                  onClick={() =>
                    goToSlide(index)
                  }
                  className={`${styles.progressItem} ${
                    index === activeIndex
                      ? styles.progressActive
                      : ""
                  }`}
                  aria-label={`Go to ${property.title}`}
                />
              )
            )}

          </div>

          <span
            className={
              styles.progressText
            }
          >
            {
              activeProperty.number
            }{" "}
            /{" "}
            {String(
              mappedProperties.length
            ).padStart(2, "0")}
          </span>

        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}

        <div
          className={styles.bottomCta}
        >

          <div
            className={styles.ctaCopy}
          >

            <span
              className={
                styles.ctaEyebrow
              }
            >
              HAVE A SPECIFIC PROPERTY
              IN MIND?
            </span>

            <h3>
              Let us review it with you.
            </h3>

            <p>
              Share a property or tell us
              what you are looking for and
              we can discuss the next step.
            </p>

          </div>

          <a
            href="/program/eligibility"
            className={
              styles.ctaButton
            }
          >

            <span>
              Request a property review
            </span>

            <ArrowRight
              size={17}
              strokeWidth={2}
            />

          </a>

        </div>

      </div>
    </section>
  );
}