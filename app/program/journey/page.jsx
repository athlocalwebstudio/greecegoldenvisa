
import Link from "next/link";
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

export const metadata = {
  title: "Greek Golden Visa Application Journey | Golden Visa Greece",
  description:
    "Understand the key stages of the Greek Golden Visa journey, from eligibility and investment strategy to property due diligence, transaction coordination and residence permit application.",
};

const journeySteps = [
  {
    number: "01",
    label: "STRATEGY",
    title: "Understand your starting point.",
    text:
      "Before looking at properties, we establish your eligibility, investment objectives, preferred location and the Golden Visa route that may be appropriate for your circumstances.",
    icon: UserCheck,
    outcome: "A clearer investment strategy",
  },
  {
    number: "02",
    label: "INVESTMENT",
    title: "Identify the right opportunity.",
    text:
      "The search should begin with the requirements of your chosen route. Location, property type, investment structure and budget all matter before a property is considered suitable.",
    icon: Search,
    outcome: "A property aligned with your strategy",
  },
  {
    number: "03",
    label: "DUE DILIGENCE",
    title: "Verify before you commit.",
    text:
      "A property should be examined before the transaction moves forward. Technical characteristics, ownership information and the conditions relevant to the intended Golden Visa route need to be assessed.",
    icon: ClipboardCheck,
    outcome: "A more informed investment decision",
    featured: true,
  },
  {
    number: "04",
    label: "TRANSACTION",
    title: "Build the transaction correctly.",
    text:
      "Once the property is considered suitable, the relevant professionals coordinate the legal, technical, notarial and financial elements required to complete the investment.",
    icon: FileCheck2,
    outcome: "A completed qualifying investment",
  },
  {
    number: "05",
    label: "APPLICATION",
    title: "Prepare and submit your application.",
    text:
      "The required documentation is assembled according to the investment route and the applicant's circumstances before the residence permit application is submitted to the competent authority.",
    icon: FileText,
    outcome: "A complete application file",
  },
  {
    number: "06",
    label: "RESIDENCE",
    title: "Move forward with confidence.",
    text:
      "Following the application process and the relevant administrative procedures, the residence permit can be issued when the applicable requirements have been satisfied.",
    icon: ShieldCheck,
    outcome: "Greek residence permit",
  },
];

const decisionPoints = [
  {
    number: "01",
    title: "Which investment route fits you?",
    text:
      "The €250K, €400K and €800K routes have different qualifying conditions. The right starting point depends on your circumstances and intended investment.",
  },
  {
    number: "02",
    title: "Is the property actually suitable?",
    text:
      "Price alone does not determine whether a property is appropriate. Location, use, ownership structure and technical characteristics can all matter.",
  },
  {
    number: "03",
    title: "Should you proceed with the transaction?",
    text:
      "The important decision comes before the purchase is completed. Relevant checks should be considered before you commit to the investment.",
  },
  {
    number: "04",
    title: "Is the application ready?",
    text:
      "The investment is only one part of the application. Supporting documents and evidence must also satisfy the applicable requirements.",
  },
];

const responsibilities = [
  {
    title: "YOUR ROLE",
    items: [
      "Define your investment objectives",
      "Provide the required personal information",
      "Choose the investment opportunity",
      "Approve the transaction",
      "Complete required signatures and payments",
    ],
  },
  {
    title: "OUR ROLE",
    items: [
      "Help establish the appropriate investment strategy",
      "Support the property assessment process",
      "Coordinate technical due diligence",
      "Coordinate with the relevant professionals",
      "Help organize the application process",
    ],
  },
];

const team = [
  {
    number: "01",
    title: "Civil Engineer",
    text: "Technical assessment and property due diligence.",
    icon: Home,
  },
  {
    number: "02",
    title: "Lawyer",
    text: "Legal review and transaction matters.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Notary",
    text: "Transaction documents and required certificates.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Accountant",
    text: "Financial and tax-related coordination.",
    icon: WalletCards,
  },
];

const delays = [
  {
    number: "01",
    title: "Documentation",
    text:
      "Missing, outdated or incorrectly prepared documents can create unnecessary delays.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Property",
    text:
      "Issues discovered during legal or technical checks may require clarification or additional work.",
    icon: Home,
  },
  {
    number: "03",
    title: "Transaction",
    text:
      "Contracts, payments, registrations and certificates can involve several parties and stages.",
    icon: Landmark,
  },
  {
    number: "04",
    title: "Administration",
    text:
      "Processing times can vary depending on the application and the workload of the competent authorities.",
    icon: Globe2,
  },
];

