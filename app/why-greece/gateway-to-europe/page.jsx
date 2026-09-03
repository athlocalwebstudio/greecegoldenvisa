"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./gatewayToEurope.module.css";

const facts = [
  {
    number: "01",
    title: "European Union",
    text: "Greece is a member of the European Union, placing residence within an established European legal and institutional framework.",
  },
  {
    number: "02",
    title: "Schengen Area",
    text: "Greece is part of the Schengen Area, allowing eligible residents to travel through the Schengen zone subject to the applicable rules.",
  },
  {
    number: "03",
    title: "Mediterranean Position",
    text: "Greece combines European connectivity with a strategic position at the meeting point of Europe and the Mediterranean.",
  },
];

const residencePoints = [
  {
    number: "01",
    title: "A BASE IN GREECE",
    text: "A recognised residence in Greece gives you a clear European base while keeping the Mediterranean lifestyle at its centre.",
  },
  {
    number: "02",
    title: "EUROPEAN CONNECTIVITY",
    text: "Greece's position within the European and Schengen frameworks keeps the wider region within practical reach, subject to the applicable rules.",
  },
  {
    number: "03",
    title: "A LONG-TERM CONNECTION",
    text: "For many investors, residence is not simply about a document. It is about creating a lasting connection with Greece and its opportunities.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "ELIGIBILITY",
    text: "Understand whether your circumstances fit the applicable residence framework.",
  },
  {
    number: "02",
    title: "INVESTMENT",
    text: "Identify and assess the appropriate investment route and property opportunity.",
  },
  {
    number: "03",
    title: "DUE DILIGENCE",
    text: "Review the property, documentation and technical aspects before proceeding.",
  },
  {
    number: "04",
    title: "COORDINATION",
    text: "Coordinate the legal, technical and administrative professionals involved.",
  },
  {
    number: "05",
    title: "RESIDENCE",
    text: "Move forward with the application and residence permit process.",
  },
];

