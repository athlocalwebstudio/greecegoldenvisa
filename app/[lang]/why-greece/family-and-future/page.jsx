"use client";

import Image from "next/image";
import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import styles from "./familyAndFuture.module.css";

export default function FamilyAndFuturePage() {
  const { t } = useLanguage();

  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className={styles.hero}>
        <Image
          src="/images/why-greece/family&future/family-hero.jpg"
          alt={t("familyAndFuture.hero.imageAlt")}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            {t("familyAndFuture.hero.eyebrow")}
          </span>

          <h1>
            {t("familyAndFuture.hero.titleLineOne")}
            <span> {t("familyAndFuture.hero.titleLineTwo")}</span>
          </h1>

          <p>{t("familyAndFuture.hero.description")}</p>

          <div className={styles.heroActions}>
            <LocalizedLink
              href="/team/contact"
              className={styles.primaryButton}
            >
              {t("familyAndFuture.hero.primaryButton")}
              <span>↗</span>
            </LocalizedLink>

            <LocalizedLink
              href="/program/eligibility"
              className={styles.secondaryButton}
            >
              {t("familyAndFuture.hero.secondaryButton")}
            </LocalizedLink>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>{t("familyAndFuture.hero.bottomLabel")}</span>
          <span className={styles.heroLine} />
          <span>04</span>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <span className={styles.sectionNumber}>01</span>

          <div className={styles.introContent}>
            <span className={styles.eyebrowDark}>
              {t("familyAndFuture.intro.eyebrow")}
            </span>

            <h2>
              {t("familyAndFuture.intro.titleLineOne")}
              <br />
              {t("familyAndFuture.intro.titleLineTwo")}
              <br />
              <em>{t("familyAndFuture.intro.titleLineThree")}</em>
            </h2>

            <p>{t("familyAndFuture.intro.description")}</p>
          </div>
        </div>
      </section>

      {/* =========================================================
          LIFE SHARED
      ========================================================== */}
      <section className={styles.lifeSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionNumber}>02</span>
            <span className={styles.eyebrowDark}>
              {t("familyAndFuture.life.eyebrow")}
            </span>
          </div>

          <p>{t("familyAndFuture.life.description")}</p>
        </div>

        <div className={styles.lifeGrid}>
          {/* FIRST IMAGE */}
          <article className={styles.lifeCard}>
            <div className={styles.lifeImage}>
              <Image
                src="/images/why-greece/family&future/family-life.jpg"
                alt={t("familyAndFuture.life.cards.mornings.imageAlt")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className={styles.lifeText}>
              <span>01</span>

              <h3>{t("familyAndFuture.life.cards.mornings.title")}</h3>

              <p>{t("familyAndFuture.life.cards.mornings.text")}</p>
            </div>
          </article>

          {/* SECOND IMAGE */}
          <article className={`${styles.lifeCard} ${styles.lifeCardOffset}`}>
            <div className={styles.lifeImage}>
              <Image
                src="/images/why-greece/family&future/family-together.jpg"
                alt={t("familyAndFuture.life.cards.together.imageAlt")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className={styles.lifeText}>
              <span>02</span>

              <h3>{t("familyAndFuture.life.cards.together.title")}</h3>

              <p>{t("familyAndFuture.life.cards.together.text")}</p>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          FAMILY FRAMEWORK
      ========================================================== */}
      <section className={styles.familySection}>
        <div className={styles.familyIntro}>
          <span className={styles.sectionNumber}>03</span>

          <div>
            <span className={styles.eyebrowDark}>
              {t("familyAndFuture.family.eyebrow")}
            </span>

            <h2>
              {t("familyAndFuture.family.titleLineOne")}
              <br />
              <em>{t("familyAndFuture.family.titleLineTwo")}</em>
            </h2>

            <p>{t("familyAndFuture.family.description")}</p>
          </div>
        </div>

        <div className={styles.familyGrid}>
          <article className={styles.familyCard}>
            <span>01</span>

            <div>
              <h3>{t("familyAndFuture.family.cards.spouse.title")}</h3>

              <p>{t("familyAndFuture.family.cards.spouse.text")}</p>
            </div>
          </article>

          <article className={styles.familyCard}>
            <span>02</span>

            <div>
              <h3>{t("familyAndFuture.family.cards.children.title")}</h3>

              <p>{t("familyAndFuture.family.cards.children.text")}</p>
            </div>
          </article>

          <article className={styles.familyCard}>
            <span>03</span>

            <div>
              <h3>
                {t("familyAndFuture.family.cards.spouseChildren.title")}
              </h3>

              <p>{t("familyAndFuture.family.cards.spouseChildren.text")}</p>
            </div>
          </article>

          <article className={styles.familyCard}>
            <span>04</span>

            <div>
              <h3>
                {t("familyAndFuture.family.cards.ascendants.title")}
              </h3>

              <p>{t("familyAndFuture.family.cards.ascendants.text")}</p>
            </div>
          </article>
        </div>

        <p className={styles.legalNote}>
          {t("familyAndFuture.family.legalNote")}
        </p>
      </section>

      {/* =========================================================
          YEARS THAT MATTER
      ========================================================== */}
      <section className={styles.futureSection}>
        <div className={styles.futureImage}>
          <Image
            src="/images/why-greece/family&future/family-future.jpg"
            alt={t("familyAndFuture.future.imageAlt")}
            fill
            sizes="100vw"
          />

          <div className={styles.futureImageOverlay} />

          <div className={styles.futureImageText}>
            <span>{t("familyAndFuture.future.imageLabel")}</span>

            <strong>
              {t("familyAndFuture.future.imageTitleLineOne")}
              <br />
              {t("familyAndFuture.future.imageTitleLineTwo")}
            </strong>
          </div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <span>01</span>

            <div>
              <small>{t("familyAndFuture.future.timeline.now.label")}</small>

              <h3>{t("familyAndFuture.future.timeline.now.title")}</h3>

              <p>{t("familyAndFuture.future.timeline.now.text")}</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <span>02</span>

            <div>
              <small>{t("familyAndFuture.future.timeline.next.label")}</small>

              <h3>{t("familyAndFuture.future.timeline.next.title")}</h3>

              <p>{t("familyAndFuture.future.timeline.next.text")}</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <span>03</span>

            <div>
              <small>
                {t("familyAndFuture.future.timeline.yearsAhead.label")}
              </small>

              <h3>
                {t("familyAndFuture.future.timeline.yearsAhead.title")}
              </h3>

              <p>{t("familyAndFuture.future.timeline.yearsAhead.text")}</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <span>04</span>

            <div>
              <small>
                {t("familyAndFuture.future.timeline.beyond.label")}
              </small>

              <h3>{t("familyAndFuture.future.timeline.beyond.title")}</h3>

              <p>{t("familyAndFuture.future.timeline.beyond.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMOTIONAL STATEMENT
      ========================================================== */}
      <section className={styles.statement}>
        <div className={styles.statementInner}>
          <span className={styles.eyebrowLight}>
            {t("familyAndFuture.statement.eyebrow")}
          </span>

          <h2>
            <span className={styles.statementMain}>
              {t("familyAndFuture.statement.mainLineOne")}
              <br />
              {t("familyAndFuture.statement.mainLineTwo")}
            </span>

            <br />

            <em>{t("familyAndFuture.statement.emphasis")}</em>
          </h2>

          <p>{t("familyAndFuture.statement.description")}</p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <span className={styles.eyebrowDark}>
            {t("familyAndFuture.final.eyebrow")}
          </span>

          <h2>
            {t("familyAndFuture.final.titleLineOne")}
            <br />
            <em>{t("familyAndFuture.final.titleLineTwo")}</em>
          </h2>

          <p>{t("familyAndFuture.final.description")}</p>

          <div className={styles.finalActions}>
            <LocalizedLink
              href="/team/contact"
              className={styles.finalPrimary}
            >
              {t("familyAndFuture.final.primaryButton")}
              <span>↗</span>
            </LocalizedLink>

            <LocalizedLink
              href="/program/eligibility"
              className={styles.finalSecondary}
            >
              {t("familyAndFuture.final.secondaryButton")}
            </LocalizedLink>
          </div>
        </div>
      </section>
    </main>
  );
}