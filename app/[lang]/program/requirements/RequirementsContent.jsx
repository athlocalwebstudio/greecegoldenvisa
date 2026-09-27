"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import {
  ArrowRight,
  Check,
  MapPin,
  Building2,
  Home,
  Landmark,
  ShieldCheck,
  FileCheck2,
  CircleHelp,
} from "lucide-react";

import styles from "./requirements.module.css";

const investmentRoutes = [
  {
    number: "01",
    amount: "€250K",
    key: "special",
    icon: Landmark,
    featured: false,
  },
  {
    number: "02",
    amount: "€400K",
    key: "standard",
    icon: Home,
    featured: false,
  },
  {
    number: "03",
    amount: "€800K",
    key: "highDemand",
    icon: Building2,
    featured: true,
  },
];

const highDemandAreas = [
  "attica",
  "thessaloniki",
  "mykonos",
  "santorini",
  "islands",
];

const propertyRequirements = [
  {
    number: "01",
    key: "oneProperty",
  },
  {
    number: "02",
    key: "minimumArea",
  },
  {
    number: "03",
    key: "ownership",
  },
  {
    number: "04",
    key: "payment",
  },
];

const specialRoutes = [
  {
    number: "01",
    key: "changeOfUse",
    icon: Building2,
  },
  {
    number: "02",
    key: "listedBuildings",
    icon: Landmark,
  },
];

const checks = [
  {
    number: "01",
    key: "location",
  },
  {
    number: "02",
    key: "propertyType",
  },
  {
    number: "03",
    key: "transaction",
  },
  {
    number: "04",
    key: "technicalStatus",
  },
];

const faqs = [
  "minimumInvestment",
  "eightHundredAreas",
  "combineProperties",
  "twoHundedFiftyQualification",
  "additionalCosts",
];

