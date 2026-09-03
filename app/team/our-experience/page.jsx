"use client";

import Link from "next/link";
import styles from "./page.module.css";

const portfolioStats = [
  {
    value: "417",
    label: "PROPERTY LISTINGS",
    text: "Residential, land and commercial property represented across the portfolio.",
  },
  {
    value: "340",
    label: "RESIDENTIAL",
    text: "Homes represented across the company's property portfolio.",
  },
  {
    value: "48",
    label: "LAND & PLOTS",
    text: "Land opportunities forming an important part of the portfolio.",
  },
  {
    value: "23",
    label: "COMMERCIAL",
    text: "Commercial properties represented for sale or rental.",
  },
];

const portfolioBreakdown = [
  {
    number: "340",
    percentage: "81.5%",
    title: "Residential",
    status: "For sale",
    detail: "Homes",
  },
  {
    number: "48",
    percentage: "11.5%",
    title: "Land",
    status: "For sale",
    detail: "Plots & land",
  },
  {
    number: "22",
    percentage: "5.3%",
    title: "Commercial",
    status: "For sale",
    detail: "Professional spaces",
  },
  {
    number: "7",
    percentage: "1.7%",
    title: "Rental",
    status: "For rent",
    detail: "Residential & commercial",
  },
];

const experienceCards = [
  {
    number: "01",
    eyebrow: "REAL ESTATE",
    title: "Property is more than a listing.",
    text: "Years of working with property means understanding what buyers actually need: location, condition, use, documentation, potential and whether a property makes sense for the purpose behind the purchase.",
    points: [
      "Residential properties",
      "Land & plots",
      "Commercial spaces",
      "Investment opportunities",
    ],
  },
  {
    number: "02",
    eyebrow: "ENGINEERING",
    title: "Look beyond what the photograph shows.",
    text: "An engineering background brings another layer of attention to property. Technical documentation, building characteristics, legality and planning matters can all influence a property's suitability.",
    points: [
      "Architectural surveys",
      "Engineer certificates",
      "Legality & planning",
      "Technical assessment",
    ],
  },
  {
    number: "03",
    eyebrow: "RESIDENCY",
    title: "Property and residency can meet in the same decision.",
    text: "For international buyers, purchasing property in Greece can also be connected to a residence strategy. The process requires careful coordination between property, documentation and the appropriate professionals.",
    points: [
      "Golden Visa guidance",
      "Property assessment",
      "Document coordination",
      "Professional collaboration",
    ],
  },
];

const engineeringServices = [
  "Architectural surveys",
  "Engineer certificates",
  "Certificates of legality",
  "Energy performance certificates",
  "Building & project supervision",
  "Renovation supervision",
  "Construction projects",
  "Town-planning studies",
  "Land Registry declarations",
  "Urban planning",
  "3D drawings",
  "Interior & property renovation",
];

const serviceNetwork = [
  {
    number: "01",
    title: "Engineering",
    text: "Technical questions, property condition and engineering matters.",
  },
  {
    number: "02",
    title: "Legal",
    text: "Legal matters handled with the appropriate legal professionals.",
  },
  {
    number: "03",
    title: "Notarial",
    text: "Coordination around the formal property transaction.",
  },
  {
    number: "04",
    title: "Accounting & Tax",
    text: "Financial and tax matters referred to the relevant specialists.",
  },
];

const investorBenefits = [
  {
    number: "01",
    title: "Better questions",
    text: "Experience helps identify the questions that should be asked before a decision is made.",
  },
  {
    number: "02",
    title: "Earlier attention",
    text: "Potential technical or procedural issues can be identified before they become expensive surprises.",
  },
  {
    number: "03",
    title: "The right professional",
    text: "Not every question belongs to the same person. Experience means knowing when another specialist should step in.",
  },
  {
    number: "04",
    title: "One connected process",
    text: "Property, engineering, legal and residency considerations can be coordinated around the investor's objective.",
  },
];

const proofPoints = [
  {
    value: "15+",
    title: "Years of experience",
    text: "Experience in the Greek real estate market.",
  },
  {
    value: "1,000+",
    title: "Properties examined",
    text: "A substantial body of property assessment experience.",
  },
  {
    value: "3",
    title: "Languages",
    text: "Greek, English and Russian.",
  },
  {
    value: "1",
    title: "Integrated perspective",
    text: "Real estate + engineering + residency.",
  },
];

