import Link from "next/link";
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

export const metadata = {
  title: "Greek Golden Visa Investment Requirements | Golden Visa Greece",
  description:
    "Understand the current Greek Golden Visa investment thresholds, property requirements and qualifying investment routes.",
};

const investmentRoutes = [
  {
    number: "01",
    amount: "€250K",
    title: "Special Property Routes",
    description:
      "A lower investment threshold applies to specific qualifying property categories defined by Greek law.",
    icon: Landmark,
    featured: false,
  },
  {
    number: "02",
    amount: "€400K",
    title: "Standard Property Investment",
    description:
      "The standard threshold for qualifying property investments outside the areas subject to the €800,000 threshold.",
    icon: Home,
    featured: false,
  },
  {
    number: "03",
    amount: "€800K",
    title: "High-Demand Areas",
    description:
      "The higher threshold applies to qualifying property investments in specific high-demand locations.",
    icon: Building2,
    featured: true,
  },
];

const highDemandAreas = [
  "Attica",
  "Regional Unit of Thessaloniki",
  "Mykonos",
  "Thira / Santorini",
  "Greek islands with a population exceeding 3,100",
];

const propertyRequirements = [
  {
    number: "01",
    title: "One qualifying property",
    text:
      "For the standard €400,000 and €800,000 property routes, the investment generally concerns a single property rather than combining several properties to reach the threshold.",
  },
  {
    number: "02",
    title: "120 m² minimum",
    text:
      "For qualifying residential properties under the €400,000 and €800,000 routes, the applicable property must generally have at least 120 m² of main-use areas.",
  },
  {
    number: "03",
    title: "Proper ownership",
    text:
      "The investor must satisfy the ownership and possession requirements applicable to the particular Golden Visa investment route.",
  },
  {
    number: "04",
    title: "Documented payment",
    text:
      "The purchase consideration must be paid and documented through the payment methods and supporting evidence required under the applicable rules.",
  },
];

const specialRoutes = [
  {
    number: "01",
    title: "Change of use",
    text:
      "Certain properties whose main spaces have been converted to residential use can qualify under the €250,000 route, subject to the statutory conditions and documentation.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Listed buildings",
    text:
      "Qualifying listed buildings requiring restoration or reconstruction can also fall under the €250,000 route when the applicable requirements are satisfied.",
    icon: Landmark,
  },
];

const checks = [
  {
    number: "01",
    title: "Location",
    text:
      "Determine whether the property falls under the €250,000, €400,000 or €800,000 threshold.",
  },
  {
    number: "02",
    title: "Property type",
    text:
      "Confirm that the property qualifies under the specific Golden Visa route being considered.",
  },
  {
    number: "03",
    title: "Transaction",
    text:
      "Verify that the purchase price, payment structure and ownership arrangement satisfy the applicable rules.",
  },
  {
    number: "04",
    title: "Technical status",
    text:
      "Review the property's planning, building and legal characteristics before committing to the investment.",
  },
];

const faqs = [
  {
    question: "Is the minimum investment always €250,000?",
    answer:
      "No. The €250,000 threshold applies only to specific qualifying property routes. Standard property investments are generally subject to €400,000 or €800,000 thresholds depending on the location and applicable rules.",
  },
  {
    question: "Which areas require the €800,000 threshold?",
    answer:
      "The €800,000 threshold applies to qualifying property investments in Attica, the Regional Unit of Thessaloniki, Mykonos, Thira/Santorini and Greek islands with a population exceeding 3,100, subject to the applicable legal requirements.",
  },
  {
    question: "Can I combine multiple properties to reach €400,000 or €800,000?",
    answer:
      "For the standard property routes, the qualifying investment generally concerns a single property. The exact structure of an investment should be checked against the rules applicable to the transaction.",
  },
  {
    question: "Does a €250,000 property automatically qualify?",
    answer:
      "No. The €250,000 route is limited to specific property categories, such as qualifying change-of-use properties and certain listed buildings requiring restoration or reconstruction. The property must satisfy the relevant legal conditions.",
  },
  {
    question: "Are there additional costs beyond the investment amount?",
    answer:
      "Yes. The statutory investment threshold should not be treated as the complete transaction budget. Depending on the investment, additional costs can include taxes, notarial and registration costs, professional fees, legal services and other transaction-related expenses.",
  },
];

