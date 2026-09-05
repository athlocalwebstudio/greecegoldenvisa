
import Image from "next/image";
import Link from "next/link";
import styles from "./familyAndFuture.module.css";


export const metadata = {
  title: "Family & Future in Greece | Golden Visa",

  description:
    "Discover how Greece can become a European base for your family, with residence options for qualifying family members, Mediterranean living and a long-term future in Greece.",

  keywords: [
    "Greece Golden Visa family",
    "Greek Golden Visa family",
    "Golden Visa Greece family benefits",
    "Greece Golden Visa family residence",
    "Greek Golden Visa family residence",
    "Golden Visa Greece spouse",
    "Golden Visa Greece children",
    "Greece residency by investment family",
    "Greek residency by investment family",
    "living in Greece with family",
    "family life in Greece",
    "moving to Greece with family",
    "Greece family residence",
    "Greece Golden Visa benefits",
    "Greek Golden Visa",
  ],

  alternates: {
    canonical: "/why-greece/family-and-future",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "/why-greece/family-and-future",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title: "Family & Future in Greece | Greece Golden Visa",

    description:
      "Explore family residence possibilities, Mediterranean living and the long-term lifestyle Greece can offer families considering the Golden Visa.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Family & Future in Greece | Greece Golden Visa",

    description:
      "Explore family residence possibilities, Mediterranean living and the long-term lifestyle Greece can offer families considering the Golden Visa.",
  },
};


export default function FamilyAndFuturePage() {
  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className={styles.hero}>
        <Image
          src="/images/why-greece/family&future/family-hero.jpg"
          alt="Family enjoying time together in Greece"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>FAMILY & FUTURE</span>

          <h1>
            A future worth
            <span> coming home to.</span>
          </h1>

          <p>
            Greece can be more than the place where an investment is made.
            It can become a place where family life unfolds — together,
            naturally, and over time.
          </p>

          <div className={styles.heroActions}>
            <Link href="/team/contact" className={styles.primaryButton}>
              Discuss Your Family&apos;s Future
              <span>↗</span>
            </Link>

            <Link href="/program/eligibility" className={styles.secondaryButton}>
              Check Your Eligibility
            </Link>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>WHY GREECE</span>
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
              WHAT ARE YOU REALLY INVESTING IN?
            </span>

            <h2>
              Not just property.
              <br />
              Not just residence.
              <br />
              <em>A place for what comes next.</em>
            </h2>

            <p>
              For families considering Greece, the decision often extends
              beyond the investment itself. It is about having a European
              base, spending meaningful time together, and creating the
              freedom to imagine the future differently.
            </p>
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
            <span className={styles.eyebrowDark}>A LIFE SHARED</span>
          </div>

          <p>
            Some of the most valuable things in life are not measured in
            numbers.
          </p>
        </div>

        <div className={styles.lifeGrid}>
          {/* FIRST IMAGE */}
          <article className={styles.lifeCard}>
            <div className={styles.lifeImage}>
              <Image
                src="/images/why-greece/family&future/family-life.jpg"
                alt="Family enjoying everyday life in Greece"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className={styles.lifeText}>
              <span>01</span>

              <h3>Mornings that feel different.</h3>

              <p>
                Long breakfasts. Outdoor living. The sea never feeling quite
                as far away as it did before.
              </p>
            </div>
          </article>

          {/* SECOND IMAGE */}
          <article className={`${styles.lifeCard} ${styles.lifeCardOffset}`}>
            <div className={styles.lifeImage}>
              <Image
                src="/images/why-greece/family&future/family-together.jpg"
                alt="Family spending time together outdoors"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className={styles.lifeText}>
              <span>02</span>

              <h3>More time together.</h3>

              <p>
                From a morning by the water to an afternoon exploring
                somewhere new, Greece creates space for experiences that
                become family memories.
              </p>
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
              YOUR FAMILY CAN BE PART OF THE JOURNEY
            </span>

            <h2>
              One decision.
              <br />
              <em>A wider circle.</em>
            </h2>

            <p>
              Depending on the applicable Greek immigration provisions and
              individual circumstances, qualifying family members may be able
              to obtain residence permits connected to the investor&apos;s
              residence status.
            </p>
          </div>
        </div>

        <div className={styles.familyGrid}>
          <article className={styles.familyCard}>
            <span>01</span>

            <div>
              <h3>Spouse / Partner</h3>

              <p>
                Residence provisions may extend to the investor&apos;s
                qualifying spouse or partner.
              </p>
            </div>
          </article>

          <article className={styles.familyCard}>
            <span>02</span>

            <div>
              <h3>Children</h3>

              <p>
                Qualifying unmarried children under the applicable age
                requirements may be included.
              </p>
            </div>
          </article>

          <article className={styles.familyCard}>
            <span>03</span>

            <div>
              <h3>Children of a Spouse / Partner</h3>

              <p>
                Certain children of the spouse or partner may also qualify,
                subject to the applicable requirements.
              </p>
            </div>
          </article>

          <article className={styles.familyCard}>
            <span>04</span>

            <div>
              <h3>Direct Ascendants</h3>

              <p>
                Applicable provisions may also cover qualifying direct
                ascendants of the investor or spouse / partner.
              </p>
            </div>
          </article>
        </div>

        <p className={styles.legalNote}>
          Family residence rights are subject to the applicable Greek
          immigration framework, supporting documentation, and individual
          eligibility requirements. This page is for general information and
          does not constitute legal advice.
        </p>
      </section>

      {/* =========================================================
          YEARS THAT MATTER
      ========================================================== */}
      <section className={styles.futureSection}>
        <div className={styles.futureImage}>
          <Image
            src="/images/why-greece/family&future/family-future.jpg"
            alt="Family looking toward the Greek landscape"
            fill
            sizes="100vw"
          />

          <div className={styles.futureImageOverlay} />

          <div className={styles.futureImageText}>
            <span>THE YEARS THAT MATTER</span>

            <strong>
              A place can become
              <br />
              part of your family&apos;s story.
            </strong>
          </div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <span>01</span>

            <div>
              <small>NOW</small>

              <h3>The decision.</h3>

              <p>
                Understanding what Greece could mean for you and the people
                closest to you.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <span>02</span>

            <div>
              <small>NEXT</small>

              <h3>The move.</h3>

              <p>
                Turning a carefully considered investment into a practical
                connection with Greece.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <span>03</span>

            <div>
              <small>YEARS AHEAD</small>

              <h3>The memories.</h3>

              <p>
                Returning to familiar places, discovering new ones, and
                watching your relationship with Greece grow.
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <span>04</span>

            <div>
              <small>BEYOND</small>

              <h3>The legacy.</h3>

              <p>
                A place that can become part of the story your family carries
                forward.
              </p>
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
            A DIFFERENT KIND OF INVESTMENT
          </span>

          <h2>
            <span className={styles.statementMain}>
              You can invest
              <br />
              in property.
            </span>

            <br />

            <em>Or you can invest in what comes after.</em>
          </h2>

          <p>
            A place to gather. A place to return to. A place your children
            remember.
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <span className={styles.eyebrowDark}>YOUR NEXT CHAPTER</span>

          <h2>
            Where do you want
            <br />
            <em>the next chapter to begin?</em>
          </h2>

          <p>
            If Greece is part of your family&apos;s future, the first step is
            understanding what is possible for your circumstances.
          </p>

          <div className={styles.finalActions}>
            <Link href="/team/contact" className={styles.finalPrimary}>
              Discuss Your Family&apos;s Future
              <span>↗</span>
            </Link>

            <Link href="/program/eligibility" className={styles.finalSecondary}>
              Check Your Eligibility
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

