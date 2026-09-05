import Link from "next/link";
import styles from "./page.module.css";

const routes = [
  {
    number: "01",
    amount: "€800K",
    title: "Higher-threshold areas",
    description:
      "For qualifying real estate investments in Attica, the Regional Unit of Thessaloniki, Mykonos, Santorini, and islands with a population above 3,100 under the current framework.",
    note: "Specific property and transaction requirements apply.",
  },
  {
    number: "02",
    amount: "€400K",
    title: "Other areas of Greece",
    description:
      "For qualifying real estate investments in areas outside the €800,000 threshold locations, subject to the applicable requirements.",
    note: "The qualifying property must meet the current legal conditions.",
  },
  {
    number: "03",
    amount: "€250K",
    title: "Specific qualifying routes",
    description:
      "Certain investment structures can qualify at €250,000, including specific change-of-use and listed-building cases.",
    note: "These routes have additional conditions and should be assessed individually.",
  },
];

const essentials = [
  {
    number: "01",
    title: "Who it is for",
    text: "Third-country nationals who meet the applicable investment and residence requirements.",
  },
  {
    number: "02",
    title: "Investment routes",
    text: "Different minimum investment thresholds apply depending on the location and type of qualifying investment.",
  },
  {
    number: "03",
    title: "Residence",
    text: "The programme provides a Greek residence permit linked to a qualifying investment. It is not EU citizenship.",
  },
  {
    number: "04",
    title: "Due diligence",
    text: "A qualifying property is not automatically a good investment. Legal, technical and commercial checks matter.",
  },
];

const process = [
  {
    number: "01",
    title: "Eligibility",
    text: "Establish whether your nationality, circumstances and intended investment fit the current framework.",
  },
  {
    number: "02",
    title: "Investment Strategy",
    text: "Choose the investment route and define what you want the investment to achieve.",
  },
  {
    number: "03",
    title: "Property Selection",
    text: "Identify properties that can satisfy both the investment objective and Golden Visa requirements.",
  },
  {
    number: "04",
    title: "Technical Due Diligence",
    text: "Review the property's technical condition, legality, planning status and documentation.",
  },
  {
    number: "05",
    title: "Legal & Transaction Process",
    text: "Coordinate the legal, notarial, tax and property-transfer requirements.",
  },
  {
    number: "06",
    title: "Residence Application",
    text: "Prepare and submit the residence permit application with the required supporting documentation.",
  },
  {
    number: "07",
    title: "Residence Permit",
    text: "Once the application is approved, the residence permit is issued according to the applicable procedure.",
  },
];

const propertyChecks = [
  "Ownership and title",
  "Existing encumbrances",
  "Planning and building legality",
  "Permitted use",
  "Technical condition",
  "Location and market context",
];

const considerations = [
  "Property acquisition costs",
  "Taxes and registration costs",
  "Notarial and legal services",
  "Technical due diligence",
  "Residence application fees",
  "Insurance and supporting documentation",
];

const faqs = [
  {
    question: "Does the Golden Visa give me EU citizenship?",
    answer:
      "No. A Greek Golden Visa is a residence permit. It should not be presented as EU citizenship or as an automatic right to live or work in another EU country.",
  },
  {
    question: "Can I choose any property in Greece?",
    answer:
      "No. The property must satisfy the legal requirements of the applicable investment route. Technical and legal due diligence is therefore essential.",
  },
  {
    question: "Is €250,000 the general Golden Visa threshold?",
    answer:
      "No. €250,000 applies only to specific qualifying investment routes. The applicable threshold depends on the structure, property and location.",
  },
  {
    question: "Does owning a qualifying property automatically make it a good investment?",
    answer:
      "No. Immigration eligibility and investment quality are two different questions. A property should be assessed independently for legal, technical, location and market considerations.",
  },
  {
    question: "Can my family be included?",
    answer:
      "Eligible family members may benefit under the applicable family provisions. The exact circumstances and documentation should be assessed before proceeding.",
  },
];

