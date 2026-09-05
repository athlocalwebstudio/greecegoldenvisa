"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const checklistSections = [
  {
    id: "identity",
    number: "01",
    title: "Identity & Entry",
    description:
      "The documents that establish your identity and your lawful basis for submitting the application.",
    items: [
      {
        id: "passport",
        title: "Valid passport or recognised travel document",
        description:
          "Provide a valid travel document recognised by the Greek authorities.",
        required: true,
      },
      {
        id: "entry-status",
        title: "Valid entry / residence status",
        description:
          "Depending on your circumstances, this may include the appropriate visa, visa exemption, or residence permit.",
        required: true,
      },
      {
        id: "photo",
        title: "Recent passport-style photograph",
        description:
          "A recent colour photograph meeting the applicable Greek passport specifications, including the required digital format.",
        required: true,
      },
      {
        id: "contact",
        title: "Email address and mobile phone",
        description:
          "Current contact details are required for the electronic application process.",
        required: true,
      },
    ],
  },
  {
    id: "investment",
    number: "02",
    title: "Investment Documentation",
    description:
      "Evidence showing that the qualifying investment has been completed and meets the applicable requirements.",
    items: [
      {
        id: "purchase-contract",
        title: "Property purchase documentation",
        description:
          "The relevant transfer deed or other transaction documentation for the qualifying investment.",
        required: true,
      },
      {
        id: "notarial-certificate",
        title: "Notarial certificate",
        description:
          "A certificate from the notary confirming the contracting parties, property details, consideration and payment details required under the Golden Visa framework.",
        required: true,
      },
      {
        id: "payment-proof",
        title: "Evidence of qualifying payment",
        description:
          "Documentation supporting the payment of the agreed consideration through an accepted payment method.",
        required: true,
      },
      {
        id: "land-registry",
        title: "Land Registry / Cadastre registration evidence",
        description:
          "Proof of registration or the applicable registration filing / lawyer's certificate.",
        required: true,
      },
      {
        id: "e9",
        title: "E9 real estate declaration",
        description:
          "A copy of the investor's Greek real estate declaration where applicable.",
        required: true,
      },
    ],
  },
  {
    id: "insurance",
    number: "03",
    title: "Insurance & Application",
    description:
      "Documents required to support the residence permit application itself.",
    items: [
      {
        id: "insurance",
        title: "Private health insurance",
        description:
          "An insurance contract from a private insurance provider covering the applicable requirements.",
        required: true,
      },
      {
        id: "application",
        title: "Residence permit application",
        description:
          "The application submitted through the electronic services of the Ministry of Migration and Asylum.",
        required: true,
      },
      {
        id: "fees",
        title: "Residence permit fees",
        description:
          "Confirm the applicable administrative fees and electronic residence permit printing charge before submission.",
        required: true,
      },
    ],
  },
  {
    id: "route",
    number: "04",
    title: "Route-Specific Documents",
    description:
      "Additional evidence may be required depending on the investment structure and property route.",
    items: [
      {
        id: "route-verification",
        title: "Investment route verified",
        description:
          "Confirm which Golden Visa route applies to the property before relying on a standard checklist.",
        required: true,
      },
      {
        id: "special-property",
        title: "Special property documentation",
        description:
          "Additional technical, legal or administrative evidence may apply to specific routes such as qualifying change-of-use or listed-building investments.",
        required: false,
      },
      {
        id: "company-ownership",
        title: "Company ownership evidence",
        description:
          "If the property is acquired through an eligible legal entity, evidence of the investor's ownership interests may be required.",
        required: false,
      },
    ],
  },
  {
    id: "professional",
    number: "05",
    title: "Professional Review",
    description:
      "The final stage is not simply collecting files. Each document needs to support the application correctly.",
    items: [
      {
        id: "legal-review",
        title: "Legal documentation reviewed",
        description:
          "Confirm that the transaction and supporting legal documents have been reviewed by the appropriate professional.",
        required: true,
      },
      {
        id: "technical-review",
        title: "Technical documentation reviewed",
        description:
          "Confirm that the property's technical status and any route-specific requirements have been checked by an engineer.",
        required: true,
      },
      {
        id: "application-review",
        title: "Application file reviewed before submission",
        description:
          "Complete a final consistency check before the application is submitted.",
        required: true,
      },
    ],
  },
];

