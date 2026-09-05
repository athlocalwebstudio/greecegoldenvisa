"use client";

import Link from "next/link";
import styles from "./page.module.css";

const credentials = [
  {
    value: "15+",
    label: "Years of experience",
    text: "Experience within the Greek real estate market.",
  },
  {
    value: "1,000+",
    label: "Properties examined",
    text: "A practical understanding built through real property experience.",
  },
  {
    value: "3",
    label: "Languages",
    text: "Support in Greek, English and Russian.",
  },
];

const expertise = [
  {
    number: "01",
    title: "Technical Due Diligence",
    text: "Looking beyond photographs and listings to understand the technical side of a property before you commit.",
  },
  {
    number: "02",
    title: "Golden Visa Guidance",
    text: "Helping investors understand the requirements, documents and steps involved in their residence-by-investment journey.",
  },
  {
    number: "03",
    title: "Real Estate Consulting",
    text: "Bringing an experienced understanding of the Greek property market into the investment decision.",
  },
  {
    number: "04",
    title: "Professional Coordination",
    text: "Connecting the technical, legal, notarial and financial sides of the process so you are not left managing everything alone.",
  },
];

const professionals = [
  {
    number: "01",
    title: "Civil Engineer",
    text: "Technical assessment and property documentation.",
  },
  {
    number: "02",
    title: "Lawyer",
    text: "Legal guidance and review where required.",
  },
  {
    number: "03",
    title: "Notary",
    text: "Coordination of the formal property transaction.",
  },
  {
    number: "04",
    title: "Accountant",
    text: "Financial and tax matters handled by the appropriate professional.",
  },
];

