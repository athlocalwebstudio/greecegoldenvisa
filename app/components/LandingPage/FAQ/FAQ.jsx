"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqItems = [
  {
    id: "01",
    category: "INVESTMENT",
    question: "What investment routes are currently available for the Greek Golden Visa?",
    answer:
      "The Greek Golden Visa offers different investment routes depending on the type, location and characteristics of the investment. The applicable minimum investment and conditions should always be confirmed based on the current legislation and your individual circumstances.",
    related: "Investment Routes",
  },
  {
    id: "02",
    category: "ELIGIBILITY",
    question: "Who can apply for the Greek Golden Visa?",
    answer:
      "The programme is designed for eligible non-EU citizens who make a qualifying investment in Greece. Eligibility depends on the applicant, the chosen investment route and the applicable requirements at the time of application.",
    related: "Check Your Eligibility",
  },
  {
    id: "03",
    category: "PROPERTY",
    question: "Can I choose any property in Greece?",
    answer:
      "Not every property automatically qualifies for every investment route. The property's location, type, use, value and other characteristics can affect its eligibility. This is why the property should be assessed carefully before you commit to the investment.",
    related: "Property Opportunities",
  },
  {
    id: "04",
    category: "DUE DILIGENCE",
    question: "What does your technical due diligence actually involve?",
    answer:
      "The property is reviewed from a technical perspective before you move forward. Depending on the property and transaction, this can involve examining relevant documentation, planning and building considerations, the property's physical condition and potential technical issues that could affect the investment.",
    related: "Technical Due Diligence",
  },
  {
    id: "05",
    category: "PROCESS",
    question: "How long does the entire process take?",
    answer:
      "There is no single timeline that applies to every investor. The overall process can depend on property selection, documentation, technical and legal checks, transaction completion and the relevant administrative procedures. Your case is coordinated step by step so you understand what is happening at each stage.",
    related: "Your Golden Visa Journey",
  },
  {
    id: "06",
    category: "PROFESSIONAL TEAM",
    question: "Who handles the legal, technical and administrative parts?",
    answer:
      "A Golden Visa investment involves several professional disciplines. The process can involve an engineer, lawyer, notary, accountant and other relevant professionals. The goal is to coordinate these parts around your investment so that you have one clear point of communication throughout the journey.",
    related: "Why Work With Us",
  },
  {
    id: "07",
    category: "COSTS",
    question: "What additional costs should I budget for?",
    answer:
      "The investment amount is not necessarily the only cost involved. Depending on the transaction, you may also have taxes, professional fees, notarial costs, technical costs, government or application fees and other property-related expenses. The exact costs should be assessed for your individual investment before proceeding.",
    related: "Investment Planning",
  },
  {
    id: "08",
    category: "FAMILY",
    question: "Can my family members also receive residence permits?",
    answer:
      "Eligible family members may be included under the applicable Golden Visa framework, subject to the requirements in force at the time of application. Your individual family situation should be reviewed before the application is prepared.",
    related: "Family Eligibility",
  },
  {
    id: "09",
    category: "RESIDENCE",
    question: "Do I need to live permanently in Greece?",
    answer:
      "The residence requirements of the Golden Visa programme are different from the rules that determine other matters such as tax residency. Your specific circumstances should therefore be considered separately, particularly if you plan to spend significant time in Greece or elsewhere.",
    related: "Golden Visa Requirements",
  },
  {
    id: "10",
    category: "THE NEXT STEP",
    question: "What happens after I choose my property?",
    answer:
      "Once a suitable property has been identified, the process can move into the relevant technical and legal checks, transaction coordination and preparation of the required documentation. The different professionals involved are coordinated around your case while you remain informed throughout the process.",
    related: "Your Golden Visa Journey",
  },
  {
    id: "11",
    category: "OUR APPROACH",
    question: "Why should I work with a civil engineer when investing in Greece?",
    answer:
      "A Golden Visa investment is not only an immigration process. The property itself is a significant part of your investment. Having a Dipl. Civil Engineer involved means the property can also be examined from a technical perspective before you commit, helping you make a more informed investment decision.",
    related: "Technical Due Diligence",
  },
];

function PlusIcon({ isOpen }) {
  return (
    <svg
      className={`${styles.plusIcon} ${isOpen ? styles.plusIconOpen : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className={styles.relatedArrow}
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 9H14.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M10 4.5L14.5 9L10 13.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        {/* =========================================
            INTRO
        ========================================= */}
        <div className={styles.intro}>
          <div className={styles.introLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>QUESTIONS, CLARIFIED</span>
            </div>

            <h2>
              Before You
              <br />
              <span>Invest in Greece</span>
            </h2>
          </div>

          <div className={styles.introRight}>
            <p>
              The important questions, answered clearly. From investment
              routes and property checks to the Golden Visa process itself,
              here are some of the questions international investors most
              often ask before moving forward.
            </p>

            <div className={styles.introMeta}>
              <span className={styles.metaNumber}>11</span>

              <div>
                <strong>Questions answered</strong>
                <span>Designed around the investor journey</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            FAQ BODY
        ========================================= */}
        <div className={styles.faqLayout}>
          {/* LEFT SIDE — SMALL TRUST PANEL */}
          <aside className={styles.sidePanel}>
            <div className={styles.sidePanelTop}>
              <span className={styles.sidePanelLabel}>
                A CLEARER WAY FORWARD
              </span>

              <div className={styles.sidePanelMark}>
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M10 16.5L14.2 20.5L22.5 11.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.sidePanelCopy}>
              <h3>
                Your questions
                <br />
                matter before
                <br />
                your investment.
              </h3>

              <p>
                Every investment is different. Understanding your objectives
                and the property itself comes before deciding how to move
                forward.
              </p>
            </div>

            <div className={styles.sidePanelFooter}>
              <span className={styles.footerLine} />

              <div>
                <strong>Dipl. Civil Engineer</strong>
                <span>Golden Visa Advisor</span>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE — ACCORDION */}
          <div className={styles.faqList}>
            {faqItems.map((item) => {
              const isOpen = openItems.includes(item.id);

              return (
                <article
                  className={`${styles.faqItem} ${
                    isOpen ? styles.faqItemOpen : ""
                  }`}
                  key={item.id}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className={styles.questionNumber}>
                      {item.id}
                    </span>

                    <span className={styles.questionMain}>
                      <span className={styles.questionCategory}>
                        {item.category}
                      </span>

                      <span className={styles.questionText}>
                        {item.question}
                      </span>
                    </span>

                    <span className={styles.iconWrapper}>
                      <PlusIcon isOpen={isOpen} />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    className={styles.answerWrapper}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.answerInner}>
                      <div className={styles.answerContent}>
                        <p>{item.answer}</p>

                        <a
                          href="#"
                          className={styles.relatedLink}
                          onClick={(event) => event.preventDefault()}
                        >
                          <span>{item.related}</span>
                          <ArrowIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================================
            FINAL CTA
        ========================================= */}
        <div className={styles.faqCta}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>
              STILL HAVE QUESTIONS?
            </span>

            <h3>
              Let&apos;s discuss
              <br />
              <span>your situation.</span>
            </h3>

            <p>
              Every investment starts with understanding your objectives,
              preferred location and the right route forward.
            </p>
          </div>

          <a href="#contact" className={styles.ctaButton}>
            <span>Start Your Free Assessment</span>

            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 10H16"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M11 5L16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}