export default function OurExperiencePage() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroTop}>
            <span className={styles.sectionLabel}>OUR EXPERIENCE</span>
            <span className={styles.heroIndex}>02 / 06</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.heroKicker}>
                REAL ESTATE · ENGINEERING · RESIDENCY
              </p>

              <h1>
                Experience you can
                <span>see in the numbers.</span>
              </h1>

              <p className={styles.heroDescription}>
                More than property listings. More than years on paper.
                Experience built through real estate, engineering, technical
                assessment and helping people make property decisions in
                Greece.
              </p>

              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryButton}>
                  Discuss Your Investment
                  <span>→</span>
                </Link>

                <Link
                  href="/investor-guide"
                  className={styles.secondaryButton}
                >
                  Explore the Investor Guide
                </Link>
              </div>
            </div>

            <div className={styles.heroNumbers}>
              <div className={styles.heroNumberMain}>
                <span className={styles.numberLabel}>REAL ESTATE</span>

                <strong>15+</strong>

                <p>Years of experience in the Greek real estate market.</p>
              </div>

              <div className={styles.heroNumberGrid}>
                <div>
                  <strong>1,000+</strong>
                  <span>PROPERTIES EXAMINED</span>
                </div>

                <div>
                  <strong>3</strong>
                  <span>LANGUAGES</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <span>REAL ESTATE</span>
            <span>ENGINEERING</span>
            <span>TECHNICAL DUE DILIGENCE</span>
            <span>RESIDENCY</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS IDENTITY
      ===================================================== */}

      <section className={styles.business}>
        <div className={styles.container}>
          <div className={styles.businessCard}>
            <div className={styles.businessContent}>
              <span className={styles.sectionLabel}>
                THE BUSINESS BEHIND THE NAME
              </span>

              <h2>
                Homes in Greece is
                <span>Svetlana Novikova's company.</span>
              </h2>

              <p>
                Homes in Greece is the business owned and led by Svetlana
                Novikova. It brings together her work in Greek real estate and
                civil engineering, with a focus on property assessment,
                technical expertise and support for international buyers.
              </p>

              <p>
                This is where the different parts of her professional
                experience come together. Real estate, engineering and
                residency support are connected around the same objective:
                helping people make better-informed decisions about property
                in Greece.
              </p>
            </div>

            <div className={styles.businessDetails}>
              <div className={styles.businessDetail}>
                <span>01</span>

                <div>
                  <small>OWNER & LEAD</small>
                  <strong>Svetlana Novikova</strong>
                </div>
              </div>

              <div className={styles.businessDetail}>
                <span>02</span>

                <div>
                  <small>BUSINESS</small>
                  <strong>Homes in Greece</strong>
                </div>
              </div>

              <div className={styles.businessDetail}>
                <span>03</span>

                <div>
                  <small>PROFESSIONAL BASE</small>
                  <strong>Athens · Greece</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRACK RECORD
      ===================================================== */}

      <section className={styles.trackRecord}>
        <div className={styles.container}>
          <div className={styles.trackGrid}>
            <div>
              <span className={styles.sectionLabel}>THE TRACK RECORD</span>

              <h2>
                Experience becomes valuable
                <span>when it can be measured.</span>
              </h2>
            </div>

            <div className={styles.trackText}>
              <p>
                Homes in Greece has built its work around the Greek property
                market, combining real-estate activity with technical
                knowledge.
              </p>

              <p>
                The portfolio itself tells part of the story: residential
                property, land and commercial opportunities across the Greek
                market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BIG NUMBERS
      ===================================================== */}

      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {portfolioStats.map((stat) => (
              <article key={stat.label} className={styles.stat}>
                <div className={styles.statNumber}>{stat.value}</div>

                <span>{stat.label}</span>

                <p>{stat.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO
      ===================================================== */}

      <section className={styles.portfolio}>
        <div className={styles.container}>
          <div className={styles.portfolioHeader}>
            <div>
              <span className={styles.sectionLabel}>
                PORTFOLIO SNAPSHOT
              </span>

              <h2>
                A real property
                <span>market, not a single niche.</span>
              </h2>
            </div>

            <div className={styles.portfolioSummary}>
              <strong>98.3%</strong>
              <span>FOR SALE</span>

              <p>
                The portfolio snapshot is heavily focused on property sales,
                reflecting the company's core real-estate activity.
              </p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <div className={styles.portfolioTop}>
              <div>
                <span>PROPERTY PORTFOLIO</span>
                <strong>417</strong>
                <small>LISTINGS IN THE PROVIDED SITE SNAPSHOT</small>
              </div>

              <div className={styles.saleRental}>
                <div>
                  <strong>98.3%</strong>
                  <span>SALE</span>
                </div>

                <div>
                  <strong>1.7%</strong>
                  <span>RENTAL</span>
                </div>
              </div>
            </div>

            <div className={styles.portfolioBar}>
              <span />
            </div>

            <div className={styles.breakdownGrid}>
              {portfolioBreakdown.map((item) => (
                <article key={item.title} className={styles.breakdownItem}>
                  <strong className={styles.breakdownNumber}>
                    {item.number}
                  </strong>

                  <div>
                    <div className={styles.breakdownTitle}>
                      <strong>{item.title}</strong>
                      <span>{item.percentage}</span>
                    </div>

                    <p>{item.detail}</p>
                    <small>{item.status}</small>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.portfolioNote}>
              <span>01</span>

              <p>
                Portfolio figures reflect the property categories and listing
                counts presented on the Homes in Greece website source
                provided for this page and may change as listings are added,
                sold or rented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE AREAS
      ===================================================== */}

      <section className={styles.experience}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              WHERE THE EXPERIENCE COMES FROM
            </span>

            <h2>
              Three disciplines.
              <span>One perspective.</span>
            </h2>

            <p>
              The strength of the service comes from bringing different areas
              of knowledge together around one property decision.
            </p>
          </div>

          <div className={styles.experienceGrid}>
            {experienceCards.map((card) => (
              <article
                key={card.number}
                className={`${styles.experienceCard} ${
                  card.number === "02" ? styles.experienceCardDark : ""
                }`}
              >
                <div className={styles.cardTop}>
                  <span>{card.number}</span>
                  <span>↗</span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardEyebrow}>
                    {card.eyebrow}
                  </span>

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>

                  <div className={styles.cardPoints}>
                    {card.points.map((point) => (
                      <div key={point}>
                        <span>✓</span>
                        <strong>{point}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING
      ===================================================== */}

      <section className={styles.engineering}>
        <div className={styles.container}>
          <div className={styles.engineeringCard}>
            <div className={styles.engineeringIntro}>
              <span className={styles.sectionLabel}>
                ENGINEERING EXPERIENCE
              </span>

              <h2>
                Before a property
                <span>becomes an investment,</span>
                understand the property itself.
              </h2>

              <p>
                Svetlana's engineering background adds a technical dimension
                to the way property can be assessed. It means looking beyond
                presentation and considering the physical, technical and
                planning characteristics that can influence a property's
                suitability.
              </p>

              <p>
                Her engineering practice covers a broad range of property and
                construction-related services, giving the real-estate side of
                the business a practical technical foundation.
              </p>
            </div>

            <div className={styles.engineeringServices}>
              <div className={styles.servicesHeader}>
                <span>ENGINEERING PRACTICE</span>
                <strong>12</strong>
              </div>

              <div className={styles.serviceList}>
                {engineeringServices.map((service, index) => (
                  <div key={service} className={styles.serviceItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{service}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INVESTOR BENEFIT
      ===================================================== */}

      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              WHAT EXPERIENCE ACTUALLY MEANS
            </span>

            <h2>
              The point isn't to tell you
              <span>we have experience.</span>
            </h2>

            <p>
              The point is what that experience can change for you.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            {investorBenefits.map((benefit) => (
              <article key={benefit.number} className={styles.benefitCard}>
                <span>{benefit.number}</span>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MARKET FOOTPRINT
      ===================================================== */}

      <section className={styles.market}>
        <div className={styles.container}>
          <div className={styles.marketGrid}>
            <div className={styles.marketContent}>
              <span className={styles.sectionLabel}>
                A VISIBLE MARKET FOOTPRINT
              </span>

              <h2>
                The work doesn't
                <span>exist only on this website.</span>
              </h2>

              <p>
                Homes in Greece properties are also represented through
                established property platforms, creating a visible footprint
                beyond the company's own website.
              </p>

              <p>
                Public professional listings also identify the engineering
                practice directly under Svetlana Novikova's name.
              </p>
            </div>

            <div className={styles.marketProof}>
              <div>
                <span>01</span>

                <div>
                  <small>PROPERTY PRESENCE</small>
                  <strong>ACTIVE LISTINGS</strong>
                  <p>
                    Homes in Greece represented across public property
                    listings.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <small>ENGINEERING PRACTICE</small>
                  <strong>SVETLANA NOVIKOVA</strong>
                  <p>
                    Professional listings connect the engineering practice
                    directly with Svetlana.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <small>ATHENS</small>
                  <strong>6 P. TSALDARI</strong>
                  <p>
                    Professional presence in central Athens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COORDINATION
      ===================================================== */}

      <section className={styles.coordination}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              EXPERIENCE IS ALSO COORDINATION
            </span>

            <h2>
              No serious property decision
              <span>happens in isolation.</span>
            </h2>

            <p>
              Real estate, engineering, legal, notarial and accounting matters
              can intersect. The role is to understand where each area begins,
              where it ends and which professional should handle it.
            </p>
          </div>

          <div className={styles.coordinationGrid}>
            {serviceNetwork.map((item) => (
              <article
                key={item.number}
                className={styles.coordinationCard}
              >
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROOF WALL
      ===================================================== */}

      <section className={styles.proofWall}>
        <div className={styles.container}>
          <div className={styles.proofWallCard}>
            <div className={styles.proofWallHeader}>
              <span className={styles.sectionLabel}>
                THE NUMBERS BEHIND THE SERVICE
              </span>

              <h2>
                A track record
                <span>worth putting on the table.</span>
              </h2>
            </div>

            <div className={styles.proofWallGrid}>
              {proofPoints.map((point) => (
                <article key={point.title}>
                  <strong className={styles.proofValue}>
                    {point.value}
                  </strong>

                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SVETLANA
      ===================================================== */}

      <section className={styles.svetlana}>
        <div className={styles.container}>
          <div className={styles.svetlanaGrid}>
            <div className={styles.svetlanaImageWrap}>
              <img
                src="/portait_image_for_website.jpg"
                alt="Svetlana Novikova, Dipl. Civil Engineer"
                className={styles.svetlanaImage}
              />

              <div className={styles.svetlanaCaption}>
                <span>SVETLANA NOVIKOVA</span>
                <strong>DIPL. CIVIL ENGINEER</strong>
              </div>
            </div>

            <div className={styles.svetlanaContent}>
              <span className={styles.sectionLabel}>
                THE PERSON BEHIND THE EXPERIENCE
              </span>

              <h2>
                Experience is built
                <span>one property at a time.</span>
              </h2>

              <p>
                Svetlana Novikova brings together her identity as a Dipl.
                Civil Engineer with her experience in Greek real estate,
                technical assessment and residency-related property matters.
              </p>

              <p>
                Her connection to Greece is also personal. She has a home
                here and understands the country not only through property and
                professional work, but through everyday life.
              </p>

              <div className={styles.roles}>
                <span>Dipl. Civil Engineer</span>
                <span>Golden Visa Advisor</span>
                <span>Technical Due Diligence</span>
                <span>Real Estate Consultant</span>
              </div>

              <Link href="/team/who-we-are" className={styles.textLink}>
                Meet Svetlana & learn our story
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span>START WITH THE RIGHT QUESTIONS</span>

              <h2>
                Your investment deserves
                <strong>experience behind it.</strong>
              </h2>

              <p>
                Tell us what you are looking for in Greece, whether you
                already have a property in mind and what you want to achieve.
                We can help you understand the property, the process and the
                next step.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Book a Private Consultation
                <span>→</span>
              </Link>

              <Link href="/investor-guide" className={styles.ctaSecondary}>
                Explore the Investor Guide
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
            Portfolio figures are based on the Homes in Greece website content
            supplied for this page and may change as listings are added, sold
            or rented. Professional-service information is based on publicly
            available business listings. Business experience figures are
            presented as company-provided information. Information on this
            website is for general informational purposes and does not
            constitute legal, tax or investment advice.
          </p>
        </div>
      </section>
    </main>
  );
}