export default function WhoWeArePage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.sectionLabel}>WHO WE ARE</span>

            <h1>
              The people behind
              <span>your journey to Greece.</span>
            </h1>

            <p>
              Buying a property in another country is a deeply personal
              decision. We believe you deserve more than a transaction —
              you deserve people who understand both Greece and what it means
              to make it part of your future.
            </p>

            <div className={styles.heroActions}>
              <Link
                href="/team/contact"
                className={styles.primaryButton}
              >
                Meet With Us
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/investor-guide/investor-handbook"
                className={styles.secondaryButton}
              >
                Explore the Investor Guide
              </Link>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <div>
              <span>BUILT AROUND</span>
              <strong>PEOPLE · PROPERTY · TRUST</strong>
            </div>

            <div>
              <span>INVESTOR GUIDE</span>
              <strong>01 / 06</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SVETLANA STORY
      ===================================================== */}

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.photoColumn}>
              <div className={styles.photoFrame}>
                <img
                  src="/portait_image_for_website.jpg"
                  alt="Svetlana Novikova, Dipl. Civil Engineer and Golden Visa Advisor"
                  className={styles.svetlanaImage}
                />

                <div className={styles.photoBadge}>
                  <span>SVETLANA NOVIKOVA</span>
                  <strong>GOLDEN VISA ADVISOR</strong>
                </div>
              </div>

              <div className={styles.photoCaption}>
                <span>BASED IN GREECE</span>
                <span>WORKING WITH INVESTORS WORLDWIDE</span>
              </div>
            </div>

            <div className={styles.storyContent}>
              <span className={styles.sectionLabel}>THE PERSON BEHIND IT</span>

              <h2>
                Greece is not just where I work.
                <span>It is home.</span>
              </h2>

              <p className={styles.lead}>
                Svetlana Novikova is a Dipl. Civil Engineer, Golden Visa
                Advisor, Technical Due Diligence Specialist and Real Estate
                Consultant based in Greece.
              </p>

              <p>
                Her relationship with Greece goes beyond the professional
                side of real estate. Greece is a place she knows personally —
                a country where she has built a life and has a home of her
                own.
              </p>

              <p>
                That personal connection shapes the way she approaches her
                work with international investors. The objective is not
                simply to help someone purchase a property. It is to help
                someone make an important decision in a country they may soon
                call home.
              </p>

              <p>
                With more than 15 years of experience in the Greek real estate
                market and more than 1,000 properties examined, her work
                combines technical knowledge with practical experience of the
                Greek property market.
              </p>

              <div className={styles.signature}>
                <strong>Svetlana Novikova</strong>
                <span>Dipl. Civil Engineer · Golden Visa Advisor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CREDIBILITY
      ===================================================== */}

      <section className={styles.credibility}>
        <div className={styles.container}>
          <div className={styles.credibilityHeader}>
            <div>
              <span className={styles.sectionLabel}>
                WHY INVESTORS TRUST US
              </span>

              <h2>
                Experience you can
                <span>build a decision on.</span>
              </h2>
            </div>

            <p>
              International property investment requires more than enthusiasm
              for Greece. It requires experience, technical understanding and
              the right professionals around you.
            </p>
          </div>

          <div className={styles.statsGrid}>
            {credentials.map((credential) => (
              <article
                key={credential.value}
                className={styles.statCard}
              >
                <div className={styles.statValue}>
                  {credential.value}
                </div>

                <div className={styles.statLine} />

                <h3>{credential.label}</h3>

                <p>{credential.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.credentialStrip}>
            <div className={styles.credentialMain}>
              <span className={styles.credentialIcon}>✓</span>

              <div>
                <strong>Dipl. Civil Engineer</strong>
                <span>
                  Engineering knowledge at the heart of the process.
                </span>
              </div>
            </div>

            <div className={styles.credentialLanguages}>
              <span>GREEK</span>
              <span>ENGLISH</span>
              <span>RUSSIAN</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERTISE
      ===================================================== */}

      <section className={styles.expertise}>
        <div className={styles.container}>
          <div className={styles.expertiseIntro}>
            <span className={styles.sectionLabel}>
              WHAT WE BRING TO THE TABLE
            </span>

            <h2>
              More than a Golden Visa.
              <span>A complete perspective.</span>
            </h2>

            <p>
              A residence application is only one part of an international
              property investment. Our approach brings technical
              understanding, real estate experience and professional
              coordination together.
            </p>
          </div>

          <div className={styles.expertiseGrid}>
            {expertise.map((item) => (
              <article
                key={item.number}
                className={styles.expertiseCard}
              >
                <div className={styles.expertiseTop}>
                  <span>{item.number}</span>
                  <span className={styles.expertiseArrow}>↗</span>
                </div>

                <div className={styles.expertiseBottom}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COORDINATED TEAM
      ===================================================== */}

      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.teamCard}>
            <div className={styles.teamHeading}>
              <span className={styles.sectionLabel}>
                ONE COORDINATED PROCESS
              </span>

              <h2>
                You should not have to
                <span>coordinate Greece alone.</span>
              </h2>

              <p>
                A successful property investment and Golden Visa application
                can involve several areas of expertise. Our role is to help
                bring the right people together at the right stage.
              </p>
            </div>

            <div className={styles.professionalList}>
              {professionals.map((professional) => (
                <div
                  key={professional.number}
                  className={styles.professional}
                >
                  <span className={styles.professionalNumber}>
                    {professional.number}
                  </span>

                  <div>
                    <h3>{professional.title}</h3>
                    <p>{professional.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className={styles.philosophy}>
        <div className={styles.container}>
          <div className={styles.philosophyGrid}>
            <div>
              <span className={styles.sectionLabel}>
                OUR PHILOSOPHY
              </span>

              <h2>
                Treat every investment
                <span>as if it were our own.</span>
              </h2>
            </div>

            <div className={styles.philosophyContent}>
              <div className={styles.philosophyQuote}>
                <span>01</span>

                <blockquote>
                  “The right property is not simply the one that looks
                  beautiful. It is the one that makes sense when you look
                  beneath the surface.”
                </blockquote>
              </div>

              <p>
                This is why technical due diligence is such an important part
                of our approach. Before an investor commits, the property
                deserves to be understood.
              </p>

              <p>
                Because when you are investing from another country, you are
                trusting people on the ground to see what you cannot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PERSONAL CTA
      ===================================================== */}

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaOrbOne} />
            <div className={styles.ctaOrbTwo} />

            <div className={styles.ctaContent}>
              <span className={styles.ctaLabel}>
                LET'S TALK ABOUT YOUR PLANS
              </span>

              <h2>
                Greece might be your next chapter.
                <span>Let's start with a conversation.</span>
              </h2>

              <p>
                Tell us where you are in your journey, what you are looking
                for and what you want to achieve. We will help you understand
                what comes next.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link
                href="/team/contact"
                className={styles.ctaPrimary}
              >
                Book a Private Consultation
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/investor-guide/investor-handbook"
                className={styles.ctaSecondary}
              >
                Return to Investor Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DISCLAIMER
      ===================================================== */}

      <section className={styles.disclaimer}>
        <div className={styles.container}>
          <p>
            Information on this website is provided for general informational
            purposes and should not be considered legal, tax or investment
            advice. Golden Visa requirements and procedures may change.
            Requirements should always be confirmed with the relevant Greek
            authorities and qualified professionals.
          </p>
        </div>
      </section>
    </main>
  );
}