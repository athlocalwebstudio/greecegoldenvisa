"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Globe2,
  Home,
  Landmark,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";

import styles from "./journey.module.css";

const journeySteps = [
  {
    number: "01",
    key: "strategy",
    icon: UserCheck,
  },
  {
    number: "02",
    key: "investment",
    icon: Search,
  },
  {
    number: "03",
    key: "dueDiligence",
    icon: ClipboardCheck,
    featured: true,
  },
  {
    number: "04",
    key: "transaction",
    icon: FileCheck2,
  },
  {
    number: "05",
    key: "application",
    icon: FileText,
  },
  {
    number: "06",
    key: "residence",
    icon: ShieldCheck,
  },
];

const decisionPoints = ["route", "property", "transaction", "application"];

const responsibilities = ["yourRole", "ourRole"];

const team = [
  {
    number: "01",
    key: "civilEngineer",
    icon: Home,
  },
  {
    number: "02",
    key: "lawyer",
    icon: ShieldCheck,
  },
  {
    number: "03",
    key: "notary",
    icon: FileText,
  },
  {
    number: "04",
    key: "accountant",
    icon: WalletCards,
  },
];

const delays = [
  {
    number: "01",
    key: "documentation",
    icon: FileText,
  },
  {
    number: "02",
    key: "property",
    icon: Home,
  },
  {
    number: "03",
    key: "transaction",
    icon: Landmark,
  },
  {
    number: "04",
    key: "administration",
    icon: Globe2,
  },
];

const faqs = [
  "choosePropertyFirst",
  "beforePurchase",
  "technicalDueDiligence",
  "whoIsInvolved",
  "applicationTimeline",
  "purchaseGuarantee",
];