export default function InvestorHandbookPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>INVESTOR HANDBOOK</span>

            <h1>
              Everything you should know
              <span> before investing in Greece.</span>
            </h1>

            <p className={styles.heroText}>
              A practical guide to the Greek Golden Visa, investment routes,
              property selection, due diligence and the residence process.
            </p>

            <div className={styles.heroActions}>
              <a href="#handbook" className={styles.primaryButton}>
                Start Reading
              </a>

              <Link href="/program/eligibility" className={styles.secondaryButton}>
                Check Your Eligibility
              </Link>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>INVESTOR GUIDE</span>
            <span>GREECE</span>
            <span>2026</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro} id="handbook">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>THE ESSENTIALS</span>

            <h2>The essentials, at a glance.</h2>

            <p>
              Before looking at properties or discussing numbers, understand
              how the programme works, what it requires and where professional
              due diligence becomes important.
            </p>
          </div>

          <div className={styles.essentialsGrid}>
            {essentials.map((item) => (
              <article className={styles.essentialCard} key={item.number}>
                <span className={styles.cardNumber}>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT ROUTES */}
      <section className={styles.routesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>01 / INVESTMENT ROUTES</span>

            <h2>There is more than one way to qualify.</h2>

            <p>
              The applicable minimum investment depends on the location and the
              legal structure of the investment. The figure alone is never the
              whole story.
            </p>
          </div>

          <div className={styles.routesGrid}>
            {routes.map((route) => (
              <article className={styles.routeCard} key={route.number}>
                <div className={styles.routeTop}>
                  <span>{route.number}</span>
                  <span>QUALIFYING ROUTE</span>
                </div>

                <div className={styles.routeAmount}>{route.amount}</div>

                <h3>{route.title}</h3>

                <p>{route.description}</p>

                <div className={styles.routeNote}>{route.note}</div>
              </article>
            ))}
          </div>

          <div className={styles.legalNote}>
            <strong>Important:</strong> Investment thresholds and qualifying
            conditions depend on the applicable legal route. The information
            above is a high-level guide and should not replace an individual
            assessment.
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className={styles.eligibilitySection}>
        <div className={styles.container}>
          <div className={styles.splitSection}>
            <div className={styles.splitIntro}>
              <span className={styles.eyebrow}>02 / ELIGIBILITY</span>

              <h2>Start with the person, not the property.</h2>

              <p>
                The right investment starts with understanding your
                circumstances. Nationality, documentation, investment
                structure and the intended property route all matter.
              </p>

              <Link
                href="/program/eligibility"
                className={styles.inlineLink}
              >
                Check your eligibility <span>→</span>
              </Link>
            </div>

            <div className={styles.checkList}>
              <div className={styles.checkItem}>
                <span>01</span>
                <div>
                  <h3>Third-country national</h3>
                  <p>
                    The programme is designed for qualifying investors who are
                    nationals of countries outside the EU.
                  </p>
                </div>
              </div>

              <div className={styles.checkItem}>
                <span>02</span>
                <div>
                  <h3>Qualifying investment</h3>
                  <p>
                    The investment must satisfy the conditions of the
                    applicable Golden Visa route.
                  </p>
                </div>
              </div>

              <div className={styles.checkItem}>
                <span>03</span>
                <div>
                  <h3>Supporting documentation</h3>
                  <p>
                    Passport, property, payment, insurance and other
                    documentation may be required depending on the route.
                  </p>
                </div>
              </div>

              <div className={styles.checkItem}>
                <span>04</span>
                <div>
                  <h3>Application requirements</h3>
                  <p>
                    Applications follow the requirements and procedures of the
                    Greek immigration authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESIDENCE */}
      <section className={styles.residenceSection}>
        <div className={styles.container}>
          <div className={styles.residenceBox}>
            <div>
              <span className={styles.eyebrow}>03 / RESIDENCE</span>

              <h2>
                Residence in Greece.
                <br />
                A wider European context.
              </h2>
            </div>

            <div className={styles.residenceText}>
              <p>
                The Golden Visa provides a Greek residence permit for
                qualifying investors. Its value extends beyond the physical
                card, but its legal meaning should be understood precisely.
              </p>

              <p>
                Greek residence is not the same as EU citizenship and does not
                automatically grant the right to live or work in another EU
                country. Travel and residence rights remain subject to the
                applicable rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY */}
      <section className={styles.propertySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>04 / THE PROPERTY</span>

            <h2>
              A qualifying property
              <span> is not automatically a good investment.</span>
            </h2>

            <p>
              The property has two jobs: it must satisfy the applicable
              residence requirements, and it should make sense as an
              investment. Those questions need to be assessed separately.
            </p>
          </div>

          <div className={styles.propertyGrid}>
            <div className={styles.propertyStatement}>
              <span>THE QUESTION IS NOT ONLY</span>

              <strong>
                “Does this property qualify?”
              </strong>

              <span>It is also:</span>

              <strong>
                “Should I invest in this property?”
              </strong>
            </div>

            <div className={styles.propertyChecks}>
              {propertyChecks.map((item, index) => (
                <div className={styles.propertyCheck} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.advisorCallout}>
            <div>
              <span className={styles.eyebrow}>WHY DUE DILIGENCE MATTERS</span>

              <h3>
                Immigration eligibility and investment quality are two
                different questions.
              </h3>
            </div>

            <p>
              Technical due diligence helps identify issues before a purchase
              becomes a problem. It should be considered alongside legal and
              commercial assessment.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>05 / THE PROCESS</span>

            <h2>Your Golden Visa journey, step by step.</h2>

            <p>
              The process is easier to understand when each stage has a clear
              purpose and the right professional is involved at the right
              moment.
            </p>
          </div>

          <div className={styles.timeline}>
            {process.map((item) => (
              <div className={styles.timelineItem} key={item.number}>
                <div className={styles.timelineNumber}>{item.number}</div>

                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className={styles.familySection}>
        <div className={styles.container}>
          <div className={styles.familyGrid}>
            <div>
              <span className={styles.eyebrow}>06 / FAMILY</span>

              <h2>
                The investment can be about
                <span> more than one person.</span>
              </h2>
            </div>

            <div>
              <p>
                Depending on the circumstances and applicable provisions,
                eligible family members may also benefit from residence
                arrangements connected to the investor.
              </p>

              <Link href="/why-greece/family-future" className={styles.inlineLink}>
                Explore Family & Future <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COSTS */}
      <section className={styles.costSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>07 / PRACTICAL CONSIDERATIONS</span>

            <h2>Budget for the whole process.</h2>

            <p>
              The purchase price is only one part of the financial picture.
              Professional and transaction-related costs should be considered
              before committing to an investment.
            </p>
          </div>

          <div className={styles.costGrid}>
            {considerations.map((item, index) => (
              <div className={styles.costItem} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className={styles.costWarning}>
            <strong>Do not plan from the minimum investment figure alone.</strong>
            <p>
              Your total budget should account for the property, transaction
              expenses, professional services and the specific requirements of
              your chosen route.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>08 / COMMON QUESTIONS</span>

            <h2>A few questions, answered.</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details className={styles.faqItem} key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{faq.question}</strong>
                  <i>+</i>
                </summary>

                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className={styles.faqLinkWrapper}>
            <Link href="/faq" className={styles.inlineLink}>
              View all FAQs <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner}>
            <span className={styles.eyebrow}>READY TO TAKE THE NEXT STEP?</span>

            <h2>Ready to understand your options?</h2>

            <p>
              Start with your eligibility, define your investment strategy and
              make your next decision with the right information.
            </p>

            <div className={styles.heroActions}>
              <Link href="/program/eligibility" className={styles.primaryButton}>
                Check Your Eligibility
              </Link>

              <Link href="/team/contact" className={styles.secondaryButton}>
                Book a Private Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className={styles.disclaimer}>
        <div className={styles.container}>
          <p>
            <strong>Important information:</strong> This handbook is provided
            for general informational purposes and does not constitute legal,
            tax or financial advice. Greek immigration and investment
            legislation may change. Requirements should be verified against
            the applicable legislation and official guidance at the time of
            your application.
          </p>

          <span>Information reviewed for 2026</span>
        </div>
      </section>
    </main>
  );
}