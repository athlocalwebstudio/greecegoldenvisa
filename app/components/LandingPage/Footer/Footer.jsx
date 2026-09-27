"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import Link from "next/link";
import styles from "./Footer.module.css";

import { useLanguage } from "@/app/LanguageContext";

const footerColumns = [
  {
    id: "goldenVisa",
    links: [
      {
        id: "investmentRoutes",
        href: "/investments/compare-options",
      },
      {
        id: "howItWorks",
        href: "/program/journey",
      },
      {
        id: "technicalDueDiligence",
        href: "#due-diligence",
      },
      {
        id: "faq",
        href: "/investor-guide/faq",
      },
    ],
  },
  {
    id: "explore",
    links: [
      {
        id: "about",
        href: "/team/who-we-are",
      },
      {
        id: "greeceExperience",
        href: "/why-greece/mediterranean-lifestyle",
      },
      {
        id: "clientsTrust",
        href: "/team/why-clients-trust-us",
      },
      {
        id: "contact",
        href: "/team/contact",
      },
    ],
  },
];

const contactDetails = [
  {
    id: "email",
    value: "higoldenvisa@gmail.com",
    href: "higoldenvisa@gmail.com",
  },
  {
    id: "phone",
    value: "+306993229390",
    href: "tel:+306993229390",
  },
  {
    id: "whatsapp",
    value: "+306993229390",
    href: "https://wa.me/306993229390",
  },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* =========================================
            MAIN FOOTER
        ========================================= */}

        <div className={styles.footerMain}>

          {/* BRAND */}

          <div className={styles.brandColumn}>

            <LocalizedLink
              href="/"
              className={styles.brand}
            >
              <span
                className={styles.brandMark}
              >
                GV
              </span>

              <span
                className={styles.brandText}
              >
                <strong>
                  GOLDEN VISA
                </strong>

                <span>
                  GREECE
                </span>
              </span>
            </LocalizedLink>

            <p
              className={
                styles.brandDescription
              }
            >
              {t(
                "footer.brand.description"
              )}
            </p>

            <div
              className={
                styles.credentials
              }
            >
              <span>
                {t(
                  "footer.brand.credentialOne"
                )}
              </span>

              <span>
                {t(
                  "footer.brand.credentialTwo"
                )}
              </span>
            </div>

          </div>

          {/* NAVIGATION */}

          <div
            className={
              styles.navigationColumns
            }
          >

            {footerColumns.map(
              (column) => (
                <div
                  className={
                    styles.footerColumn
                  }
                  key={column.id}
                >

                  <h3>
                    {t(
                      `footer.columns.${column.id}.title`
                    )}
                  </h3>

                  <nav
                    aria-label={t(
                      `footer.columns.${column.id}.title`
                    )}
                  >

                    {column.links.map(
                      (link) => {
                        const isAnchor =
                          link.href.startsWith("#");

                        return isAnchor ? (
                          <Link
                            href={link.href}
                            key={link.id}
                          >
                            {t(
                              `footer.columns.${column.id}.links.${link.id}`
                            )}
                          </Link>
                        ) : (
                          <LocalizedLink
                            href={link.href}
                            key={link.id}
                          >
                            {t(
                              `footer.columns.${column.id}.links.${link.id}`
                            )}
                          </LocalizedLink>
                        );
                      }
                    )}

                  </nav>

                </div>
              )
            )}

          </div>

          {/* CONTACT */}

          <div
            className={
              styles.contactColumn
            }
          >

            <h3>
              {t("footer.contact.title")}
            </h3>

            <div
              className={
                styles.contactList
              }
            >

              {contactDetails.map(
                (item) => (
                  <a
                    href={item.href}
                    key={item.id}
                  >
                    <span>
                      {t(
                        `footer.contact.details.${item.id}`
                      )}
                    </span>

                    <strong>
                      {item.value}
                    </strong>
                  </a>
                )
              )}

            </div>

            <div
              className={
                styles.location
              }
            >
              <span>
                {t(
                  "footer.contact.basedIn"
                )}
              </span>

              <strong>
                {t(
                  "footer.contact.location"
                )}
              </strong>
            </div>

          </div>

        </div>

        {/* =========================================
            PROFESSIONAL NOTE
        ========================================= */}

        <div
          className={
            styles.professionalNote
          }
        >

          <div
            className={styles.noteMark}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="8"
                cy="8"
                r="6.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M8 7.2V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <circle
                cx="8"
                cy="4.8"
                r="0.75"
                fill="currentColor"
              />
            </svg>
          </div>

          <div>

            <span>
              {t(
                "footer.professionalNote.label"
              )}
            </span>

            <p>
              {t(
                "footer.professionalNote.description"
              )}
            </p>

          </div>

        </div>

        {/* =========================================
            FOOTER BOTTOM
        ========================================= */}

        <div
          className={styles.footerBottom}
        >

          <div
            className={styles.bottomLeft}
          >

            <div
              className={styles.copyright}
            >
              © {new Date().getFullYear()}{" "}
              Golden Visa Greece.

              <span>
                {t(
                  "footer.bottom.allRightsReserved"
                )}
              </span>
            </div>

            <div
              className={styles.madeBy}
            >
              {t(
                "footer.bottom.websiteCraftedBy"
              )}{" "}

              <a
                href="https://athlocalwebstudio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                AthLocalWebStudio
              </a>
            </div>

          </div>

          <nav
            className={styles.legalLinks}
            aria-label={t(
              "footer.legal.title"
            )}
          >
            <LocalizedLink href="/privacy">
              {t(
                "footer.legal.privacy"
              )}
            </LocalizedLink>

            <LocalizedLink href="/terms">
              {t(
                "footer.legal.terms"
              )}
            </LocalizedLink>

            <LocalizedLink href="/cookies">
              {t(
                "footer.legal.cookies"
              )}
            </LocalizedLink>
          </nav>

          <div
            className={styles.languages}
            aria-label={t(
              "footer.languages.available"
            )}
          >
            <span
              className={
                styles.languageActive
              }
            >
              EN
            </span>

            <span>
              GR
            </span>

            <span>
              RU
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}