const faqs = [
  {
    question: "Do I need to choose a property before starting?",
    answer:
      "No. It can be useful to understand your eligibility and available investment routes before committing to a property. This can help you search according to the requirements that matter to your situation.",
  },
  {
    question: "What happens before I purchase a property?",
    answer:
      "The property and transaction should be assessed against the requirements relevant to the intended investment route. Depending on the property and circumstances, this can involve technical, legal and other checks.",
  },
  {
    question: "Why is technical due diligence important?",
    answer:
      "A property can look suitable from its price and location while still requiring further technical assessment. Reviewing the relevant characteristics before completing the investment can help identify issues earlier in the process.",
  },
  {
    question: "Who is involved in the process?",
    answer:
      "Depending on the transaction and applicant, the process can involve the investor, civil engineer, lawyer, notary, accountant, insurance provider and the relevant authorities.",
  },
  {
    question: "How long does the application take?",
    answer:
      "There is no single timeline that applies to every applicant. The overall process can depend on the investment route, property transaction, document preparation and the workload of the relevant authorities.",
  },
  {
    question: "Does buying the property guarantee the Golden Visa?",
    answer:
      "No. Completing an investment does not by itself guarantee approval. The investment, documentation and other applicable legal and administrative requirements must be satisfied.",
  },
];