export default function JourneyContent() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      {/* =========================================
          HERO
      ========================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroLine} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              {t("programJourney.hero.eyebrow")}
            </div>

            <h1>
              {t("programJourney.hero.titleLineOne")}
              <br />
              <em>{t("programJourney.hero.titleLineTwo")}</em>
            </h1>

            <p>{t("programJourney.hero.description")}</p>

            <div className={styles.heroActions}>
              <a href="#journey" className={styles.primaryButton}>
                {t("programJourney.hero.primaryButton")}
                <ArrowDown size={16} />
              </a>

              <LocalizedLink
                href="/program/eligibility"
                className={styles.secondaryButton}
              >
                {t("programJourney.hero.secondaryButton")}
              </LocalizedLink>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>{t("programJourney.hero.meta.program")}</span>
            <strong>{t("programJourney.hero.meta.application")}</strong>
            <span>{t("programJourney.hero.meta.journey")}</span>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <div className={styles.sectionLabel}>
                {t("programJourney.intro.label")}
              </div>

              <h2>
                {t("programJourney.intro.titleLineOne")}
                <br />
                <span>{t("programJourney.intro.titleLineTwo")}</span>
              </h2>
            </div>

            <div className={styles.introCopy}>
              <p>{t("programJourney.intro.paragraphOne")}</p>

              <p>{t("programJourney.intro.paragraphTwo")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          JOURNEY MAP
      ========================================= */}

      <section className={styles.journeySection} id="journey">
        <div className={styles.container}>
          <div className={styles.journeyHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("programJourney.journey.label")}
              </div>

              <h2>
                {t("programJourney.journey.titleLineOne")}
                <br />
                <span>{t("programJourney.journey.titleLineTwo")}</span>
              </h2>
            </div>

            <p>{t("programJourney.journey.description")}</p>
          </div>

          <div className={styles.journeyTrack}>
            <div className={styles.trackLine} />

            {journeySteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className={`${styles.journeyStep} ${
                    step.featured ? styles.journeyStepFeatured : ""
                  }`}
                  key={step.number}
                >
                  <div className={styles.stepMarker}>
                    <span>{step.number}</span>
                  </div>

                  <div className={styles.stepContent}>
                    <div className={styles.stepTop}>
                      <div className={styles.stepLabel}>
                        {t(`programJourney.journey.steps.${step.key}.label`)}
                      </div>

                      <div className={styles.stepIcon}>
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3>
                      {t(`programJourney.journey.steps.${step.key}.title`)}
                    </h3>

                    <p>
                      {t(`programJourney.journey.steps.${step.key}.text`)}
                    </p>

                    <div className={styles.stepOutcome}>
                      <Check size={14} />
                      <span>
                        {t(`programJourney.journey.steps.${step.key}.outcome`)}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          DUE DILIGENCE
      ========================================= */}

      <section className={styles.dueDiligenceSection}>
        <div className={styles.container}>
          <div className={styles.dueDiligenceCard}>
            <div className={styles.dueDiligenceVisual}>
              <div className={styles.visualGrid} />

              <div className={styles.visualCenter}>
                <ClipboardCheck size={34} strokeWidth={1.3} />

                <span>{t("programJourney.dueDiligence.visual.label")}</span>
                <strong>
                  {t("programJourney.dueDiligence.visual.title")}
                </strong>
              </div>

              <div
                className={`${styles.visualNode} ${styles.nodeTop}`}
              >
                <ShieldCheck size={15} />
                <span>{t("programJourney.dueDiligence.nodes.program")}</span>
              </div>

              <div
                className={`${styles.visualNode} ${styles.nodeRight}`}
              >
                <Home size={15} />
                <span>{t("programJourney.dueDiligence.nodes.property")}</span>
              </div>

              <div
                className={`${styles.visualNode} ${styles.nodeBottom}`}
              >
                <FileText size={15} />
                <span>{t("programJourney.dueDiligence.nodes.documents")}</span>
              </div>

              <div
                className={`${styles.visualNode} ${styles.nodeLeft}`}
              >
                <Search size={15} />
                <span>{t("programJourney.dueDiligence.nodes.review")}</span>
              </div>
            </div>

            <div className={styles.dueDiligenceContent}>
              <div className={styles.sectionLabel}>
                {t("programJourney.dueDiligence.label")}
              </div>

              <h2>
                {t("programJourney.dueDiligence.titleLineOne")}
                <br />
                <span>{t("programJourney.dueDiligence.titleLineTwo")}</span>
              </h2>

              <p>{t("programJourney.dueDiligence.description")}</p>

              <div className={styles.checkList}>
                <div>
                  <Check size={15} />
                  <span>
                    {t("programJourney.dueDiligence.checks.technical")}
                  </span>
                </div>

                <div>
                  <Check size={15} />
                  <span>
                    {t("programJourney.dueDiligence.checks.ownership")}
                  </span>
                </div>

                <div>
                  <Check size={15} />
                  <span>
                    {t("programJourney.dueDiligence.checks.route")}
                  </span>
                </div>

                <div>
                  <Check size={15} />
                  <span>
                    {t("programJourney.dueDiligence.checks.documentation")}
                  </span>
                </div>
              </div>

              <p className={styles.dueNote}>
                {t("programJourney.dueDiligence.note")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          DECISION POINTS
      ========================================= */}

      <section className={styles.decisionsSection}>
        <div className={styles.container}>
          <div className={styles.decisionsHeader}>
            <div className={styles.sectionLabel}>
              {t("programJourney.decisions.label")}
            </div>

            <h2>
              {t("programJourney.decisions.titleLineOne")}
              <br />
              <span>{t("programJourney.decisions.titleLineTwo")}</span>
            </h2>

            <p>{t("programJourney.decisions.description")}</p>
          </div>

          <div className={styles.decisionGrid}>
            {decisionPoints.map((point, index) => (
              <article
                className={styles.decisionCard}
                key={point}
              >
                <span>0{index + 1}</span>

                <h3>
                  {t(`programJourney.decisions.items.${point}.title`)}
                </h3>

                <p>
                  {t(`programJourney.decisions.items.${point}.text`)}
                </p>

                <ArrowRight
                  className={styles.decisionArrow}
                  size={17}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          RESPONSIBILITIES
      ========================================= */}

      <section className={styles.responsibilitiesSection}>
        <div className={styles.container}>
          <div className={styles.responsibilitiesHeader}>
            <div className={styles.sectionLabel}>
              {t("programJourney.responsibilities.label")}
            </div>

            <h2>
              {t("programJourney.responsibilities.titleLineOne")}
              <br />
              <span>
                {t("programJourney.responsibilities.titleLineTwo")}
              </span>
            </h2>
          </div>

          <div className={styles.responsibilitiesGrid}>
            {responsibilities.map((group, index) => (
              <article
                className={`${styles.responsibilityCard} ${
                  index === 1 ? styles.responsibilityFeatured : ""
                }`}
                key={group}
              >
                <div className={styles.responsibilityTop}>
                  <span>0{index + 1}</span>
                  <strong>
                    {t(
                      `programJourney.responsibilities.groups.${group}.title`
                    )}
                  </strong>
                </div>

                <div className={styles.responsibilityList}>
                  {[
                    "itemOne",
                    "itemTwo",
                    "itemThree",
                    "itemFour",
                    "itemFive",
                  ].map((item) => (
                    <div key={item}>
                      <Check size={15} />
                      <span>
                        {t(
                          `programJourney.responsibilities.groups.${group}.items.${item}`
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          TEAM
      ========================================= */}

      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.teamHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("programJourney.team.label")}
              </div>

              <h2>
                {t("programJourney.team.titleLineOne")}
                <br />
                <span>{t("programJourney.team.titleLineTwo")}</span>
              </h2>
            </div>

            <p>{t("programJourney.team.description")}</p>
          </div>

          <div className={styles.teamLayout}>
            <div className={styles.teamCenter}>
              <div className={styles.teamCenterIcon}>
                <Users size={28} strokeWidth={1.4} />
              </div>

              <span>{t("programJourney.team.center.label")}</span>
              <strong>{t("programJourney.team.center.title")}</strong>
            </div>

            <div className={styles.teamGrid}>
              {team.map((member) => {
                const Icon = member.icon;

                return (
                  <article
                    className={styles.teamCard}
                    key={member.number}
                  >
                    <div className={styles.teamCardTop}>
                      <span>{member.number}</span>

                      <Icon size={19} strokeWidth={1.5} />
                    </div>

                    <h3>
                      {t(`programJourney.team.members.${member.key}.title`)}
                    </h3>

                    <p>
                      {t(`programJourney.team.members.${member.key}.text`)}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          DELAYS
      ========================================= */}

      <section className={styles.delaysSection}>
        <div className={styles.container}>
          <div className={styles.delaysHeader}>
            <div className={styles.sectionLabel}>
              {t("programJourney.delays.label")}
            </div>

            <h2>
              {t("programJourney.delays.titleLineOne")}
              <br />
              <span>{t("programJourney.delays.titleLineTwo")}</span>
            </h2>

            <p>{t("programJourney.delays.description")}</p>
          </div>

          <div className={styles.delayGrid}>
            {delays.map((delay) => {
              const Icon = delay.icon;

              return (
                <article
                  className={styles.delayCard}
                  key={delay.number}
                >
                  <div className={styles.delayTop}>
                    <span>{delay.number}</span>

                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <h3>
                    {t(`programJourney.delays.items.${delay.key}.title`)}
                  </h3>

                  <p>
                    {t(`programJourney.delays.items.${delay.key}.text`)}
                  </p>
                </article>
              );
            })}
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
                {t("programJourney.faq.label")}
              </div>

              <h2>
                {t("programJourney.faq.titleLineOne")}
                <br />
                <span>{t("programJourney.faq.titleLineTwo")}</span>
              </h2>

              <p>{t("programJourney.faq.description")}</p>
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
                      {t(`programJourney.faq.items.${faq}.question`)}
                    </span>

                    <ArrowDown
                      className={styles.faqIcon}
                      size={17}
                    />
                  </summary>

                  <div className={styles.answer}>
                    <p>
                      {t(`programJourney.faq.items.${faq}.answer`)}
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
                {t("programJourney.cta.label")}
              </div>

              <h2>
                {t("programJourney.cta.titleLineOne")}
                <br />
                <span>{t("programJourney.cta.titleLineTwo")}</span>
              </h2>

              <p>{t("programJourney.cta.description")}</p>
            </div>

            <LocalizedLink
              href="/team/contact"
              className={styles.ctaButton}
            >
              {t("programJourney.cta.button")}
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
              <strong>{t("programJourney.legal.title")}</strong>{" "}
              {t("programJourney.legal.text")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}