"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

const footerColumns = [
  {
    title: "Golden Visa",
    links: [
      { label: "Investment Routes", href: "/investments/compare-options" },
      { label: "How It Works", href: "/program/journey" },
      { label: "Technical Due Diligence", href: "#due-diligence" },
      { label: "FAQ", href: "/investor-guide/faq" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "About", href: "/team/who-we-are" },
      { label: "Greece Experience", href: "/why-greece/mediterranean-lifestyle" },
      { label: "Clients Trust", href: "/team/why-clients-trust-us" },
      { label: "Contact", href: "/team/contact" },
    ],
  },
];

const contactDetails = [
  {
    label: "EMAIL",
    value: "info@homesingreece.eu",
    href: "info@homesingreece.eu",
  },
  {
    label: "PHONE",
    value: "+306976695096",
    href: "tel:+306976695096",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* =========================================
            MAIN FOOTER
        ========================================= */}

        <div className={styles.footerMain}>

          {/* BRAND */}

          <div className={styles.brandColumn}>
            <Link href="/" className={styles.brand}>
              <span className={styles.brandMark}>
                GV
              </span>

              <span className={styles.brandText}>
                <strong>GOLDEN VISA</strong>
                <span>GREECE</span>
              </span>
            </Link>

            <p className={styles.brandDescription}>
              Independent technical coordination and guidance for international
              investors exploring Greece and the Greek Golden Visa.
            </p>

            <div className={styles.credentials}>
              <span>TECHNICAL COORDINATION</span>
              <span>GOLDEN VISA ADVISORY</span>
            </div>
          </div>

          {/* NAVIGATION */}

          <div className={styles.navigationColumns}>
            {footerColumns.map((column) => (
              <div className={styles.footerColumn} key={column.title}>
                <h3>{column.title}</h3>

                <nav aria-label={column.title}>
                  {column.links.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* CONTACT */}

          <div className={styles.contactColumn}>
            <h3>Contact</h3>

            <div className={styles.contactList}>
              {contactDetails.map((item) => (
                <a href={item.href} key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>

            <div className={styles.location}>
              <span>BASED IN</span>
              <strong>Greece</strong>
            </div>
          </div>
        </div>

        {/* =========================================
            PROFESSIONAL NOTE
        ========================================= */}

        <div className={styles.professionalNote}>
          <div className={styles.noteMark}>
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
            <span>PLEASE NOTE</span>

            <p>
              Information presented on this website is provided for general
              informational purposes and should not be considered legal,
              tax or investment advice.
            </p>
          </div>
        </div>

        {/* =========================================
            FOOTER BOTTOM
        ========================================= */}

        <div className={styles.footerBottom}>

          <div className={styles.bottomLeft}>

            <div className={styles.copyright}>
              © {new Date().getFullYear()} Golden Visa Greece.
              <span>All rights reserved.</span>
            </div>

            <div className={styles.madeBy}>
              Website crafted by{" "}
              <a
                href="https://athlocalwebstudio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                AthLocalWebStudio
              </a>
            </div>

          </div>

          <nav className={styles.legalLinks} aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </nav>

          <div
            className={styles.languages}
            aria-label="Available languages"
          >
            <span className={styles.languageActive}>EN</span>
            <span>GR</span>
            <span>RU</span>
          </div>

        </div>

      </div>
    </footer>
  );
}