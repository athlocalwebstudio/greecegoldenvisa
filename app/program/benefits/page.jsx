import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  HeartHandshake,
  Home,
  ShieldCheck,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

import styles from "./benefits.module.css";


export const metadata = {
  title: "Greek Golden Visa Benefits",

  description:
    "Discover the main Greek Golden Visa benefits, including residence in Greece, Schengen travel, family residence and five-year permit renewal.",

  keywords: [
    "Greece Golden Visa benefits",
    "Greek Golden Visa benefits",
    "Golden Visa Greece benefits",
    "Greek Golden Visa advantages",
    "Greece Golden Visa residence permit",
    "Golden Visa Greece Schengen travel",
    "Greece Golden Visa family",
    "Greek Golden Visa family benefits",
    "Greece Golden Visa five year residence",
    "Golden Visa Greece residency",
    "Greece residency by investment",
    "Greek residency by investment",
    "Golden Visa Greece investment",
  ],

  alternates: {
    canonical: "/program/benefits",
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
    url: "/program/benefits",
    siteName: "Greece Golden Visa",
    locale: "en_GB",

    title: "Greek Golden Visa Benefits | Greece Golden Visa",

    description:
      "Discover the main Greek Golden Visa benefits, including residence in Greece, Schengen travel, family residence and five-year permit renewal.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Greek Golden Visa Benefits | Greece Golden Visa",

    description:
      "Discover the main Greek Golden Visa benefits, including residence in Greece, Schengen travel, family residence and five-year permit renewal.",
  },
};



const benefits = [
  {
    number: "01",
    icon: Home,
    title: "Residence in Greece",
    text:
      "The Greek Golden Visa provides a residence permit for eligible third-country investors who satisfy the applicable investment and legal requirements.",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Schengen Travel",
    text:
      "A valid Greek residence permit can support travel within the Schengen Area, subject to the applicable Schengen rules and short-stay limits.",
  },
  {
    number: "03",
    icon: Users,
    title: "Family Residence",
    text:
      "Eligible family members can receive residence permits connected to the investor's status, allowing the family to benefit from the programme together.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Five-Year Residence",
    text:
      "The investor residence permit is granted for a five-year period and can be renewed when the applicable programme conditions continue to be satisfied.",
  },
];

const familyMembers = [
  "Spouse or eligible partner",
  "Minor children",
  "Eligible dependent family members provided for under the applicable rules",
  "Eligible ascendants of the investor and spouse/partner",
];

const importantFacts = [
  {
    title: "No automatic citizenship",
    text:
      "Holding a Golden Visa does not automatically make the holder a Greek citizen. Citizenship is a separate legal process with its own requirements.",
  },
  {
    title: "Residence is not the same as tax residence",
    text:
      "A Greek residence permit does not, by itself, determine whether someone is a Greek tax resident. Tax residence is assessed under separate tax rules.",
  },
  {
    title: "Employment is separate",
    text:
      "The investor residence permit itself does not provide access to employment. Any employment or professional activity must be considered under the applicable Greek rules.",
  },
];

const faqs = [
  {
    question: "Does the Golden Visa allow me to live in Greece?",
    answer:
      "Yes. The programme provides an eligible third-country investor with a Greek residence permit, subject to the applicable investment and residence-permit requirements.",
  },
  {
    question: "How long is the Golden Visa residence permit valid?",
    answer:
      "The investor residence permit is generally issued for five years. Renewal is possible when the conditions required for the investor status continue to be met.",
  },
  {
    question: "Can my family receive residence permits?",
    answer:
      "Yes. The Greek framework provides residence permits for qualifying family members of the investor. The exact categories and conditions depend on the applicable rules.",
  },
  {
    question: "Can I travel around Europe with the Golden Visa?",
    answer:
      "A valid Greek residence permit can be used for travel within the Schengen Area, subject to Schengen entry, border and short-stay rules. A residence permit should not be presented as unrestricted residence rights throughout Europe.",
  },
  {
    question: "Does the Golden Visa make me a Greek tax resident?",
    answer:
      "No. A residence permit and tax residence are separate matters. Your tax position depends on the applicable Greek tax rules and your personal circumstances.",
  },
  {
    question: "Does the Golden Visa give me the right to work in Greece?",
    answer:
      "The investor residence permit itself does not provide access to employment. If you intend to work or conduct professional activity in Greece, your circumstances should be assessed separately.",
  },
];

