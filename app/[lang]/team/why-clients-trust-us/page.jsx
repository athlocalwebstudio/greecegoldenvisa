"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Compass,
  FileCheck2,
  Globe2,
  HeartHandshake,
  Languages,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import styles from "./page.module.css";

const trustPillars = [
  {
    number: "01",
    icon: ShieldCheck,
    eyebrowKey: "whyClientsTrustUs.pillars.01.eyebrow",
    titleKey: "whyClientsTrustUs.pillars.01.title",
    textKey: "whyClientsTrustUs.pillars.01.text",
    points: [
      "whyClientsTrustUs.pillars.01.points.0",
      "whyClientsTrustUs.pillars.01.points.1",
      "whyClientsTrustUs.pillars.01.points.2",
      "whyClientsTrustUs.pillars.01.points.3",
    ],
  },
  {
    number: "02",
    icon: Sparkles,
    eyebrowKey: "whyClientsTrustUs.pillars.02.eyebrow",
    titleKey: "whyClientsTrustUs.pillars.02.title",
    textKey: "whyClientsTrustUs.pillars.02.text",
    points: [
      "whyClientsTrustUs.pillars.02.points.0",
      "whyClientsTrustUs.pillars.02.points.1",
      "whyClientsTrustUs.pillars.02.points.2",
      "whyClientsTrustUs.pillars.02.points.3",
    ],
  },
  {
    number: "03",
    icon: HeartHandshake,
    eyebrowKey: "whyClientsTrustUs.pillars.03.eyebrow",
    titleKey: "whyClientsTrustUs.pillars.03.title",
    textKey: "whyClientsTrustUs.pillars.03.text",
    points: [
      "whyClientsTrustUs.pillars.03.points.0",
      "whyClientsTrustUs.pillars.03.points.1",
      "whyClientsTrustUs.pillars.03.points.2",
      "whyClientsTrustUs.pillars.03.points.3",
    ],
  },
  {
    number: "04",
    icon: MapPin,
    eyebrowKey: "whyClientsTrustUs.pillars.04.eyebrow",
    titleKey: "whyClientsTrustUs.pillars.04.title",
    textKey: "whyClientsTrustUs.pillars.04.text",
    points: [
      "whyClientsTrustUs.pillars.04.points.0",
      "whyClientsTrustUs.pillars.04.points.1",
      "whyClientsTrustUs.pillars.04.points.2",
      "whyClientsTrustUs.pillars.04.points.3",
    ],
  },
];

const trustStandards = [
  {
    icon: FileCheck2,
    titleKey: "whyClientsTrustUs.standards.technical.title",
    textKey: "whyClientsTrustUs.standards.technical.text",
  },
  {
    icon: Users,
    titleKey: "whyClientsTrustUs.standards.professionals.title",
    textKey: "whyClientsTrustUs.standards.professionals.text",
  },
  {
    icon: Globe2,
    titleKey: "whyClientsTrustUs.standards.communication.title",
    textKey: "whyClientsTrustUs.standards.communication.text",
  },
  {
    icon: HeartHandshake,
    titleKey: "whyClientsTrustUs.standards.human.title",
    textKey: "whyClientsTrustUs.standards.human.text",
  },
];

const investorPromises = [
  "whyClientsTrustUs.promises.0",
  "whyClientsTrustUs.promises.1",
  "whyClientsTrustUs.promises.2",
  "whyClientsTrustUs.promises.3",
  "whyClientsTrustUs.promises.4",
];

const trustSteps = [
  {
    number: "01",
    titleKey: "whyClientsTrustUs.steps.01.title",
    textKey: "whyClientsTrustUs.steps.01.text",
  },
  {
    number: "02",
    titleKey: "whyClientsTrustUs.steps.02.title",
    textKey: "whyClientsTrustUs.steps.02.text",
  },
  {
    number: "03",
    titleKey: "whyClientsTrustUs.steps.03.title",
    textKey: "whyClientsTrustUs.steps.03.text",
  },
  {
    number: "04",
    titleKey: "whyClientsTrustUs.steps.04.title",
    textKey: "whyClientsTrustUs.steps.04.text",
  },
];

