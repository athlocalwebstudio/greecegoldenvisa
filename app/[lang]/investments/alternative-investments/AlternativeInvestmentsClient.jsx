"use client";

import { useState } from "react";
import { useLanguage } from "@/app/LanguageContext";
import LocalizedLink from "@/app/components/LocalizedLink";

import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Euro,
  FileCheck2,
  Landmark,
  LineChart,
  LockKeyhole,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import styles from "./alternative-investments.module.css";

const investmentRoutes = [
  {
    id: "market",
    number: "01",
    icon: LineChart,
    routeKeys: [
      {
        amount: "€800K",
        key: "listedSecurities",
      },
      {
        amount: "€500K",
        key: "governmentBonds",
      },
    ],
  },
  {
    id: "managed",
    number: "02",
    icon: WalletCards,
    routeKeys: [
      {
        amount: "€350K",
        key: "mutualFunds",
      },
      {
        amount: "€350K",
        key: "alternativeInvestmentOrganisations",
      },
    ],
  },
  {
    id: "structured",
    number: "03",
    icon: Building2,
    routeKeys: [
      {
        amount: "€500K",
        key: "greekCompanyInvestment",
      },
      {
        amount: "€500K",
        key: "greekRealEstateInvestmentCompanies",
      },
      {
        amount: "€500K",
        key: "ventureCapitalStructures",
      },
      {
        amount: "€500K",
        key: "fixedTermDeposit",
      },
    ],
  },
];

const reviewPoints = [
  {
    number: "01",
    key: "structure",
    icon: Building2,
  },
  {
    number: "02",
    key: "eligibility",
    icon: ShieldCheck,
  },
  {
    number: "03",
    key: "custody",
    icon: LockKeyhole,
  },
  {
    number: "04",
    key: "evidence",
    icon: FileCheck2,
  },
];

const faqKeys = [
  "withoutProperty",
  "differentThresholds",
  "everyFund",
  "governmentBonds",
  "keepInvestment",
  "existingPortfolio",
  "saferThanProperty",
];