export default function InvestmentRequirementsPage() {
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
              INVESTMENT REQUIREMENTS
            </div>

            <h1>
              Know the threshold
              <br />
              <em>before you invest.</em>
            </h1>

            <p>
              The Greek Golden Visa offers different investment routes.
              Understanding the threshold, location and property requirements
              is the first step toward choosing the right one.
            </p>
          </div>

          <div className={styles.heroMeta}>
            <span>PROGRAM</span>
            <strong>INVESTMENT</strong>
            <span>GREECE</span>
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
                THE THREE THRESHOLDS
              </div>

              <h2>
                Choose the route
                <br />
                <span>that fits.</span>
              </h2>
            </div>

            <p>
              The amount required depends on the type and location of the
              investment. The €250,000 route is reserved for specific property
              categories.
            </p>
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

                  <div className={styles.routeAmount}>
                    {route.amount}
                  </div>

                  <h3>{route.title}</h3>

                  <p>{route.description}</p>

                  <div className={styles.routeBottom}>
                    <span>
                      {route.featured
                        ? "LOCATION DEPENDENT"
                        : "QUALIFYING ROUTE"}
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
                WHERE €800K APPLIES
              </div>

              <h2>
                Location can
                <br />
                <span>change the threshold.</span>
              </h2>

              <p>
                Certain high-demand areas are subject to the €800,000 minimum
                investment threshold for qualifying property investments.
              </p>
            </div>

            <div className={styles.locationList}>
              {highDemandAreas.map((area, index) => (
                <div className={styles.locationItem} key={area}>
                  <span>0{index + 1}</span>

                  <div>
                    <MapPin size={15} />
                    <strong>{area}</strong>
                  </div>
                </div>
              ))}

              <div className={styles.locationAmount}>
                <span>MINIMUM INVESTMENT</span>
                <strong>€800,000</strong>
              </div>
            </div>
          </div>

          <div className={styles.locationNote}>
            <ShieldCheck size={17} />

            <p>
              The applicable threshold should always be confirmed against the
              property's exact location and the rules in force at the time of
              the investment.
            </p>
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
                PROPERTY REQUIREMENTS
              </div>

              <h2>
                It's not simply
                <br />
                <span>about the price.</span>
              </h2>
            </div>

            <p>
              Meeting the financial threshold is only one part of a qualifying
              investment. The property and transaction must also satisfy the
              applicable requirements.
            </p>
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
                  <h3>{requirement.title}</h3>
                  <p>{requirement.text}</p>
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
              THE €250K ROUTES
            </div>

            <h2>
              A lower threshold,
              <br />
              <span>with specific conditions.</span>
            </h2>

            <p>
              €250,000 does not apply to every property. It is reserved for
              specific investment categories established by the Greek
              framework.
            </p>
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

                  <h3>{route.title}</h3>

                  <p>{route.text}</p>

                  <div className={styles.specialTag}>
                    €250,000 ROUTE
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
                BEFORE YOU COMMIT
              </div>

              <h2>
                Four things
                <br />
                <span>to verify first.</span>
              </h2>

              <p>
                A property's asking price is only the beginning. Before making
                a commitment, the investment should be assessed as a whole.
              </p>
            </div>

            <div className={styles.checkList}>
              {checks.map((check) => (
                <div className={styles.checkItem} key={check.number}>
                  <span>{check.number}</span>

                  <div>
                    <h3>{check.title}</h3>
                    <p>{check.text}</p>
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
                COMMON QUESTIONS
              </div>

              <h2>
                Before you
                <br />
                <span>make a decision.</span>
              </h2>

              <p>
                The questions investors most often ask when comparing the
                available investment thresholds.
              </p>

              <Link
                href="/program/eligibility"
                className={styles.outlineButton}
              >
                Check Your Eligibility
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details
                  className={styles.faqItem}
                  key={faq.question}
                >
                  <summary>
                    <span className={styles.faqNumber}>
                      0{index + 1}
                    </span>

                    <span className={styles.faqQuestion}>
                      {faq.question}
                    </span>

                    <CircleHelp
                      className={styles.faqIcon}
                      size={18}
                    />
                  </summary>

                  <div className={styles.answer}>
                    <p>{faq.answer}</p>
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
                HAVE A PROPERTY IN MIND?
              </div>

              <h2>
                Check it before
                <br />
                <span>you commit.</span>
              </h2>

              <p>
                We can help assess the property's Golden Visa suitability and
                identify the relevant investment route before you move forward.
              </p>
            </div>

            <Link
              href="/team/contact"
              className={styles.ctaButton}
            >
              Request a Property Review
              <ArrowRight size={17} />
            </Link>
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
              <strong>Legal information.</strong> This page provides general
              information about the Greek Golden Visa investment framework and
              is not legal, tax, immigration or investment advice. Investment
              thresholds, qualifying property categories and administrative
              requirements may change. Eligibility should be assessed against
              the legislation and administrative requirements in force at the
              time of application.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}