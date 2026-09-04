"use client";

import Link from "next/link";
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
    eyebrow: "EXPERTISE",
    title: "A property is checked before it is recommended.",
    text: "The objective is not simply to find something attractive. It is to understand whether a property makes sense for your investment, your intended use and your wider Golden Visa strategy.",
    points: [
      "Technical perspective",
      "Property suitability",
      "Documentation awareness",
      "Investment-focused assessment",
    ],
  },
  {
    number: "02",
    icon: Sparkles,
    eyebrow: "PERSONAL STRATEGY",
    title: "Your investment starts with your objectives.",
    text: "Every investor arrives with different priorities. Budget, location, family plans, lifestyle, rental potential and residency objectives all influence what the right property looks like.",
    points: [
      "Understand your priorities",
      "Define the right route",
      "Shortlist with purpose",
      "Avoid unnecessary options",
    ],
  },
  {
    number: "03",
    icon: HeartHandshake,
    eyebrow: "COMPLETE GUIDANCE",
    title: "You do not have to navigate Greece alone.",
    text: "A property purchase can involve several professionals and several stages. The role here is to keep those moving parts connected while the appropriate specialist handles each area of expertise.",
    points: [
      "Engineer coordination",
      "Legal collaboration",
      "Notary coordination",
      "Residency support",
    ],
  },
  {
    number: "04",
    icon: MapPin,
    eyebrow: "LOCAL KNOWLEDGE",
    title: "Advice from someone who knows Greece personally.",
    text: "Svetlana does not approach Greece as a distant market. She lives the country, owns a home here and understands the practical difference between looking at Greece online and actually choosing where to invest.",
    points: [
      "Local perspective",
      "Area knowledge",
      "Real-life context",
      "Long-term thinking",
    ],
  },
];

const trustStandards = [
  {
    icon: FileCheck2,
    title: "Technical attention",
    text: "Property condition and technical matters deserve attention before a purchase decision is made.",
  },
  {
    icon: Users,
    title: "The right professionals",
    text: "Legal, notarial, engineering and accounting questions are directed to the appropriate professionals.",
  },
  {
    icon: Globe2,
    title: "International communication",
    text: "Support is available in Greek, English and Russian, helping international investors communicate clearly.",
  },
  {
    icon: HeartHandshake,
    title: "Human support",
    text: "You work with a person who remains involved rather than being passed from department to department.",
  },
];

const investorPromises = [
  "No pressure to choose a property simply because it is available.",
  "Clear communication about what has been checked and what still needs specialist review.",
  "A focus on suitability, not just appearance.",
  "Coordination around the professionals required for the transaction.",
  "A strategy built around the investor's own objectives.",
];

const trustSteps = [
  {
    number: "01",
    title: "We understand",
    text: "We start with your objectives, budget, family situation and reason for investing in Greece.",
  },
  {
    number: "02",
    title: "We assess",
    text: "Potential properties are considered through the lens of suitability, technical matters and your investment strategy.",
  },
  {
    number: "03",
    title: "We coordinate",
    text: "The right professionals are brought into the process when legal, technical, tax or notarial expertise is required.",
  },
  {
    number: "04",
    title: "You decide",
    text: "You receive the information needed to make an informed decision without unnecessary pressure.",
  },
];

const faqs = [
  {
    question: "Is Homes in Greece a real estate agency?",
    answer:
      "Homes in Greece is Svetlana Novikova's business through which she combines Greek real estate services with her civil engineering background and Golden Visa advisory support. The approach is designed around the investor's wider objective rather than simply presenting properties.",
  },
  {
    question: "Does Svetlana personally inspect every property?",
    answer:
      "Property assessment should be approached according to the needs of each transaction. Where a formal specialist inspection, legal check or other professional opinion is required, the appropriate qualified professional should be involved. The goal is to identify what needs checking before the investor commits.",
  },
  {
    question: "Who handles the legal side of the purchase?",
    answer:
      "Legal matters should be handled by the appropriate legal professional. Svetlana's role is to help coordinate the overall process and make sure the property, technical and residency considerations are connected with the relevant specialists.",
  },
  {
    question: "Can international investors communicate in their preferred language?",
    answer:
      "Support is available in Greek, English and Russian, helping international clients communicate throughout the process.",
  },
];