export default function AlternativeInvestmentsClient() {
  const { t } = useLanguage();

  const [openFaq, setOpenFaq] = useState(null);
  const [activeRoute, setActiveRoute] = useState("all");

  const visibleGroups =
    activeRoute === "all"
      ? investmentRoutes
      : investmentRoutes.filter((group) => group.id === activeRoute);

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
                {t("alternativeInvestments.hero.eyebrow")}
              </div>

              <h1>
                {t("alternativeInvestments.hero.titleLineOne")}
                <br />
                <em>
                  {t("alternativeInvestments.hero.titleLineTwo")}
                </em>
              </h1>

              <p>
                {t("alternativeInvestments.hero.description")}
              </p>

              <div className={styles.heroActions}>
                <a
                  href="#routes"
                  className={styles.primaryButton}
                >
                  {t("alternativeInvestments.hero.primaryButton")}
                  <ArrowRight size={16} />
                </a>

                <LocalizedLink
                  href="/team/contact"
                  className={styles.secondaryButton}
                >
                  {t("alternativeInvestments.hero.secondaryButton")}
                </LocalizedLink>
              </div>
            </div>

            <div className={styles.capitalVisual}>
              <div className={styles.capitalLine} />

              <div className={styles.capitalPoint}>
                <span>
                  {t("alternativeInvestments.hero.thresholds.entry")}
                </span>
                <strong>€350K</strong>
              </div>

              <div className={styles.capitalPoint}>
                <span>
                  {t("alternativeInvestments.hero.thresholds.core")}
                </span>
                <strong>€500K</strong>
              </div>

              <div className={styles.capitalPoint}>
                <span>
                  {t("alternativeInvestments.hero.thresholds.premium")}
                </span>
                <strong>€800K</strong>
              </div>

              <div className={styles.capitalCaption}>
                {t("alternativeInvestments.hero.thresholds.caption")}
              </div>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>{t("alternativeInvestments.hero.meta.capital")}</span>
            <strong>{t("alternativeInvestments.hero.meta.greece")}</strong>
            <span>{t("alternativeInvestments.hero.meta.residence")}</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <div className={styles.sectionLabel}>
                {t("alternativeInvestments.intro.label")}
              </div>

              <h2>
                {t("alternativeInvestments.intro.titleLineOne")}
                <br />
                <span>
                  {t("alternativeInvestments.intro.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>
              {t("alternativeInvestments.intro.description")}
            </p>
          </div>

          <div className={styles.principleGrid}>
            <article className={styles.principleCard}>
              <div className={styles.principleIcon}>
                <Euro size={19} strokeWidth={1.5} />
              </div>

              <span>
                {t("alternativeInvestments.intro.principles.capital.label")}
              </span>

              <h3>
                {t("alternativeInvestments.intro.principles.capital.title")}
              </h3>

              <p>
                {t("alternativeInvestments.intro.principles.capital.text")}
              </p>
            </article>

            <article className={styles.principleCard}>
              <div className={styles.principleIcon}>
                <Building2 size={19} strokeWidth={1.5} />
              </div>

              <span>
                {t("alternativeInvestments.intro.principles.structure.label")}
              </span>

              <h3>
                {t("alternativeInvestments.intro.principles.structure.title")}
              </h3>

              <p>
                {t("alternativeInvestments.intro.principles.structure.text")}
              </p>
            </article>

            <article className={styles.principleCard}>
              <div className={styles.principleIcon}>
                <ShieldCheck size={19} strokeWidth={1.5} />
              </div>

              <span>
                {t("alternativeInvestments.intro.principles.regulation.label")}
              </span>

              <h3>
                {t("alternativeInvestments.intro.principles.regulation.title")}
              </h3>

              <p>
                {t("alternativeInvestments.intro.principles.regulation.text")}
              </p>
            </article>

            <article className={styles.principleCard}>
              <div className={styles.principleIcon}>
                <LockKeyhole size={19} strokeWidth={1.5} />
              </div>

              <span>
                {t("alternativeInvestments.intro.principles.retention.label")}
              </span>

              <h3>
                {t("alternativeInvestments.intro.principles.retention.title")}
              </h3>

              <p>
                {t("alternativeInvestments.intro.principles.retention.text")}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          ROUTES
      ========================================================= */}

      <section className={styles.routesSection} id="routes">
        <div className={styles.container}>
          <div className={styles.routesHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("alternativeInvestments.routes.label")}
              </div>

              <h2>
                {t("alternativeInvestments.routes.titleLineOne")}
                <br />
                <span>
                  {t("alternativeInvestments.routes.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>
              {t("alternativeInvestments.routes.description")}
            </p>
          </div>

          <div className={styles.routeTabs}>
            <button
              type="button"
              className={
                activeRoute === "all" ? styles.activeTab : ""
              }
              onClick={() => setActiveRoute("all")}
            >
              {t("alternativeInvestments.routes.tabs.all")}
            </button>

            {investmentRoutes.map((group) => (
              <button
                type="button"
                key={group.id}
                className={
                  activeRoute === group.id
                    ? styles.activeTab
                    : ""
                }
                onClick={() => setActiveRoute(group.id)}
              >
                {t(
                  `alternativeInvestments.routes.groups.${group.id}.label`
                )}
              </button>
            ))}
          </div>

          <div className={styles.routeGroups}>
            {visibleGroups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <section
                  className={styles.routeGroup}
                  key={group.id}
                >
                  <div className={styles.groupHeader}>
                    <div className={styles.groupIdentity}>
                      <div className={styles.groupIcon}>
                        <GroupIcon
                          size={19}
                          strokeWidth={1.5}
                        />
                      </div>

                      <div>
                        <span>{group.number}</span>
                        <strong>
                          {t(
                            `alternativeInvestments.routes.groups.${group.id}.label`
                          )}
                        </strong>
                      </div>
                    </div>

                    <div className={styles.groupLine} />
                  </div>

                  <div className={styles.routeGrid}>
                    {group.routeKeys.map((route) => (
                      <article
                        className={styles.routeCard}
                        key={route.key}
                      >
                        <div className={styles.routeCardTop}>
                          <span>{route.amount}</span>

                          <ArrowDownRight
                            size={19}
                            strokeWidth={1.4}
                          />
                        </div>

                        <h3>
                          {t(
                            `alternativeInvestments.routes.items.${route.key}.title`
                          )}
                        </h3>

                        <p>
                          {t(
                            `alternativeInvestments.routes.items.${route.key}.description`
                          )}
                        </p>

                        <div className={styles.routeTags}>
                          {["tagOne", "tagTwo"].map((tagKey) => (
                            <span key={tagKey}>
                              <Check size={11} />
                              {t(
                                `alternativeInvestments.routes.items.${route.key}.${tagKey}`
                              )}
                            </span>
                          ))}
                        </div>

                        <div className={styles.routeFooter}>
                          <span>
                            {t(
                              "alternativeInvestments.routes.qualifyingRoute"
                            )}
                          </span>

                          <LocalizedLink href="/team/contact">
                            {t(
                              "alternativeInvestments.routes.discuss"
                            )}
                            <ArrowRight size={14} />
                          </LocalizedLink>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          AMOUNT
      ========================================================= */}

      <section className={styles.amountSection}>
        <div className={styles.container}>
          <div className={styles.amountCard}>
            <div className={styles.amountVisual}>
              <span>€</span>
              <strong>350K</strong>
            </div>

            <div className={styles.amountContent}>
              <div className={styles.sectionLabel}>
                {t("alternativeInvestments.amount.label")}
              </div>

              <h2>
                {t("alternativeInvestments.amount.titleLineOne")}
                <br />
                <span>
                  {t("alternativeInvestments.amount.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("alternativeInvestments.amount.description")}
              </p>

              <div className={styles.amountChecks}>
                {[
                  "underlyingAssets",
                  "fundManager",
                  "regulatoryStatus",
                  "holdingDocumentation",
                ].map((key) => (
                  <div key={key}>
                    <Check size={14} />
                    <span>
                      {t(
                        `alternativeInvestments.amount.checks.${key}`
                      )}
                    </span>
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
                {t("alternativeInvestments.process.label")}
              </div>

              <h2>
                {t("alternativeInvestments.process.titleLineOne")}
                <br />
                <span>
                  {t("alternativeInvestments.process.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>
              {t("alternativeInvestments.process.description")}
            </p>
          </div>

          <div className={styles.processList}>
            {[
              "objective",
              "eligibleRoute",
              "structure",
              "execute",
              "document",
            ].map((key, index) => (
              <article
                className={styles.processItem}
                key={key}
              >
                <span>
                  0{index + 1}
                </span>

                <div>
                  <h3>
                    {t(
                      `alternativeInvestments.process.items.${key}.title`
                    )}
                  </h3>

                  <p>
                    {t(
                      `alternativeInvestments.process.items.${key}.text`
                    )}
                  </p>
                </div>

                {index === 4 ? (
                  <Check size={18} />
                ) : (
                  <ArrowRight size={18} />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}

      <section className={styles.positionSection}>
        <div className={styles.container}>
          <div className={styles.positionCard}>
            <div className={styles.positionMark}>
              <Landmark size={25} strokeWidth={1.4} />
            </div>

            <div className={styles.positionContent}>
              <div className={styles.sectionLabel}>
                {t("alternativeInvestments.approach.label")}
              </div>

              <h2>
                {t("alternativeInvestments.approach.titleLineOne")}
                <br />
                {t("alternativeInvestments.approach.titleLineTwo")}
                <br />
                <span>
                  {t("alternativeInvestments.approach.titleHighlight")}
                </span>
              </h2>

              <p>
                {t("alternativeInvestments.approach.description")}
              </p>

              <LocalizedLink
                href="/team/contact"
                className={styles.positionButton}
              >
                {t("alternativeInvestments.approach.button")}
                <ArrowRight size={16} />
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REVIEW
      ========================================================= */}

      <section className={styles.reviewSection}>
        <div className={styles.container}>
          <div className={styles.reviewHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("alternativeInvestments.review.label")}
              </div>

              <h2>
                {t("alternativeInvestments.review.titleLineOne")}
                <br />
                <span>
                  {t("alternativeInvestments.review.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>
              {t("alternativeInvestments.review.description")}
            </p>
          </div>

          <div className={styles.reviewGrid}>
            {reviewPoints.map((point) => {
              const Icon = point.icon;

              return (
                <article
                  className={styles.reviewItem}
                  key={point.number}
                >
                  <div className={styles.reviewItemTop}>
                    <span>{point.number}</span>

                    <Icon size={20} strokeWidth={1.4} />
                  </div>

                  <h3>
                    {t(
                      `alternativeInvestments.review.points.${point.key}.title`
                    )}
                  </h3>

                  <p>
                    {t(
                      `alternativeInvestments.review.points.${point.key}.text`
                    )}
                  </p>
                </article>
              );
            })}
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
                {t("alternativeInvestments.faq.label")}
              </div>

              <h2>
                {t("alternativeInvestments.faq.titleLineOne")}
                <br />
                <span>
                  {t("alternativeInvestments.faq.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("alternativeInvestments.faq.description")}
              </p>
            </div>

            <div className={styles.faqList}>
              {faqKeys.map((faqKey, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqItemOpen : ""
                    }`}
                    key={faqKey}
                  >
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span className={styles.faqNumber}>
                        0{index + 1}
                      </span>

                      <span>
                        {t(
                          `alternativeInvestments.faq.items.${faqKey}.question`
                        )}
                      </span>

                      <ChevronDown
                        size={17}
                        className={styles.faqChevron}
                      />
                    </button>

                    <div
                      className={styles.faqAnswer}
                      aria-hidden={!isOpen}
                    >
                      <p>
                        {t(
                          `alternativeInvestments.faq.items.${faqKey}.answer`
                        )}
                      </p>
                    </div>
                  </article>
                );
              })}
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
              <WalletCards size={24} strokeWidth={1.4} />
            </div>

            <div className={styles.ctaContent}>
              <div className={styles.sectionLabel}>
                {t("alternativeInvestments.cta.label")}
              </div>

              <h2>
                {t("alternativeInvestments.cta.titleLineOne")}
                <br />
                <span>
                  {t("alternativeInvestments.cta.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("alternativeInvestments.cta.description")}
              </p>
            </div>

            <LocalizedLink
              href="/team/contact"
              className={styles.ctaButton}
            >
              {t("alternativeInvestments.cta.button")}
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
                {t("alternativeInvestments.legal.title")}
              </strong>{" "}
              {t("alternativeInvestments.legal.text")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}