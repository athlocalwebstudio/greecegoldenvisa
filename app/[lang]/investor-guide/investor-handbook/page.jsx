"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import styles from "./page.module.css";

export default function InvestorHandbookPage() {
  const { t } = useLanguage();

  const routes = [
    {
      number: "01",
      amount: "€800K",
      title: t("investorHandbook.routes.items.higherThreshold.title"),
      description: t(
        "investorHandbook.routes.items.higherThreshold.description"
      ),
      note: t("investorHandbook.routes.items.higherThreshold.note"),
    },
    {
      number: "02",
      amount: "€400K",
      title: t("investorHandbook.routes.items.otherAreas.title"),
      description: t(
        "investorHandbook.routes.items.otherAreas.description"
      ),
      note: t("investorHandbook.routes.items.otherAreas.note"),
    },
    {
      number: "03",
      amount: "€250K",
      title: t("investorHandbook.routes.items.specificRoutes.title"),
      description: t(
        "investorHandbook.routes.items.specificRoutes.description"
      ),
      note: t("investorHandbook.routes.items.specificRoutes.note"),
    },
  ];

  const essentials = [
    {
      number: "01",
      title: t("investorHandbook.essentials.items.who.title"),
      text: t("investorHandbook.essentials.items.who.text"),
    },
    {
      number: "02",
      title: t("investorHandbook.essentials.items.routes.title"),
      text: t("investorHandbook.essentials.items.routes.text"),
    },
    {
      number: "03",
      title: t("investorHandbook.essentials.items.residence.title"),
      text: t("investorHandbook.essentials.items.residence.text"),
    },
    {
      number: "04",
      title: t("investorHandbook.essentials.items.dueDiligence.title"),
      text: t("investorHandbook.essentials.items.dueDiligence.text"),
    },
  ];

  const process = [
    {
      number: "01",
      title: t("investorHandbook.process.items.eligibility.title"),
      text: t("investorHandbook.process.items.eligibility.text"),
    },
    {
      number: "02",
      title: t("investorHandbook.process.items.strategy.title"),
      text: t("investorHandbook.process.items.strategy.text"),
    },
    {
      number: "03",
      title: t("investorHandbook.process.items.selection.title"),
      text: t("investorHandbook.process.items.selection.text"),
    },
    {
      number: "04",
      title: t("investorHandbook.process.items.dueDiligence.title"),
      text: t("investorHandbook.process.items.dueDiligence.text"),
    },
    {
      number: "05",
      title: t("investorHandbook.process.items.legal.title"),
      text: t("investorHandbook.process.items.legal.text"),
    },
    {
      number: "06",
      title: t("investorHandbook.process.items.application.title"),
      text: t("investorHandbook.process.items.application.text"),
    },
    {
      number: "07",
      title: t("investorHandbook.process.items.permit.title"),
      text: t("investorHandbook.process.items.permit.text"),
    },
  ];

  const propertyChecks = [
    t("investorHandbook.property.checks.ownership"),
    t("investorHandbook.property.checks.encumbrances"),
    t("investorHandbook.property.checks.planning"),
    t("investorHandbook.property.checks.use"),
    t("investorHandbook.property.checks.condition"),
    t("investorHandbook.property.checks.location"),
  ];

  const considerations = [
    t("investorHandbook.costs.items.acquisition"),
    t("investorHandbook.costs.items.taxes"),
    t("investorHandbook.costs.items.notarial"),
    t("investorHandbook.costs.items.dueDiligence"),
    t("investorHandbook.costs.items.application"),
    t("investorHandbook.costs.items.insurance"),
  ];

  const faqs = [
    {
      question: t("investorHandbook.faq.items.citizenship.question"),
      answer: t("investorHandbook.faq.items.citizenship.answer"),
    },
    {
      question: t("investorHandbook.faq.items.property.question"),
      answer: t("investorHandbook.faq.items.property.answer"),
    },
    {
      question: t("investorHandbook.faq.items.threshold.question"),
      answer: t("investorHandbook.faq.items.threshold.answer"),
    },
    {
      question: t("investorHandbook.faq.items.investment.question"),
      answer: t("investorHandbook.faq.items.investment.answer"),
    },
    {
      question: t("investorHandbook.faq.items.family.question"),
      answer: t("investorHandbook.faq.items.family.answer"),
    },
  ];

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              {t("investorHandbook.hero.eyebrow")}
            </span>

            <h1>
              {t("investorHandbook.hero.titleLineOne")}
              <span> {t("investorHandbook.hero.titleLineTwo")}</span>
            </h1>

            <p className={styles.heroText}>
              {t("investorHandbook.hero.description")}
            </p>

            <div className={styles.heroActions}>
              <a href="#handbook" className={styles.primaryButton}>
                {t("investorHandbook.hero.primaryButton")}
              </a>

              <LocalizedLink
                href="/program/eligibility"
                className={styles.secondaryButton}
              >
                {t("investorHandbook.hero.secondaryButton")}
              </LocalizedLink>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>{t("investorHandbook.hero.meta.guide")}</span>
            <span>{t("investorHandbook.hero.meta.country")}</span>
            <span>2026</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro} id="handbook">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              {t("investorHandbook.essentials.eyebrow")}
            </span>

            <h2>{t("investorHandbook.essentials.title")}</h2>

            <p>{t("investorHandbook.essentials.description")}</p>
          </div>

          <div className={styles.essentialsGrid}>
            {essentials.map((item) => (
              <article className={styles.essentialCard} key={item.number}>
                <span className={styles.cardNumber}>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT ROUTES */}
      <section className={styles.routesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              {t("investorHandbook.routes.eyebrow")}
            </span>

            <h2>{t("investorHandbook.routes.title")}</h2>

            <p>{t("investorHandbook.routes.description")}</p>
          </div>

          <div className={styles.routesGrid}>
            {routes.map((route) => (
              <article className={styles.routeCard} key={route.number}>
                <div className={styles.routeTop}>
                  <span>{route.number}</span>
                  <span>{t("investorHandbook.routes.qualifyingRoute")}</span>
                </div>

                <div className={styles.routeAmount}>{route.amount}</div>

                <h3>{route.title}</h3>

                <p>{route.description}</p>

                <div className={styles.routeNote}>{route.note}</div>
              </article>
            ))}
          </div>

          <div className={styles.legalNote}>
            <strong>{t("investorHandbook.routes.important")}</strong>{" "}
            {t("investorHandbook.routes.legalNote")}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className={styles.eligibilitySection}>
        <div className={styles.container}>
          <div className={styles.splitSection}>
            <div className={styles.splitIntro}>
              <span className={styles.eyebrow}>
                {t("investorHandbook.eligibility.eyebrow")}
              </span>

              <h2>{t("investorHandbook.eligibility.title")}</h2>

              <p>{t("investorHandbook.eligibility.description")}</p>

              <LocalizedLink
                href="/program/eligibility"
                className={styles.inlineLink}
              >
                {t("investorHandbook.eligibility.link")} <span>→</span>
              </LocalizedLink>
            </div>

            <div className={styles.checkList}>
              <div className={styles.checkItem}>
                <span>01</span>
                <div>
                  <h3>
                    {t("investorHandbook.eligibility.items.national.title")}
                  </h3>
                  <p>
                    {t("investorHandbook.eligibility.items.national.text")}
                  </p>
                </div>
              </div>

              <div className={styles.checkItem}>
                <span>02</span>
                <div>
                  <h3>
                    {t("investorHandbook.eligibility.items.investment.title")}
                  </h3>
                  <p>
                    {t("investorHandbook.eligibility.items.investment.text")}
                  </p>
                </div>
              </div>

              <div className={styles.checkItem}>
                <span>03</span>
                <div>
                  <h3>
                    {t("investorHandbook.eligibility.items.documentation.title")}
                  </h3>
                  <p>
                    {t("investorHandbook.eligibility.items.documentation.text")}
                  </p>
                </div>
              </div>

              <div className={styles.checkItem}>
                <span>04</span>
                <div>
                  <h3>
                    {t("investorHandbook.eligibility.items.application.title")}
                  </h3>
                  <p>
                    {t("investorHandbook.eligibility.items.application.text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENCE */}
      <section className={styles.residenceSection}>
        <div className={styles.container}>
          <div className={styles.residenceBox}>
            <div>
              <span className={styles.eyebrow}>
                {t("investorHandbook.residence.eyebrow")}
              </span>

              <h2>
                {t("investorHandbook.residence.titleLineOne")}
                <br />
                {t("investorHandbook.residence.titleLineTwo")}
              </h2>
            </div>

            <div className={styles.residenceText}>
              <p>{t("investorHandbook.residence.paragraphOne")}</p>

              <p>{t("investorHandbook.residence.paragraphTwo")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY */}
      <section className={styles.propertySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              {t("investorHandbook.property.eyebrow")}
            </span>

            <h2>
              {t("investorHandbook.property.titleLineOne")}
              <span> {t("investorHandbook.property.titleLineTwo")}</span>
            </h2>

            <p>{t("investorHandbook.property.description")}</p>
          </div>

          <div className={styles.propertyGrid}>
            <div className={styles.propertyStatement}>
              <span>{t("investorHandbook.property.statement.intro")}</span>

              <strong>
                {t("investorHandbook.property.statement.questionOne")}
              </strong>

              <span>{t("investorHandbook.property.statement.transition")}</span>

              <strong>
                {t("investorHandbook.property.statement.questionTwo")}
              </strong>
            </div>

            <div className={styles.propertyChecks}>
              {propertyChecks.map((item, index) => (
                <div className={styles.propertyCheck} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.advisorCallout}>
            <div>
              <span className={styles.eyebrow}>
                {t("investorHandbook.property.callout.eyebrow")}
              </span>

              <h3>{t("investorHandbook.property.callout.title")}</h3>
            </div>

            <p>{t("investorHandbook.property.callout.text")}</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              {t("investorHandbook.process.eyebrow")}
            </span>

            <h2>{t("investorHandbook.process.title")}</h2>

            <p>{t("investorHandbook.process.description")}</p>
          </div>

          <div className={styles.timeline}>
            {process.map((item) => (
              <div className={styles.timelineItem} key={item.number}>
                <div className={styles.timelineNumber}>{item.number}</div>

                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className={styles.familySection}>
        <div className={styles.container}>
          <div className={styles.familyGrid}>
            <div>
              <span className={styles.eyebrow}>
                {t("investorHandbook.family.eyebrow")}
              </span>

              <h2>
                {t("investorHandbook.family.titleLineOne")}
                <span> {t("investorHandbook.family.titleLineTwo")}</span>
              </h2>
            </div>

            <div>
              <p>{t("investorHandbook.family.description")}</p>

              <LocalizedLink
                href="/why-greece/family-and-future"
                className={styles.inlineLink}
              >
                {t("investorHandbook.family.link")} <span>→</span>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* COSTS */}
      <section className={styles.costSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              {t("investorHandbook.costs.eyebrow")}
            </span>

            <h2>{t("investorHandbook.costs.title")}</h2>

            <p>{t("investorHandbook.costs.description")}</p>
          </div>

          <div className={styles.costGrid}>
            {considerations.map((item, index) => (
              <div className={styles.costItem} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className={styles.costWarning}>
            <strong>{t("investorHandbook.costs.warning.title")}</strong>
            <p>{t("investorHandbook.costs.warning.text")}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              {t("investorHandbook.faq.eyebrow")}
            </span>

            <h2>{t("investorHandbook.faq.title")}</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details className={styles.faqItem} key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{faq.question}</strong>
                  <i>+</i>
                </summary>

                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className={styles.faqLinkWrapper}>
            <LocalizedLink
              href="/investor-guide/faq"
              className={styles.inlineLink}
            >
              {t("investorHandbook.faq.link")} <span>→</span>
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <span className={styles.eyebrow}>
              {t("investorHandbook.final.eyebrow")}
            </span>

            <h2>{t("investorHandbook.final.title")}</h2>

            <p>{t("investorHandbook.final.description")}</p>

            <div className={styles.heroActions}>
              <LocalizedLink
                href="/program/eligibility"
                className={styles.primaryButton}
              >
                {t("investorHandbook.final.primaryButton")}
              </LocalizedLink>

              <LocalizedLink
                href="/team/contact"
                className={styles.secondaryButton}
              >
                {t("investorHandbook.final.secondaryButton")}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className={styles.disclaimer}>
        <div className={styles.container}>
          <p>
            <strong>{t("investorHandbook.disclaimer.label")}</strong>{" "}
            {t("investorHandbook.disclaimer.text")}
          </p>

          <span>{t("investorHandbook.disclaimer.reviewed")}</span>
        </div>
      </section>
    </main>
  );
}