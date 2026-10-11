"use client";

import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Building2,
  Home,
  Sparkles,
  BriefcaseBusiness,
  FileCheck2,
  Landmark,
  Scale,
} from "lucide-react";

import styles from "./investment-routes.module.css";

const routes = [
  {
    tier: "€250,000",
    badge: "Special Entry Route",
    icon: Sparkles,
    key: "route250",
  },
  {
    tier: "€400,000",
    badge: "Regional Tier",
    icon: Home,
    key: "route400",
  },
  {
    tier: "€800,000",
    badge: "Prime Location Tier",
    icon: Building2,
    key: "route800",
  },
];

const routeFeatures = {
  route250: [
    "Commercial-to-residential building conversions",
    "Complete restoration of historically listed buildings",
    "Available across all regions of Greece without geographic limits",
    "Requires conversion completion prior to residency issuance",
  ],
  route400: [
    "Applicable across standard Greek municipalities and regional units",
    "Minimum property size requirement of 120 square meters",
    "Ideal for peaceful suburban or emerging regional investments",
    "Full family inclusion (spouse, children under 21, and parents)",
  ],
  route800: [
    "Applies to Greater Athens, Thessaloniki, Mykonos, Santorini, and large islands",
    "Strict minimum property size requirement of 120 square meters",
    "High rental demand and prime capital appreciation potential",
    "Full Schengen area travel freedom for the entire family",
  ],
};

const faqs = [
  "howToStart250k",
  "propertySize120sqm",
  "familyInclusion",
  "holdingPeriod",
];