function ArrowIcon() {
  return <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" />;
}

export default function WhyClientsTrustUsPage() {
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
              WHY CLIENTS TRUST US
            </div>

            <h1>
              Trust is not
              <br />
              <em>promised.</em>
              <br />
              It is built.
            </h1>

            <p>
              Buying property in Greece from abroad requires more than finding
              a beautiful home. Investors need clear information, technical
              awareness, the right professionals and someone who understands
              what they are trying to achieve.
            </p>

            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Book a Private Consultation
                <ArrowIcon />
              </Link>

              <Link href="/investor-guide" className={styles.secondaryButton}>
                Explore the Investor Guide
              </Link>
            </div>
          </div>

          <div className={styles.heroSide}>
            <div className={styles.heroSideTop}>
              <Compass size={20} strokeWidth={1.4} />
              <span>THE TRUST FRAMEWORK</span>
            </div>

            <div className={styles.heroCompass}>
              <div className={styles.compassCircle}>
                <div className={styles.compassLineHorizontal} />
                <div className={styles.compassLineVertical} />
                <div className={styles.compassCenter}>
                  <span>YOUR</span>
                  <strong>INVESTMENT</strong>
                </div>

                <span className={`${styles.compassPoint} ${styles.north}`}>
                  EXPERTISE
                </span>

                <span className={`${styles.compassPoint} ${styles.east}`}>
                  STRATEGY
                </span>

                <span className={`${styles.compassPoint} ${styles.south}`}>
                  GUIDANCE
                </span>

                <span className={`${styles.compassPoint} ${styles.west}`}>
                  LOCAL
                </span>
              </div>
            </div>

            <div className={styles.heroSideBottom}>
              <strong>01 — 04</strong>
              <span>FOUR PRINCIPLES</span>
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
                WHAT INVESTORS REALLY NEED
              </div>

              <h2>
                The right answer is
                <br />
                <span>not always the easiest one.</span>
              </h2>
            </div>

            <p>
              International property investment involves decisions that go
              beyond price and photographs. A trusted advisor should help you
              understand the opportunity, identify what needs further
              checking and connect you with the professionals who can give you
              the right answers.
            </p>
          </div>

          <div className={styles.trustStatement}>
            <div className={styles.statementMark}>"</div>

            <div className={styles.statementBody}>
              <p>
                Our role is not to make every property look like the right
                property. It is to help you understand which opportunity
                actually makes sense for you.
              </p>

              <div className={styles.statementAuthor}>
                <span />
                <div>
                  <strong>Svetlana Novikova</strong>
                  <small>
                    Dipl. Civil Engineer · Golden Visa Advisor
                  </small>
                </div>
              </div>
            </div>

            <div className={styles.statementIndex}>TRUST / 01</div>
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
                FOUR REASONS
              </div>

              <h2>
                What makes the
                <br />
                <span>difference.</span>
              </h2>
            </div>

            <p>
              Trust is created through the way an investment is handled — not
              through a list of claims. These four principles shape the
              experience from the first conversation to the final decision.
            </p>
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
                    <strong>{pillar.eyebrow}</strong>

                    <h3>{pillar.title}</h3>

                    <p>{pillar.text}</p>

                    <ul>
                      {pillar.points.map((point) => (
                        <li key={point}>
                          <Check size={13} strokeWidth={2.2} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.pillarBottom}>
                    <span>WHY IT MATTERS</span>
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
                OUR STANDARD
              </div>

              <h2>
                A better experience
                <br />
                <span>starts before the purchase.</span>
              </h2>

              <p>
                The strongest form of trust is knowing what happens before you
                sign, pay or commit. The process should give investors enough
                clarity to understand both the opportunity and the questions
                that still need professional answers.
              </p>

              <Link
                href="/investor-guide/application-checklist"
                className={styles.textLink}
              >
                See the application checklist
                <ArrowIcon />
              </Link>
            </div>

            <div className={styles.standardList}>
              {trustStandards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article className={styles.standardItem} key={item.title}>
                    <div className={styles.standardNumber}>
                      0{index + 1}
                    </div>

                    <div className={styles.standardIcon}>
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <div className={styles.standardText}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
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
                <span>THE INVESTOR PROMISE</span>
              </div>

              <span className={styles.promiseIndex}>02 / 04</span>
            </div>

            <div className={styles.promiseGrid}>
              <div className={styles.promiseHeading}>
                <h2>
                  You should always
                  <br />
                  <span>know why.</span>
                </h2>

                <p>
                  Why this property? Why this location? What has been checked?
                  What still needs to be checked? Who is responsible for the
                  next step?
                </p>
              </div>

              <div className={styles.promiseList}>
                {investorPromises.map((promise, index) => (
                  <div className={styles.promiseItem} key={promise}>
                    <span>0{index + 1}</span>
                    <p>{promise}</p>
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
                HOW TRUST LOOKS IN PRACTICE
              </div>

              <h2>
                From first
                <br />
                <span>conversation to decision.</span>
              </h2>
            </div>

            <p>
              Trust should be visible in the process. That means understanding
              the investor first, assessing opportunities with purpose,
              coordinating the right people and leaving the final decision
              where it belongs — with the investor.
            </p>
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

                <h3>{step.title}</h3>
                <p>{step.text}</p>
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
                alt="Svetlana Novikova, Dipl. Civil Engineer and Golden Visa Advisor"
                className={styles.svetlanaImage}
              />

              <div className={styles.imageCaption}>
                <span>SVETLANA NOVIKOVA</span>
                <strong>GREECE</strong>
              </div>
            </div>

            <div className={styles.svetlanaContent}>
              <div className={styles.sectionLabel}>
                <span />
                THE PERSON BEHIND THE GUIDANCE
              </div>

              <h2>
                Someone who knows
                <br />
                <span>Greece beyond the transaction.</span>
              </h2>

              <p>
                Svetlana Novikova is a Dipl. Civil Engineer, Golden Visa
                Advisor and Real Estate Consultant. Her perspective combines
                property, engineering and residency considerations rather than
                treating them as completely separate decisions.
              </p>

              <p>
                She also has a home in Greece herself. That personal connection
                matters because choosing Greece is not only about an asset. For
                many investors, it is also about where they want to spend time,
                where their family may live and what kind of future they want
                to build.
              </p>

              <div className={styles.credentials}>
                <div>
                  <strong>01</strong>
                  <span>Dipl. Civil Engineer</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Golden Visa Advisor</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Greek · English · Russian</span>
                </div>
              </div>

              <Link href="/team/who-we-are" className={styles.svetlanaLink}>
                Meet Svetlana
                <ArrowIcon />
              </Link>
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
                TRUST, EXPLAINED
              </div>

              <h2>
                Questions
                <br />
                <span>investors ask.</span>
              </h2>

              <p>
                Transparency also means being clear about what this service is,
                what it is not and when another qualified professional should
                be involved.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details className={styles.faqItem} key={faq.question}>
                  <summary>
                    <span className={styles.faqNumber}>
                      0{index + 1}
                    </span>

                    <span>{faq.question}</span>

                    <ChevronDown
                      className={styles.faqIcon}
                      size={17}
                      strokeWidth={1.7}
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
                START WITH A CONVERSATION
              </div>

              <h2>
                Your investment deserves
                <br />
                <span>a clear direction.</span>
              </h2>

              <p>
                Tell us what you are looking for, what matters to you and what
                you hope to achieve in Greece. We will help you understand the
                next step.
              </p>
            </div>

            <Link href="/contact" className={styles.ctaButton}>
              Book a Private Consultation
              <ArrowIcon />
            </Link>
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

            <p>
              Information provided on this page is intended for general
              informational purposes. Legal, tax, engineering and other
              specialist matters should be confirmed with the appropriately
              qualified professional for the individual transaction.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}