export default function GatewayToEuropePage() {
  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/images/why-greece/gateway-to-europe/hero.jpg"
            alt="Greece and the Mediterranean"
            fill
            priority
            sizes="100vw"
            className={styles.heroImagePhoto}
          />

          <div className={styles.heroOverlay} />
          <div className={styles.heroVignette} />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            WHY GREECE / GATEWAY TO EUROPE
          </span>

          <h1>
            <span>A European Base.</span>
            <br />
            <em>A Mediterranean Life.</em>
          </h1>

          <p>
            Greece offers a recognised European base with the character,
            connectivity and lifestyle of the Mediterranean.
          </p>

          <div className={styles.heroFacts}>
            <span>EU MEMBER</span>
            <span className={styles.heroDot}>·</span>
            <span>SCHENGEN AREA</span>
            <span className={styles.heroDot}>·</span>
            <span>MEDITERRANEAN</span>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>01</span>
          <span>GATEWAY TO EUROPE</span>
        </div>
      </section>

      {/* =========================================================
          POSITION
      ========================================================= */}
      <section className={styles.positionSection}>
        <div className={styles.sectionIntro}>
          <div className={styles.sectionMarker}>
            <span className={styles.sectionNumber}>01 / 05</span>
            <span className={styles.sectionLabel}>POSITION</span>
          </div>

          <div className={styles.sectionHeading}>
            <h2>
              Europe,
              <br />
              <em>within reach.</em>
            </h2>

            <p>
              Greece sits at a natural meeting point between Europe and the
              Mediterranean — combining European infrastructure with a
              distinctly Greek way of life.
            </p>
          </div>
        </div>

        <div className={styles.positionStatement}>
          <div className={styles.positionLine} />

          <div className={styles.positionQuote}>
            <span>THE POSITION OF GREECE</span>

            <h3>
              European in framework.
              <br />
              Mediterranean in character.
            </h3>
          </div>

          <div className={styles.positionBody}>
            <p>
              For an international investor, Greece offers something
              unusually balanced: access to a European environment without
              losing the lifestyle and geographic character that make the
              country distinctive.
            </p>

            <p>
              The result is a residence base that connects two worlds
              naturally — Europe and the Mediterranean.
            </p>
          </div>
        </div>

        <div className={styles.factGrid}>
          {facts.map((fact) => (
            <article
              className={styles.factCard}
              key={fact.number}
              tabIndex={0}
            >
              <div className={styles.factCardTop}>
                <span className={styles.factNumber}>{fact.number}</span>

                <span className={styles.factArrow}>↗</span>
              </div>

              <div className={styles.factContent}>
                <h3>{fact.title}</h3>

                <div className={styles.factReveal}>
                  <span className={styles.factRevealLine} />
                  <p>{fact.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          OFFICIAL DOCUMENT
      ========================================================= */}
      <section className={styles.documentSection}>
        <div className={styles.documentHeader}>
          <div>
            <span className={styles.sectionNumber}>02 / 05</span>
            <span className={styles.sectionLabel}>THE RESIDENCE PERMIT</span>
          </div>

          <p>
            Behind the concept of a European base is something tangible:
            formal residence in Greece, represented by an official residence
            permit.
          </p>
        </div>

        <div className={styles.documentLayout}>
          <div className={styles.documentStage}>
            <div className={styles.documentGlow} />

            <div className={styles.documentCard}>
              <Image
                src="/images/why-greece/gateway-to-europe/passport.jpg"
                alt="Official sample of a Greek electronic residence permit"
                fill
                sizes="(max-width: 768px) 92vw, 62vw"
                className={styles.documentImage}
              />
            </div>

            <div className={styles.documentCaption}>
              <span>OFFICIAL SAMPLE</span>
              <span>GREEK ELECTRONIC RESIDENCE PERMIT</span>
            </div>
          </div>

          <div className={styles.documentCopy}>
            <span className={styles.documentIndex}>01</span>

            <h2>
              The residence
              <br />
              <em>permit.</em>
            </h2>

            <p className={styles.documentLead}>
              Residence is ultimately formalised through an official Greek
              residence permit.
            </p>

            <p>
              The card is only the visible result of a much broader process
              involving eligibility, investment, documentation, due
              diligence and professional coordination.
            </p>

            <div className={styles.documentNote}>
              <span className={styles.noteMark}>i</span>

              <p>
                Official sample imagery published by the Hellenic Ministry of
                Migration and Asylum. This is an illustrative sample and does
                not represent an individual applicant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT RESIDENCE MAKES POSSIBLE
      ========================================================= */}
      <section className={styles.residenceSection}>
        <div className={styles.residenceWatermark}>
          RESIDENCE
        </div>

        <div className={styles.residenceTop}>
          <div className={styles.residenceMeta}>
            <span className={styles.sectionNumber}>03 / 05</span>
            <span className={styles.sectionLabel}>
              WHAT RESIDENCE MAKES POSSIBLE
            </span>

            <div className={styles.residenceMetaLine} />
          </div>

          <div className={styles.residenceHeading}>
            <div className={styles.residenceKicker}>
              <span>THE WIDER HORIZON</span>
              <span>↘</span>
            </div>

            <h2>
              A residence
              <br />
              <em>with a wider horizon.</em>
            </h2>

            <p>
              The value of Greek residence extends beyond the physical card.
              It creates a practical connection to Greece while placing you
              within a wider European context.
            </p>
          </div>
        </div>

        <div className={styles.residenceFeature}>
          <div className={styles.residenceFeatureNumber}>
            <span>03</span>
            <span>WHAT RESIDENCE CREATES</span>
          </div>

          <div className={styles.residenceFeatureContent}>
            <span className={styles.residenceFeatureEyebrow}>
              A PRACTICAL EUROPEAN BASE
            </span>

            <h3>
              Residence in Greece.
              <br />
              <em>Possibility beyond it.</em>
            </h3>
          </div>

          <div className={styles.residenceFeatureMark}>
            <span>+</span>
          </div>
        </div>

        <div className={styles.residenceGrid}>
          {residencePoints.map((point) => (
            <article
              className={styles.residencePoint}
              key={point.number}
              tabIndex={0}
            >
              <div className={styles.residencePointTop}>
                <span>{point.number}</span>
                <span className={styles.residencePointArrow}>↗</span>
              </div>

              <div className={styles.residencePointBody}>
                <h3>{point.title}</h3>

                <p>{point.text}</p>
              </div>

              <div className={styles.residencePointLine} />
            </article>
          ))}
        </div>

        <div className={styles.residenceBottom}>
          <span>IMPORTANT DISTINCTION</span>

          <p>
            Greek residence is not the same as EU citizenship and does not
            automatically grant the right to live or work in another EU
            country. Travel and residence rights remain subject to the
            applicable rules.
          </p>
        </div>
      </section>

      {/* =========================================================
          COORDINATED PROCESS
      ========================================================= */}
      <section className={styles.verificationSection}>
        <div className={styles.verificationTop}>
          <div>
            <span className={styles.sectionNumber}>04 / 05</span>
            <span className={styles.sectionLabel}>
              WHAT SITS BEHIND THE RESIDENCE
            </span>
          </div>

          <div>
            <h2>
              The permit is the result.
              <br />
              <em>The process comes first.</em>
            </h2>

            <p className={styles.verificationIntro}>
              A successful application depends on more than submitting
              paperwork. The investment, property and supporting
              documentation all need to be understood and coordinated.
            </p>
          </div>
        </div>

        <div className={styles.process}>
          <div className={styles.processLine} />

          {processSteps.map((step) => (
            <article className={styles.processStep} key={step.number}>
              <div className={styles.processNumber}>{step.number}</div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className={styles.finalSection}>
        <div className={styles.finalContent}>
          <div className={styles.finalTop}>
            <span className={styles.sectionNumber}>05 / 05</span>
            <span className={styles.sectionLabel}>YOUR EUROPEAN BASE</span>
          </div>

          <h2>
            Start with Greece.
            <br />
            <em>Think beyond it.</em>
          </h2>

          <p>
            The right decision starts with understanding the country, the
            residence framework and the investment behind it.
          </p>

          <div className={styles.finalActions}>
            <Link href="/contact" className={styles.primaryButton}>
              Discuss Your Investment
              <span>↗</span>
            </Link>

            <Link
              href="/program/eligibility"
              className={styles.secondaryButton}
            >
              Check Your Eligibility
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}