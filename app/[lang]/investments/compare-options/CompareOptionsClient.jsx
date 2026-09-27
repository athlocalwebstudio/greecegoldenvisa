"use client";

import { useState } from "react";
import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  FileCheck2,
  Home,
  Layers3,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import styles from "./compare-options.module.css";

const comparisonData = [
  {
    id: "property",
    number: "01",
    ownership: 5,
    simplicity: 4,
    flexibility: 3,
    diversification: 2,
    href: "/investments/ready-properties",
    translationKey: "property",
  },
  {
    id: "strategic",
    number: "02",
    ownership: 5,
    simplicity: 3,
    flexibility: 4,
    diversification: 3,
    href: "/investments/strategic-properties",
    translationKey: "strategic",
  },
  {
    id: "alternative",
    number: "03",
    ownership: 1,
    simplicity: 3,
    flexibility: 4,
    diversification: 5,
    href: "/investments/alternative-investments",
    translationKey: "alternative",
  },
];

const priorities = [
  {
    id: "ownership",
    icon: Home,
  },
  {
    id: "simplicity",
    icon: Layers3,
  },
  {
    id: "flexibility",
    icon: Sparkles,
  },
  {
    id: "diversification",
    icon: TrendingUp,
  },
];

const tradeOffs = [
  {
    id: "property",
    number: "01",
    icon: Home,
    translationKey: "property",
  },
  {
    id: "strategic",
    number: "02",
    icon: Target,
    translationKey: "strategic",
  },
  {
    id: "alternative",
    number: "03",
    icon: Layers3,
    translationKey: "alternative",
  },
];

const faqs = [
  "bestOption",
  "threshold",
  "advisor",
  "alternativeDueDiligence",
];

