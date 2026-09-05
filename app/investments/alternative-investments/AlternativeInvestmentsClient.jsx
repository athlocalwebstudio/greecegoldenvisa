"use client";

import { useState } from "react";
import Link from "next/link";
import {
ArrowDownRight,
ArrowRight,
Building2,
Check,
ChevronDown,
CircleHelp,
Euro,
FileCheck2,
Landmark,
LineChart,
LockKeyhole,
ShieldCheck,
WalletCards,
} from "lucide-react";

import styles from "./alternative-investments.module.css";

const investmentRoutes = [
{
id: "market",
label: "MARKET INVESTMENTS",
number: "01",
icon: LineChart,
routes: [
{
amount: "€800K",
title: "Listed securities",
description:
"Qualifying shares, corporate bonds and/or Greek government bonds traded on regulated markets or multilateral trading facilities operating in Greece.",
tags: ["Listed securities", "Regulated market"],
},
{
amount: "€500K",
title: "Greek government bonds",
description:
"A qualifying investment in Greek government bonds with a minimum acquisition value of €500,000 and at least three years of remaining maturity at the time of purchase.",
tags: ["Government bonds", "3+ years maturity"],
},
],
},
{
id: "managed",
label: "FUNDS & MANAGED STRUCTURES",
number: "02",
icon: WalletCards,
routes: [
{
amount: "€350K",
title: "Qualifying mutual funds",
description:
"Qualifying mutual fund structures meeting the statutory requirements, including the applicable asset and investment conditions.",
tags: ["Mutual funds", "Regulated structure"],
},
{
amount: "€350K",
title: "Alternative Investment Organisations",
description:
"Qualifying alternative investment structures meeting the applicable statutory requirements and investing exclusively in Greece.",
tags: ["AIF structure", "Greece focused"],
},
],
},
{
id: "structured",
label: "DIRECT / STRUCTURED CAPITAL",
number: "03",
icon: Building2,
routes: [
{
amount: "€500K",
title: "Greek company investment",
description:
"A qualifying capital contribution into newly issued shares or bonds of an eligible Greek company, subject to the applicable requirements.",
tags: ["Company capital", "New issuance"],
},
{
amount: "€500K",
title: "Greek real-estate investment companies",
description:
"A qualifying capital contribution into an eligible Greek real-estate investment company structure operating under the applicable framework.",
tags: ["REIC", "Greek real estate"],
},
{
amount: "€500K",
title: "Venture capital structures",
description:
"Qualifying E.K.E.S. or A.K.E.S. structures meeting the applicable requirements and investing exclusively in businesses with a presence in Greece.",
tags: ["Venture capital", "Greek businesses"],
},
{
amount: "€500K",
title: "Fixed-term deposit",
description:
"A qualifying fixed-term deposit with a Greek credit institution, subject to the applicable duration, renewal and documentation requirements.",
tags: ["Greek credit institution", "Fixed term"],
},
],
},
];

const reviewPoints = [
{
number: "01",
title: "Structure",
text:
"Is the investment vehicle actually within the applicable statutory category?",
icon: Building2,
},
{
number: "02",
title: "Eligibility",
text:
"Does the fund, organisation, issuer or instrument satisfy the relevant requirements?",
icon: ShieldCheck,
},
{
number: "03",
title: "Custody",
text:
"Where is the investment held and how can the investment be documented?",
icon: LockKeyhole,
},
{
number: "04",
title: "Evidence",
text:
"Can the investment and its continued holding be properly certified?",
icon: FileCheck2,
},
];

const faqs = [
{
question: "Can I obtain the Golden Visa without buying property?",
answer:
"Yes. Greece's investor residence framework includes qualifying financial investment routes in addition to real estate. The relevant investment must satisfy the specific statutory conditions for the route being used.",
},
{
question: "Why are some financial routes €350K and others €500K?",
answer:
"The investment thresholds differ according to the specific statutory category and the characteristics of the investment. The amount alone does not determine eligibility.",
},
{
question: "Does every investment fund qualify?",
answer:
"No. A fund or investment organisation must satisfy the requirements applicable to its specific category. The existence of a €350,000 or €500,000 investment opportunity does not by itself make it a qualifying Golden Visa investment.",
},
{
question: "Can I invest in Greek government bonds?",
answer:
"Certain Greek government bond investments can qualify under the applicable framework, subject to the required investment amount, maturity and other statutory conditions.",
},
{
question: "Do I have to keep the investment?",
answer:
"The qualifying investment and its continued holding must be capable of being demonstrated according to the requirements of the relevant investment route. The precise requirements vary between categories.",
},
{
question: "Can my existing investment portfolio qualify?",
answer:
"That depends on the structure, timing, value, issuer, investment vehicle and other requirements applicable to the specific route. Existing investments should be reviewed individually rather than assumed to qualify.",
},
{
question: "Is financial investment safer than buying property?",
answer:
"Golden Visa eligibility and investment risk are separate questions. Financial investments can carry market, liquidity and issuer risks, while property carries its own legal, technical, market and transaction risks.",
},
];

