"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  BedDouble,
  Ruler,
  Bath,
} from "lucide-react";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import styles from "./propertyOpportunities.module.css";
import { useLanguage } from "@/app/LanguageContext";
import LocalizedLink from "@/app/components/LocalizedLink";

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

const formatPrice = (price) => {
  if (!price) return "Price on request";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
};

const formatSize = (size) => {
  if (!size) return "—";
  return `${size} m²`;
};

const getCategory = (type) => {
  if (!type) return "residential";

  const normalized = type.toLowerCase();

  if (normalized.includes("land")) return "land";
  if (normalized.includes("commercial")) return "commercial";

  return "residential";
};

const isExternalUrl = (url) => {
  return (
    typeof url === "string" &&
    /^https?:\/\//i.test(url)
  );
};

export default function PropertyOpportunities() {
  const { t } = useLanguage();

  const [properties, setProperties] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchProperties() {
      try {
        const data = await client.fetch(
          PROPERTIES_QUERY
        );

        if (!mounted) return;

        const sorted = [...(data || [])].sort(
          (a, b) => {
            const aTitle =
              `${a?.city || ""} ${
                a?.title || ""
              }`.toLowerCase();

            const bTitle =
              `${b?.city || ""} ${
                b?.title || ""
              }`.toLowerCase();

            const aPriority =
              aTitle.includes("anavyssos") ||
              aTitle.includes("villa")
                ? 0
                : aTitle.includes("varkiza") ||
                    aTitle.includes("maisonette")
                  ? 1
                  : 2;

            const bPriority =
              bTitle.includes("anavyssos") ||
              bTitle.includes("villa")
                ? 0
                : bTitle.includes("varkiza") ||
                    bTitle.includes("maisonette")
                  ? 1
                  : 2;

            return aPriority - bPriority;
          }
        );

        const mapped = sorted.map(
          (property, index) => ({
            id: property._id,

            number: String(index + 1).padStart(
              2,
              "0"
            ),

            title:
              property.title ||
              "Property Opportunity",

            location:
              property.location ||
              property.city ||
              "Greece",

            category: getCategory(
              property.type
            ),

            price: formatPrice(
              property.price
            ),

            type:
              property.type ||
              "Property",

            size: formatSize(
              property.size
            ),

            bedrooms:
              property.bedrooms || "—",

            bathrooms:
              property.bathrooms || "—",

            route: property.route || null,

            image: property.mainImage
              ? urlFor(property.mainImage)
                  .width(1400)
                  .height(900)
                  .fit("crop")
                  .quality(85)
                  .url()
              : "/greek_background.jpg",

            href:
              property.propertyUrl ||
              `/properties/${property._id}`,

            status: property.status,

            featured: property.featured,
          })
        );

        setProperties(mapped);
        setActiveIndex(0);
      } catch (error) {
        console.error(
          "Failed to fetch properties:",
          error
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchProperties();

    return () => {
      mounted = false;
    };
  }, []);

  const cardsPerView = 3;

  const visibleProperties = useMemo(() => {
    if (!properties.length) return [];

    const count = Math.min(
      cardsPerView,
      properties.length
    );

    return Array.from(
      { length: count },
      (_, offset) =>
        properties[
          (activeIndex + offset) %
            properties.length
        ]
    );
  }, [properties, activeIndex]);

  const canNavigate =
    properties.length > cardsPerView;

  const goNext = () => {
    if (!canNavigate) return;

    setActiveIndex(
      (current) =>
        (current + 1) % properties.length
    );
  };

  const goPrevious = () => {
    if (!canNavigate) return;

    setActiveIndex(
      (current) =>
        (current - 1 + properties.length) %
        properties.length
    );
  };

  const goToProperty = (index) => {
    if (!properties.length) return;

    setActiveIndex(index);
  };

  if (loading) {
    return (
      <section
        className={
          styles.propertyOpportunities
        }
      >
        <div className={styles.container}>
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

              {t(
                "propertyOpportunities.intro.eyebrow"
              )}
            </div>

            <div
              className={
                styles.introHeading
              }
            >
              <h2>
                {t(
                  "propertyOpportunities.intro.title"
                )}

                <br />

                <span>
                  {t(
                    "propertyOpportunities.intro.highlight"
                  )}
                </span>
              </h2>
            </div>

            <div
              className={
                styles.introDescription
              }
            >
              <p>
                {t(
                  "propertyOpportunities.intro.description"
                )}
              </p>

              <span
                className={
                  styles.introNote
                }
              >
                {t(
                  "propertyOpportunities.intro.note"
                )}
              </span>
            </div>
          </div>

          <div
            className={
              styles.loadingState
            }
          >
            Loading...
          </div>
        </div>
      </section>
    );
  }

  if (!properties.length) {
    return (
      <section
        className={
          styles.propertyOpportunities
        }
      >
        <div className={styles.container}>
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

              {t(
                "propertyOpportunities.intro.eyebrow"
              )}
            </div>

            <div
              className={
                styles.introHeading
              }
            >
              <h2>
                {t(
                  "propertyOpportunities.intro.title"
                )}

                <br />

                <span>
                  {t(
                    "propertyOpportunities.intro.highlight"
                  )}
                </span>
              </h2>
            </div>

            <div
              className={
                styles.introDescription
              }
            >
              <p>
                {t(
                  "propertyOpportunities.intro.description"
                )}
              </p>

              <span
                className={
                  styles.introNote
                }
              >
                {t(
                  "propertyOpportunities.intro.note"
                )}
              </span>
            </div>
          </div>

          <div
            className={styles.emptyState}
          >
            {t(
              "propertyOpportunities.fallbacks.description"
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={
        styles.propertyOpportunities
      }
    >
      <div className={styles.container}>
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

            {t(
              "propertyOpportunities.intro.eyebrow"
            )}
          </div>

          <div
            className={
              styles.introHeading
            }
          >
            <h2>
              {t(
                "propertyOpportunities.intro.title"
              )}

              <br />

              <span>
                {t(
                  "propertyOpportunities.intro.highlight"
                )}
              </span>
            </h2>
          </div>

          <div
            className={
              styles.introDescription
            }
          >
            <p>
              {t(
                "propertyOpportunities.intro.description"
              )}
            </p>

            <span
              className={
                styles.introNote
              }
            >
              {t(
                "propertyOpportunities.intro.note"
              )}
            </span>
          </div>
        </div>

        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={goPrevious}
            disabled={!canNavigate}
            aria-label={t(
              "propertyOpportunities.navigation.previous"
            )}
          >
            <ArrowLeft
              size={20}
              strokeWidth={1.7}
            />
          </button>

          <div
            className={
              styles.cardsViewport
            }
          >
            <div
              className={
                styles.cardsTrack
              }
            >
              {visibleProperties.map(
                (property) => {
                  const cardContent = (
                    <article
                      className={
                        styles.propertyCard
                      }
                    >
                      <div
                        className={
                          styles.imageWrapper
                        }
                      >
                        <img
                          src={
                            property.image
                          }
                          alt={
                            property.title
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
                              property.number
                            }
                          </span>

                          <span
                            className={
                              styles.propertyCategory
                            }
                          >
                            {t(
                              `propertyOpportunities.categories.${property.category}`
                            )}
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
                              size={14}
                              strokeWidth={
                                1.7
                              }
                            />

                            <span>
                              {
                                property.location
                              }
                            </span>
                          </div>

                          <span
                            className={
                              styles.illustrativeLabel
                            }
                          >
                            {t(
                              "propertyOpportunities.image.selectedProperty"
                            )}
                          </span>
                        </div>
                      </div>

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
                              {
                                property.type
                              }
                            </span>

                            <h3>
                              {
                                property.title
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
                              {t(
                                "propertyOpportunities.card.indicativeValue"
                              )}
                            </span>

                            <strong>
                              {
                                property.price
                              }
                            </strong>
                          </div>
                        </div>

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
                              {t(
                                "propertyOpportunities.details.type"
                              )}
                            </span>

                            <span
                              className={
                                styles.detailValue
                              }
                            >
                              {
                                property.type
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
                              {t(
                                "propertyOpportunities.details.size"
                              )}
                            </span>

                            <span
                              className={
                                styles.detailValue
                              }
                            >
                              <Ruler
                                size={14}
                                strokeWidth={
                                  1.7
                                }
                              />

                              {
                                property.size
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
                              {t(
                                "propertyOpportunities.details.bedrooms"
                              )}
                            </span>

                            <span
                              className={
                                styles.detailValue
                              }
                            >
                              <BedDouble
                                size={14}
                                strokeWidth={
                                  1.7
                                }
                              />

                              {
                                property.bedrooms
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
                              {t(
                                "propertyOpportunities.details.bathrooms"
                              )}
                            </span>

                            <span
                              className={
                                styles.detailValue
                              }
                            >
                              <Bath
                                size={14}
                                strokeWidth={
                                  1.7
                                }
                              />

                              {
                                property.bathrooms
                              }
                            </span>
                          </div>
                        </div>

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
                              {t(
                                "propertyOpportunities.details.investmentRoute"
                              )}
                            </span>

                            <p>
                              {property.route ||
                                t(
                                  "propertyOpportunities.route.notVerified"
                                )}
                            </p>
                          </div>

                          <span
                            className={
                              styles.exploreButton
                            }
                          >
                            {t(
                              "propertyOpportunities.card.viewProperty"
                            )}

                            <span
                              className={
                                styles.exploreIcon
                              }
                            >
                              <ArrowUpRight
                                size={15}
                                strokeWidth={
                                  1.8
                                }
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                    </article>
                  );

                  /*
                   * Sanity propertyUrl is an external URL
                   * such as:
                   * https://homesingreece.eu/property/3775
                   *
                   * External URLs must NOT go through
                   * LocalizedLink because LocalizedLink
                   * intentionally adds /en or /ru.
                   */
                  if (
                    isExternalUrl(
                      property.href
                    )
                  ) {
                    return (
                      <a
                        href={property.href}
                        key={property.id}
                        className={
                          styles.propertyCardLink
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cardContent}
                      </a>
                    );
                  }

                  return (
                    <LocalizedLink
                      href={property.href}
                      key={property.id}
                      className={
                        styles.propertyCardLink
                      }
                    >
                      {cardContent}
                    </LocalizedLink>
                  );
                }
              )}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={goNext}
            disabled={!canNavigate}
            aria-label={t(
              "propertyOpportunities.navigation.next"
            )}
          >
            <ArrowRight
              size={20}
              strokeWidth={1.7}
            />
          </button>
        </div>

        {properties.length > 1 && (
          <div
            className={styles.controls}
          >
            <div
              className={styles.progress}
            >
              {properties.map(
                (property, index) => (
                  <button
                    type="button"
                    key={property.id}
                    className={`${styles.progressItem} ${
                      index === activeIndex
                        ? styles.progressActive
                        : ""
                    }`}
                    onClick={() =>
                      goToProperty(index)
                    }
                    aria-label={t(
                      "propertyOpportunities.navigation.goTo",
                      {
                        title:
                          property.title,
                      }
                    )}
                    aria-current={
                      index === activeIndex
                        ? "true"
                        : undefined
                    }
                  />
                )
              )}
            </div>

            <span
              className={
                styles.progressText
              }
            >
              {String(
                activeIndex + 1
              ).padStart(2, "0")}{" "}
              /{" "}
              {String(
                properties.length
              ).padStart(2, "0")}
            </span>
          </div>
        )}

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
              {t(
                "propertyOpportunities.cta.eyebrow"
              )}
            </span>

            <h3>
              {t(
                "propertyOpportunities.cta.title"
              )}
            </h3>

            <p>
              {t(
                "propertyOpportunities.cta.description"
              )}
            </p>
          </div>

          <LocalizedLink
            href="/team/contact"
            className={
              styles.ctaButton
            }
          >
            {t(
              "propertyOpportunities.cta.button"
            )}

            <ArrowRight
              size={15}
              strokeWidth={1.8}
            />
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}