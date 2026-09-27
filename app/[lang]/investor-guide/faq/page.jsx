"use client";

import { useState } from "react";
import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import styles from "./page.module.css";

const faqItems = [
  {
    id: "01",
    categoryKey: "faq.items.01.category",
    questionKey: "faq.items.01.question",
    answerKey: "faq.items.01.answer",
    relatedKey: "faq.items.01.related",
  },
  {
    id: "02",
    categoryKey: "faq.items.02.category",
    questionKey: "faq.items.02.question",
    answerKey: "faq.items.02.answer",
    relatedKey: "faq.items.02.related",
  },
  {
    id: "03",
    categoryKey: "faq.items.03.category",
    questionKey: "faq.items.03.question",
    answerKey: "faq.items.03.answer",
    relatedKey: "faq.items.03.related",
  },
  {
    id: "04",
    categoryKey: "faq.items.04.category",
    questionKey: "faq.items.04.question",
    answerKey: "faq.items.04.answer",
    relatedKey: "faq.items.04.related",
  },
  {
    id: "05",
    categoryKey: "faq.items.05.category",
    questionKey: "faq.items.05.question",
    answerKey: "faq.items.05.answer",
    relatedKey: "faq.items.05.related",
  },
  {
    id: "06",
    categoryKey: "faq.items.06.category",
    questionKey: "faq.items.06.question",
    answerKey: "faq.items.06.answer",
    relatedKey: "faq.items.06.related",
  },
  {
    id: "07",
    categoryKey: "faq.items.07.category",
    questionKey: "faq.items.07.question",
    answerKey: "faq.items.07.answer",
    relatedKey: "faq.items.07.related",
  },
  {
    id: "08",
    categoryKey: "faq.items.08.category",
    questionKey: "faq.items.08.question",
    answerKey: "faq.items.08.answer",
    relatedKey: "faq.items.08.related",
  },
  {
    id: "09",
    categoryKey: "faq.items.09.category",
    questionKey: "faq.items.09.question",
    answerKey: "faq.items.09.answer",
    relatedKey: "faq.items.09.related",
  },
  {
    id: "10",
    categoryKey: "faq.items.10.category",
    questionKey: "faq.items.10.question",
    answerKey: "faq.items.10.answer",
    relatedKey: "faq.items.10.related",
  },
  {
    id: "11",
    categoryKey: "faq.items.11.category",
    questionKey: "faq.items.11.question",
    answerKey: "faq.items.11.answer",
    relatedKey: "faq.items.11.related",
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
  const { t } = useLanguage();
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
              <span>{t("faq.intro.eyebrow")}</span>
            </div>

            <h2>
              {t("faq.intro.titleLine1")}
              <br />
              <span>{t("faq.intro.titleLine2")}</span>
            </h2>
          </div>

          <div className={styles.introRight}>
            <p>{t("faq.intro.description")}</p>

            <div className={styles.introMeta}>
              <span className={styles.metaNumber}>11</span>

              <div>
                <strong>{t("faq.intro.questionsAnswered")}</strong>
                <span>{t("faq.intro.metaDescription")}</span>
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
                {t("faq.sidePanel.label")}
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
                {t("faq.sidePanel.titleLine1")}
                <br />
                {t("faq.sidePanel.titleLine2")}
                <br />
                {t("faq.sidePanel.titleLine3")}
              </h3>

              <p>{t("faq.sidePanel.description")}</p>
            </div>

            <div className={styles.sidePanelFooter}>
              <span className={styles.footerLine} />

              <div>
                <strong>{t("faq.sidePanel.profession")}</strong>
                <span>{t("faq.sidePanel.role")}</span>
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
                        {t(item.categoryKey)}
                      </span>

                      <span className={styles.questionText}>
                        {t(item.questionKey)}
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
                        <p>{t(item.answerKey)}</p>

                        <a
                          href="#"
                          className={styles.relatedLink}
                          onClick={(event) => event.preventDefault()}
                        >
                          <span>{t(item.relatedKey)}</span>
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
              {t("faq.cta.eyebrow")}
            </span>

            <h3>
              {t("faq.cta.titleLine1")}
              <br />
              <span>{t("faq.cta.titleLine2")}</span>
            </h3>

            <p>{t("faq.cta.description")}</p>
          </div>

          <LocalizedLink
            href="/team/contact"
            className={styles.ctaButton}
          >
            <span>{t("faq.cta.button")}</span>

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
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}