export default function AlternativeInvestmentsClient() {
const [openFaq, setOpenFaq] = useState(null);
const [activeRoute, setActiveRoute] = useState("all");

const visibleGroups =
activeRoute === "all"
? investmentRoutes
: investmentRoutes.filter((group) => group.id === activeRoute);

return ( <main className={styles.page}> <section className={styles.hero}> <div className={styles.heroGlow} /> <div className={styles.heroGrid} />


    <div className={styles.container}>
      <div className={styles.heroLayout}>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span />
            ALTERNATIVE INVESTMENTS
          </div>

          <h1>
            Your capital can enter Greece
            <br />
            <em>without buying a property.</em>
          </h1>

          <p>
            Explore financial investment routes available under
            Greece's investor residence framework — from qualifying
            funds and Greek government bonds to regulated investment
            structures.
          </p>

          <div className={styles.heroActions}>
            <a
              href="#routes"
              className={styles.primaryButton}
            >
              Explore Investment Routes
              <ArrowRight size={16} />
            </a>

            <Link
              href="/team/contact"
              className={styles.secondaryButton}
            >
              Discuss Your Investment
            </Link>
          </div>
        </div>

        <div className={styles.capitalVisual}>
          <div className={styles.capitalLine} />

          <div className={styles.capitalPoint}>
            <span>ENTRY</span>
            <strong>€350K</strong>
          </div>

          <div className={styles.capitalPoint}>
            <span>CORE</span>
            <strong>€500K</strong>
          </div>

          <div className={styles.capitalPoint}>
            <span>PREMIUM</span>
            <strong>€800K</strong>
          </div>

          <div className={styles.capitalCaption}>
            QUALIFYING INVESTMENT THRESHOLDS
          </div>
        </div>
      </div>

      <div className={styles.heroMeta}>
        <span>CAPITAL</span>
        <strong>GREECE</strong>
        <span>RESIDENCE</span>
      </div>
    </div>
  </section>

  <section className={styles.introSection}>
    <div className={styles.container}>
      <div className={styles.introGrid}>
        <div>
          <div className={styles.sectionLabel}>
            THE ROUTE IS THE INVESTMENT
          </div>

          <h2>
            The important question
            <br />
            <span>isn't simply how much.</span>
          </h2>
        </div>

        <p>
          It is where the capital goes, how the investment is
          structured, what it invests in, who manages or holds it,
          and whether the arrangement satisfies the applicable
          residence framework.
        </p>
      </div>

      <div className={styles.principleGrid}>
        <article className={styles.principleCard}>
          <div className={styles.principleIcon}>
            <Euro size={19} strokeWidth={1.5} />
          </div>

          <span>01 / CAPITAL</span>

          <h3>How much?</h3>

          <p>
            The statutory threshold is the starting point — not the
            entire assessment.
          </p>
        </article>

        <article className={styles.principleCard}>
          <div className={styles.principleIcon}>
            <Building2 size={19} strokeWidth={1.5} />
          </div>

          <span>02 / STRUCTURE</span>

          <h3>What exactly?</h3>

          <p>
            Shares, bonds, funds, deposits and other structures can
            have very different requirements.
          </p>
        </article>

        <article className={styles.principleCard}>
          <div className={styles.principleIcon}>
            <ShieldCheck size={19} strokeWidth={1.5} />
          </div>

          <span>03 / REGULATION</span>

          <h3>Who manages it?</h3>

          <p>
            The investment vehicle, issuer, institution or manager
            needs to fit the relevant framework.
          </p>
        </article>

        <article className={styles.principleCard}>
          <div className={styles.principleIcon}>
            <LockKeyhole size={19} strokeWidth={1.5} />
          </div>

          <span>04 / RETENTION</span>

          <h3>What must remain?</h3>

          <p>
            Holding, custody and evidence requirements matter after
            the initial investment is made.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section className={styles.routesSection} id="routes">
    <div className={styles.container}>
      <div className={styles.routesHeader}>
        <div>
          <div className={styles.sectionLabel}>
            INVESTMENT ROUTES
          </div>

          <h2>
            Different structures.
            <br />
            <span>Different requirements.</span>
          </h2>
        </div>

        <p>
          The financial route should be identified before an
          investor commits capital. These categories provide a
          framework for understanding the available pathways.
        </p>
      </div>

      <div className={styles.routeTabs}>
        <button
          type="button"
          className={
            activeRoute === "all" ? styles.activeTab : ""
          }
          onClick={() => setActiveRoute("all")}
        >
          All routes
        </button>

        {investmentRoutes.map((group) => (
          <button
            type="button"
            key={group.id}
            className={
              activeRoute === group.id ? styles.activeTab : ""
            }
            onClick={() => setActiveRoute(group.id)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div className={styles.routeGroups}>
        {visibleGroups.map((group) => {
          const GroupIcon = group.icon;

          return (
            <section
              className={styles.routeGroup}
              key={group.id}
            >
              <div className={styles.groupHeader}>
                <div className={styles.groupIdentity}>
                  <div className={styles.groupIcon}>
                    <GroupIcon
                      size={19}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <span>{group.number}</span>
                    <strong>{group.label}</strong>
                  </div>
                </div>

                <div className={styles.groupLine} />
              </div>

              <div className={styles.routeGrid}>
                {group.routes.map((route) => (
                  <article
                    className={styles.routeCard}
                    key={route.title}
                  >
                    <div className={styles.routeCardTop}>
                      <span>{route.amount}</span>

                      <ArrowDownRight
                        size={19}
                        strokeWidth={1.4}
                      />
                    </div>

                    <h3>{route.title}</h3>

                    <p>{route.description}</p>

                    <div className={styles.routeTags}>
                      {route.tags.map((tag) => (
                        <span key={tag}>
                          <Check size={11} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={styles.routeFooter}>
                      <span>QUALIFYING ROUTE</span>

                      <Link href="/team/contact">
                        Discuss
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  </section>

  <section className={styles.amountSection}>
    <div className={styles.container}>
      <div className={styles.amountCard}>
        <div className={styles.amountVisual}>
          <span>€</span>
          <strong>350K</strong>
        </div>

        <div className={styles.amountContent}>
          <div className={styles.sectionLabel}>
            SAME AMOUNT. DIFFERENT INVESTMENT.
          </div>

          <h2>
            €350,000 doesn't
            <br />
            <span>mean the same thing.</span>
          </h2>

          <p>
            Two investments can have the same price and completely
            different legal characteristics. The investment amount
            is only one part of the assessment.
          </p>

          <div className={styles.amountChecks}>
            <div>
              <Check size={14} />
              <span>Underlying assets matter.</span>
            </div>

            <div>
              <Check size={14} />
              <span>Fund or manager eligibility matters.</span>
            </div>

            <div>
              <Check size={14} />
              <span>Regulatory status matters.</span>
            </div>

            <div>
              <Check size={14} />
              <span>Holding and documentation matter.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className={styles.processSection}>
    <div className={styles.container}>
      <div className={styles.processHeader}>
        <div>
          <div className={styles.sectionLabel}>
            FROM STRATEGY TO RESIDENCE
          </div>

          <h2>
            How the financial
            <br />
            <span>route works.</span>
          </h2>
        </div>

        <p>
          A qualifying investment is not simply selected from a
          menu. The route needs to be understood, verified and
          properly documented.
        </p>
      </div>

      <div className={styles.processList}>
        <article className={styles.processItem}>
          <span>01</span>

          <div>
            <h3>Define the objective</h3>
            <p>
              Understand whether the investor is looking for
              securities, managed funds, Greek business exposure,
              government bonds, deposits or another qualifying
              structure.
            </p>
          </div>

          <ArrowRight size={18} />
        </article>

        <article className={styles.processItem}>
          <span>02</span>

          <div>
            <h3>Identify the eligible route</h3>
            <p>
              Match the intended strategy against the applicable
              statutory category and investment threshold.
            </p>
          </div>

          <ArrowRight size={18} />
        </article>

        <article className={styles.processItem}>
          <span>03</span>

          <div>
            <h3>Verify the structure</h3>
            <p>
              Confirm the relevant fund, organisation, issuer,
              intermediary, custody arrangements and regulatory
              requirements.
            </p>
          </div>

          <ArrowRight size={18} />
        </article>

        <article className={styles.processItem}>
          <span>04</span>

          <div>
            <h3>Execute the investment</h3>
            <p>
              Complete the investment through the appropriate
              financial institution or intermediary and according
              to the relevant requirements.
            </p>
          </div>

          <ArrowRight size={18} />
        </article>

        <article className={styles.processItem}>
          <span>05</span>

          <div>
            <h3>Document & maintain</h3>
            <p>
              The investment and its continued holding need to be
              capable of being evidenced throughout the relevant
              residence process.
            </p>
          </div>

          <Check size={18} />
        </article>
      </div>
    </div>
  </section>

  <section className={styles.positionSection}>
    <div className={styles.container}>
      <div className={styles.positionCard}>
        <div className={styles.positionMark}>
          <Landmark size={25} strokeWidth={1.4} />
        </div>

        <div className={styles.positionContent}>
          <div className={styles.sectionLabel}>
            OUR APPROACH
          </div>

          <h2>
            We don't believe the
            <br />
            Golden Visa should
            <br />
            <span>dictate your investment strategy.</span>
          </h2>

          <p>
            The objective is not to push an investor toward the first
            qualifying product available. The right route depends on
            objectives, risk tolerance, liquidity requirements and
            wider investment strategy — with the residence
            requirements assessed alongside those considerations.
          </p>

          <Link
            href="/team/contact"
            className={styles.positionButton}
          >
            Discuss Your Investment Strategy
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </section>

  <section className={styles.reviewSection}>
    <div className={styles.container}>
      <div className={styles.reviewHeader}>
        <div>
          <div className={styles.sectionLabel}>
            BEFORE CAPITAL MOVES
          </div>

          <h2>
            The structure needs
            <br />
            <span>to make sense.</span>
          </h2>
        </div>

        <p>
          We focus on the points that determine whether an intended
          financial investment can actually support the residence
          strategy.
        </p>
      </div>

      <div className={styles.reviewGrid}>
        {reviewPoints.map((point) => {
          const Icon = point.icon;

          return (
            <article
              className={styles.reviewItem}
              key={point.number}
            >
              <div className={styles.reviewItemTop}>
                <span>{point.number}</span>

                <Icon size={20} strokeWidth={1.4} />
              </div>

              <h3>{point.title}</h3>

              <p>{point.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>

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
            <span>move capital.</span>
          </h2>

          <p>
            Financial investment routes can look simple on paper.
            The details are where eligibility is determined.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <article
                className={`${styles.faqItem} ${
                  isOpen ? styles.faqItemOpen : ""
                }`}
                key={faq.question}
              >
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() =>
                    setOpenFaq(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqNumber}>
                    0{index + 1}
                  </span>

                  <span>{faq.question}</span>

                  <ChevronDown
                    size={17}
                    className={styles.faqChevron}
                  />
                </button>

                <div
                  className={styles.faqAnswer}
                  aria-hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>

  <section className={styles.ctaSection}>
    <div className={styles.container}>
      <div className={styles.ctaCard}>
        <div className={styles.ctaIcon}>
          <WalletCards size={24} strokeWidth={1.4} />
        </div>

        <div className={styles.ctaContent}>
          <div className={styles.sectionLabel}>
            DIFFERENT CAPITAL. SAME OBJECTIVE.
          </div>

          <h2>
            Find the route that
            <br />
            <span>fits your strategy.</span>
          </h2>

          <p>
            Let's determine which investment structure makes sense
            for your objectives and how the relevant Golden Visa
            requirements apply.
          </p>
        </div>

        <Link
          href="/team/contact"
          className={styles.ctaButton}
        >
          Discuss Your Investment Strategy
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  </section>

  <section className={styles.legalSection}>
    <div className={styles.container}>
      <div className={styles.legalInner}>
        <ShieldCheck size={17} />

        <p>
          <strong>Legal information.</strong> The investment
          categories and thresholds presented on this page are
          provided for general informational purposes and do not
          constitute legal, tax, immigration, financial or
          investment advice. Eligibility depends on the specific
          investment structure, applicant circumstances, required
          documentation and legislation in force at the relevant
          time. Financial investments may involve market,
          liquidity, issuer and other investment risks.
        </p>
      </div>
    </div>
  </section>
</main>


);
}
