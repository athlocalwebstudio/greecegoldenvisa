"use client";

import { useEffect } from "react";

import styles from "@/app/styles/legal.module.css";

import { useLanguage } from "@/app/LanguageContext";

export default function TermsAndConditionsPage() {
  const { t } = useLanguage();

  /*
  |--------------------------------------------------------------------------
  | UPDATE DOCUMENT TITLE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.title = t(
      "terms.metadata.title"
    );
  }, [t]);

  return (
    <main className={styles.page}>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGrid} />

        <div className={styles.heroGlow} />

        <div className={styles.container}>

          <div className={styles.heroContent}>

            <div className={styles.eyebrow}>
              <span />

              {t(
                "terms.hero.eyebrow"
              )}
            </div>

            <h1>
              {t(
                "terms.hero.title"
              )}

              <br />

              <em>
                {t(
                  "terms.hero.highlight"
                )}
              </em>
            </h1>

            <p>
              {t(
                "terms.hero.description"
              )}
            </p>

            <div
              className={
                styles.updated
              }
            >
              {t(
                "terms.hero.updated.label"
              )}

              <strong>
                {t(
                  "terms.hero.updated.date"
                )}
              </strong>
            </div>

          </div>

          <div
            className={
              styles.heroMeta
            }
          >
            <span>
              {t(
                "terms.hero.meta.websiteUse"
              )}
            </span>

            <strong>
              {t(
                "terms.hero.meta.terms"
              )}
            </strong>

            <span>
              {t(
                "terms.hero.meta.greece"
              )}
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <section
        className={
          styles.contentSection
        }
      >
        <div
          className={
            styles.container
          }
        >

          <div
            className={
              styles.contentLayout
            }
          >

            <aside
              className={
                styles.sideNav
              }
            >
              <span>
                {t(
                  "terms.contents.label"
                )}
              </span>

              <a href="#acceptance">
                01 —{" "}
                {t(
                  "terms.sections.acceptance.title"
                )}
              </a>

              <a href="#website">
                02 —{" "}
                {t(
                  "terms.sections.website.title"
                )}
              </a>

              <a href="#information">
                03 —{" "}
                {t(
                  "terms.sections.information.title"
                )}
              </a>

              <a href="#no-advice">
                04 —{" "}
                {t(
                  "terms.sections.noAdvice.title"
                )}
              </a>

              <a href="#golden-visa">
                05 —{" "}
                {t(
                  "terms.sections.goldenVisa.title"
                )}
              </a>

              <a href="#properties">
                06 —{" "}
                {t(
                  "terms.sections.properties.title"
                )}
              </a>

              <a href="#intellectual">
                07 —{" "}
                {t(
                  "terms.sections.intellectual.title"
                )}
              </a>

              <a href="#third-party">
                08 —{" "}
                {t(
                  "terms.sections.thirdParty.title"
                )}
              </a>

              <a href="#liability">
                09 —{" "}
                {t(
                  "terms.sections.liability.title"
                )}
              </a>

              <a href="#changes">
                10 —{" "}
                {t(
                  "terms.sections.changes.title"
                )}
              </a>

              <a href="#law">
                11 —{" "}
                {t(
                  "terms.sections.law.title"
                )}
              </a>

              <a href="#contact">
                12 —{" "}
                {t(
                  "terms.sections.contact.title"
                )}
              </a>
            </aside>

            <article
              className={
                styles.legalContent
              }
            >

              <p
                className={
                  styles.lead
                }
              >
                {t(
                  "terms.lead"
                )}
              </p>

              {/* =====================================================
                  01 — ACCEPTANCE
              ===================================================== */}

              <section id="acceptance">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  01
                </span>

                <h2>
                  {t(
                    "terms.sections.acceptance.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.acceptance.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.acceptance.paragraph2"
                  )}
                </p>
              </section>

              {/* =====================================================
                  02 — WEBSITE
              ===================================================== */}

              <section id="website">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  02
                </span>

                <h2>
                  {t(
                    "terms.sections.website.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.website.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.website.paragraph2"
                  )}
                </p>
              </section>

              {/* =====================================================
                  03 — INFORMATION
              ===================================================== */}

              <section id="information">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  03
                </span>

                <h2>
                  {t(
                    "terms.sections.information.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.information.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.information.paragraph2"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.information.paragraph3"
                  )}
                </p>
              </section>

              {/* =====================================================
                  04 — NO ADVICE
              ===================================================== */}

              <section id="no-advice">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  04
                </span>

                <h2>
                  {t(
                    "terms.sections.noAdvice.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.noAdvice.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.noAdvice.paragraph2"
                  )}
                </p>
              </section>

              {/* =====================================================
                  05 — GOLDEN VISA
              ===================================================== */}

              <section id="golden-visa">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  05
                </span>

                <h2>
                  {t(
                    "terms.sections.goldenVisa.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.goldenVisa.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.goldenVisa.paragraph2"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.goldenVisa.paragraph3"
                  )}
                </p>
              </section>

              {/* =====================================================
                  06 — PROPERTIES
              ===================================================== */}

              <section id="properties">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  06
                </span>

                <h2>
                  {t(
                    "terms.sections.properties.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.properties.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.properties.paragraph2"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.properties.paragraph3"
                  )}
                </p>
              </section>

              {/* =====================================================
                  07 — INTELLECTUAL PROPERTY
              ===================================================== */}

              <section id="intellectual">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  07
                </span>

                <h2>
                  {t(
                    "terms.sections.intellectual.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.intellectual.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.intellectual.paragraph2"
                  )}
                </p>
              </section>

              {/* =====================================================
                  08 — THIRD PARTY
              ===================================================== */}

              <section id="third-party">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  08
                </span>

                <h2>
                  {t(
                    "terms.sections.thirdParty.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.thirdParty.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.thirdParty.paragraph2"
                  )}
                </p>
              </section>

              {/* =====================================================
                  09 — LIABILITY
              ===================================================== */}

              <section id="liability">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  09
                </span>

                <h2>
                  {t(
                    "terms.sections.liability.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.liability.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.liability.paragraph2"
                  )}
                </p>
              </section>

              {/* =====================================================
                  10 — CHANGES
              ===================================================== */}

              <section id="changes">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  10
                </span>

                <h2>
                  {t(
                    "terms.sections.changes.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.changes.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.changes.paragraph2"
                  )}
                </p>
              </section>

              {/* =====================================================
                  11 — LAW
              ===================================================== */}

              <section id="law">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  11
                </span>

                <h2>
                  {t(
                    "terms.sections.law.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.law.paragraph1"
                  )}
                </p>

                <p>
                  {t(
                    "terms.sections.law.paragraph2"
                  )}
                </p>
              </section>

              {/* =====================================================
                  12 — CONTACT
              ===================================================== */}

              <section id="contact">
                <span
                  className={
                    styles.sectionNumber
                  }
                >
                  12
                </span>

                <h2>
                  {t(
                    "terms.sections.contact.title"
                  )}
                </h2>

                <p>
                  {t(
                    "terms.sections.contact.paragraph1"
                  )}
                </p>

                <div
                  className={
                    styles.contactBox
                  }
                >
                  <strong>
                    Greece Golden Visa
                  </strong>

                  <a href="mailto:higoldenvisa@gmail.com">
                    higoldenvisa@gmail.com
                  </a>
                </div>
              </section>

              {/* =====================================================
                  DISCLAIMER
              ===================================================== */}

              <div
                className={
                  styles.disclaimer
                }
              >
                <strong>
                  {t(
                    "terms.disclaimer.title"
                  )}
                </strong>

                <p>
                  {t(
                    "terms.disclaimer.description"
                  )}
                </p>
              </div>

            </article>
          </div>
        </div>
      </section>
    </main>
  );
}