"use client";

import { useMemo, useState } from "react";
import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import styles from "./page.module.css";

const checklistSections = [
  {
    id: "identity",
    number: "01",
    titleKey: "identity.title",
    descriptionKey: "identity.description",
    items: [
      {
        id: "passport",
        titleKey: "identity.items.passport.title",
        descriptionKey:
          "identity.items.passport.description",
        required: true,
      },
      {
        id: "entry-status",
        titleKey:
          "identity.items.entryStatus.title",
        descriptionKey:
          "identity.items.entryStatus.description",
        required: true,
      },
      {
        id: "photo",
        titleKey: "identity.items.photo.title",
        descriptionKey:
          "identity.items.photo.description",
        required: true,
      },
      {
        id: "contact",
        titleKey: "identity.items.contact.title",
        descriptionKey:
          "identity.items.contact.description",
        required: true,
      },
    ],
  },

  {
    id: "investment",
    number: "02",
    titleKey: "investment.title",
    descriptionKey: "investment.description",
    items: [
      {
        id: "purchase-contract",
        titleKey:
          "investment.items.purchaseContract.title",
        descriptionKey:
          "investment.items.purchaseContract.description",
        required: true,
      },
      {
        id: "notarial-certificate",
        titleKey:
          "investment.items.notarialCertificate.title",
        descriptionKey:
          "investment.items.notarialCertificate.description",
        required: true,
      },
      {
        id: "payment-proof",
        titleKey:
          "investment.items.paymentProof.title",
        descriptionKey:
          "investment.items.paymentProof.description",
        required: true,
      },
      {
        id: "land-registry",
        titleKey:
          "investment.items.landRegistry.title",
        descriptionKey:
          "investment.items.landRegistry.description",
        required: true,
      },
      {
        id: "e9",
        titleKey: "investment.items.e9.title",
        descriptionKey:
          "investment.items.e9.description",
        required: true,
      },
    ],
  },

  {
    id: "insurance",
    number: "03",
    titleKey: "insurance.title",
    descriptionKey: "insurance.description",
    items: [
      {
        id: "insurance",
        titleKey:
          "insurance.items.insurance.title",
        descriptionKey:
          "insurance.items.insurance.description",
        required: true,
      },
      {
        id: "application",
        titleKey:
          "insurance.items.application.title",
        descriptionKey:
          "insurance.items.application.description",
        required: true,
      },
      {
        id: "fees",
        titleKey: "insurance.items.fees.title",
        descriptionKey:
          "insurance.items.fees.description",
        required: true,
      },
    ],
  },

  {
    id: "route",
    number: "04",
    titleKey: "route.title",
    descriptionKey: "route.description",
    items: [
      {
        id: "route-verification",
        titleKey:
          "route.items.routeVerification.title",
        descriptionKey:
          "route.items.routeVerification.description",
        required: true,
      },
      {
        id: "special-property",
        titleKey:
          "route.items.specialProperty.title",
        descriptionKey:
          "route.items.specialProperty.description",
        required: false,
      },
      {
        id: "company-ownership",
        titleKey:
          "route.items.companyOwnership.title",
        descriptionKey:
          "route.items.companyOwnership.description",
        required: false,
      },
    ],
  },

  {
    id: "professional",
    number: "05",
    titleKey: "professional.title",
    descriptionKey: "professional.description",
    items: [
      {
        id: "legal-review",
        titleKey:
          "professional.items.legalReview.title",
        descriptionKey:
          "professional.items.legalReview.description",
        required: true,
      },
      {
        id: "technical-review",
        titleKey:
          "professional.items.technicalReview.title",
        descriptionKey:
          "professional.items.technicalReview.description",
        required: true,
      },
      {
        id: "application-review",
        titleKey:
          "professional.items.applicationReview.title",
        descriptionKey:
          "professional.items.applicationReview.description",
        required: true,
      },
    ],
  },
];