const faqs = [
  {
    questionKey: "whyClientsTrustUs.faq.01.question",
    answerKey: "whyClientsTrustUs.faq.01.answer",
  },
  {
    questionKey: "whyClientsTrustUs.faq.02.question",
    answerKey: "whyClientsTrustUs.faq.02.answer",
  },
  {
    questionKey: "whyClientsTrustUs.faq.03.question",
    answerKey: "whyClientsTrustUs.faq.03.answer",
  },
  {
    questionKey: "whyClientsTrustUs.faq.04.question",
    answerKey: "whyClientsTrustUs.faq.04.answer",
  },
];

function ArrowIcon() {
  return <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />;
}

export default function WhyClientsTrustUsPage() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              {t("whyClientsTrustUs.hero.eyebrow")}
            </div>

            <h1>
              {t("whyClientsTrustUs.hero.titleLine1")}
              <br />
              <em>{t("whyClientsTrustUs.hero.titleEmphasis")}</em>
              <br />
              {t("whyClientsTrustUs.hero.titleLine3")}
            </h1>

            <p>{t("whyClientsTrustUs.hero.description")}</p>

            <div className={styles.heroActions}>
              <LocalizedLink
                href="/team/contact"
                className={styles.primaryButton}
              >
                {t("whyClientsTrustUs.hero.primaryButton")}
                <ArrowIcon />
              </LocalizedLink>

              <LocalizedLink
                href="/investor-guide/investor-handbook"
                className={styles.secondaryButton}
              >
                {t("whyClientsTrustUs.hero.secondaryButton")}
              </LocalizedLink>
            </div>
          </div>

          <div className={styles.heroSide}>
            <div className={styles.heroSideTop}>
              <Compass size={20} strokeWidth={1.4} />
              <span>{t("whyClientsTrustUs.hero.framework")}</span>
            </div>

            <div className={styles.heroCompass}>
              <div className={styles.compassCircle}>
                <div className={styles.compassLineHorizontal} />
                <div className={styles.compassLineVertical} />
                <div className={styles.compassCenter}>
                  <span>{t("whyClientsTrustUs.hero.compass.your")}</span>
                  <strong>
                    {t("whyClientsTrustUs.hero.compass.investment")}
                  </strong>
                </div>

                <span className={`${styles.compassPoint} ${styles.north}`}>
                  {t("whyClientsTrustUs.hero.compass.expertise")}
                </span>

                <span className={`${styles.compassPoint} ${styles.east}`}>
                  {t("whyClientsTrustUs.hero.compass.strategy")}
                </span>

                <span className={`${styles.compassPoint} ${styles.south}`}>
                  {t("whyClientsTrustUs.hero.compass.guidance")}
                </span>

                <span className={`${styles.compassPoint} ${styles.west}`}>
                  {t("whyClientsTrustUs.hero.compass.local")}
                </span>
              </div>
            </div>

            <div className={styles.heroSideBottom}>
              <strong>01 — 04</strong>
              <span>{t("whyClientsTrustUs.hero.fourPrinciples")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.sectionLabel}>
                <span />
                {t("whyClientsTrustUs.intro.label")}
              </div>

              <h2>
                {t("whyClientsTrustUs.intro.titleLine1")}
                <br />
                <span>{t("whyClientsTrustUs.intro.titleLine2")}</span>
              </h2>
            </div>

            <p>{t("whyClientsTrustUs.intro.description")}</p>
          </div>

          <div className={styles.trustStatement}>
            <div className={styles.statementMark}>"</div>

            <div className={styles.statementBody}>
              <p>{t("whyClientsTrustUs.statement.quote")}</p>

              <div className={styles.statementAuthor}>
                <span />
                <div>
                  <strong>Svetlana Novikova</strong>
                  <small>
                    {t("whyClientsTrustUs.statement.authorRole")}
                  </small>
                </div>
              </div>
            </div>

            <div className={styles.statementIndex}>
              {t("whyClientsTrustUs.statement.index")}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST PILLARS
      ========================================================= */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.pillarsHeader}>
            <div>
              <div className={styles.sectionLabel}>
                <span />
                {t("whyClientsTrustUs.pillarsHeader.label")}
              </div>

              <h2>
                {t("whyClientsTrustUs.pillarsHeader.titleLine1")}
                <br />
                <span>{t("whyClientsTrustUs.pillarsHeader.titleLine2")}</span>
              </h2>
            </div>

            <p>{t("whyClientsTrustUs.pillarsHeader.description")}</p>
          </div>

          <div className={styles.pillarGrid}>
            {trustPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  className={`${styles.pillarCard} ${
                    pillar.number === "02" ? styles.pillarCardBlue : ""
                  }`}
                  key={pillar.number}
                >
                  <div className={styles.pillarTop}>
                    <span>{pillar.number}</span>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div className={styles.pillarContent}>
                    <strong>{t(pillar.eyebrowKey)}</strong>

                    <h3>{t(pillar.titleKey)}</h3>

                    <p>{t(pillar.textKey)}</p>

                    <ul>
                      {pillar.points.map((point) => (
                        <li key={point}>
                          <Check size={13} strokeWidth={2.2} />
                          <span>{t(point)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.pillarBottom}>
                    <span>{t("whyClientsTrustUs.pillars.whyItMatters")}</span>
                    <ArrowRight size={14} strokeWidth={1.7} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          STANDARDS
      ========================================================= */}
      <section className={styles.standardsSection}>
        <div className={styles.container}>
          <div className={styles.standardsGrid}>
            <div className={styles.standardsIntro}>
              <div className={styles.sectionLabel}>
                <span />
                {t("whyClientsTrustUs.standardsIntro.label")}
              </div>

              <h2>
                {t("whyClientsTrustUs.standardsIntro.titleLine1")}
                <br />
                <span>
                  {t("whyClientsTrustUs.standardsIntro.titleLine2")}
                </span>
              </h2>

              <p>{t("whyClientsTrustUs.standardsIntro.description")}</p>

              <LocalizedLink
                href="/investor-guide/application-checklist"
                className={styles.textLink}
              >
                {t("whyClientsTrustUs.standardsIntro.link")}
                <ArrowIcon />
              </LocalizedLink>
            </div>

            <div className={styles.standardList}>
              {trustStandards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article className={styles.standardItem} key={item.titleKey}>
                    <div className={styles.standardNumber}>
                      0{index + 1}
                    </div>

                    <div className={styles.standardIcon}>
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <div className={styles.standardText}>
                      <h3>{t(item.titleKey)}</h3>
                      <p>{t(item.textKey)}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRANSPARENCY / PROMISE
      ========================================================= */}
      <section className={styles.promiseSection}>
        <div className={styles.container}>
          <div className={styles.promiseCard}>
            <div className={styles.promiseTop}>
              <div className={styles.promiseLabel}>
                <ShieldCheck size={18} strokeWidth={1.5} />
                <span>{t("whyClientsTrustUs.promise.label")}</span>
              </div>

              <span className={styles.promiseIndex}>02 / 04</span>
            </div>

            <div className={styles.promiseGrid}>
              <div className={styles.promiseHeading}>
                <h2>
                  {t("whyClientsTrustUs.promise.titleLine1")}
                  <br />
                  <span>{t("whyClientsTrustUs.promise.titleLine2")}</span>
                </h2>

                <p>{t("whyClientsTrustUs.promise.description")}</p>
              </div>

              <div className={styles.promiseList}>
                {investorPromises.map((promise, index) => (
                  <div className={styles.promiseItem} key={promise}>
                    <span>0{index + 1}</span>
                    <p>{t(promise)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processHeader}>
            <div>
              <div className={styles.sectionLabel}>
                <span />
                {t("whyClientsTrustUs.process.label")}
              </div>

              <h2>
                {t("whyClientsTrustUs.process.titleLine1")}
                <br />
                <span>{t("whyClientsTrustUs.process.titleLine2")}</span>
              </h2>
            </div>

            <p>{t("whyClientsTrustUs.process.description")}</p>
          </div>

          <div className={styles.processTrack}>
            {trustSteps.map((step, index) => (
              <article className={styles.processStep} key={step.number}>
                <div className={styles.processTop}>
                  <span>{step.number}</span>

                  {index < trustSteps.length - 1 && (
                    <div className={styles.processLine} />
                  )}
                </div>

                <h3>{t(step.titleKey)}</h3>
                <p>{t(step.textKey)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SVETLANA
      ========================================================= */}
      <section className={styles.svetlanaSection}>
        <div className={styles.container}>
          <div className={styles.svetlanaCard}>
            <div className={styles.svetlanaImageWrap}>
              <div className={styles.svetlanaImageFrame} />

              <img
                src="/portait_image_for_website.jpg"
                alt={t("whyClientsTrustUs.svetlana.imageAlt")}
                className={styles.svetlanaImage}
              />

              <div className={styles.imageCaption}>
                <span>SVETLANA NOVIKOVA</span>
                <strong>{t("whyClientsTrustUs.svetlana.imageLocation")}</strong>
              </div>
            </div>

            <div className={styles.svetlanaContent}>
              <div className={styles.sectionLabel}>
                <span />
                {t("whyClientsTrustUs.svetlana.label")}
              </div>

              <h2>
                {t("whyClientsTrustUs.svetlana.titleLine1")}
                <br />
                <span>{t("whyClientsTrustUs.svetlana.titleLine2")}</span>
              </h2>

              <p>{t("whyClientsTrustUs.svetlana.paragraph1")}</p>

              <p>{t("whyClientsTrustUs.svetlana.paragraph2")}</p>

              <div className={styles.credentials}>
                <div>
                  <strong>01</strong>
                  <span>{t("whyClientsTrustUs.svetlana.credentials.01")}</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>{t("whyClientsTrustUs.svetlana.credentials.02")}</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>{t("whyClientsTrustUs.svetlana.credentials.03")}</span>
                </div>
              </div>

              <LocalizedLink
                href="/team/who-we-are"
                className={styles.svetlanaLink}
              >
                {t("whyClientsTrustUs.svetlana.link")}
                <ArrowIcon />
              </LocalizedLink>
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
                <span />
                {t("whyClientsTrustUs.faqIntro.label")}
              </div>

              <h2>
                {t("whyClientsTrustUs.faqIntro.titleLine1")}
                <br />
                <span>{t("whyClientsTrustUs.faqIntro.titleLine2")}</span>
              </h2>

              <p>{t("whyClientsTrustUs.faqIntro.description")}</p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details className={styles.faqItem} key={faq.questionKey}>
                  <summary>
                    <span className={styles.faqNumber}>0{index + 1}</span>

                    <span>{t(faq.questionKey)}</span>

                    <ChevronDown
                      className={styles.faqIcon}
                      size={17}
                      strokeWidth={1.7}
                    />
                  </summary>

                  <div className={styles.answer}>
                    <p>{t(faq.answerKey)}</p>
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
              <Languages size={21} strokeWidth={1.5} />
            </div>

            <div className={styles.ctaContent}>
              <div className={styles.sectionLabel}>
                <span />
                {t("whyClientsTrustUs.cta.label")}
              </div>

              <h2>
                {t("whyClientsTrustUs.cta.titleLine1")}
                <br />
                <span>{t("whyClientsTrustUs.cta.titleLine2")}</span>
              </h2>

              <p>{t("whyClientsTrustUs.cta.description")}</p>
            </div>

            <LocalizedLink
              href="/team/contact"
              className={styles.ctaButton}
            >
              {t("whyClientsTrustUs.cta.button")}
              <ArrowIcon />
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
            <span className={styles.legalIcon}>
              <Globe2 size={15} strokeWidth={1.5} />
            </span>

            <p>{t("whyClientsTrustUs.legal")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}