"use client";

import { useState } from "react";
import Link from "next/link";
import {
ArrowRight,
Check,
ChevronDown,
CircleHelp,
Compass,
FileCheck2,
Home,
Layers3,
Scale,
ShieldCheck,
Sparkles,
Target,
TrendingUp,
X,
} from "lucide-react";

import styles from "./compare-options.module.css";

const comparisonData = [
{
id: "property",
number: "01",
eyebrow: "PROPERTY ACQUISITION",
title: "Own the asset.",
description:
"A conventional real estate approach for investors who want their Golden Visa strategy centred around a tangible property.",
ownership: 5,
simplicity: 4,
flexibility: 3,
diversification: 2,
asset: "Residential real estate",
involvement: "Low — Medium",
focus: "Property ownership",
diligence: "Property, title & documentation",
bestFor:
"Investors who want a tangible Greek property as part of their investment.",
href: "/investments/ready-properties",
linkLabel: "Explore Properties",
},
{
id: "strategic",
number: "02",
eyebrow: "STRATEGIC PROPERTY",
title: "Choose with strategy.",
description:
"A more selective approach where the property is considered as part of a broader investment strategy rather than simply a listing.",
ownership: 5,
simplicity: 3,
flexibility: 4,
diversification: 3,
asset: "Selected real estate opportunity",
involvement: "Medium",
focus: "Investment strategy + property",
diligence: "Property + investment assessment",
bestFor:
"Investors willing to take a more considered approach to property selection.",
href: "/investments/strategic-properties",
linkLabel: "Explore Strategic Options",
},
{
id: "alternative",
number: "03",
eyebrow: "ALTERNATIVE INVESTMENT",
title: "Look beyond property.",
description:
"For investors considering qualifying investment structures outside a conventional residential property acquisition.",
ownership: 1,
simplicity: 3,
flexibility: 4,
diversification: 5,
asset: "Qualifying investment structure",
involvement: "Depends on structure",
focus: "Alternative investment exposure",
diligence: "Investment, provider & structure",
bestFor:
"Investors who do not necessarily want their strategy centred around traditional real estate.",
href: "/investments/alternative-investments",
linkLabel: "Explore Alternatives",
},
];

const priorities = [
{
id: "ownership",
label: "Property ownership",
shortLabel: "OWNERSHIP",
icon: Home,
description:
"You want the investment to result in a tangible property you own.",
},
{
id: "simplicity",
label: "Simplicity",
shortLabel: "SIMPLICITY",
icon: Layers3,
description:
"You prefer a structure that is easier to understand and navigate.",
},
{
id: "flexibility",
label: "Flexibility",
shortLabel: "FLEXIBILITY",
icon: Sparkles,
description:
"You want more room to consider different investment structures.",
},
{
id: "diversification",
label: "Diversification",
shortLabel: "DIVERSIFICATION",
icon: TrendingUp,
description:
"You want to avoid concentrating your investment strategy around one conventional property.",
},
];

const tradeOffs = [
{
id: "property",
number: "01",
title: "Property Acquisition",
icon: Home,
gainTitle: "You gain",
gains: [
"Tangible asset ownership",
"Familiar investment structure",
"Potential personal-use value",
],
tradeTitle: "You accept",
trades: [
"Location-specific requirements",
"Property and title due diligence",
"Capital concentrated in an individual asset",
],
},
{
id: "strategic",
number: "02",
title: "Strategic Property",
icon: Target,
gainTitle: "You gain",
gains: [
"More selective property screening",
"A strategy-led acquisition process",
"Opportunity-specific analysis",
],
tradeTitle: "You accept",
trades: [
"More decision-making",
"Deeper due diligence",
"Potentially longer selection process",
],
},
{
id: "alternative",
number: "03",
title: "Alternative Investment",
icon: Layers3,
gainTitle: "You gain",
gains: [
"Different investment exposure",
"Potential diversification",
"No conventional property purchase",
],
tradeTitle: "You accept",
trades: [
"Different risk characteristics",
"Provider and structure due diligence",
"Less tangible ownership",
],
},
];

