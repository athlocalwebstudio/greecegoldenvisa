"use client";

import { useState } from "react";
import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import styles from "./page.module.css";

const consultationTopics = [
  {
    number: "01",
    titleKey: "goldenVisa",
    textKey: "goldenVisaText",
  },
  {
    number: "02",
    titleKey: "propertySearch",
    textKey: "propertySearchText",
  },
  {
    number: "03",
    titleKey: "propertyReview",
    textKey: "propertyReviewText",
  },
  {
    number: "04",
    titleKey: "investmentStrategy",
    textKey: "investmentStrategyText",
  },
];

const faqs = [
  {
    number: "01",
    questionKey: "01.question",
    answerKey: "01.answer",
  },
  {
    number: "02",
    questionKey: "02.question",
    answerKey: "02.answer",
  },
  {
    number: "03",
    questionKey: "03.question",
    answerKey: "03.answer",
  },
  {
    number: "04",
    questionKey: "04.question",
    answerKey: "04.answer",
  },
];

export default function ContactPage() {
  const { t } = useLanguage();
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

      alert(t("contact.form.error"));
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
              {t("contact.hero.eyebrow")}
            </div>

            <h1>
              {t("contact.hero.titleLine1")}
              <br />
              {t("contact.hero.titleLine2")} <em>{t("contact.hero.titleEmphasis")}</em>
            </h1>

            <p>{t("contact.hero.description")}</p>

            <div className={styles.heroActions}>
              <a
                href="tel:+306993229390"
                className={styles.primaryButton}
              >
                {t("contact.hero.callButton")}
                <span>↗</span>
              </a>

              <a
                href="mailto:higoldenvisa@gmail.com"
                className={styles.secondaryButton}
              >
                {t("contact.hero.emailButton")}
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <strong>{t("contact.hero.meta.direct")}</strong>
            <span>{t("contact.hero.meta.goldenVisa")}</span>
            <span>{t("contact.hero.meta.property")}</span>
            <span>{t("contact.hero.meta.dueDiligence")}</span>
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
                {t("contact.intro.label")}
              </div>

              <h2>
                {t("contact.intro.titleLine1")}
                <br />
                {t("contact.intro.titleLine2")} <span>{t("contact.intro.titleEmphasis")}</span>
              </h2>
            </div>

            <p>{t("contact.intro.description")}</p>
          </div>

          <div className={styles.advisorLayout}>
            <div className={styles.advisorImageWrap}>
              <img
                src="/portait_image_for_website.jpg"
                alt={t("contact.advisor.imageAlt")}
                className={styles.advisorImage}
              />

              <div className={styles.imageLabel}>
                <span>01</span>
                {t("contact.advisor.imageLabel")}
              </div>
            </div>

            <div className={styles.advisorContent}>
              <div className={styles.advisorTop}>
                <span>{t("contact.advisor.directContact")}</span>
                <span>{t("contact.advisor.location")}</span>
              </div>

              <h3>
                Svetlana
                <br />
                <span>Novikova</span>
              </h3>

              <div className={styles.credentials}>
                <span>{t("contact.advisor.credentials.civilEngineer")}</span>
                <span>{t("contact.advisor.credentials.goldenVisa")}</span>
                <span>{t("contact.advisor.credentials.dueDiligence")}</span>
                <span>{t("contact.advisor.credentials.realEstate")}</span>
              </div>

              <p>{t("contact.advisor.description")}</p>

              <div className={styles.advisorContacts}>
                <a href="https://wa.me/306993229390">
                  <small>{t("contact.advisor.phoneLabel")}</small>
                  <strong>+306993229390</strong>
                </a>

                <a href="mailto:higoldenvisa@gmail.com">
                  <small>{t("contact.advisor.emailLabel")}</small>
                  <strong>higoldenvisa@gmail.com</strong>
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
                {t("contact.topics.label")}
              </div>

              <h2>
                {t("contact.topics.titleLine1")}
                <br />
                {t("contact.topics.titleLine2")} <span>{t("contact.topics.titleEmphasis")}</span>
              </h2>
            </div>

            <p>{t("contact.topics.description")}</p>
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
                  <h3>{t(`contact.topics.items.${topic.titleKey}.title`)}</h3>
                  <p>{t(`contact.topics.items.${topic.titleKey}.text`)}</p>
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
                {t("contact.form.label")}
              </div>

              <h2>
                {t("contact.form.titleLine1")}
                <br />
                {t("contact.form.titleLine2")}
                <br />
                <span>{t("contact.form.titleEmphasis")}</span>
              </h2>

              <p>{t("contact.form.description")}</p>

              <div className={styles.formNote}>
                <span>01</span>

                <div>
                  <strong>{t("contact.form.noteTitle")}</strong>
                  <p>{t("contact.form.noteText")}</p>
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
                    <span>{t("contact.form.investorDetails")}</span>
                    <strong>01 / 04</strong>
                  </div>

                  <div className={styles.formRow}>
                    <label>
                      <span>{t("contact.form.fields.fullName.label")}</span>
                      <input
                        type="text"
                        name="name"
                        placeholder={t("contact.form.fields.fullName.placeholder")}
                        required
                      />
                    </label>

                    <label>
                      <span>{t("contact.form.fields.email.label")}</span>
                      <input
                        type="email"
                        name="email"
                        placeholder={t("contact.form.fields.email.placeholder")}
                        required
                      />
                    </label>
                  </div>

                  <div className={styles.formRow}>
                    <label>
                      <span>{t("contact.form.fields.phone.label")}</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+306993229390"
                      />
                    </label>

                    <label>
                      <span>{t("contact.form.fields.nationality.label")}</span>
                      <input
                        type="text"
                        name="nationality"
                        placeholder={t("contact.form.fields.nationality.placeholder")}
                      />
                    </label>
                  </div>

                  <div className={styles.formRow}>
                    <label>
                      <span>{t("contact.form.fields.budget.label")}</span>

                      <select
                        name="budget"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {t("contact.form.fields.budget.placeholder")}
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
                          {t("contact.form.fields.budget.undecided")}
                        </option>
                      </select>
                    </label>

                    <label>
                      <span>{t("contact.form.fields.propertyStatus.label")}</span>

                      <select
                        name="propertyStatus"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {t("contact.form.fields.propertyStatus.placeholder")}
                        </option>

                        <option value="looking">
                          {t("contact.form.fields.propertyStatus.looking")}
                        </option>

                        <option value="selected">
                          {t("contact.form.fields.propertyStatus.selected")}
                        </option>

                        <option value="considering">
                          {t("contact.form.fields.propertyStatus.considering")}
                        </option>

                        <option value="none">
                          {t("contact.form.fields.propertyStatus.none")}
                        </option>
                      </select>
                    </label>
                  </div>

                  <div className={styles.fieldGroup}>
                    <span className={styles.fieldLabel}>
                      {t("contact.form.topicsLabel")}
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
                            value={t(
                              `contact.topics.items.${topic.titleKey}.title`
                            )}
                          />

                          <span>
                            <small>{topic.number}</small>
                            <strong>
                              {t(
                                `contact.topics.items.${topic.titleKey}.title`
                              )}
                            </strong>
                            <i>+</i>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <span className={styles.fieldLabel}>
                      {t("contact.form.languageLabel")}
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
                    <span>{t("contact.form.message.label")}</span>

                    <textarea
                      name="message"
                      rows="5"
                      placeholder={t("contact.form.message.placeholder")}
                    />
                  </label>

                  <div className={styles.formBottom}>
                    <p>{t("contact.form.disclaimer")}</p>

                    <button
                      type="submit"
                      className={styles.submitButton}
                    >
                      {t("contact.form.submit")}
                      <span>↗</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className={styles.successState}>
                  <div className={styles.successNumber}>✓</div>

                  <div className={styles.sectionLabel}>
                    {t("contact.success.label")}
                  </div>

                  <h3>
                    {t("contact.success.titleLine1")}
                    <br />
                    <span>{t("contact.success.titleLine2")}</span>
                  </h3>

                  <p>{t("contact.success.description")}</p>

                  <div className={styles.successActions}>
                    <a href="tel:+306993229390">
                      {t("contact.success.call")}
                      <span>↗</span>
                    </a>

                    <a href="mailto:higoldenvisa@gmail.com">
                      {t("contact.success.email")}
                      <span>↗</span>
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
                {t("contact.process.label")}
              </div>

              <h2>
                {t("contact.process.titleLine1")}
                <br />
                <span>{t("contact.process.titleLine2")}</span>
              </h2>

              <p>{t("contact.process.description")}</p>
            </div>

            <div className={styles.processList}>
              {["01", "02", "03", "04"].map((number) => (
                <div className={styles.processItem} key={number}>
                  <span>{number}</span>

                  <div>
                    <strong>{t(`contact.process.steps.${number}.title`)}</strong>
                    <p>{t(`contact.process.steps.${number}.text`)}</p>
                  </div>
                </div>
              ))}
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
                {t("contact.faq.label")}
              </div>

              <h2>
                {t("contact.faq.titleLine1")}
                <br />
                {t("contact.faq.titleLine2")} <span>{t("contact.faq.titleEmphasis")}</span>
              </h2>

              <p>{t("contact.faq.description")}</p>
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

                    <span>{t(`contact.faq.items.${faq.questionKey}`)}</span>

                    <span className={styles.faqIcon}>↓</span>
                  </summary>

                  <div className={styles.answer}>
                    <p>{t(`contact.faq.items.${faq.answerKey}`)}</p>
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
                {t("contact.cta.label")}
              </div>

              <h2>
                {t("contact.cta.titleLine1")}
                <br />
                <span>{t("contact.cta.titleLine2")}</span>
              </h2>

              <p>{t("contact.cta.description")}</p>
            </div>

            <div className={styles.ctaActions}>
              <a
                href="tel:+306993229390"
                className={styles.ctaButton}
              >
                {t("contact.cta.call")}
                <span>↗</span>
              </a>

              <a
                href="mailto:higoldenvisa@gmail.com"
                className={styles.ctaButtonSecondary}
              >
                {t("contact.cta.email")}
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
              <strong>{t("contact.legal.important")}</strong>{" "}
              {t("contact.legal.text")}
            </p>
          </div>
        </div>
      </section>

      <div className={styles.bottomLink}>
        <div className={styles.container}>
          <LocalizedLink href="/">
            ← {t("contact.bottomLink")}
          </LocalizedLink>
        </div>
      </div>
    </main>
  );
}