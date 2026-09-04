"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const consultationTopics = [
  {
    number: "01",
    title: "Golden Visa",
    text: "Eligibility, investment routes and the first steps toward residence in Greece.",
  },
  {
    number: "02",
    title: "Property Search",
    text: "Discuss the type of property, location and investment profile you are looking for.",
  },
  {
    number: "03",
    title: "Property Review",
    text: "Already found a property? Discuss the technical and investment questions that should be examined.",
  },
  {
    number: "04",
    title: "Investment Strategy",
    text: "Clarify your objectives, budget and the direction that makes sense for your plans.",
  },
];

const faqs = [
  {
    number: "01",
    question: "Do I need to have a property selected before contacting you?",
    answer:
      "No. You can reach out at any stage. If you are still comparing locations, investment routes or properties, the first conversation can simply help establish the right direction.",
  },
  {
    number: "02",
    question: "Can I contact you about a property I have already found?",
    answer:
      "Yes. If you are already considering a property in Greece, you can discuss the property, its suitability for your plans and the technical aspects that should be reviewed before proceeding.",
  },
  {
    number: "03",
    question: "What languages can I communicate in?",
    answer:
      "Support is available in English, Greek and Russian.",
  },
  {
    number: "04",
    question: "Will I need other professionals during the process?",
    answer:
      "Depending on your situation, legal, notarial, accounting and technical matters may require different specialists. The role here is to help coordinate the appropriate professionals around the investment process.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const topics = formData.getAll("topic");

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    nationality: formData.get("nationality"),
    budget: formData.get("budget"),
    propertyStatus: formData.get("propertyStatus"),
    language: formData.get("language"),
    topics,
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send enquiry.");
    }

    setSubmitted(true);
  } catch (error) {
    console.error("Contact form error:", error);

    alert(
      "We couldn't send your enquiry. Please try again or contact us directly."
    );
  }
}

  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              CONTACT OUR ADVISORS
            </div>

            <h1>
              Your questions
              <br />
              deserve a <em>specialist.</em>
            </h1>

            <p>
              Speak directly with someone who understands Greek property,
              technical due diligence and the Golden Visa investment process.
              Tell us where you are in your journey and we will help clarify
              what comes next.
            </p>

            <div className={styles.heroActions}>
              <a
                href="tel:+306993229390"
                className={styles.primaryButton}
              >
                Call +30 699 322 9390
                <span>↗</span>
              </a>

              <a
                href="mailto:info@homesingreece.eu"
                className={styles.secondaryButton}
              >
                Send an Email
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <strong>DIRECT CONTACT</strong>
            <span>GOLDEN VISA</span>
            <span>PROPERTY</span>
            <span>DUE DILIGENCE</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / ADVISOR
      ====================================================== */}

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.sectionLabel}>
                START THE CONVERSATION
              </div>

              <h2>
                Not sure where
                <br />
                to <span>begin?</span>
              </h2>
            </div>

            <p>
              You do not need to arrive with a finished investment plan.
              Whether you are researching Greece for the first time, comparing
              properties or already preparing to invest, the first step is
              simply understanding your situation.
            </p>
          </div>

          <div className={styles.advisorLayout}>
            <div className={styles.advisorImageWrap}>
              <img
                src="/portait_image_for_website.jpg"
                alt="Svetlana Novikova"
                className={styles.advisorImage}
              />

              <div className={styles.imageLabel}>
                <span>01</span>
                SVETLANA NOVIKOVA
              </div>
            </div>

            <div className={styles.advisorContent}>
              <div className={styles.advisorTop}>
                <span>YOUR DIRECT CONTACT</span>
                <span>ATHENS · GREECE</span>
              </div>

              <h3>
                Svetlana
                <br />
                <span>Novikova</span>
              </h3>

              <div className={styles.credentials}>
                <span>Dipl. Civil Engineer</span>
                <span>Golden Visa Advisor</span>
                <span>Technical Due Diligence Specialist</span>
                <span>Real Estate Consultant</span>
              </div>

              <p>
                With a background in civil engineering and Greek property,
                Svetlana brings a technical perspective to the investment
                conversation. Her role is to help investors understand the
                property, the practical considerations and the professionals
                required around the wider process.
              </p>

              <div className={styles.advisorContacts}>
                <a href="tel:+306993229390">
                  <small>PHONE / WHATSAPP</small>
                  <strong>+30 699 322 9390</strong>
                </a>

                <a href="mailto:info@homesingreece.eu">
                  <small>EMAIL</small>
                  <strong>info@homesingreece.eu</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTATION TOPICS
      ====================================================== */}

      <section className={styles.topicsSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.sectionLabel}>
                WHAT CAN WE DISCUSS?
              </div>

              <h2>
                Bring the question.
                <br />
                We find the <span>direction.</span>
              </h2>
            </div>

            <p>
              A Golden Visa investment can involve property, technical,
              financial and administrative considerations. Start with the
              part of the process that matters most to you.
            </p>
          </div>

          <div className={styles.topicGrid}>
            {consultationTopics.map((topic) => (
              <article
                key={topic.number}
                className={styles.topicCard}
              >
                <div className={styles.topicTop}>
                  <span>{topic.number}</span>
                  <span>↗</span>
                </div>

                <div>
                  <h3>{topic.title}</h3>
                  <p>{topic.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM
      ====================================================== */}

      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <div className={styles.sectionLabel}>
                PRIVATE ENQUIRY
              </div>

              <h2>
                Tell us
                <br />
                what you are
                <br />
                <span>planning.</span>
              </h2>

              <p>
                A few details help us understand your situation before the
                conversation begins.
              </p>

              <div className={styles.formNote}>
                <span>01</span>

                <div>
                  <strong>YOU DO NOT NEED ALL THE ANSWERS.</strong>
                  <p>
                    If you are still exploring your options, simply tell us
                    where you are now.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.formShell}>
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className={styles.form}
                >
                  <div className={styles.formHeader}>
                    <span>INVESTOR DETAILS</span>
                    <strong>01 / 04</strong>
                  </div>

                  <div className={styles.formRow}>
                    <label>
                      <span>FULL NAME</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        required
                      />
                    </label>

                    <label>
                      <span>EMAIL ADDRESS</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                      />
                    </label>
                  </div>

                  <div className={styles.formRow}>
                    <label>
                      <span>PHONE / WHATSAPP</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+XX ..."
                      />
                    </label>

                    <label>
                      <span>NATIONALITY</span>
                      <input
                        type="text"
                        name="nationality"
                        placeholder="Your nationality"
                      />
                    </label>
                  </div>

                  <div className={styles.formRow}>
                    <label>
                      <span>INVESTMENT BUDGET</span>

                      <select
                        name="budget"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a range
                        </option>

                        <option value="250000-400000">
                          €250,000 – €400,000
                        </option>

                        <option value="400000-800000">
                          €400,000 – €800,000
                        </option>

                        <option value="800000-plus">
                          €800,000+
                        </option>

                        <option value="undecided">
                          Still exploring
                        </option>
                      </select>
                    </label>

                    <label>
                      <span>PROPERTY STATUS</span>

                      <select
                        name="propertyStatus"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select an option
                        </option>

                        <option value="looking">
                          I am looking for a property
                        </option>

                        <option value="selected">
                          I have selected a property
                        </option>

                        <option value="considering">
                          I am considering several
                        </option>

                        <option value="none">
                          I have not started yet
                        </option>
                      </select>
                    </label>
                  </div>

                  <div className={styles.fieldGroup}>
                    <span className={styles.fieldLabel}>
                      WHAT WOULD YOU LIKE TO DISCUSS?
                    </span>

                    <div className={styles.optionGrid}>
                      {consultationTopics.map((topic) => (
                        <label
                          key={topic.number}
                          className={styles.option}
                        >
                          <input
                            type="checkbox"
                            name="topic"
                            value={topic.title}
                          />

                          <span>
                            <small>{topic.number}</small>
                            <strong>{topic.title}</strong>
                            <i>+</i>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <span className={styles.fieldLabel}>
                      PREFERRED LANGUAGE
                    </span>

                    <div className={styles.languageRow}>
                      <label>
                        <input
                          type="radio"
                          name="language"
                          value="English"
                          defaultChecked
                        />
                        <span>English</span>
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="language"
                          value="Greek"
                        />
                        <span>Greek</span>
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="language"
                          value="Russian"
                        />
                        <span>Russian</span>
                      </label>
                    </div>
                  </div>

                  <label className={styles.messageField}>
                    <span>MESSAGE</span>

                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell us about your plans, the property you are considering, or the question you want answered..."
                    />
                  </label>

                  <div className={styles.formBottom}>
                    <p>
                      By submitting this form, you are asking Homes in Greece
                      to respond to your enquiry.
                    </p>

                    <button
                      type="submit"
                      className={styles.submitButton}
                    >
                      Send Enquiry
                      <span>↗</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className={styles.successState}>
                  <div className={styles.successNumber}>✓</div>

                  <div className={styles.sectionLabel}>
                    ENQUIRY RECEIVED
                  </div>

                  <h3>
                    Thank you.
                    <br />
                    <span>Let's talk Greece.</span>
                  </h3>

                  <p>
                    Your enquiry has been received. You can also contact
                    Svetlana directly by phone or email if you would prefer to
                    continue the conversation that way.
                  </p>

                  <div className={styles.successActions}>
                    <a href="tel:+306993229390">
                      Call directly <span>↗</span>
                    </a>

                    <a href="mailto:info@homesingreece.eu">
                      Email directly <span>↗</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.processCard}>
            <div className={styles.processIntro}>
              <div className={styles.sectionLabel}>
                WHAT HAPPENS NEXT
              </div>

              <h2>
                One conversation.
                <br />
                <span>A clearer next step.</span>
              </h2>

              <p>
                The purpose of contacting us is not to overwhelm you with
                information. It is to understand what you are trying to
                achieve and identify what deserves attention next.
              </p>
            </div>

            <div className={styles.processList}>
              <div className={styles.processItem}>
                <span>01</span>

                <div>
                  <strong>WE LISTEN</strong>
                  <p>
                    Your objectives, budget, nationality and current stage.
                  </p>
                </div>
              </div>

              <div className={styles.processItem}>
                <span>02</span>

                <div>
                  <strong>WE CLARIFY</strong>
                  <p>
                    The questions surrounding your investment, property or
                    Golden Visa plans.
                  </p>
                </div>
              </div>

              <div className={styles.processItem}>
                <span>03</span>

                <div>
                  <strong>WE IDENTIFY</strong>
                  <p>
                    The next practical steps and the areas that require
                    specialist attention.
                  </p>
                </div>
              </div>

              <div className={styles.processItem}>
                <span>04</span>

                <div>
                  <strong>YOU DECIDE</strong>
                  <p>
                    Move forward with a clearer understanding of what comes
                    next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIntro}>
              <div className={styles.sectionLabel}>
                BEFORE YOU REACH OUT
              </div>

              <h2>
                A few things
                <br />
                worth <span>knowing.</span>
              </h2>

              <p>
                If you are wondering whether you are ready to get in touch,
                these are some of the most useful things to know first.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <details
                  key={faq.number}
                  className={styles.faqItem}
                >
                  <summary>
                    <span className={styles.faqNumber}>
                      {faq.number}
                    </span>

                    <span>{faq.question}</span>

                    <span className={styles.faqIcon}>↓</span>
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

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>↗</div>

            <div className={styles.ctaContent}>
              <div className={styles.sectionLabel}>
                READY WHEN YOU ARE
              </div>

              <h2>
                Start with a question.
                <br />
                <span>Not a commitment.</span>
              </h2>

              <p>
                Contact Homes in Greece directly and begin a conversation about
                your plans for Greece.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <a
                href="tel:+306993229390"
                className={styles.ctaButton}
              >
                Call Svetlana
                <span>↗</span>
              </a>

              <a
                href="mailto:info@homesingreece.eu"
                className={styles.ctaButtonSecondary}
              >
                Send an Email
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEGAL / CONTEXT
      ====================================================== */}

      <section className={styles.legalSection}>
        <div className={styles.container}>
          <div className={styles.legalInner}>
            <span>ⓘ</span>

            <p>
              <strong>Important:</strong> Information provided through this
              website is intended as general guidance. Golden Visa eligibility,
              property suitability and legal requirements depend on the
              individual circumstances of each investor and should be assessed
              with the appropriate qualified professionals.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.bottomLink}>
        <div className={styles.container}>
          <Link href="/">
            ← Back to the Golden Visa Guide
          </Link>
        </div>
      </div>
    </main>
  );
}