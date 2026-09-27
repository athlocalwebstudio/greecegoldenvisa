"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  HeartHandshake,
  Home,
  ShieldCheck,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

import styles from "./benefits.module.css";

const benefits = [
  {
    number: "01",
    icon: Home,
    key: "residence",
  },
  {
    number: "02",
    icon: Globe2,
    key: "schengen",
  },
  {
    number: "03",
    icon: Users,
    key: "family",
  },
  {
    number: "04",
    icon: ShieldCheck,
    key: "fiveYear",
  },
];

const familyMembers = [
  "spouse",
  "minorChildren",
  "dependentFamily",
  "ascendants",
];

const importantFacts = [
  "citizenship",
  "taxResidence",
  "employment",
];

const faqs = [
  "liveInGreece",
  "validity",
  "familyPermits",
  "travelEurope",
  "taxResident",
  "workInGreece",
];

export default function BenefitsContent() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>

      {/* =========================================
          HERO
      ========================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroContent}>

            <div className={styles.eyebrow}>
              <span />
              {t("programBenefits.hero.eyebrow")}
            </div>

            <h1>
              {t("programBenefits.hero.titleLineOne")}
              <br />
              <em>{t("programBenefits.hero.titleLineTwo")}</em>
            </h1>

            <p className={styles.heroText}>
              {t("programBenefits.hero.description")}
            </p>

          </div>
        </div>
      </section>


      {/* =========================================
          BENEFITS
      ========================================= */}

      <section className={styles.intro} id="benefits">
        <div className={styles.container}>

          <div className={styles.sectionHeader}>

            <div className={styles.sectionLabel}>
              {t("programBenefits.benefits.label")}
            </div>

            <h2>
              {t("programBenefits.benefits.titleLineOne")}
              <br />
              <span>
                {t("programBenefits.benefits.titleLineTwo")}
              </span>
            </h2>

            <p>
              {t("programBenefits.benefits.description")}
            </p>

          </div>


          <div className={styles.benefitGrid}>

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  className={styles.benefitCard}
                  key={benefit.number}
                >

                  <div className={styles.cardTop}>

                    <span className={styles.cardNumber}>
                      {benefit.number}
                    </span>

                    <div className={styles.cardIcon}>
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                      />
                    </div>

                  </div>


                  <div className={styles.cardBody}>

                    <h3>
                      {t(
                        `programBenefits.benefits.cards.${benefit.key}.title`
                      )}
                    </h3>

                    <p>
                      {t(
                        `programBenefits.benefits.cards.${benefit.key}.text`
                      )}
                    </p>

                  </div>


                  <div className={styles.cardArrow}>
                    <ArrowRight size={17} />
                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =========================================
          FAMILY
      ========================================= */}

      <section className={styles.familySection}>

        <div className={styles.container}>

          <div className={styles.familyGrid}>

            {/* Premium visual — no poster/card look */}

            <div className={styles.familyVisual}>

              <div className={styles.familyVisualLine} />

              <div className={styles.familyVisualTop}>
                <span>03</span>

                <span>
                  {t("programBenefits.family.visualLabel")}
                </span>
              </div>

              <div className={styles.familyVisualOrb}>

                <div className={styles.familyOrbInner}>
                  <HeartHandshake
                    size={42}
                    strokeWidth={1.2}
                  />
                </div>

              </div>

              <div className={styles.familyVisualText}>

                <span>
                  {t("programBenefits.family.visualTextLineOne")}
                </span>

                <strong>
                  {t("programBenefits.family.visualTextLineTwo")}
                </strong>

              </div>

              <div className={styles.familyVisualBottom}>

                <span>
                  {t(
                    "programBenefits.family.visualBottom.greece"
                  )}
                </span>

                <span>
                  {t(
                    "programBenefits.family.visualBottom.residence"
                  )}
                </span>

                <span>
                  {t(
                    "programBenefits.family.visualBottom.family"
                  )}
                </span>

              </div>

            </div>


            <div className={styles.familyContent}>

              <div className={styles.sectionLabel}>
                {t("programBenefits.family.label")}
              </div>

              <h2>
                {t("programBenefits.family.titleLineOne")}
                <br />
                <span>
                  {t("programBenefits.family.titleLineTwo")}
                </span>
              </h2>

              <p className={styles.familyLead}>
                {t("programBenefits.family.lead")}
              </p>


              <div className={styles.familyList}>

                {familyMembers.map((member, index) => (

                  <div
                    className={styles.familyItem}
                    key={member}
                  >

                    <span className={styles.familyIndex}>
                      0{index + 1}
                    </span>

                    <span>
                      {t(
                        `programBenefits.family.members.${member}`
                      )}
                    </span>

                    <Check size={16} />

                  </div>

                ))}

              </div>


              <p className={styles.smallNote}>
                {t("programBenefits.family.note")}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          TRAVEL
      ========================================= */}

      <section className={styles.travelSection}>

        <div className={styles.container}>

          <div className={styles.travelCard}>

            <div className={styles.travelLeft}>

              <div className={styles.sectionLabel}>
                {t("programBenefits.travel.label")}
              </div>

              <h2>
                {t("programBenefits.travel.titleLineOne")}
                <br />
                <span>
                  {t("programBenefits.travel.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("programBenefits.travel.description")}
              </p>


              <div className={styles.travelWarning}>

                <ShieldCheck size={18} />

                <span>
                  {t("programBenefits.travel.warning")}
                </span>

              </div>

            </div>


            <div className={styles.travelRight}>

              <div className={styles.travelCircle}>
                <Globe2
                  size={38}
                  strokeWidth={1.2}
                />
              </div>

              <div>

                <span className={styles.travelKicker}>
                  {t("programBenefits.travel.kicker")}
                </span>

                <strong>
                  {t("programBenefits.travel.destination")}
                </strong>

                <p>
                  {t("programBenefits.travel.note")}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          IMPORTANT DISTINCTIONS
      ========================================= */}

      <section className={styles.factsSection}>

        <div className={styles.container}>

          <div className={styles.factsHeader}>

            <div>

              <div className={styles.sectionLabel}>
                {t("programBenefits.facts.label")}
              </div>

              <h2>
                {t("programBenefits.facts.titleLineOne")}
                <br />
                <span>
                  {t("programBenefits.facts.titleLineTwo")}
                </span>
              </h2>

            </div>

            <p>
              {t("programBenefits.facts.description")}
            </p>

          </div>


          <div className={styles.factsGrid}>

            {importantFacts.map((fact, index) => (

              <article
                className={styles.fact}
                key={fact}
              >

                <span>
                  0{index + 1}
                </span>

                <div>

                  <h3>
                    {t(
                      `programBenefits.facts.items.${fact}.title`
                    )}
                  </h3>

                  <p>
                    {t(
                      `programBenefits.facts.items.${fact}.text`
                    )}
                  </p>

                </div>

              </article>

            ))}

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
                {t("programBenefits.faq.label")}
              </div>

              <h2>
                {t("programBenefits.faq.titleLineOne")}
                <br />
                <span>
                  {t("programBenefits.faq.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("programBenefits.faq.description")}
              </p>

              <LocalizedLink
                href="/team/contact"
                className={styles.outlineButton}
              >
                {t("programBenefits.faq.button")}
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

                    <span className={styles.question}>
                      {t(
                        `programBenefits.faq.items.${faq}.question`
                      )}
                    </span>

                    <ChevronDown
                      className={styles.faqIcon}
                      size={18}
                    />

                  </summary>


                  <div className={styles.answer}>

                    <p>
                      {t(
                        `programBenefits.faq.items.${faq}.answer`
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

            <div>

              <div className={styles.sectionLabel}>
                {t("programBenefits.cta.label")}
              </div>

              <h2>
                {t("programBenefits.cta.titleLineOne")}
                <br />
                <span>
                  {t("programBenefits.cta.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("programBenefits.cta.description")}
              </p>

            </div>


            <LocalizedLink
              href="/program/eligibility"
              className={styles.ctaButton}
            >
              {t("programBenefits.cta.button")}
              <ArrowRight size={18} />
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

            <BriefcaseBusiness size={18} />

            <p>
              <strong>
                {t("programBenefits.legal.title")}
              </strong>{" "}

              {t("programBenefits.legal.text")}
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}