const faqs = [
{
question: "Which investment option is the best?",
answer:
"There is no universally best option. The appropriate approach depends on your objectives, available capital, preferred asset, location, level of involvement and the requirements that apply to your intended Golden Visa route.",
},
{
question: "Is the €250K, €400K or €800K threshold the main thing I should compare?",
answer:
"Not by itself. For real estate, the applicable investment requirement can depend on factors such as location, property characteristics and the qualifying investment structure. The threshold should be evaluated together with the rest of the strategy.",
},
{
question: "Can I decide on the investment route after speaking with an advisor?",
answer:
"Yes. In many cases it is more useful to establish your objectives and circumstances first, then identify which investment approach deserves further investigation.",
},
{
question: "Does choosing an alternative investment mean I avoid due diligence?",
answer:
"No. Due diligence changes rather than disappears. With alternative investments, attention may shift towards the investment structure, provider, documentation, risk characteristics and the specific requirements of the qualifying route.",
},
];

function ScoreDots({ score }) {
return (
<div
className={styles.scoreDots}
aria-label={`${score} out of 5`}
>
{Array.from({ length: 5 }).map((_, index) => (
<span
key={index}
className={
index < score ? styles.scoreActive : styles.scoreInactive
}
/>
))} </div>
);
}

export default function CompareOptionsClient() {
const [activePriority, setActivePriority] = useState("ownership");

const activePriorityData = priorities.find(
(priority) => priority.id === activePriority
);

const getScore = (option) => {
if (activePriority === "ownership") {
return option.ownership;
}


if (activePriority === "simplicity") {
  return option.simplicity;
}

if (activePriority === "flexibility") {
  return option.flexibility;
}

return option.diversification;


};

return ( <main className={styles.page}>
{/* =========================================================
HERO
========================================================= */}

  <section className={styles.hero}>
    <div className={styles.heroGlow} />
    <div className={styles.heroGrid} />

    <div className={styles.container}>
      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>
          <span />
          COMPARE YOUR OPTIONS
        </div>

        <h1>
          Not every investor
          <br />
          should take the <em>same path.</em>
        </h1>

        <p>
          The right Golden Visa investment is about more than a
          headline threshold. Compare the main approaches by
          ownership, simplicity, flexibility and diversification
          before deciding where to look next.
        </p>

        <div className={styles.heroActions}>
          <a
            href="#compass"
            className={styles.primaryButton}
          >
            Compare the Approaches
            <ArrowRight size={16} />
          </a>

          <Link
            href="/team/contact"
            className={styles.secondaryButton}
          >
            Speak With an Advisor
          </Link>
        </div>
      </div>

      <div className={styles.heroSide}>
        <div className={styles.heroSideLine} />

        <span>INVESTMENT</span>
        <strong>DECISION</strong>
        <span>FRAMEWORK</span>
      </div>
    </div>
  </section>

  {/* =========================================================
      INVESTOR COMPASS
  ========================================================= */}

  <section
    className={styles.compassSection}
    id="compass"
  >
    <div className={styles.container}>
      <div className={styles.sectionIntro}>
        <div>
          <div className={styles.sectionLabel}>
            THE INVESTOR COMPASS
          </div>

          <h2>
            Start with what
            <br />
            <span>matters to you.</span>
          </h2>
        </div>

        <p>
          Different investors optimise for different things.
          Select a priority below and see how the three
          approaches compare from that perspective.
        </p>
      </div>

      <div className={styles.compassShell}>
        <div className={styles.priorityRail}>
          <div className={styles.priorityRailHeader}>
            <Compass size={18} />
            <span>YOUR PRIORITY</span>
          </div>

          <div className={styles.priorityButtons}>
            {priorities.map((priority) => {
              const Icon = priority.icon;
              const isActive =
                activePriority === priority.id;

              return (
                <button
                  type="button"
                  key={priority.id}
                  className={`${styles.priorityButton} ${
                    isActive
                      ? styles.priorityButtonActive
                      : ""
                  }`}
                  onClick={() =>
                    setActivePriority(priority.id)
                  }
                  aria-pressed={isActive}
                >
                  <Icon size={17} />

                  <span>{priority.label}</span>

                  <ArrowRight
                    size={14}
                    className={styles.priorityArrow}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.compassMain}>
          <div className={styles.compassHeading}>
            <div>
              <span>OPTIMISING FOR</span>

              <h3>
                {activePriorityData?.label}
              </h3>
            </div>

            <div className={styles.compassCounter}>
              <strong>
                0
                {priorities.findIndex(
                  (priority) =>
                    priority.id === activePriority
                ) + 1}
              </strong>
              <span>/ 04</span>
            </div>
          </div>

          <p className={styles.compassDescription}>
            {activePriorityData?.description}
          </p>

          <div className={styles.compassOptions}>
            {comparisonData.map((option) => (
              <div
                className={styles.compassOption}
                key={option.id}
              >
                <div className={styles.compassOptionTop}>
                  <div>
                    <span>{option.number}</span>
                    <strong>{option.eyebrow}</strong>
                  </div>

                  <span className={styles.optionMatch}>
                    {getScore(option) >= 4
                      ? "STRONG FIT"
                      : getScore(option) === 3
                        ? "POSSIBLE FIT"
                        : "LOWER FIT"}
                  </span>
                </div>

                <div className={styles.compassOptionBody}>
                  <h4>{option.title}</h4>

                  <ScoreDots
                    score={getScore(option)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.compassNote}>
            <CircleHelp size={16} />
            <p>
              These indicators are decision-support guidance,
              not legal, financial or investment ratings. The
              suitability of any route depends on the
              investor's individual circumstances and the
              applicable legislation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* =========================================================
      COMPARISON
  ========================================================= */}

  <section className={styles.comparisonSection}>
    <div className={styles.container}>
      <div className={styles.sectionIntro}>
        <div>
          <div className={styles.sectionLabel}>
            AT A GLANCE
          </div>

          <h2>
            Three approaches.
            <br />
            <span>Different priorities.</span>
          </h2>
        </div>

        <p>
          The comparison below looks at the investment
          approach itself — not just the legal threshold.
        </p>
      </div>

      <div className={styles.comparisonTable}>
        <div className={styles.tableHeader}>
          <div className={styles.tableCorner}>
            <span>DECISION FACTOR</span>
          </div>

          {comparisonData.map((option) => (
            <div
              className={styles.tableOptionHeader}
              key={option.id}
            >
              <span>{option.number}</span>
              <strong>{option.eyebrow}</strong>
            </div>
          ))}
        </div>

        <div className={styles.tableRow}>
          <div className={styles.tableLabel}>
            Core asset
          </div>

          <div>Residential real estate</div>
          <div>Selected real estate opportunity</div>
          <div>Qualifying investment structure</div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.tableLabel}>
            Ownership
          </div>

          <div>Direct</div>
          <div>Direct</div>
          <div>Depends on structure</div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.tableLabel}>
            Primary focus
          </div>

          <div>Property ownership</div>
          <div>Strategy + property</div>
          <div>Alternative investment exposure</div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.tableLabel}>
            Involvement
          </div>

          <div>Low — Medium</div>
          <div>Medium</div>
          <div>Depends on structure</div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.tableLabel}>
            Due diligence
          </div>

          <div>Property, title & documentation</div>
          <div>Property + investment assessment</div>
          <div>Investment, provider & structure</div>
        </div>

        <div className={styles.tableRow}>
          <div className={styles.tableLabel}>
            Best suited to
          </div>

          {comparisonData.map((option) => (
            <div key={option.id}>
              {option.bestFor}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mobileComparison}>
        {comparisonData.map((option) => (
          <article
            className={styles.mobileComparisonCard}
            key={option.id}
          >
            <div className={styles.mobileComparisonHeader}>
              <span>{option.number}</span>
              <strong>{option.eyebrow}</strong>
            </div>

            <h3>{option.title}</h3>

            <p>{option.description}</p>

            <div className={styles.mobileFacts}>
              <div>
                <span>CORE ASSET</span>
                <strong>{option.asset}</strong>
              </div>

              <div>
                <span>OWNERSHIP</span>
                <strong>
                  {option.ownership >= 4
                    ? "Direct"
                    : "Structure dependent"}
                </strong>
              </div>

              <div>
                <span>INVOLVEMENT</span>
                <strong>{option.involvement}</strong>
              </div>

              <div>
                <span>DUE DILIGENCE</span>
                <strong>{option.diligence}</strong>
              </div>
            </div>

            <Link
              href={option.href}
              className={styles.mobileComparisonLink}
            >
              {option.linkLabel}
              <ArrowRight size={15} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* =========================================================
      TRADE-OFFS
  ========================================================= */}

  <section className={styles.tradeSection}>
    <div className={styles.container}>
      <div className={styles.tradeIntro}>
        <div>
          <div className={styles.sectionLabel}>
            THE TRADE-OFFS
          </div>

          <h2>
            Every investment
            <br />
            <span>has a trade-off.</span>
          </h2>
        </div>

        <p>
          A good decision is not about finding an option with
          no disadvantages. It is about understanding what
          each approach gives you — and what it asks from you
          in return.
        </p>
      </div>

      <div className={styles.tradeGrid}>
        {tradeOffs.map((trade) => {
          const Icon = trade.icon;

          return (
            <article
              className={styles.tradeCard}
              key={trade.id}
            >
              <div className={styles.tradeCardTop}>
                <span>{trade.number}</span>

                <Icon size={20} />
              </div>

              <h3>{trade.title}</h3>

              <div className={styles.tradeColumn}>
                <div className={styles.tradeColumnTitle}>
                  <Check size={14} />
                  {trade.gainTitle}
                </div>

                <ul>
                  {trade.gains.map((gain) => (
                    <li key={gain}>{gain}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.tradeColumn}>
                <div className={styles.tradeColumnTitle}>
                  <Scale size={14} />
                  {trade.tradeTitle}
                </div>

                <ul>
                  {trade.trades.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>

  {/* =========================================================
      THRESHOLD CONTEXT
  ========================================================= */}

  <section className={styles.thresholdSection}>
    <div className={styles.container}>
      <div className={styles.thresholdCard}>
        <div className={styles.thresholdIntro}>
          <div className={styles.sectionLabel}>
            WHERE THE THRESHOLD FITS IN
          </div>

          <h2>
            The number is
            <br />
            <span>only one variable.</span>
          </h2>

          <p>
            Investment thresholds matter, but they should be
            evaluated alongside location, property
            characteristics, qualifying conditions and your
            overall investment strategy.
          </p>

          <Link
            href="/investments"
            className={styles.thresholdLink}
          >
            View Investment Requirements
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className={styles.thresholdSteps}>
          <div className={styles.thresholdStep}>
            <span>01</span>
            <strong>€250K</strong>
            <p>
              Specific qualifying categories and
              circumstances.
            </p>
          </div>

          <div className={styles.thresholdStep}>
            <span>02</span>
            <strong>€400K</strong>
            <p>
              Applicable investment areas and qualifying
              conditions.
            </p>
          </div>

          <div className={styles.thresholdStep}>
            <span>03</span>
            <strong>€800K</strong>
            <p>
              Designated higher-threshold locations and
              applicable property conditions.
            </p>
          </div>
        </div>

        <div className={styles.thresholdNote}>
          <ShieldCheck size={17} />
          <p>
            Always verify the applicable threshold and
            qualifying conditions for the specific investment
            before committing.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* =========================================================
      DECISION FRAMEWORK
  ========================================================= */}

  <section className={styles.frameworkSection}>
    <div className={styles.container}>
      <div className={styles.frameworkHeader}>
        <div className={styles.sectionLabel}>
          YOUR DECISION
        </div>

        <h2>
          The route comes after
          <br />
          <span>the strategy.</span>
        </h2>

        <p>
          Before choosing an investment structure, establish
          what you are actually trying to achieve.
        </p>
      </div>

      <div className={styles.frameworkFlow}>
        <div className={styles.flowLine} />

        <div className={styles.flowStep}>
          <div className={styles.flowNumber}>01</div>
          <Target size={19} />
          <span>OBJECTIVE</span>
          <p>What are you trying to achieve?</p>
        </div>

        <div className={styles.flowStep}>
          <div className={styles.flowNumber}>02</div>
          <Home size={19} />
          <span>ASSET</span>
          <p>What do you want your investment to be?</p>
        </div>

        <div className={styles.flowStep}>
          <div className={styles.flowNumber}>03</div>
          <Compass size={19} />
          <span>LOCATION</span>
          <p>Where does the strategy make sense?</p>
        </div>

        <div className={styles.flowStep}>
          <div className={styles.flowNumber}>04</div>
          <Layers3 size={19} />
          <span>STRUCTURE</span>
          <p>Which qualifying structure fits?</p>
        </div>

        <div className={styles.flowStep}>
          <div className={styles.flowNumber}>05</div>
          <FileCheck2 size={19} />
          <span>REVIEW</span>
          <p>What needs to be verified?</p>
        </div>
      </div>

      <div className={styles.frameworkStatement}>
        <span />
        <strong>
          Strategy first. Route second. Verification always.
        </strong>
        <span />
      </div>
    </div>
  </section>

  {/* =========================================================
      WHICH SOUNDS LIKE YOU
  ========================================================= */}

  <section className={styles.personaSection}>
    <div className={styles.container}>
      <div className={styles.sectionIntro}>
        <div>
          <div className={styles.sectionLabel}>
            WHICH SOUNDS LIKE YOU?
          </div>

          <h2>
            Start where
            <br />
            <span>you are.</span>
          </h2>
        </div>

        <p>
          You do not need to know the answer before speaking
          with an advisor. These are simply starting points to
          help you understand which direction may deserve a
          closer look.
        </p>
      </div>

      <div className={styles.personaGrid}>
        <article className={styles.personaCard}>
          <span>01</span>
          <Home size={21} />

          <h3>
            “I want a property
            <br />
            I can understand and own.”
          </h3>

          <p>
            A conventional property acquisition may be the
            natural place to begin.
          </p>

          <Link href="/investments/ready-properties">
            Explore Properties
            <ArrowRight size={15} />
          </Link>
        </article>

        <article className={styles.personaCard}>
          <span>02</span>
          <Target size={21} />

          <h3>
            “I want someone to help me
            <br />
            identify the right strategy.”
          </h3>

          <p>
            A more selective property strategy may deserve
            closer consideration.
          </p>

          <Link href="/investments/strategic-properties">
            Explore Strategic Options
            <ArrowRight size={15} />
          </Link>
        </article>

        <article className={styles.personaCard}>
          <span>03</span>
          <Layers3 size={21} />

          <h3>
            “I don't necessarily want my
            <br />
            investment centred on property.”
          </h3>

          <p>
            An alternative qualifying investment structure may
            be worth investigating.
          </p>

          <Link href="/investments/alternative-investments">
            Explore Alternatives
            <ArrowRight size={15} />
          </Link>
        </article>
      </div>
    </div>
  </section>

  {/* =========================================================
      FAQ
  ========================================================= */}

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
            <span>decide.</span>
          </h2>

          <p>
            A few questions investors commonly have before
            choosing where to focus their research.
          </p>
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

                <span>{faq.question}</span>

                <ChevronDown
                  className={styles.faqIcon}
                  size={18}
                />
              </summary>

              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* =========================================================
      FINAL CTA
  ========================================================= */}

  <section className={styles.ctaSection}>
    <div className={styles.container}>
      <div className={styles.ctaCard}>
        <div className={styles.ctaIcon}>
          <Compass size={24} strokeWidth={1.5} />
        </div>

        <div className={styles.ctaContent}>
          <div className={styles.sectionLabel}>
            NOT SURE WHICH DIRECTION FITS?
          </div>

          <h2>
            Start with your
            <br />
            <span>investment objective.</span>
          </h2>

          <p>
            Tell us what you are trying to achieve and we can
            help you understand which investment approach
            deserves closer consideration.
          </p>
        </div>

        <Link
          href="/team/contact"
          className={styles.ctaButton}
        >
          Book a Private Consultation
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  </section>

  {/* =========================================================
      LEGAL
  ========================================================= */}

  <section className={styles.legalSection}>
    <div className={styles.container}>
      <div className={styles.legalInner}>
        <ShieldCheck size={17} />

        <p>
          <strong>Important:</strong> This comparison is
          provided for general informational purposes only. It
          is not legal, tax, immigration, financial or
          investment advice. Investment suitability and Golden
          Visa eligibility depend on the specific investment,
          applicant circumstances, applicable legislation and
          documentation at the relevant time.
        </p>
      </div>
    </div>
  </section>
</main>


);
}
