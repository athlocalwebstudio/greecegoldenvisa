"use client";

import { useEffect } from "react";
import { useLanguage } from "@/app/LanguageContext";
import styles from "@/app/styles/legal.module.css";

export default function CookiePolicyPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t("cookies.metadata.title");
  }, [t]);

  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              {t("cookies.hero.eyebrow")}
            </div>

            <h1>
              {t("cookies.hero.title")}
              <br />
              <em>{t("cookies.hero.highlight")}</em>
            </h1>

            <p>{t("cookies.hero.description")}</p>

            <div className={styles.updated}>
              {t("cookies.hero.updated.label")}
              <strong>{t("cookies.hero.updated.date")}</strong>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>{t("cookies.hero.meta.website")}</span>
            <strong>{t("cookies.hero.meta.cookies")}</strong>
            <span>{t("cookies.hero.meta.privacy")}</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentLayout}>
            <aside className={styles.sideNav}>
              <span>{t("cookies.contents.label")}</span>

              <a href="#what">
                {t("cookies.contents.what")}
              </a>

              <a href="#necessary">
                {t("cookies.contents.necessary")}
              </a>

              <a href="#analytics">
                {t("cookies.contents.analytics")}
              </a>

              <a href="#marketing">
                {t("cookies.contents.marketing")}
              </a>

              <a href="#third-party">
                {t("cookies.contents.thirdParty")}
              </a>

              <a href="#consent">
                {t("cookies.contents.consent")}
              </a>

              <a href="#browser">
                {t("cookies.contents.browser")}
              </a>

              <a href="#changes">
                {t("cookies.contents.changes")}
              </a>

              <a href="#contact">
                {t("cookies.contents.contact")}
              </a>
            </aside>

            <article className={styles.legalContent}>
              <p className={styles.lead}>
                {t("cookies.lead")}
              </p>

              <section id="what">
                <span className={styles.sectionNumber}>01</span>

                <h2>{t("cookies.sections.what.title")}</h2>

                <p>
                  {t("cookies.sections.what.paragraph1")}
                </p>

                <p>
                  {t("cookies.sections.what.paragraph2")}
                </p>
              </section>

              <section id="necessary">
                <span className={styles.sectionNumber}>02</span>

                <h2>{t("cookies.sections.necessary.title")}</h2>

                <p>
                  {t("cookies.sections.necessary.paragraph1")}
                </p>

                <p>
                  {t("cookies.sections.necessary.paragraph2")}
                </p>

                <div className={styles.cookieCard}>
                  <div>
                    <strong>
                      {t("cookies.sections.necessary.card.title")}
                    </strong>

                    <span>
                      {t("cookies.sections.necessary.card.subtitle")}
                    </span>
                  </div>

                  <p>
                    {t("cookies.sections.necessary.card.description")}
                  </p>
                </div>
              </section>

              <section id="analytics">
                <span className={styles.sectionNumber}>03</span>

                <h2>{t("cookies.sections.analytics.title")}</h2>

                <p>
                  {t("cookies.sections.analytics.paragraph1")}
                </p>

                <p>
                  {t("cookies.sections.analytics.paragraph2")}
                </p>

                <p>
                  {t("cookies.sections.analytics.paragraph3")}
                </p>

                <div className={styles.cookieCard}>
                  <div>
                    <strong>
                      {t("cookies.sections.analytics.card.title")}
                    </strong>

                    <span>
                      {t("cookies.sections.analytics.card.subtitle")}
                    </span>
                  </div>

                  <p>
                    {t("cookies.sections.analytics.card.description")}
                  </p>
                </div>
              </section>

              <section id="marketing">
                <span className={styles.sectionNumber}>04</span>

                <h2>{t("cookies.sections.marketing.title")}</h2>

                <p>
                  {t("cookies.sections.marketing.paragraph1")}
                </p>

                <p>
                  {t("cookies.sections.marketing.paragraph2")}
                </p>

                <div className={styles.cookieCard}>
                  <div>
                    <strong>
                      {t("cookies.sections.marketing.card.title")}
                    </strong>

                    <span>
                      {t("cookies.sections.marketing.card.subtitle")}
                    </span>
                  </div>

                  <p>
                    {t("cookies.sections.marketing.card.description")}
                  </p>
                </div>
              </section>

              <section id="third-party">
                <span className={styles.sectionNumber}>05</span>

                <h2>{t("cookies.sections.thirdParty.title")}</h2>

                <p>
                  {t("cookies.sections.thirdParty.paragraph1")}
                </p>

                <p>
                  {t("cookies.sections.thirdParty.paragraph2")}
                </p>

                <p>
                  {t("cookies.sections.thirdParty.paragraph3")}
                </p>
              </section>

              <section id="consent">
                <span className={styles.sectionNumber}>06</span>

                <h2>{t("cookies.sections.consent.title")}</h2>

                <p>
                  {t("cookies.sections.consent.paragraph1")}
                </p>

                <p>
                  {t("cookies.sections.consent.paragraph2")}
                </p>

                <p>
                  {t("cookies.sections.consent.paragraph3")}
                </p>
              </section>

              <section id="browser">
                <span className={styles.sectionNumber}>07</span>

                <h2>{t("cookies.sections.browser.title")}</h2>

                <p>
                  {t("cookies.sections.browser.paragraph1")}
                </p>

                <p>
                  {t("cookies.sections.browser.paragraph2")}
                </p>
              </section>

              <section id="changes">
                <span className={styles.sectionNumber}>08</span>

                <h2>{t("cookies.sections.changes.title")}</h2>

                <p>
                  {t("cookies.sections.changes.paragraph1")}
                </p>

                <p>
                  {t("cookies.sections.changes.paragraph2")}
                </p>
              </section>

              <section id="contact">
                <span className={styles.sectionNumber}>09</span>

                <h2>{t("cookies.sections.contact.title")}</h2>

                <p>
                  {t("cookies.sections.contact.paragraph")}
                </p>

                <div className={styles.contactBox}>
                  <strong>Greece Golden Visa</strong>

                  <a href="mailto:higoldenvisa@gmail.com">
                    higoldenvisa@gmail.com
                  </a>
                </div>
              </section>

              <div className={styles.disclaimer}>
                <strong>{t("cookies.disclaimer.title")}</strong>

                <p>{t("cookies.disclaimer.description")}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}