const allItems = checklistSections.flatMap(
  (section) => section.items
);

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.checkIcon}
    >
      <path d="M5 12.5 9.2 17 19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.arrowIcon}
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ApplicationChecklistPage() {
  const { t } = useLanguage();

  const [completed, setCompleted] = useState([]);

  const completedCount = completed.length;
  const totalCount = allItems.length;

  const progress = useMemo(() => {
    if (!totalCount) {
      return 0;
    }

    return Math.round(
      (completedCount / totalCount) * 100
    );
  }, [completedCount, totalCount]);

  const toggleItem = (id) => {
    setCompleted((current) =>
      current.includes(id)
        ? current.filter(
            (item) => item !== id
          )
        : [...current, id]
    );
  };

  const resetChecklist = () => {
    setCompleted([]);
  };

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.sectionLabel}>
              {t(
                "applicationChecklist.hero.label"
              )}
            </span>

            <h1>
              {t(
                "applicationChecklist.hero.heading"
              )}
              <br />
              {t(
                "applicationChecklist.hero.headingSecond"
              )}
            </h1>

            <p>
              {t(
                "applicationChecklist.hero.description"
              )}
            </p>

            <div className={styles.heroActions}>
              <a
                href="#checklist"
                className={styles.primaryButton}
              >
                {t(
                  "applicationChecklist.hero.primary"
                )}
                <ArrowIcon />
              </a>

              <LocalizedLink
                href="/investor-guide/investor-handbook"
                className={styles.secondaryButton}
              >
                {t(
                  "applicationChecklist.hero.secondary"
                )}
              </LocalizedLink>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>
              {t(
                "applicationChecklist.hero.meta"
              )}
            </span>

            <span>01 / 05</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <span className={styles.sectionLabel}>
                {t(
                  "applicationChecklist.intro.label"
                )}
              </span>

              <h2>
                {t(
                  "applicationChecklist.intro.heading"
                )}
              </h2>
            </div>

            <div className={styles.introCopy}>
              <p>
                {t(
                  "applicationChecklist.intro.paragraphOne"
                )}
              </p>

              <p>
                {t(
                  "applicationChecklist.intro.paragraphTwo"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section
        className={styles.progressSection}
        id="checklist"
      >
        <div className={styles.container}>
          <div className={styles.progressCard}>
            <div className={styles.progressTop}>
              <div>
                <span
                  className={
                    styles.progressLabel
                  }
                >
                  {t(
                    "applicationChecklist.progress.label"
                  )}
                </span>

                <strong>{progress}%</strong>
              </div>

              <div
                className={
                  styles.progressCount
                }
              >
                <span>
                  {completedCount}
                </span>

                <small>
                  / {totalCount}{" "}
                  {t(
                    "applicationChecklist.progress.checked"
                  )}
                </small>
              </div>
            </div>

            <div
              className={
                styles.progressTrack
              }
            >
              <span
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div
              className={
                styles.progressBottom
              }
            >
              <span>
                {progress === 100
                  ? t(
                      "applicationChecklist.progress.complete"
                    )
                  : t(
                      "applicationChecklist.progress.instruction"
                    )}
              </span>

              {completedCount > 0 && (
                <button
                  type="button"
                  className={
                    styles.resetButton
                  }
                  onClick={resetChecklist}
                >
                  {t(
                    "applicationChecklist.progress.reset"
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section
        className={styles.checklistSection}
      >
        <div className={styles.container}>
          <div
            className={
              styles.checklistHeader
            }
          >
            <div>
              <span
                className={
                  styles.sectionLabel
                }
              >
                {t(
                  "applicationChecklist.checklist.label"
                )}
              </span>

              <h2>
                {t(
                  "applicationChecklist.checklist.heading"
                )}
              </h2>
            </div>

            <p>
              {t(
                "applicationChecklist.checklist.description"
              )}
            </p>
          </div>

          <div className={styles.sections}>
            {checklistSections.map(
              (section) => {
                const sectionCompleted =
                  section.items.filter(
                    (item) =>
                      completed.includes(
                        item.id
                      )
                  ).length;

                return (
                  <section
                    className={
                      styles.checklistBlock
                    }
                    key={section.id}
                  >
                    <div
                      className={
                        styles.blockIntro
                      }
                    >
                      <div
                        className={
                          styles.blockNumber
                        }
                      >
                        {section.number}
                      </div>

                      <div
                        className={
                          styles.blockTitle
                        }
                      >
                        <h3>
                          {t(
                            `applicationChecklist.sections.${section.titleKey}`
                          )}
                        </h3>

                        <p>
                          {t(
                            `applicationChecklist.sections.${section.descriptionKey}`
                          )}
                        </p>
                      </div>

                      <div
                        className={
                          styles.blockProgress
                        }
                      >
                        {sectionCompleted}/
                        {section.items.length}
                      </div>
                    </div>

                    <div
                      className={
                        styles.items
                      }
                    >
                      {section.items.map(
                        (item) => {
                          const isComplete =
                            completed.includes(
                              item.id
                            );

                          return (
                            <label
                              key={
                                item.id
                              }
                              className={`${styles.item} ${
                                isComplete
                                  ? styles.itemComplete
                                  : ""
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={
                                  isComplete
                                }
                                onChange={() =>
                                  toggleItem(
                                    item.id
                                  )
                                }
                                aria-label={t(
                                  "applicationChecklist.item.markComplete",
                                  {
                                    title: t(
                                      `applicationChecklist.sections.${item.titleKey}`
                                    ),
                                  }
                                )}
                              />

                              <span
                                className={
                                  styles.customCheckbox
                                }
                              >
                                {isComplete && (
                                  <CheckIcon />
                                )}
                              </span>

                              <span
                                className={
                                  styles.itemContent
                                }
                              >
                                <span
                                  className={
                                    styles.itemTitle
                                  }
                                >
                                  {t(
                                    `applicationChecklist.sections.${item.titleKey}`
                                  )}

                                  {item.required && (
                                    <span
                                      className={
                                        styles.required
                                      }
                                    >
                                      {t(
                                        "applicationChecklist.item.required"
                                      )}
                                    </span>
                                  )}
                                </span>

                                <span
                                  className={
                                    styles.itemDescription
                                  }
                                >
                                  {t(
                                    `applicationChecklist.sections.${item.descriptionKey}`
                                  )}
                                </span>
                              </span>

                              <span
                                className={
                                  styles.itemStatus
                                }
                              >
                                {isComplete
                                  ? t(
                                      "applicationChecklist.item.ready"
                                    )
                                  : t(
                                      "applicationChecklist.item.toCheck"
                                    )}
                              </span>
                            </label>
                          );
                        }
                      )}
                    </div>
                  </section>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* IMPORTANT DISTINCTION */}
      <section className={styles.noteSection}>
        <div className={styles.container}>
          <div className={styles.noteCard}>
            <div className={styles.noteMark}>
              !
            </div>

            <div>
              <span
                className={
                  styles.sectionLabel
                }
              >
                {t(
                  "applicationChecklist.note.label"
                )}
              </span>

              <h2>
                {t(
                  "applicationChecklist.note.heading"
                )}
              </h2>

              <p>
                {t(
                  "applicationChecklist.note.paragraphOne"
                )}
              </p>

              <p>
                {t(
                  "applicationChecklist.note.paragraphTwo"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className={styles.nextSection}>
        <div className={styles.container}>
          <div className={styles.nextHeader}>
            <span
              className={
                styles.sectionLabel
              }
            >
              {t(
                "applicationChecklist.next.label"
              )}
            </span>

            <h2>
              {t(
                "applicationChecklist.next.heading"
              )}
              <br />
              {t(
                "applicationChecklist.next.headingSecond"
              )}
            </h2>

            <p>
              {t(
                "applicationChecklist.next.description"
              )}
            </p>
          </div>

          <div className={styles.nextSteps}>
            <div className={styles.nextStep}>
              <span>01</span>

              <strong>
                {t(
                  "applicationChecklist.next.stepOne.title"
                )}
              </strong>

              <p>
                {t(
                  "applicationChecklist.next.stepOne.description"
                )}
              </p>
            </div>

            <div className={styles.nextStep}>
              <span>02</span>

              <strong>
                {t(
                  "applicationChecklist.next.stepTwo.title"
                )}
              </strong>

              <p>
                {t(
                  "applicationChecklist.next.stepTwo.description"
                )}
              </p>
            </div>

            <div className={styles.nextStep}>
              <span>03</span>

              <strong>
                {t(
                  "applicationChecklist.next.stepThree.title"
                )}
              </strong>

              <p>
                {t(
                  "applicationChecklist.next.stepThree.description"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <span
              className={
                styles.sectionLabel
              }
            >
              {t(
                "applicationChecklist.cta.label"
              )}
            </span>

            <h2>
              {t(
                "applicationChecklist.cta.heading"
              )}
              <br />
              {t(
                "applicationChecklist.cta.headingSecond"
              )}
            </h2>

            <p>
              {t(
                "applicationChecklist.cta.description"
              )}
            </p>

            <div
              className={
                styles.ctaActions
              }
            >
              <LocalizedLink
                href="/investor-guide/calculator"
                className={
                  styles.primaryButton
                }
              >
                {t(
                  "applicationChecklist.cta.primary"
                )}
                <ArrowIcon />
              </LocalizedLink>

              <LocalizedLink
                href="/team/contact"
                className={
                  styles.secondaryButton
                }
              >
                {t(
                  "applicationChecklist.cta.secondary"
                )}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section
        className={styles.disclaimer}
      >
        <div className={styles.container}>
          <p>
            <strong>
              {t(
                "applicationChecklist.disclaimer.important"
              )}
            </strong>{" "}
            {t(
              "applicationChecklist.disclaimer.description"
            )}
          </p>

          <div className={styles.sources}>
            <span>
              {t(
                "applicationChecklist.sources.label"
              )}
            </span>

            <a
              href="https://migration.gov.gr/en/golden-visa/"
              target="_blank"
              rel="noreferrer"
            >
              {t(
                "applicationChecklist.sources.ministry"
              )}
            </a>

            <a
              href="https://en.mitos.gov.gr/"
              target="_blank"
              rel="noreferrer"
            >
              {t(
                "applicationChecklist.sources.registry"
              )}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}