const allItems = checklistSections.flatMap((section) => section.items);

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.checkIcon}
    >
      <path d="M5 12.5 9.2 17 19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.arrowIcon}
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ApplicationChecklistPage() {
  const [completed, setCompleted] = useState([]);

  const completedCount = completed.length;
  const totalCount = allItems.length;

  const progress = useMemo(() => {
    if (!totalCount) return 0;
    return Math.round((completedCount / totalCount) * 100);
  }, [completedCount, totalCount]);

  const toggleItem = (id) => {
    setCompleted((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const resetChecklist = () => {
    setCompleted([]);
  };

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.sectionLabel}>
              APPLICATION CHECKLIST
            </span>

            <h1>
              Know what&apos;s ready.
              <br />
              Know what&apos;s missing.
            </h1>

            <p>
              Keep track of the documents, requirements and professional
              checks that come together before a Greek Golden Visa
              application is submitted.
            </p>

            <div className={styles.heroActions}>
              <a href="#checklist" className={styles.primaryButton}>
                Start Your Checklist
                <ArrowIcon />
              </a>

              <Link
                href="/investor-guide/investor-handbook"
                className={styles.secondaryButton}
              >
                Explore the Investor Guide
              </Link>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>APPLICATION READINESS</span>
            <span>01 / 05</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <span className={styles.sectionLabel}>BEFORE YOU APPLY</span>

              <h2>
                A complete file is more than a pile of documents.
              </h2>
            </div>

            <div className={styles.introCopy}>
              <p>
                A Golden Visa application brings together personal,
                investment, property and insurance documentation. Some
                requirements also depend on the specific investment route.
              </p>

              <p>
                Use this checklist as a planning tool to see where you stand.
                Your final file should be reviewed against the requirements
                that apply to your individual case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className={styles.progressSection} id="checklist">
        <div className={styles.container}>
          <div className={styles.progressCard}>
            <div className={styles.progressTop}>
              <div>
                <span className={styles.progressLabel}>
                  YOUR APPLICATION READINESS
                </span>

                <strong>{progress}%</strong>
              </div>

              <div className={styles.progressCount}>
                <span>{completedCount}</span>
                <small>/ {totalCount} checked</small>
              </div>
            </div>

            <div className={styles.progressTrack}>
              <span style={{ width: `${progress}%` }} />
            </div>

            <div className={styles.progressBottom}>
              <span>
                {progress === 100
                  ? "Your checklist is complete."
                  : "Check each item as you prepare your application."}
              </span>

              {completedCount > 0 && (
                <button
                  type="button"
                  className={styles.resetButton}
                  onClick={resetChecklist}
                >
                  Reset checklist
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className={styles.checklistSection}>
        <div className={styles.container}>
          <div className={styles.checklistHeader}>
            <div>
              <span className={styles.sectionLabel}>DOCUMENT TRACKER</span>

              <h2>Build your application file.</h2>
            </div>

            <p>
              Start with the essentials, then complete the route-specific and
              professional checks that apply to your investment.
            </p>
          </div>

          <div className={styles.sections}>
            {checklistSections.map((section) => {
              const sectionCompleted = section.items.filter((item) =>
                completed.includes(item.id)
              ).length;

              return (
                <section
                  className={styles.checklistBlock}
                  key={section.id}
                >
                  <div className={styles.blockIntro}>
                    <div className={styles.blockNumber}>
                      {section.number}
                    </div>

                    <div className={styles.blockTitle}>
                      <h3>{section.title}</h3>

                      <p>{section.description}</p>
                    </div>

                    <div className={styles.blockProgress}>
                      {sectionCompleted}/{section.items.length}
                    </div>
                  </div>

                  <div className={styles.items}>
                    {section.items.map((item) => {
                      const isComplete = completed.includes(item.id);

                      return (
                        <label
                          key={item.id}
                          className={`${styles.item} ${
                            isComplete ? styles.itemComplete : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isComplete}
                            onChange={() => toggleItem(item.id)}
                            aria-label={`Mark ${item.title} as complete`}
                          />

                          <span className={styles.customCheckbox}>
                            {isComplete && <CheckIcon />}
                          </span>

                          <span className={styles.itemContent}>
                            <span className={styles.itemTitle}>
                              {item.title}

                              {item.required && (
                                <span className={styles.required}>
                                  REQUIRED
                                </span>
                              )}
                            </span>

                            <span className={styles.itemDescription}>
                              {item.description}
                            </span>
                          </span>

                          <span className={styles.itemStatus}>
                            {isComplete ? "READY" : "TO CHECK"}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPORTANT DISTINCTION */}
      <section className={styles.noteSection}>
        <div className={styles.container}>
          <div className={styles.noteCard}>
            <div className={styles.noteMark}>!</div>

            <div>
              <span className={styles.sectionLabel}>IMPORTANT</span>

              <h2>
                Not every application follows the same document path.
              </h2>

              <p>
                Golden Visa requirements can change according to the
                investment route, property type and the applicant&apos;s
                circumstances. For example, current official procedures list
                additional evidence for qualifying listed-property and
                change-of-use investments.
              </p>

              <p>
                This checklist is designed to help you prepare and organise
                your file. It is not a substitute for legal advice or an
                official determination of eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className={styles.nextSection}>
        <div className={styles.container}>
          <div className={styles.nextHeader}>
            <span className={styles.sectionLabel}>
              WHEN THE FILE IS READY
            </span>

            <h2>
              Preparation becomes
              <br />
              the application.
            </h2>

            <p>
              Once your documents have been gathered and reviewed, the
              application can move into the formal submission process.
            </p>
          </div>

          <div className={styles.nextSteps}>
            <div className={styles.nextStep}>
              <span>01</span>

              <strong>Final review</strong>

              <p>
                Check that the documents are complete, consistent and
                appropriate for the selected route.
              </p>
            </div>

            <div className={styles.nextStep}>
              <span>02</span>

              <strong>Online submission</strong>

              <p>
                The residence permit application is submitted through the
                relevant electronic services.
              </p>
            </div>

            <div className={styles.nextStep}>
              <span>03</span>

              <strong>Application review</strong>

              <p>
                The competent authority checks the supporting documentation
                and processes the application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <span className={styles.sectionLabel}>
              READY FOR THE NEXT STEP?
            </span>

            <h2>
              Your application should begin
              <br />
              with clarity.
            </h2>

            <p>
              If you are still choosing your route, property or investment
              strategy, get the right questions answered before you prepare
              the final file.
            </p>

            <div className={styles.ctaActions}>
              <Link
                href="/investor-guide/calculator"
                className={styles.primaryButton}
              >
                Review Your Investment Budget
                <ArrowIcon />
              </Link>

              <Link
                href="/team/contact"
                className={styles.secondaryButton}
              >
                Book a Private Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className={styles.disclaimer}>
        <div className={styles.container}>
          <p>
            <strong>Information note:</strong> This checklist is provided for
            general planning purposes and should not be treated as an official
            application checklist or legal advice. Requirements, fees and
            procedures may change. The final document list should be confirmed
            for the applicant&apos;s specific investment route and
            circumstances.
          </p>

          <div className={styles.sources}>
            <span>Based on current official Greek sources</span>

            <a
              href="https://migration.gov.gr/en/golden-visa/"
              target="_blank"
              rel="noreferrer"
            >
              Ministry of Migration &amp; Asylum
            </a>

            <a
              href="https://en.mitos.gov.gr/"
              target="_blank"
              rel="noreferrer"
            >
              National Registry of Administrative Procedures
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}