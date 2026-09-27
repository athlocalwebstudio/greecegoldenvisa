"use client";

import Image from "next/image";
import styles from "./trustCompass.module.css";
import { useLanguage } from "@/app/LanguageContext";

export default function TrustCompass() {
  const { language, t } = useLanguage();

  return (
    <section
      className={styles.trustCompass}
      id="about"
      aria-labelledby="trust-heading"
    >
      <div className={styles.container}>

        {/* =========================================
            INTRO
        ========================================= */}

        <div className={styles.intro}>

          <span className={styles.eyebrow}>
            {t("trustCompass.intro.eyebrow")}
          </span>

          <h2 id="trust-heading">
            {t("trustCompass.intro.title")}
            <br />
            <span>{t("trustCompass.intro.highlight")}</span>
          </h2>

          <p className={styles.introText}>
            {t("trustCompass.intro.description")}
          </p>

        </div>


        {/* =========================================
            PROFILE + APPROACH
        ========================================= */}

        <div className={styles.mainGrid}>

          {/* =========================================
              SVETLANA PROFILE
          ========================================= */}

          <article className={styles.profileCard}>

            <div className={styles.profileImageWrap}>

              <Image
                src="/portait_image_for_website.jpg"
                alt={t("trustCompass.profile.imageAlt")}
                fill
                sizes="(max-width: 900px) 100vw, 460px"
                className={styles.profileImage}
              />

              <div className={styles.imageOverlay} />

              <div className={styles.profileBadge}>
                <span className={styles.badgeDot} />
                {t("trustCompass.profile.badge")}
              </div>

            </div>


            <div className={styles.profileContent}>

              <span className={styles.profileEyebrow}>
                {t("trustCompass.profile.eyebrow")}
              </span>

              <h3>
                Svetlana
                <br />
                Novikova
              </h3>

              <p className={styles.profileRole}>
                {t("trustCompass.profile.role.engineer")}
                <span>·</span>
                {t("trustCompass.profile.role.advisor")}
              </p>

              <p className={styles.profileDescription}>
                {t("trustCompass.profile.description")}
              </p>


              {/* CREDENTIALS */}

              <div className={styles.credentials}>

                <div className={styles.credential}>
                  <strong>15+</strong>
                  <span>
                    {t("trustCompass.profile.credentials.experience")}
                  </span>
                </div>

                <div className={styles.credential}>
                  <strong>1,000+</strong>
                  <span>
                    {t("trustCompass.profile.credentials.properties")}
                  </span>
                </div>

              </div>


              {/* LANGUAGES */}

              <div className={styles.languages}>

                <div className={styles.languageList}>

                  <span
                    className={
                      language === "en"
                        ? styles.languageActive
                        : ""
                    }
                  >
                    EN
                  </span>

                  <span>GR</span>

                  <span
                    className={
                      language === "ru"
                        ? styles.languageActive
                        : ""
                    }
                  >
                    RU
                  </span>

                </div>

                <p>
                  {t("trustCompass.profile.languages")}
                </p>

              </div>

            </div>

          </article>


          {/* =========================================
              PROFESSIONAL APPROACH
          ========================================= */}

          <div className={styles.approach}>

            <div className={styles.approachHeader}>

              <div>

                <span className={styles.sectionLabel}>
                  {t("trustCompass.approach.eyebrow")}
                </span>

                <h3>
                  {t("trustCompass.approach.title")}
                  <br />
                  {t("trustCompass.approach.highlight")}
                </h3>

              </div>

              <span className={styles.approachIndex}>
                01 / 04
              </span>

            </div>


            {/* POINT 01 */}

            <div className={styles.approachItem}>

              <div className={styles.approachNumber}>
                01
              </div>

              <div className={styles.approachContent}>

                <h4>
                  {t("trustCompass.approach.items.engineer.title")}
                </h4>

                <p>
                  {t("trustCompass.approach.items.engineer.description")}
                </p>

              </div>

              <span className={styles.approachArrow}>
                ↗
              </span>

            </div>


            {/* POINT 02 */}

            <div className={styles.approachItem}>

              <div className={styles.approachNumber}>
                02
              </div>

              <div className={styles.approachContent}>

                <h4>
                  {t("trustCompass.approach.items.independent.title")}
                </h4>

                <p>
                  {t(
                    "trustCompass.approach.items.independent.description"
                  )}
                </p>

              </div>

              <span className={styles.approachArrow}>
                ↗
              </span>

            </div>


            {/* POINT 03 */}

            <div className={styles.approachItem}>

              <div className={styles.approachNumber}>
                03
              </div>

              <div className={styles.approachContent}>

                <h4>
                  {t("trustCompass.approach.items.coordinated.title")}
                </h4>

                <p>
                  {t(
                    "trustCompass.approach.items.coordinated.description"
                  )}
                </p>

              </div>

              <span className={styles.approachArrow}>
                ↗
              </span>

            </div>


            {/* POINT 04 */}

            <div className={styles.approachItem}>

              <div className={styles.approachNumber}>
                04
              </div>

              <div className={styles.approachContent}>

                <h4>
                  {t("trustCompass.approach.items.international.title")}
                </h4>

                <p>
                  {t(
                    "trustCompass.approach.items.international.description"
                  )}
                </p>

              </div>

              <span className={styles.approachArrow}>
                ↗
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            TECHNICAL DUE DILIGENCE
        ========================================= */}

        <div className={styles.dueDiligence}>

          <div className={styles.dueIntro}>

            <span className={styles.eyebrow}>
              {t("trustCompass.dueDiligence.eyebrow")}
            </span>

            <h3>
              {t("trustCompass.dueDiligence.title")}
              <br />
              {t("trustCompass.dueDiligence.highlight")}
            </h3>

            <p>
              {t("trustCompass.dueDiligence.description")}
            </p>

          </div>


          <div className={styles.checkList}>

            <div className={styles.checkItem}>

              <span>01</span>

              <div>
                <strong>
                  {t(
                    "trustCompass.dueDiligence.items.planning.title"
                  )}
                </strong>

                <p>
                  {t(
                    "trustCompass.dueDiligence.items.planning.description"
                  )}
                </p>
              </div>

            </div>


            <div className={styles.checkItem}>

              <span>02</span>

              <div>
                <strong>
                  {t(
                    "trustCompass.dueDiligence.items.unauthorised.title"
                  )}
                </strong>

                <p>
                  {t(
                    "trustCompass.dueDiligence.items.unauthorised.description"
                  )}
                </p>
              </div>

            </div>


            <div className={styles.checkItem}>

              <span>03</span>

              <div>
                <strong>
                  {t(
                    "trustCompass.dueDiligence.items.documentation.title"
                  )}
                </strong>

                <p>
                  {t(
                    "trustCompass.dueDiligence.items.documentation.description"
                  )}
                </p>
              </div>

            </div>


            <div className={styles.checkItem}>

              <span>04</span>

              <div>
                <strong>
                  {t(
                    "trustCompass.dueDiligence.items.buildingIdentity.title"
                  )}
                </strong>

                <p>
                  {t(
                    "trustCompass.dueDiligence.items.buildingIdentity.description"
                  )}
                </p>
              </div>

            </div>


            <div className={styles.checkItem}>

              <span>05</span>

              <div>
                <strong>
                  {t(
                    "trustCompass.dueDiligence.items.goldenVisa.title"
                  )}
                </strong>

                <p>
                  {t(
                    "trustCompass.dueDiligence.items.goldenVisa.description"
                  )}
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            CLOSING STATEMENT
        ========================================= */}

        <div className={styles.bottomStatement}>

          <div className={styles.statementLine} />

          <div className={styles.statementContent}>

            <span>
              {t("trustCompass.statement.eyebrow")}
            </span>

            <p>
              {t("trustCompass.statement.description")}
            </p>

          </div>

          <div className={styles.statementSignature}>
            <span>Svetlana Novikova</span>
            <small>
              {t("trustCompass.statement.role")}
            </small>
          </div>

        </div>

      </div>
    </section>
  );
}