export default function InvestmentRoutesContent() {
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
              {t("routes.hero.eyebrow") || "Official Legislative Tiers"}
            </div>

            <h1>
              {t("routes.hero.titleLineOne") || "Greek Golden Visa"}
              <br />
              <em>{t("routes.hero.titleLineTwo") || "Investment Routes"}</em>
            </h1>

            <p className={styles.heroText}>
              {t("routes.hero.description") ||
                "Navigate the Greek Golden Visa investment thresholds with confidence. Whether you want to start from €250k through conversion projects or invest in prime €800k locations, we align your capital with Greek real estate legislation."}
            </p>

            <div className={styles.heroActions}>
              <LocalizedLink
                href="/team/contact"
                className={styles.primaryButton}
              >
                {t("routes.hero.primaryButton") || "Free Consultation"}
                <ArrowRight size={18} />
              </LocalizedLink>

              <a href="#routes" className={styles.secondaryButton}>
                {t("routes.hero.secondaryButton") || "Explore Tiers"}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          INVESTMENT TIERS GRID
      ========================================= */}
      <section className={styles.intro} id="routes">
        <div className={styles.container}>

          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>
              {t("routes.routes.label") || "Investment Thresholds"}
            </div>

            <h2>
              {t("routes.routes.titleLineOne") || "Choose Your Entry Route:"}
              <br />
              <span>
                {t("routes.routes.titleLineTwo") || "€250k, €400k & €800k Tiers"}
              </span>
            </h2>

            <p>
              {t("routes.routes.description") ||
                "Greek law structures real estate investment options based on location, property type, and strategic conversion status. Review each tier below to find the ideal match for your portfolio."}
            </p>
          </div>

          <div className={styles.routesGrid}>
            {routes.map((item) => {
              const Icon = item.icon;
              const features = routeFeatures[item.key] || [];

              return (
                <article className={styles.routeCard} key={item.tier}>
                  <div className={styles.cardHeader}>
                    <div>
                      <span className={styles.cardBadge}>{item.badge}</span>
                      <span className={styles.cardTier}>{item.tier}</span>
                    </div>
                    <div className={styles.cardIcon}>
                      <Icon size={28} strokeWidth={1.6} />
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <h3>
                      {t(`routes.cards.${item.key}.title`) ||
                        (item.tier === "€250,000"
                          ? "Special Conversion & Restoration Route"
                          : item.tier === "€400,000"
                          ? "Regional Development Tier"
                          : "Prime Real Estate Tier")}
                    </h3>

                    <p>
                      {t(`routes.cards.${item.key}.text`) ||
                        "Designed for strategic investors seeking residency through compliant Greek real estate assets."}
                    </p>

                    <ul className={styles.featureList}>
                      {features.map((feat, idx) => (
                        <li key={idx}>
                          <Check size={18} className={styles.checkIcon} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <LocalizedLink
                      href="/team/contact"
                      className={styles.cardButton}
                    >
                      {t("routes.cards.button") || "Discuss This Route"}
                      <ArrowRight size={16} />
                    </LocalizedLink>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          ADDED EXPERT INSIGHTS SECTION
      ========================================= */}
      <section className={styles.insightsSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            Strategic Due Diligence
          </div>
          <h2 style={{ fontSize: "2.4rem", marginTop: "15px", color: "var(--navy)" }}>
            What to verify before choosing your investment route
          </h2>
          <div className={styles.insightsGrid}>
            <div className={styles.insightCard}>
              <FileCheck2 size={32} style={{ color: "var(--blue)", marginBottom: "16px" }} />
              <h4>Technical Compliance</h4>
              <p>Ensuring the building permit, zoning regulations, and Electronic Building Identity fully match the statutory requirements.</p>
            </div>
            <div className={styles.insightCard}>
              <Landmark size={32} style={{ color: "var(--blue)", marginBottom: "16px" }} />
              <h4>Location Verification</h4>
              <p>Confirming whether the selected municipal unit falls under the standard threshold or the high-demand €800k zone.</p>
            </div>
            <div className={styles.insightCard}>
              <Scale size={32} style={{ color: "var(--blue)", marginBottom: "16px" }} />
              <h4>Family Inclusion Scope</h4>
              <p>Structuring the asset acquisition properly to ensure smooth residence permit extension for spouses, children, and parents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FAQ SECTION
      ========================================= */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>

            <div className={styles.faqIntro}>
              <div className={styles.sectionLabel}>
                {t("routes.faq.label") || "Common Questions"}
              </div>

              <h2>
                {t("routes.faq.titleLineOne") || "Frequently Asked"}
                <br />
                <span>
                  {t("routes.faq.titleLineTwo") || "Questions"}
                </span>
              </h2>

              <p>
                {t("routes.faq.description") ||
                  "Have specific questions about the property size requirements, conversion rules, or family eligibility? Speak directly with our advisory team."}
              </p>

              <LocalizedLink
                href="/team/contact"
                className={styles.outlineButton}
              >
                {t("routes.faq.button") || "Book Free Consultation"}
                <ArrowRight size={18} />
              </LocalizedLink>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faqKey, index) => (
                <details className={styles.faqItem} key={faqKey}>
                  <summary>
                    <span className={styles.faqNumber}>0{index + 1}</span>
                    <span className={styles.question}>
                      {t(`routes.faq.items.${faqKey}.question`) ||
                        "Detailed answers regarding Greek Golden Visa compliance."}
                    </span>
                    <ChevronDown className={styles.faqIcon} size={20} />
                  </summary>

                  <div className={styles.answer}>
                    <p>
                      {t(`routes.faq.items.${faqKey}.answer`) ||
                        "Our legal experts verify every transaction to ensure full compliance with Greek immigration laws."}
                    </p>
                  </div>
                </details>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          CTA SECTION
      ========================================= */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div>
              <div className={styles.sectionLabel}>
                {t("routes.cta.label") || "Get Started Today"}
              </div>

              <h2>
                {t("routes.cta.titleLineOne") || "Ready to Explore Your"}
                <br />
                <span>
                  {t("routes.cta.titleLineTwo") || "Investment Route?"}
                </span>
              </h2>

              <p>
                {t("routes.cta.description") ||
                  "Schedule your free consultation with our senior advisors. We evaluate your goals, verify property eligibility, and guide you seamlessly through the application process."}
              </p>
            </div>

            <LocalizedLink
              href="/team/contact"
              className={styles.ctaButton}
            >
              {t("routes.cta.button") || "Free Consultation — Contact Us"}
              <ArrowRight size={20} />
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
            <BriefcaseBusiness size={20} />
            <p>
              <strong>
                {t("routes.legal.title") || "Legal & Regulatory Notice:"}
              </strong>{" "}
              {t("routes.legal.text") ||
                "Golden Visa regulations are subject to statutory updates by the Hellenic Republic. All investments require legal due diligence and verification prior to contract signing and residency submission."}
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}