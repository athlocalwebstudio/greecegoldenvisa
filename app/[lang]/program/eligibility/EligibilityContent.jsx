"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import {
  ArrowRight,
  Check,
  CircleHelp,
  FileCheck2,
  Globe2,
  Home,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

import styles from "./eligibility.module.css";

const eligibilitySteps = [
  {
    number: "01",
    key: "thirdCountryNational",
    icon: Globe2,
  },
  {
    number: "02",
    key: "qualifyingInvestment",
    icon: WalletCards,
  },
  {
    number: "03",
    key: "eligibleProperty",
    icon: Home,
  },
  {
    number: "04",
    key: "requiredDocumentation",
    icon: FileCheck2,
  },
];

const faqs = [
  "whoCanApply",
  "needToLiveInGreece",
  "buyPropertyFirst",
  "family",
  "investmentGuarantee",
];

export default function EligibilityContent() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      {/* =========================================
          HERO
      ========================================= */}

      <section className={styles.hero}>
        <div className={styles.heroBackground} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              {t("programEligibility.hero.eyebrow")}
            </div>

            <h1>
              {t("programEligibility.hero.titleLineOne")}
              <br />
              <em>{t("programEligibility.hero.titleLineTwo")}</em>
            </h1>

            <p>{t("programEligibility.hero.description")}</p>

            <div className={styles.heroActions}>
              <a
                href="#eligibility-check"
                className={styles.primaryButton}
              >
                {t("programEligibility.hero.primaryButton")}
                <ArrowRight size={16} />
              </a>

              <LocalizedLink
                href="/program/requirements"
                className={styles.secondaryButton}
              >
                {t("programEligibility.hero.secondaryButton")}
              </LocalizedLink>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>{t("programEligibility.hero.meta.program")}</span>
            <strong>{t("programEligibility.hero.meta.eligibility")}</strong>
            <span>{t("programEligibility.hero.meta.greece")}</span>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO / CORE CONDITIONS
      ========================================= */}

      <section
        className={styles.conditionsSection}
        id="eligibility-check"
      >
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.sectionLabel}>
                {t("programEligibility.conditions.label")}
              </div>

              <h2>
                {t("programEligibility.conditions.titleLineOne")}
                <br />
                <span>
                  {t("programEligibility.conditions.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>{t("programEligibility.conditions.description")}</p>
          </div>

          <div className={styles.conditionGrid}>
            {eligibilitySteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className={styles.conditionCard}
                  key={step.number}
                >
                  <div className={styles.conditionTop}>
                    <span>{step.number}</span>

                    <div className={styles.conditionIcon}>
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                  </div>

                  <h3>
                    {t(
                      `programEligibility.conditions.steps.${step.key}.title`
                    )}
                  </h3>

                  <p>
                    {t(
                      `programEligibility.conditions.steps.${step.key}.description`
                    )}
                  </p>

                  <div className={styles.conditionBottom}>
                    <Check size={15} />
                    <span>
                      {t("programEligibility.conditions.factorLabel")}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          INVESTMENT CONNECTION
      ========================================= */}

      <section className={styles.investmentSection}>
        <div className={styles.container}>
          <div className={styles.investmentHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("programEligibility.investment.label")}
              </div>

              <h2>
                {t("programEligibility.investment.titleLineOne")}
                <br />
                <span>
                  {t("programEligibility.investment.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>{t("programEligibility.investment.description")}</p>
          </div>

          <div className={styles.routePreview}>
            <div className={styles.routePreviewItem}>
              <span>01</span>

              <div>
                <strong>€250K</strong>
                <p>
                  {t(
                    "programEligibility.investment.routes.special"
                  )}
                </p>
              </div>
            </div>

            <div className={styles.routePreviewItem}>
              <span>02</span>

              <div>
                <strong>€400K</strong>
                <p>
                  {t(
                    "programEligibility.investment.routes.standard"
                  )}
                </p>
              </div>
            </div>

            <div
              className={`${styles.routePreviewItem} ${styles.routePreviewFeatured}`}
            >
              <span>03</span>

              <div>
                <strong>€800K</strong>
                <p>
                  {t(
                    "programEligibility.investment.routes.highDemand"
                  )}
                </p>
              </div>
            </div>
          </div>

          <LocalizedLink
            href="/program/requirements"
            className={styles.textLink}
          >
            {t("programEligibility.investment.link")}
            <ArrowRight size={16} />
          </LocalizedLink>
        </div>
      </section>

      {/* =========================================
          FAMILY
      ========================================= */}

      <section className={styles.familySection}>
        <div className={styles.container}>
          <div className={styles.familyCard}>
            <div className={styles.familyIcon}>
              <Users size={23} strokeWidth={1.5} />
            </div>

            <div className={styles.familyContent}>
              <div className={styles.sectionLabel}>
                {t("programEligibility.family.label")}
              </div>

              <h2>
                {t("programEligibility.family.titleLineOne")}
                <br />
                <span>
                  {t("programEligibility.family.titleLineTwo")}
                </span>
              </h2>

              <p>{t("programEligibility.family.description")}</p>
            </div>

            <LocalizedLink
              href="/program/benefits"
              className={styles.familyButton}
            >
              {t("programEligibility.family.button")}
              <ArrowRight size={16} />
            </LocalizedLink>
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
                {t("programEligibility.faq.label")}
              </div>

              <h2>
                {t("programEligibility.faq.titleLineOne")}
                <br />
                <span>
                  {t("programEligibility.faq.titleLineTwo")}
                </span>
              </h2>

              <p>{t("programEligibility.faq.description")}</p>
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
                        `programEligibility.faq.items.${faq}.question`
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
                        `programEligibility.faq.items.${faq}.answer`
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
          CTA
      ========================================= */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>

            <div className={styles.ctaContent}>
              <div className={styles.sectionLabel}>
                {t("programEligibility.cta.label")}
              </div>

              <h2>
                {t("programEligibility.cta.titleLineOne")}
                <br />
                <span>
                  {t("programEligibility.cta.titleLineTwo")}
                </span>
              </h2>

              <p>{t("programEligibility.cta.description")}</p>
            </div>

            <LocalizedLink
              href="/team/contact"
              className={styles.ctaButton}
            >
              {t("programEligibility.cta.button")}
              <ArrowRight size={17} />
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* =========================================
          LEGAL
      ========================================= */}

      <section className={styles.legalSection}>
        <div className={styles.container}>
          <div className={styles.legalInner}>
            <ShieldCheck size={17} />

            <p>
              <strong>
                {t("programEligibility.legal.title")}
              </strong>{" "}
              {t("programEligibility.legal.text")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}