function ScoreDots({ score }) {
  return (
    <div
      className={styles.scoreDots}
      aria-label={`${score} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={
            index < score
              ? styles.scoreActive
              : styles.scoreInactive
          }
        />
      ))}
    </div>
  );
}

export default function CompareOptionsClient() {
  const { t } = useLanguage();

  const [activePriority, setActivePriority] =
    useState("ownership");

  const activePriorityData = priorities.find(
    (priority) => priority.id === activePriority
  );

  const getScore = (option) => {
    if (activePriority === "ownership") {
      return option.ownership;
    }

    if (activePriority === "simplicity") {
      return option.simplicity;
    }

    if (activePriority === "flexibility") {
      return option.flexibility;
    }

    return option.diversification;
  };

  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              {t("compareOptions.hero.eyebrow")}
            </div>

            <h1>
              {t("compareOptions.hero.titleLineOne")}
              <br />
              {t("compareOptions.hero.titleLineTwo")}{" "}
              <em>{t("compareOptions.hero.titleAccent")}</em>
            </h1>

            <p>
              {t("compareOptions.hero.description")}
            </p>

            <div className={styles.heroActions}>
              <a
                href="#compass"
                className={styles.primaryButton}
              >
                {t("compareOptions.hero.primaryButton")}
                <ArrowRight size={16} />
              </a>

              <LocalizedLink
                href="/team/contact"
                className={styles.secondaryButton}
              >
                {t("compareOptions.hero.secondaryButton")}
              </LocalizedLink>
            </div>
          </div>

          <div className={styles.heroSide}>
            <div className={styles.heroSideLine} />

            <span>
              {t("compareOptions.hero.side.investment")}
            </span>
            <strong>
              {t("compareOptions.hero.side.decision")}
            </strong>
            <span>
              {t("compareOptions.hero.side.framework")}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INVESTOR COMPASS
      ========================================================= */}

      <section
        className={styles.compassSection}
        id="compass"
      >
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.sectionLabel}>
                {t("compareOptions.compass.label")}
              </div>

              <h2>
                {t("compareOptions.compass.titleLineOne")}
                <br />
                <span>
                  {t("compareOptions.compass.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>
              {t("compareOptions.compass.description")}
            </p>
          </div>

          <div className={styles.compassShell}>
            <div className={styles.priorityRail}>
              <div className={styles.priorityRailHeader}>
                <Compass size={18} />
                <span>
                  {t("compareOptions.compass.priorityLabel")}
                </span>
              </div>

              <div className={styles.priorityButtons}>
                {priorities.map((priority) => {
                  const Icon = priority.icon;
                  const isActive =
                    activePriority === priority.id;

                  return (
                    <button
                      type="button"
                      key={priority.id}
                      className={`${styles.priorityButton} ${
                        isActive
                          ? styles.priorityButtonActive
                          : ""
                      }`}
                      onClick={() =>
                        setActivePriority(priority.id)
                      }
                      aria-pressed={isActive}
                    >
                      <Icon size={17} />

                      <span>
                        {t(
                          `compareOptions.compass.priorities.${priority.id}.label`
                        )}
                      </span>

                      <ArrowRight
                        size={14}
                        className={styles.priorityArrow}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.compassMain}>
              <div className={styles.compassHeading}>
                <div>
                  <span>
                    {t("compareOptions.compass.optimisingFor")}
                  </span>

                  <h3>
                    {t(
                      `compareOptions.compass.priorities.${activePriority}.label`
                    )}
                  </h3>
                </div>

                <div className={styles.compassCounter}>
                  <strong>
                    0
                    {priorities.findIndex(
                      (priority) =>
                        priority.id === activePriority
                    ) + 1}
                  </strong>
                  <span>/ 04</span>
                </div>
              </div>

              <p className={styles.compassDescription}>
                {t(
                  `compareOptions.compass.priorities.${activePriority}.description`
                )}
              </p>

              <div className={styles.compassOptions}>
                {comparisonData.map((option) => {
                  const score = getScore(option);

                  return (
                    <div
                      className={styles.compassOption}
                      key={option.id}
                    >
                      <div
                        className={styles.compassOptionTop}
                      >
                        <div>
                          <span>{option.number}</span>
                          <strong>
                            {t(
                              `compareOptions.options.${option.translationKey}.eyebrow`
                            )}
                          </strong>
                        </div>

                        <span
                          className={styles.optionMatch}
                        >
                          {score >= 4
                            ? t(
                                "compareOptions.compass.fit.strong"
                              )
                            : score === 3
                              ? t(
                                  "compareOptions.compass.fit.possible"
                                )
                              : t(
                                  "compareOptions.compass.fit.lower"
                                )}
                        </span>
                      </div>

                      <div
                        className={styles.compassOptionBody}
                      >
                        <h4>
                          {t(
                            `compareOptions.options.${option.translationKey}.title`
                          )}
                        </h4>

                        <ScoreDots score={score} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={styles.compassNote}>
                <CircleHelp size={16} />
                <p>
                  {t("compareOptions.compass.note")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPARISON
      ========================================================= */}

      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.sectionLabel}>
                {t("compareOptions.comparison.label")}
              </div>

              <h2>
                {t(
                  "compareOptions.comparison.titleLineOne"
                )}
                <br />
                <span>
                  {t(
                    "compareOptions.comparison.titleLineTwo"
                  )}
                </span>
              </h2>
            </div>

            <p>
              {t("compareOptions.comparison.description")}
            </p>
          </div>

          <div className={styles.comparisonTable}>
            <div className={styles.tableHeader}>
              <div className={styles.tableCorner}>
                <span>
                  {t(
                    "compareOptions.comparison.table.decisionFactor"
                  )}
                </span>
              </div>

              {comparisonData.map((option) => (
                <div
                  className={styles.tableOptionHeader}
                  key={option.id}
                >
                  <span>{option.number}</span>
                  <strong>
                    {t(
                      `compareOptions.options.${option.translationKey}.eyebrow`
                    )}
                  </strong>
                </div>
              ))}
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableLabel}>
                {t(
                  "compareOptions.comparison.table.coreAsset"
                )}
              </div>

              {comparisonData.map((option) => (
                <div key={option.id}>
                  {t(
                    `compareOptions.options.${option.translationKey}.asset`
                  )}
                </div>
              ))}
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableLabel}>
                {t(
                  "compareOptions.comparison.table.ownership"
                )}
              </div>

              <div>
                {t(
                  "compareOptions.comparison.values.direct"
                )}
              </div>

              <div>
                {t(
                  "compareOptions.comparison.values.direct"
                )}
              </div>

              <div>
                {t(
                  "compareOptions.comparison.values.structureDependent"
                )}
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableLabel}>
                {t(
                  "compareOptions.comparison.table.primaryFocus"
                )}
              </div>

              {comparisonData.map((option) => (
                <div key={option.id}>
                  {t(
                    `compareOptions.options.${option.translationKey}.focus`
                  )}
                </div>
              ))}
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableLabel}>
                {t(
                  "compareOptions.comparison.table.involvement"
                )}
              </div>

              {comparisonData.map((option) => (
                <div key={option.id}>
                  {t(
                    `compareOptions.options.${option.translationKey}.involvement`
                  )}
                </div>
              ))}
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableLabel}>
                {t(
                  "compareOptions.comparison.table.dueDiligence"
                )}
              </div>

              {comparisonData.map((option) => (
                <div key={option.id}>
                  {t(
                    `compareOptions.options.${option.translationKey}.diligence`
                  )}
                </div>
              ))}
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableLabel}>
                {t(
                  "compareOptions.comparison.table.bestSuited"
                )}
              </div>

              {comparisonData.map((option) => (
                <div key={option.id}>
                  {t(
                    `compareOptions.options.${option.translationKey}.bestFor`
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.mobileComparison}>
            {comparisonData.map((option) => (
              <article
                className={styles.mobileComparisonCard}
                key={option.id}
              >
                <div
                  className={
                    styles.mobileComparisonHeader
                  }
                >
                  <span>{option.number}</span>
                  <strong>
                    {t(
                      `compareOptions.options.${option.translationKey}.eyebrow`
                    )}
                  </strong>
                </div>

                <h3>
                  {t(
                    `compareOptions.options.${option.translationKey}.title`
                  )}
                </h3>

                <p>
                  {t(
                    `compareOptions.options.${option.translationKey}.description`
                  )}
                </p>

                <div className={styles.mobileFacts}>
                  <div>
                    <span>
                      {t(
                        "compareOptions.comparison.table.coreAsset"
                      ).toUpperCase()}
                    </span>
                    <strong>
                      {t(
                        `compareOptions.options.${option.translationKey}.asset`
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>
                      {t(
                        "compareOptions.comparison.table.ownership"
                      ).toUpperCase()}
                    </span>
                    <strong>
                      {option.ownership >= 4
                        ? t(
                            "compareOptions.comparison.values.direct"
                          )
                        : t(
                            "compareOptions.comparison.values.structureDependent"
                          )}
                    </strong>
                  </div>

                  <div>
                    <span>
                      {t(
                        "compareOptions.comparison.table.involvement"
                      ).toUpperCase()}
                    </span>
                    <strong>
                      {t(
                        `compareOptions.options.${option.translationKey}.involvement`
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>
                      {t(
                        "compareOptions.comparison.table.dueDiligence"
                      ).toUpperCase()}
                    </span>
                    <strong>
                      {t(
                        `compareOptions.options.${option.translationKey}.diligence`
                      )}
                    </strong>
                  </div>
                </div>

                <LocalizedLink
                  href={option.href}
                  className={styles.mobileComparisonLink}
                >
                  {t(
                    `compareOptions.options.${option.translationKey}.linkLabel`
                  )}
                  <ArrowRight size={15} />
                </LocalizedLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TRADE-OFFS
      ========================================================= */}

      <section className={styles.tradeSection}>
        <div className={styles.container}>
          <div className={styles.tradeIntro}>
            <div>
              <div className={styles.sectionLabel}>
                {t("compareOptions.tradeOffs.label")}
              </div>

              <h2>
                {t(
                  "compareOptions.tradeOffs.titleLineOne"
                )}
                <br />
                <span>
                  {t(
                    "compareOptions.tradeOffs.titleLineTwo"
                  )}
                </span>
              </h2>
            </div>

            <p>
              {t("compareOptions.tradeOffs.description")}
            </p>
          </div>

          <div className={styles.tradeGrid}>
            {tradeOffs.map((trade) => {
              const Icon = trade.icon;

              return (
                <article
                  className={styles.tradeCard}
                  key={trade.id}
                >
                  <div className={styles.tradeCardTop}>
                    <span>{trade.number}</span>

                    <Icon size={20} />
                  </div>

                  <h3>
                    {t(
                      `compareOptions.tradeOffs.items.${trade.translationKey}.title`
                    )}
                  </h3>

                  <div className={styles.tradeColumn}>
                    <div
                      className={
                        styles.tradeColumnTitle
                      }
                    >
                      <Check size={14} />
                      {t(
                        "compareOptions.tradeOffs.gainTitle"
                      )}
                    </div>

                    <ul>
                      {t(
                        `compareOptions.tradeOffs.items.${trade.translationKey}.gains`
                      ).map((gain) => (
                        <li key={gain}>{gain}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.tradeColumn}>
                    <div
                      className={
                        styles.tradeColumnTitle
                      }
                    >
                      <Scale size={14} />
                      {t(
                        "compareOptions.tradeOffs.tradeTitle"
                      )}
                    </div>

                    <ul>
                      {t(
                        `compareOptions.tradeOffs.items.${trade.translationKey}.trades`
                      ).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          THRESHOLD CONTEXT
      ========================================================= */}

      <section className={styles.thresholdSection}>
        <div className={styles.container}>
          <div className={styles.thresholdCard}>
            <div className={styles.thresholdIntro}>
              <div className={styles.sectionLabel}>
                {t("compareOptions.threshold.label")}
              </div>

              <h2>
                {t(
                  "compareOptions.threshold.titleLineOne"
                )}
                <br />
                <span>
                  {t(
                    "compareOptions.threshold.titleLineTwo"
                  )}
                </span>
              </h2>

              <p>
                {t("compareOptions.threshold.description")}
              </p>

              <LocalizedLink
                href="/program/requirements"
                className={styles.thresholdLink}
              >
                {t("compareOptions.threshold.linkLabel")}
                <ArrowRight size={15} />
              </LocalizedLink>
            </div>

            <div className={styles.thresholdSteps}>
              <div className={styles.thresholdStep}>
                <span>01</span>
                <strong>€250K</strong>
                <p>
                  {t(
                    "compareOptions.threshold.steps.250k"
                  )}
                </p>
              </div>

              <div className={styles.thresholdStep}>
                <span>02</span>
                <strong>€400K</strong>
                <p>
                  {t(
                    "compareOptions.threshold.steps.400k"
                  )}
                </p>
              </div>

              <div className={styles.thresholdStep}>
                <span>03</span>
                <strong>€800K</strong>
                <p>
                  {t(
                    "compareOptions.threshold.steps.800k"
                  )}
                </p>
              </div>
            </div>

            <div className={styles.thresholdNote}>
              <ShieldCheck size={17} />
              <p>
                {t("compareOptions.threshold.note")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DECISION FRAMEWORK
      ========================================================= */}

      <section className={styles.frameworkSection}>
        <div className={styles.container}>
          <div className={styles.frameworkHeader}>
            <div className={styles.sectionLabel}>
              {t("compareOptions.framework.label")}
            </div>

            <h2>
              {t(
                "compareOptions.framework.titleLineOne"
              )}
              <br />
              <span>
                {t(
                  "compareOptions.framework.titleLineTwo"
                )}
              </span>
            </h2>

            <p>
              {t("compareOptions.framework.description")}
            </p>
          </div>

          <div className={styles.frameworkFlow}>
            <div className={styles.flowLine} />

            <div className={styles.flowStep}>
              <div className={styles.flowNumber}>01</div>
              <Target size={19} />
              <span>
                {t(
                  "compareOptions.framework.steps.objective.label"
                )}
              </span>
              <p>
                {t(
                  "compareOptions.framework.steps.objective.question"
                )}
              </p>
            </div>

            <div className={styles.flowStep}>
              <div className={styles.flowNumber}>02</div>
              <Home size={19} />
              <span>
                {t(
                  "compareOptions.framework.steps.asset.label"
                )}
              </span>
              <p>
                {t(
                  "compareOptions.framework.steps.asset.question"
                )}
              </p>
            </div>

            <div className={styles.flowStep}>
              <div className={styles.flowNumber}>03</div>
              <Compass size={19} />
              <span>
                {t(
                  "compareOptions.framework.steps.location.label"
                )}
              </span>
              <p>
                {t(
                  "compareOptions.framework.steps.location.question"
                )}
              </p>
            </div>

            <div className={styles.flowStep}>
              <div className={styles.flowNumber}>04</div>
              <Layers3 size={19} />
              <span>
                {t(
                  "compareOptions.framework.steps.structure.label"
                )}
              </span>
              <p>
                {t(
                  "compareOptions.framework.steps.structure.question"
                )}
              </p>
            </div>

            <div className={styles.flowStep}>
              <div className={styles.flowNumber}>05</div>
              <FileCheck2 size={19} />
              <span>
                {t(
                  "compareOptions.framework.steps.review.label"
                )}
              </span>
              <p>
                {t(
                  "compareOptions.framework.steps.review.question"
                )}
              </p>
            </div>
          </div>

          <div className={styles.frameworkStatement}>
            <span />
            <strong>
              {t("compareOptions.framework.statement")}
            </strong>
            <span />
          </div>
        </div>
      </section>

      {/* =========================================================
          WHICH SOUNDS LIKE YOU
      ========================================================= */}

      <section className={styles.personaSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.sectionLabel}>
                {t("compareOptions.personas.label")}
              </div>

              <h2>
                {t(
                  "compareOptions.personas.titleLineOne"
                )}
                <br />
                <span>
                  {t(
                    "compareOptions.personas.titleLineTwo"
                  )}
                </span>
              </h2>
            </div>

            <p>
              {t("compareOptions.personas.description")}
            </p>
          </div>

          <div className={styles.personaGrid}>
            <article className={styles.personaCard}>
              <span>01</span>
              <Home size={21} />

              <h3>
                {t(
                  "compareOptions.personas.items.property.quoteLineOne"
                )}
                <br />
                {t(
                  "compareOptions.personas.items.property.quoteLineTwo"
                )}
              </h3>

              <p>
                {t(
                  "compareOptions.personas.items.property.description"
                )}
              </p>

              <LocalizedLink href="/investments/ready-properties">
                {t(
                  "compareOptions.personas.items.property.linkLabel"
                )}
                <ArrowRight size={15} />
              </LocalizedLink>
            </article>

            <article className={styles.personaCard}>
              <span>02</span>
              <Target size={21} />

              <h3>
                {t(
                  "compareOptions.personas.items.strategic.quoteLineOne"
                )}
                <br />
                {t(
                  "compareOptions.personas.items.strategic.quoteLineTwo"
                )}
              </h3>

              <p>
                {t(
                  "compareOptions.personas.items.strategic.description"
                )}
              </p>

              <LocalizedLink href="/investments/strategic-opportunities">
                {t(
                  "compareOptions.personas.items.strategic.linkLabel"
                )}
                <ArrowRight size={15} />
              </LocalizedLink>
            </article>

            <article className={styles.personaCard}>
              <span>03</span>
              <Layers3 size={21} />

              <h3>
                {t(
                  "compareOptions.personas.items.alternative.quoteLineOne"
                )}
                <br />
                {t(
                  "compareOptions.personas.items.alternative.quoteLineTwo"
                )}
              </h3>

              <p>
                {t(
                  "compareOptions.personas.items.alternative.description"
                )}
              </p>

              <LocalizedLink href="/investments/alternative-investments">
                {t(
                  "compareOptions.personas.items.alternative.linkLabel"
                )}
                <ArrowRight size={15} />
              </LocalizedLink>
            </article>
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
                {t("compareOptions.faq.label")}
              </div>

              <h2>
                {t("compareOptions.faq.titleLineOne")}
                <br />
                <span>
                  {t("compareOptions.faq.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("compareOptions.faq.description")}
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faqKey, index) => (
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
                        `compareOptions.faq.items.${faqKey}.question`
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
                        `compareOptions.faq.items.${faqKey}.answer`
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
          FINAL CTA
      ========================================================= */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <Compass size={24} strokeWidth={1.5} />
            </div>

            <div className={styles.ctaContent}>
              <div className={styles.sectionLabel}>
                {t("compareOptions.cta.label")}
              </div>

              <h2>
                {t("compareOptions.cta.titleLineOne")}
                <br />
                <span>
                  {t("compareOptions.cta.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("compareOptions.cta.description")}
              </p>
            </div>

            <LocalizedLink
              href="/team/contact"
              className={styles.ctaButton}
            >
              {t("compareOptions.cta.button")}
              <ArrowRight size={17} />
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
                {t("compareOptions.legal.important")}
              </strong>{" "}
              {t("compareOptions.legal.text")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}