"use client";

import { useLanguage } from "@/app/LanguageContext";
import LocalizedLink from "@/app/components/LocalizedLink";

import {
  ArrowRight,
  Building2,
  CircleHelp,
  FileCheck2,
  Hammer,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import styles from "./strategic-opportunities.module.css";

export default function StrategicPropertyClient() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span />
                {t("strategicOpportunities.hero.eyebrow")}
              </div>

              <h1>
                {t("strategicOpportunities.hero.titleLineOne")}
                <br />
                {t("strategicOpportunities.hero.titleLineTwo")}
                <br />
                <em>{t("strategicOpportunities.hero.titleLineThree")}</em>
              </h1>

              <p>{t("strategicOpportunities.hero.description")}</p>

              <div className={styles.heroActions}>
                <a
                  href="#categories"
                  className={styles.primaryButton}
                >
                  {t("strategicOpportunities.hero.primaryButton")}
                  <ArrowRight size={16} />
                </a>

                <LocalizedLink
                  href="/team/contact"
                  className={styles.secondaryButton}
                >
                  {t("strategicOpportunities.hero.secondaryButton")}
                </LocalizedLink>
              </div>
            </div>

            <div className={styles.heroAside}>
              <div className={styles.heroAsideLine} />

              <span>{t("strategicOpportunities.hero.aside.strategy")}</span>
              <strong>{t("strategicOpportunities.hero.aside.property")}</strong>
              <span>{t("strategicOpportunities.hero.aside.execution")}</span>

              <div className={styles.heroAsideNumber}>02</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POSITIONING
      ========================================================= */}

      <section className={styles.positionSection}>
        <div className={styles.container}>
          <div className={styles.positionHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("strategicOpportunities.positioning.label")}
              </div>

              <h2>
                {t("strategicOpportunities.positioning.titleLineOne")}
                <br />
                <span>
                  {t("strategicOpportunities.positioning.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>
              {t("strategicOpportunities.positioning.paragraphOne")}
              <br />
              <br />
              {t("strategicOpportunities.positioning.paragraphTwo")}
            </p>
          </div>

          <div className={styles.strategyGrid}>
            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>01</span>
                <Sparkles size={19} strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.cardLabel}>
                  {t("strategicOpportunities.positioning.cards.opportunity.label")}
                </span>

                <h3>
                  {t("strategicOpportunities.positioning.cards.opportunity.title")}
                </h3>

                <p>
                  {t("strategicOpportunities.positioning.cards.opportunity.text")}
                </p>
              </div>
            </article>

            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>02</span>
                <Hammer size={19} strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.cardLabel}>
                  {t("strategicOpportunities.positioning.cards.feasibility.label")}
                </span>

                <h3>
                  {t("strategicOpportunities.positioning.cards.feasibility.title")}
                </h3>

                <p>
                  {t("strategicOpportunities.positioning.cards.feasibility.text")}
                </p>
              </div>
            </article>

            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>03</span>
                <FileCheck2 size={19} strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.cardLabel}>
                  {t("strategicOpportunities.positioning.cards.documentation.label")}
                </span>

                <h3>
                  {t(
                    "strategicOpportunities.positioning.cards.documentation.title"
                  )}
                </h3>

                <p>
                  {t(
                    "strategicOpportunities.positioning.cards.documentation.text"
                  )}
                </p>
              </div>
            </article>

            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>04</span>
                <ShieldCheck size={19} strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.cardLabel}>
                  {t("strategicOpportunities.positioning.cards.route.label")}
                </span>

                <h3>
                  {t("strategicOpportunities.positioning.cards.route.title")}
                </h3>

                <p>
                  {t("strategicOpportunities.positioning.cards.route.text")}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          STRATEGIC CATEGORIES
      ========================================================= */}

      <section
        className={styles.categoriesSection}
        id="categories"
      >
        <div className={styles.container}>
          <div className={styles.categoriesHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("strategicOpportunities.categories.label")}
              </div>

              <h2>
                {t("strategicOpportunities.categories.titleLineOne")}
                <br />
                <span>
                  {t("strategicOpportunities.categories.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>
              {t("strategicOpportunities.categories.description")}
            </p>
          </div>

          <div className={styles.categoryGrid}>
            <article className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <Building2 size={21} strokeWidth={1.4} />
              </div>

              <span>
                {t("strategicOpportunities.categories.cards.conversion.label")}
              </span>

              <h3>
                {t("strategicOpportunities.categories.cards.conversion.titleLineOne")}
                <br />
                {t("strategicOpportunities.categories.cards.conversion.titleLineTwo")}
              </h3>

              <p>
                {t("strategicOpportunities.categories.cards.conversion.text")}
              </p>

              <div className={styles.categoryFoot}>
                <span>
                  {t(
                    "strategicOpportunities.categories.cards.conversion.footer"
                  )}
                </span>
                <ArrowRight size={15} />
              </div>
            </article>

            <article className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <Hammer size={21} strokeWidth={1.4} />
              </div>

              <span>
                {t("strategicOpportunities.categories.cards.restoration.label")}
              </span>

              <h3>
                {t(
                  "strategicOpportunities.categories.cards.restoration.titleLineOne"
                )}
                <br />
                {t(
                  "strategicOpportunities.categories.cards.restoration.titleLineTwo"
                )}
              </h3>

              <p>
                {t("strategicOpportunities.categories.cards.restoration.text")}
              </p>

              <div className={styles.categoryFoot}>
                <span>
                  {t(
                    "strategicOpportunities.categories.cards.restoration.footer"
                  )}
                </span>
                <ArrowRight size={15} />
              </div>
            </article>

            <article className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <MapPin size={21} strokeWidth={1.4} />
              </div>

              <span>
                {t("strategicOpportunities.categories.cards.location.label")}
              </span>

              <h3>
                {t(
                  "strategicOpportunities.categories.cards.location.titleLineOne"
                )}
                <br />
                {t(
                  "strategicOpportunities.categories.cards.location.titleLineTwo"
                )}
              </h3>

              <p>
                {t("strategicOpportunities.categories.cards.location.text")}
              </p>

              <div className={styles.categoryFoot}>
                <span>
                  {t(
                    "strategicOpportunities.categories.cards.location.footer"
                  )}
                </span>
                <ArrowRight size={15} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE ASSESS STRATEGIC ASSETS
      ========================================================= */}

      <section className={styles.assessmentSection}>
        <div className={styles.container}>
          <div className={styles.assessmentCard}>
            <div className={styles.assessmentIntro}>
              <div className={styles.sectionLabel}>
                {t("strategicOpportunities.assessment.label")}
              </div>

              <h2>
                {t("strategicOpportunities.assessment.titleLineOne")}
                <br />
                {t("strategicOpportunities.assessment.titleLineTwo")}{" "}
                <span>
                  {t("strategicOpportunities.assessment.titleHighlight")}
                </span>
              </h2>

              <p>
                {t("strategicOpportunities.assessment.description")}
              </p>
            </div>

            <div className={styles.assessmentList}>
              <div className={styles.assessmentItem}>
                <span>01</span>

                <div>
                  <h3>
                    {t("strategicOpportunities.assessment.items.asset.title")}
                  </h3>

                  <p>
                    {t("strategicOpportunities.assessment.items.asset.text")}
                  </p>
                </div>

                <MapPin size={18} />
              </div>

              <div className={styles.assessmentItem}>
                <span>02</span>

                <div>
                  <h3>
                    {t(
                      "strategicOpportunities.assessment.items.condition.title"
                    )}
                  </h3>

                  <p>
                    {t(
                      "strategicOpportunities.assessment.items.condition.text"
                    )}
                  </p>
                </div>

                <Hammer size={18} />
              </div>

              <div className={styles.assessmentItem}>
                <span>03</span>

                <div>
                  <h3>
                    {t(
                      "strategicOpportunities.assessment.items.documentation.title"
                    )}
                  </h3>

                  <p>
                    {t(
                      "strategicOpportunities.assessment.items.documentation.text"
                    )}
                  </p>
                </div>

                <FileCheck2 size={18} />
              </div>

              <div className={styles.assessmentItem}>
                <span>04</span>

                <div>
                  <h3>
                    {t("strategicOpportunities.assessment.items.route.title")}
                  </h3>

                  <p>
                    {t("strategicOpportunities.assessment.items.route.text")}
                  </p>
                </div>

                <ShieldCheck size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIntro}>
              <div className={styles.sectionLabel}>
                {t("strategicOpportunities.faq.label")}
              </div>

              <h2>
                {t("strategicOpportunities.faq.titleLineOne")}
                <br />
                <span>
                  {t("strategicOpportunities.faq.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("strategicOpportunities.faq.description")}
              </p>
            </div>

            <div className={styles.faqList}>
              {[
                "strategicOpportunity",
                "route250",
                "technicalChecks",
                "ownProperty",
              ].map((faqKey, index) => (
                <details
                  className={styles.faqItem}
                  key={faqKey}
                >
                  <summary>
                    <span className={styles.faqNumber}>
                      0{index + 1}
                    </span>

                    <span>
                      {t(
                        `strategicOpportunities.faq.items.${faqKey}.question`
                      )}
                    </span>

                    <CircleHelp
                      size={18}
                      className={styles.faqIcon}
                    />
                  </summary>

                  <div className={styles.answer}>
                    <p>
                      {t(
                        `strategicOpportunities.faq.items.${faqKey}.answer`
                      )}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <Sparkles size={23} strokeWidth={1.5} />
            </div>

            <div className={styles.ctaContent}>
              <div className={styles.sectionLabel}>
                {t("strategicOpportunities.cta.label")}
              </div>

              <h2>
                {t("strategicOpportunities.cta.titleLineOne")}
                <br />
                <span>
                  {t("strategicOpportunities.cta.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("strategicOpportunities.cta.description")}
              </p>
            </div>

            <LocalizedLink
              href="/team/contact"
              className={styles.ctaButton}
            >
              {t("strategicOpportunities.cta.button")}
              <ArrowRight size={16} />
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEGAL
      ========================================================= */}

      <section className={styles.legalSection}>
        <div className={styles.container}>
          <div className={styles.legalInner}>
            <ShieldCheck size={17} />

            <p>
              <strong>
                {t("strategicOpportunities.legal.title")}
              </strong>{" "}
              {t("strategicOpportunities.legal.text")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}