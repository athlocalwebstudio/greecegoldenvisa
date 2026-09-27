"use client";

import { useEffect } from "react";
import { useLanguage } from "@/app/LanguageContext";
import styles from "@/app/styles/legal.module.css";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t("privacy.metadata.title");
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
              {t("privacy.hero.eyebrow")}
            </div>

            <h1>
              {t("privacy.hero.title")}
              <br />
              <em>{t("privacy.hero.highlight")}</em>
            </h1>

            <p>{t("privacy.hero.description")}</p>

            <div className={styles.updated}>
              {t("privacy.hero.updated.label")}
              <strong>{t("privacy.hero.updated.date")}</strong>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>{t("privacy.hero.meta.greece")}</span>
            <strong>{t("privacy.hero.meta.dataProtection")}</strong>
            <span>{t("privacy.hero.meta.gdpr")}</span>
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
              <span>{t("privacy.contents.label")}</span>

              <a href="#controller">
                {t("privacy.contents.controller")}
              </a>

              <a href="#data">
                {t("privacy.contents.data")}
              </a>

              <a href="#purposes">
                {t("privacy.contents.purposes")}
              </a>

              <a href="#legal-basis">
                {t("privacy.contents.legalBasis")}
              </a>

              <a href="#sharing">
                {t("privacy.contents.sharing")}
              </a>

              <a href="#retention">
                {t("privacy.contents.retention")}
              </a>

              <a href="#rights">
                {t("privacy.contents.rights")}
              </a>

              <a href="#security">
                {t("privacy.contents.security")}
              </a>

              <a href="#transfers">
                {t("privacy.contents.transfers")}
              </a>

              <a href="#contact">
                {t("privacy.contents.contact")}
              </a>
            </aside>

            <article className={styles.legalContent}>
              <p className={styles.lead}>
                {t("privacy.lead")}
              </p>

              <section id="controller">
                <span className={styles.sectionNumber}>01</span>

                <h2>{t("privacy.sections.controller.title")}</h2>

                <p>
                  {t("privacy.sections.controller.paragraph1")}
                </p>

                <div className={styles.infoBox}>
                  <strong>
                    {t("privacy.sections.controller.info.title")}
                  </strong>

                  <p>
                    Svetlana Novikova
                    <br />
                    6 P. TSALDARI
                    <br />
                    Athens, 10431, GREECE
                    <br />
                    Email: higoldenvisa@gmail.com
                  </p>
                </div>

                <p>
                  {t("privacy.sections.controller.paragraph2")}
                </p>
              </section>

              <section id="data">
                <span className={styles.sectionNumber}>02</span>

                <h2>{t("privacy.sections.data.title")}</h2>

                <p>
                  {t("privacy.sections.data.intro")}
                </p>

                <ul>
                  <li>{t("privacy.sections.data.items.name")}</li>
                  <li>{t("privacy.sections.data.items.email")}</li>
                  <li>{t("privacy.sections.data.items.nationality")}</li>
                  <li>{t("privacy.sections.data.items.budget")}</li>
                  <li>{t("privacy.sections.data.items.property")}</li>
                  <li>{t("privacy.sections.data.items.language")}</li>
                  <li>{t("privacy.sections.data.items.message")}</li>
                </ul>

                <p>
                  {t("privacy.sections.data.paragraph1")}
                </p>

                <p>
                  {t("privacy.sections.data.paragraph2")}
                </p>
              </section>

              <section id="purposes">
                <span className={styles.sectionNumber}>03</span>

                <h2>{t("privacy.sections.purposes.title")}</h2>

                <p>{t("privacy.sections.purposes.intro")}</p>

                <ul>
                  <li>{t("privacy.sections.purposes.items.enquiries")}</li>
                  <li>{t("privacy.sections.purposes.items.options")}</li>
                  <li>{t("privacy.sections.purposes.items.property")}</li>
                  <li>{t("privacy.sections.purposes.items.services")}</li>
                  <li>{t("privacy.sections.purposes.items.professionals")}</li>
                  <li>{t("privacy.sections.purposes.items.website")}</li>
                  <li>{t("privacy.sections.purposes.items.security")}</li>
                  <li>{t("privacy.sections.purposes.items.legal")}</li>
                </ul>
              </section>

              <section id="legal-basis">
                <span className={styles.sectionNumber}>04</span>

                <h2>{t("privacy.sections.legalBasis.title")}</h2>

                <p>
                  {t("privacy.sections.legalBasis.intro")}
                </p>

                <ul>
                  <li>
                    <strong>
                      {t("privacy.sections.legalBasis.items.consent.title")}
                    </strong>{" "}
                    {t("privacy.sections.legalBasis.items.consent.description")}
                  </li>

                  <li>
                    <strong>
                      {t("privacy.sections.legalBasis.items.contract.title")}
                    </strong>{" "}
                    {t("privacy.sections.legalBasis.items.contract.description")}
                  </li>

                  <li>
                    <strong>
                      {t("privacy.sections.legalBasis.items.legal.title")}
                    </strong>{" "}
                    {t("privacy.sections.legalBasis.items.legal.description")}
                  </li>

                  <li>
                    <strong>
                      {t("privacy.sections.legalBasis.items.interests.title")}
                    </strong>{" "}
                    {t("privacy.sections.legalBasis.items.interests.description")}
                  </li>
                </ul>

                <p>
                  {t("privacy.sections.legalBasis.paragraph")}
                </p>
              </section>

              <section id="sharing">
                <span className={styles.sectionNumber}>05</span>

                <h2>{t("privacy.sections.sharing.title")}</h2>

                <p>{t("privacy.sections.sharing.paragraph1")}</p>

                <p>{t("privacy.sections.sharing.paragraph2")}</p>

                <p>{t("privacy.sections.sharing.paragraph3")}</p>

                <p>{t("privacy.sections.sharing.paragraph4")}</p>
              </section>

              <section id="retention">
                <span className={styles.sectionNumber}>06</span>

                <h2>{t("privacy.sections.retention.title")}</h2>

                <p>{t("privacy.sections.retention.paragraph1")}</p>

                <p>{t("privacy.sections.retention.paragraph2")}</p>
              </section>

              <section id="rights">
                <span className={styles.sectionNumber}>07</span>

                <h2>{t("privacy.sections.rights.title")}</h2>

                <p>{t("privacy.sections.rights.intro")}</p>

                <ul>
                  <li>{t("privacy.sections.rights.items.access")}</li>
                  <li>{t("privacy.sections.rights.items.correction")}</li>
                  <li>{t("privacy.sections.rights.items.deletion")}</li>
                  <li>{t("privacy.sections.rights.items.restriction")}</li>
                  <li>{t("privacy.sections.rights.items.objection")}</li>
                  <li>{t("privacy.sections.rights.items.portability")}</li>
                  <li>{t("privacy.sections.rights.items.withdraw")}</li>
                </ul>

                <p>{t("privacy.sections.rights.paragraph1")}</p>

                <p>{t("privacy.sections.rights.paragraph2")}</p>
              </section>

              <section id="security">
                <span className={styles.sectionNumber}>08</span>

                <h2>{t("privacy.sections.security.title")}</h2>

                <p>{t("privacy.sections.security.paragraph1")}</p>

                <p>{t("privacy.sections.security.paragraph2")}</p>
              </section>

              <section id="transfers">
                <span className={styles.sectionNumber}>09</span>

                <h2>{t("privacy.sections.transfers.title")}</h2>

                <p>{t("privacy.sections.transfers.paragraph1")}</p>

                <p>{t("privacy.sections.transfers.paragraph2")}</p>
              </section>

              <section id="contact">
                <span className={styles.sectionNumber}>10</span>

                <h2>{t("privacy.sections.contact.title")}</h2>

                <p>{t("privacy.sections.contact.paragraph")}</p>

                <div className={styles.contactBox}>
                  <strong>Greece Golden Visa</strong>

                  <a href="mailto:higoldenvisa@gmail.com">
                    higoldenvisa@gmail.com
                  </a>
                </div>
              </section>

              <div className={styles.disclaimer}>
                <strong>{t("privacy.disclaimer.title")}</strong>

                <p>{t("privacy.disclaimer.description")}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}