export default function RequirementsContent() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      {/* =========================================
          INTRO
      ========================================= */}

      <section className={styles.hero}>
        <div className={styles.heroBackground} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              {t("programRequirements.hero.eyebrow")}
            </div>

            <h1>
              {t("programRequirements.hero.titleLineOne")}
              <br />
              <em>{t("programRequirements.hero.titleLineTwo")}</em>
            </h1>

            <p>{t("programRequirements.hero.description")}</p>
          </div>

          <div className={styles.heroMeta}>
            <span>{t("programRequirements.hero.meta.program")}</span>
            <strong>{t("programRequirements.hero.meta.investment")}</strong>
            <span>{t("programRequirements.hero.meta.greece")}</span>
          </div>
        </div>
      </section>

      {/* =========================================
          INVESTMENT ROUTES
      ========================================= */}

      <section className={styles.routesSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.sectionLabel}>
                {t("programRequirements.routes.label")}
              </div>

              <h2>
                {t("programRequirements.routes.titleLineOne")}
                <br />
                <span>{t("programRequirements.routes.titleLineTwo")}</span>
              </h2>
            </div>

            <p>{t("programRequirements.routes.description")}</p>
          </div>

          <div className={styles.routeGrid}>
            {investmentRoutes.map((route) => {
              const Icon = route.icon;

              return (
                <article
                  className={`${styles.routeCard} ${
                    route.featured ? styles.routeCardFeatured : ""
                  }`}
                  key={route.number}
                >
                  <div className={styles.routeTop}>
                    <span>{route.number}</span>

                    <div className={styles.routeIcon}>
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                  </div>

                  <div className={styles.routeAmount}>{route.amount}</div>

                  <h3>
                    {t(`programRequirements.routes.cards.${route.key}.title`)}
                  </h3>

                  <p>
                    {t(`programRequirements.routes.cards.${route.key}.description`)}
                  </p>

                  <div className={styles.routeBottom}>
                    <span>
                      {route.featured
                        ? t("programRequirements.routes.featuredLabel")
                        : t("programRequirements.routes.standardLabel")}
                    </span>

                    <ArrowRight size={16} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          €800K LOCATIONS
      ========================================= */}

      <section className={styles.locationSection}>
        <div className={styles.container}>
          <div className={styles.locationCard}>
            <div className={styles.locationMain}>
              <div className={styles.sectionLabel}>
                {t("programRequirements.locations.label")}
              </div>

              <h2>
                {t("programRequirements.locations.titleLineOne")}
                <br />
                <span>
                  {t("programRequirements.locations.titleLineTwo")}
                </span>
              </h2>

              <p>{t("programRequirements.locations.description")}</p>
            </div>

            <div className={styles.locationList}>
              {highDemandAreas.map((area, index) => (
                <div
                  className={styles.locationItem}
                  key={area}
                >
                  <span>0{index + 1}</span>

                  <div>
                    <MapPin size={15} />
                    <strong>
                      {t(`programRequirements.locations.areas.${area}`)}
                    </strong>
                  </div>
                </div>
              ))}

              <div className={styles.locationAmount}>
                <span>
                  {t("programRequirements.locations.minimumLabel")}
                </span>
                <strong>€800,000</strong>
              </div>
            </div>
          </div>

          <div className={styles.locationNote}>
            <ShieldCheck size={17} />

            <p>{t("programRequirements.locations.note")}</p>
          </div>
        </div>
      </section>

      {/* =========================================
          PROPERTY REQUIREMENTS
      ========================================= */}

      <section className={styles.propertySection}>
        <div className={styles.container}>
          <div className={styles.propertyHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("programRequirements.property.label")}
              </div>

              <h2>
                {t("programRequirements.property.titleLineOne")}
                <br />
                <span>
                  {t("programRequirements.property.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>{t("programRequirements.property.description")}</p>
          </div>

          <div className={styles.requirementList}>
            {propertyRequirements.map((requirement) => (
              <article
                className={styles.requirementItem}
                key={requirement.number}
              >
                <span className={styles.requirementNumber}>
                  {requirement.number}
                </span>

                <div className={styles.requirementContent}>
                  <h3>
                    {t(
                      `programRequirements.property.items.${requirement.key}.title`
                    )}
                  </h3>

                  <p>
                    {t(
                      `programRequirements.property.items.${requirement.key}.text`
                    )}
                  </p>
                </div>

                <Check
                  className={styles.requirementCheck}
                  size={17}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SPECIAL €250K ROUTES
      ========================================= */}

      <section className={styles.specialSection}>
        <div className={styles.container}>
          <div className={styles.specialHeader}>
            <div className={styles.sectionLabel}>
              {t("programRequirements.special.label")}
            </div>

            <h2>
              {t("programRequirements.special.titleLineOne")}
              <br />
              <span>
                {t("programRequirements.special.titleLineTwo")}
              </span>
            </h2>

            <p>{t("programRequirements.special.description")}</p>
          </div>

          <div className={styles.specialGrid}>
            {specialRoutes.map((route) => {
              const Icon = route.icon;

              return (
                <article
                  className={styles.specialCard}
                  key={route.number}
                >
                  <div className={styles.specialTop}>
                    <span>{route.number}</span>

                    <div className={styles.specialIcon}>
                      <Icon size={21} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3>
                    {t(
                      `programRequirements.special.cards.${route.key}.title`
                    )}
                  </h3>

                  <p>
                    {t(
                      `programRequirements.special.cards.${route.key}.text`
                    )}
                  </p>

                  <div className={styles.specialTag}>
                    {t("programRequirements.special.routeTag")}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          INVESTOR CHECKLIST
      ========================================= */}

      <section className={styles.checkSection}>
        <div className={styles.container}>
          <div className={styles.checkGrid}>
            <div className={styles.checkIntro}>
              <div className={styles.sectionLabel}>
                {t("programRequirements.checklist.label")}
              </div>

              <h2>
                {t("programRequirements.checklist.titleLineOne")}
                <br />
                <span>
                  {t("programRequirements.checklist.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("programRequirements.checklist.description")}
              </p>
            </div>

            <div className={styles.checkList}>
              {checks.map((check) => (
                <div
                  className={styles.checkItem}
                  key={check.number}
                >
                  <span>{check.number}</span>

                  <div>
                    <h3>
                      {t(
                        `programRequirements.checklist.items.${check.key}.title`
                      )}
                    </h3>

                    <p>
                      {t(
                        `programRequirements.checklist.items.${check.key}.text`
                      )}
                    </p>
                  </div>

                  <ArrowRight size={16} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FAQ
      ========================================= */}

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIntro}>
              <div className={styles.sectionLabel}>
                {t("programRequirements.faq.label")}
              </div>

              <h2>
                {t("programRequirements.faq.titleLineOne")}
                <br />
                <span>
                  {t("programRequirements.faq.titleLineTwo")}
                </span>
              </h2>

              <p>{t("programRequirements.faq.description")}</p>

              <LocalizedLink
                href="/program/eligibility"
                className={styles.outlineButton}
              >
                {t("programRequirements.faq.button")}
                <ArrowRight size={16} />
              </LocalizedLink>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details
                  className={styles.faqItem}
                  key={faq}
                >
                  <summary>
                    <span className={styles.faqNumber}>
                      0{index + 1}
                    </span>

                    <span className={styles.faqQuestion}>
                      {t(
                        `programRequirements.faq.items.${faq}.question`
                      )}
                    </span>

                    <CircleHelp
                      className={styles.faqIcon}
                      size={18}
                    />
                  </summary>

                  <div className={styles.answer}>
                    <p>
                      {t(
                        `programRequirements.faq.items.${faq}.answer`
                      )}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PROPERTY REVIEW CTA
      ========================================= */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <FileCheck2 size={24} strokeWidth={1.5} />
            </div>

            <div className={styles.ctaContent}>
              <div className={styles.sectionLabel}>
                {t("programRequirements.cta.label")}
              </div>

              <h2>
                {t("programRequirements.cta.titleLineOne")}
                <br />
                <span>
                  {t("programRequirements.cta.titleLineTwo")}
                </span>
              </h2>

              <p>{t("programRequirements.cta.description")}</p>
            </div>

            <LocalizedLink
              href="/team/contact"
              className={styles.ctaButton}
            >
              {t("programRequirements.cta.button")}
              <ArrowRight size={17} />
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* =========================================
          LEGAL NOTE
      ========================================= */}

      <section className={styles.legalSection}>
        <div className={styles.container}>
          <div className={styles.legalInner}>
            <ShieldCheck size={17} />

            <p>
              <strong>
                {t("programRequirements.legal.title")}
              </strong>{" "}
              {t("programRequirements.legal.text")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}