export default function ResidencyBenefitsPage() {
  return (
    <main className={styles.page}>

      {/* =========================================
          HERO
      ========================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroContent}>

            <div className={styles.eyebrow}>
              <span />
              THE GREEK GOLDEN VISA
            </div>

            <h1>
              More than a property.
              <br />
              <em>A residence in Greece.</em>
            </h1>

            <p className={styles.heroText}>
              The Greek Golden Visa is a residence programme for eligible
              non-EU investors. Here is what the residence permit can actually
              provide — and what it does not.
            </p>

          </div>
        </div>
      </section>


      {/* =========================================
          BENEFITS
      ========================================= */}

      <section className={styles.intro} id="benefits">
        <div className={styles.container}>

          <div className={styles.sectionHeader}>

            <div className={styles.sectionLabel}>
              WHAT IT GIVES YOU
            </div>

            <h2>
              The benefits,
              <br />
              <span>clearly explained.</span>
            </h2>

            <p>
              The Golden Visa is first and foremost a Greek residence permit.
              Its benefits are meaningful, but they should be understood
              precisely rather than reduced to marketing promises.
            </p>

          </div>


          <div className={styles.benefitGrid}>

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  className={styles.benefitCard}
                  key={benefit.number}
                >

                  <div className={styles.cardTop}>

                    <span className={styles.cardNumber}>
                      {benefit.number}
                    </span>

                    <div className={styles.cardIcon}>
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                      />
                    </div>

                  </div>


                  <div className={styles.cardBody}>

                    <h3>
                      {benefit.title}
                    </h3>

                    <p>
                      {benefit.text}
                    </p>

                  </div>


                  <div className={styles.cardArrow}>
                    <ArrowRight size={17} />
                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =========================================
          FAMILY
      ========================================= */}

      <section className={styles.familySection}>

        <div className={styles.container}>

          <div className={styles.familyGrid}>

            {/* Premium visual — no poster/card look */}

            <div className={styles.familyVisual}>

              <div className={styles.familyVisualLine} />

              <div className={styles.familyVisualTop}>
                <span>03</span>
                <span>FAMILY</span>
              </div>

              <div className={styles.familyVisualOrb}>
                <div className={styles.familyOrbInner}>
                  <HeartHandshake
                    size={42}
                    strokeWidth={1.2}
                  />
                </div>
              </div>

              <div className={styles.familyVisualText}>
                <span>
                  Beyond
                </span>

                <strong>
                  the investor.
                </strong>
              </div>

              <div className={styles.familyVisualBottom}>
                <span>GREECE</span>
                <span>RESIDENCE</span>
                <span>FAMILY</span>
              </div>

            </div>


            <div className={styles.familyContent}>

              <div className={styles.sectionLabel}>
                FAMILY RESIDENCE
              </div>

              <h2>
                Bring the people
                <br />
                <span>who matter.</span>
              </h2>

              <p className={styles.familyLead}>
                One of the programme's important advantages is that qualifying
                family members may also obtain residence permits connected to
                the investor's status.
              </p>


              <div className={styles.familyList}>

                {familyMembers.map((member, index) => (

                  <div
                    className={styles.familyItem}
                    key={member}
                  >

                    <span className={styles.familyIndex}>
                      0{index + 1}
                    </span>

                    <span>
                      {member}
                    </span>

                    <Check size={16} />

                  </div>

                ))}

              </div>


              <p className={styles.smallNote}>
                Exact eligibility depends on the applicant's family
                relationship and the applicable legislation at the time of
                application.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          TRAVEL
      ========================================= */}

      <section className={styles.travelSection}>

        <div className={styles.container}>

          <div className={styles.travelCard}>

            <div className={styles.travelLeft}>

              <div className={styles.sectionLabel}>
                EUROPEAN MOBILITY
              </div>

              <h2>
                Greece as your
                <br />
                <span>European base.</span>
              </h2>

              <p>
                A valid Greek residence permit can facilitate travel within
                the Schengen Area under the applicable short-stay rules.
              </p>


              <div className={styles.travelWarning}>

                <ShieldCheck size={18} />

                <span>
                  Residence in Greece does not mean unrestricted residence or
                  work rights in every European country.
                </span>

              </div>

            </div>


            <div className={styles.travelRight}>

              <div className={styles.travelCircle}>
                <Globe2
                  size={38}
                  strokeWidth={1.2}
                />
              </div>

              <div>

                <span className={styles.travelKicker}>
                  TRAVEL
                </span>

                <strong>
                  Schengen Area
                </strong>

                <p>
                  Subject to the applicable entry and short-stay rules.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          IMPORTANT DISTINCTIONS
      ========================================= */}

      <section className={styles.factsSection}>

        <div className={styles.container}>

          <div className={styles.factsHeader}>

            <div>

              <div className={styles.sectionLabel}>
                IMPORTANT DISTINCTIONS
              </div>

              <h2>
                What the Golden Visa
                <br />
                <span>doesn't automatically mean.</span>
              </h2>

            </div>

            <p>
              Good investment advice is also about knowing where the
              boundaries are.
            </p>

          </div>


          <div className={styles.factsGrid}>

            {importantFacts.map((fact, index) => (

              <article
                className={styles.fact}
                key={fact.title}
              >

                <span>
                  0{index + 1}
                </span>

                <div>

                  <h3>
                    {fact.title}
                  </h3>

                  <p>
                    {fact.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          FAQ
      ========================================= */}

      <section className={styles.faqSection}>

        <div className={styles.container}>

          <div className={styles.faqGrid}>

            <div className={styles.faqIntro}>

              <div className={styles.sectionLabel}>
                COMMON QUESTIONS
              </div>

              <h2>
                Before you
                <br />
                <span>make a decision.</span>
              </h2>

              <p>
                A few of the questions investors should have answered before
                moving forward.
              </p>

              <Link
                href="/contact"
                className={styles.outlineButton}
              >
                Speak with an advisor
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className={styles.faqList}>

              {faqs.map((faq, index) => (

                <details
                  className={styles.faqItem}
                  key={faq.question}
                >

                  <summary>

                    <span className={styles.faqNumber}>
                      0{index + 1}
                    </span>

                    <span className={styles.question}>
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={styles.faqIcon}
                      size={18}
                    />

                  </summary>


                  <div className={styles.answer}>

                    <p>
                      {faq.answer}
                    </p>

                  </div>

                </details>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className={styles.ctaSection}>

        <div className={styles.container}>

          <div className={styles.ctaCard}>

            <div>

              <div className={styles.sectionLabel}>
                NEXT STEP
              </div>

              <h2>
                Understand your route
                <br />
                <span>before you invest.</span>
              </h2>

              <p>
                Tell us what you are looking to achieve and we can help you
                understand the relevant Golden Visa route and next steps.
              </p>

            </div>


            <Link
              href="/program/eligibility"
              className={styles.ctaButton}
            >
              Check Your Eligibility
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          LEGAL NOTE
      ========================================= */}

      <section className={styles.legalSection}>

        <div className={styles.container}>

          <div className={styles.legalInner}>

            <BriefcaseBusiness size={18} />

            <p>
              <strong>Legal information.</strong>{" "}
              This page provides general information about the Greek Golden
              Visa residence programme and is not legal, tax or immigration
              advice. Greek immigration legislation and administrative
              requirements can change. An applicant's eligibility should be
              assessed against the rules in force at the time of application.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}