export default function JourneyPage() {
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
              YOUR GOLDEN VISA JOURNEY
            </div>

            <h1>
              From the first decision
              <br />
              <em>to your residence permit.</em>
            </h1>

            <p>
              The application is only one part of the journey. Understand what
              happens before, during and after your investment — and where the
              right decisions matter most.
            </p>

            <div className={styles.heroActions}>
              <a href="#journey" className={styles.primaryButton}>
                Explore the Journey
                <ArrowDown size={16} />
              </a>

              <Link
                href="/program/eligibility"
                className={styles.secondaryButton}
              >
                Check Your Eligibility
              </Link>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>PROGRAM</span>
            <strong>APPLICATION</strong>
            <span>JOURNEY</span>
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
              <div className={styles.sectionLabel}>THE BIGGER PICTURE</div>

              <h2>
                The application is only
                <br />
                <span>one part of the journey.</span>
              </h2>
            </div>

            <div className={styles.introCopy}>
              <p>
                A Golden Visa investment begins before an application is ever
                submitted. The route you choose, the property you select and
                the checks completed before the transaction can all affect what
                happens later.
              </p>

              <p>
                Our role is to help connect these stages so that the investment
                is approached as a complete process rather than a series of
                disconnected tasks.
              </p>
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
              <div className={styles.sectionLabel}>THE JOURNEY</div>

              <h2>
                Six stages.
                <br />
                <span>One connected process.</span>
              </h2>
            </div>

            <p>
              Every application is different. The sequence below shows the
              principal stages an investor may move through when pursuing the
              Greek Golden Visa.
            </p>
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
                      <div className={styles.stepLabel}>{step.label}</div>

                      <div className={styles.stepIcon}>
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.text}</p>

                    <div className={styles.stepOutcome}>
                      <Check size={14} />
                      <span>{step.outcome}</span>
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

                <span>INVESTMENT</span>
                <strong>CHECKPOINT</strong>
              </div>

              <div className={`${styles.visualNode} ${styles.nodeTop}`}>
                <ShieldCheck size={15} />
                <span>PROGRAM</span>
              </div>

              <div className={`${styles.visualNode} ${styles.nodeRight}`}>
                <Home size={15} />
                <span>PROPERTY</span>
              </div>

              <div className={`${styles.visualNode} ${styles.nodeBottom}`}>
                <FileText size={15} />
                <span>DOCUMENTS</span>
              </div>

              <div className={`${styles.visualNode} ${styles.nodeLeft}`}>
                <Search size={15} />
                <span>REVIEW</span>
              </div>
            </div>

            <div className={styles.dueDiligenceContent}>
              <div className={styles.sectionLabel}>
                THE INVESTMENT CHECKPOINT
              </div>

              <h2>
                Verify before
                <br />
                <span>you commit.</span>
              </h2>

              <p>
                One of the most important moments in the journey comes before
                the transaction is completed. The property should be examined
                against the conditions that matter for the intended Golden Visa
                route.
              </p>

              <div className={styles.checkList}>
                <div>
                  <Check size={15} />
                  <span>Technical characteristics</span>
                </div>

                <div>
                  <Check size={15} />
                  <span>Ownership and property information</span>
                </div>

                <div>
                  <Check size={15} />
                  <span>Investment route requirements</span>
                </div>

                <div>
                  <Check size={15} />
                  <span>Transaction documentation</span>
                </div>
              </div>

              <p className={styles.dueNote}>
                The exact checks required depend on the property, investment
                route and individual circumstances.
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
            <div className={styles.sectionLabel}>THE MOMENTS THAT MATTER</div>

            <h2>
              The journey is not just
              <br />
              <span>about completing steps.</span>
            </h2>

            <p>
              Along the way, investors make decisions that can shape the rest
              of the process.
            </p>
          </div>

          <div className={styles.decisionGrid}>
            {decisionPoints.map((point) => (
              <article
                className={styles.decisionCard}
                key={point.number}
              >
                <span>{point.number}</span>

                <h3>{point.title}</h3>

                <p>{point.text}</p>

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
            <div className={styles.sectionLabel}>WHO DOES WHAT</div>

            <h2>
              You make the decisions.
              <br />
              <span>We coordinate the process.</span>
            </h2>
          </div>

          <div className={styles.responsibilitiesGrid}>
            {responsibilities.map((group, index) => (
              <article
                className={`${styles.responsibilityCard} ${
                  index === 1 ? styles.responsibilityFeatured : ""
                }`}
                key={group.title}
              >
                <div className={styles.responsibilityTop}>
                  <span>0{index + 1}</span>
                  <strong>{group.title}</strong>
                </div>

                <div className={styles.responsibilityList}>
                  {group.items.map((item) => (
                    <div key={item}>
                      <Check size={15} />
                      <span>{item}</span>
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
              <div className={styles.sectionLabel}>THE PROFESSIONAL TEAM</div>

              <h2>
                One investment.
                <br />
                <span>A coordinated team.</span>
              </h2>
            </div>

            <p>
              A Golden Visa transaction can involve several professionals.
              Coordination helps keep the technical, legal, financial and
              administrative parts connected.
            </p>
          </div>

          <div className={styles.teamLayout}>
            <div className={styles.teamCenter}>
              <div className={styles.teamCenterIcon}>
                <Users size={28} strokeWidth={1.4} />
              </div>

              <span>YOUR</span>
              <strong>INVESTMENT</strong>
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

                    <h3>{member.title}</h3>

                    <p>{member.text}</p>
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
            <div className={styles.sectionLabel}>WHAT CAN SLOW THINGS DOWN</div>

            <h2>
              Preparation matters
              <br />
              <span>before the application.</span>
            </h2>

            <p>
              Not every delay can be controlled. But understanding where
              complications can arise helps investors prepare more effectively.
            </p>
          </div>

          <div className={styles.delayGrid}>
            {delays.map((delay) => {
              const Icon = delay.icon;

              return (
                <article className={styles.delayCard} key={delay.number}>
                  <div className={styles.delayTop}>
                    <span>{delay.number}</span>

                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <h3>{delay.title}</h3>

                  <p>{delay.text}</p>
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
              <div className={styles.sectionLabel}>COMMON QUESTIONS</div>

              <h2>
                Before you
                <br />
                <span>begin.</span>
              </h2>

              <p>
                A few practical questions investors commonly have about the
                Golden Visa journey.
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

                    <ArrowDown
                      className={styles.faqIcon}
                      size={17}
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
                READY TO BEGIN?
              </div>

              <h2>
                Your journey starts
                <br />
                <span>with the right first step.</span>
              </h2>

              <p>
                Before choosing a property or committing to an investment,
                understand your situation and identify the path that makes
                sense for you.
              </p>
            </div>

            <Link
              href="/contact"
              className={styles.ctaButton}
            >
              Book a Private Consultation
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
              information about the Greek Golden Visa process and is not legal,
              tax, immigration or investment advice. The exact process,
              documentation and requirements depend on the investment route,
              applicant's circumstances and legislation and administrative
              requirements in force at the time of application.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

