
import Link from "next/link";
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

export const metadata = {
  title: "Greek Golden Visa Eligibility | Golden Visa Greece",
  description:
    "Understand who can apply for the Greek Golden Visa, the main eligibility conditions and what should be checked before starting the application.",
};

const eligibilitySteps = [
  {
    number: "01",
    title: "Third-country national",
    description:
      "The Greek Golden Visa is available to eligible citizens of countries outside the European Union and European Economic Area, subject to the applicable rules.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "Qualifying investment",
    description:
      "The applicant must make an investment that satisfies one of the qualifying Golden Visa routes and the applicable financial threshold.",
    icon: WalletCards,
  },
  {
    number: "03",
    title: "Eligible property or investment",
    description:
      "Where property is used for the application, the specific property and transaction must meet the conditions of the relevant investment route.",
    icon: Home,
  },
  {
    number: "04",
    title: "Required documentation",
    description:
      "The applicant must be able to provide the documents and evidence required to establish identity, investment, ownership and compliance with the programme.",
    icon: FileCheck2,
  },
];

const faqs = [
  {
    question: "Who can apply for the Greek Golden Visa?",
    answer:
      "The programme is generally available to eligible third-country nationals who satisfy the applicable investment and legal requirements.",
  },
  {
    question: "Do I need to live in Greece to apply?",
    answer:
      "The Golden Visa is a residence permit programme and does not generally require the investor to establish permanent residence in Greece simply to maintain the permit. The specific requirements and conditions should be confirmed for the applicant's circumstances.",
  },
  {
    question: "Do I need to buy property before checking my eligibility?",
    answer:
      "No. It is generally preferable to understand your eligibility and the available investment routes before committing to a property or transaction.",
  },
  {
    question: "Can my family apply with me?",
    answer:
      "Eligible family members may receive residence permits connected to the investor's status, subject to the applicable family and legal requirements.",
  },
  {
    question: "Does meeting the investment amount guarantee approval?",
    answer:
      "No. Meeting the financial threshold is only one part of the process. The investment, documentation, ownership structure and other applicable requirements must also be satisfied.",
  },
];

export default function EligibilityPage() {
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
              YOUR ELIGIBILITY
            </div>

            <h1>
              Is the Golden Visa
              <br />
              <em>right for you?</em>
            </h1>

            <p>
              Eligibility depends on more than the amount you invest.
              Understand the key conditions before choosing a property or
              starting your application.
            </p>

            <div className={styles.heroActions}>
              <a
                href="#eligibility-check"
                className={styles.primaryButton}
              >
                Check the Requirements
                <ArrowRight size={16} />
              </a>

              <Link
                href="/program/requirements"
                className={styles.secondaryButton}
              >
                View Investment Requirements
              </Link>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>PROGRAM</span>
            <strong>ELIGIBILITY</strong>
            <span>GREECE</span>
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
                THE BASIC CONDITIONS
              </div>

              <h2>
                Four things
                <br />
                <span>come first.</span>
              </h2>
            </div>

            <p>
              Before considering a property or investment strategy, there are
              several fundamental conditions that should be established.
            </p>
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

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <div className={styles.conditionBottom}>
                    <Check size={15} />
                    <span>KEY ELIGIBILITY FACTOR</span>
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
                YOUR INVESTMENT
              </div>

              <h2>
                Know your route
                <br />
                <span>before you buy.</span>
              </h2>
            </div>

            <p>
              The investment route you choose affects the threshold,
              qualifying conditions and documentation that apply to your
              application.
            </p>
          </div>

          <div className={styles.routePreview}>
            <div className={styles.routePreviewItem}>
              <span>01</span>

              <div>
                <strong>€250K</strong>
                <p>
                  Specific qualifying property categories subject to their
                  applicable conditions.
                </p>
              </div>
            </div>

            <div className={styles.routePreviewItem}>
              <span>02</span>

              <div>
                <strong>€400K</strong>
                <p>
                  Standard qualifying property investment outside areas
                  subject to the €800,000 threshold.
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
                  Qualifying property investment in specific high-demand
                  locations.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/program/requirements"
            className={styles.textLink}
          >
            Explore all investment requirements
            <ArrowRight size={16} />
          </Link>
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
                FAMILY ELIGIBILITY
              </div>

              <h2>
                Your application can
                <br />
                <span>extend beyond you.</span>
              </h2>

              <p>
                Eligible family members may also receive residence permits
                connected to the investor's status, subject to the applicable
                requirements.
              </p>
            </div>

            <Link
              href="/program/benefits"
              className={styles.familyButton}
            >
              Explore Family Benefits
              <ArrowRight size={16} />
            </Link>
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
                <span>take the next step.</span>
              </h2>

              <p>
                A few of the questions investors commonly have before
                beginning their Golden Visa journey.
              </p>
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
                READY TO EXPLORE?
              </div>

              <h2>
                Find out where
                <br />
                <span>you stand.</span>
              </h2>

              <p>
                Understanding your eligibility before choosing an investment
                can help you approach the Golden Visa process with greater
                clarity.
              </p>
            </div>

            <Link
              href="/team/contact"
              className={styles.ctaButton}
            >
              Speak With an Advisor
              <ArrowRight size={17} />
            </Link>
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
              <strong>Legal information.</strong> This page provides general
              information about eligibility for the Greek Golden Visa and is
              not legal, tax, immigration or investment advice. Eligibility
              depends on the applicant's individual circumstances and the
              legislation and administrative requirements in force at the time
              of application.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

