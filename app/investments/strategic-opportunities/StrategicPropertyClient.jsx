"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  CircleHelp,
  Euro,
  FileCheck2,
  Hammer,
  Home,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import styles from "./strategic-opportunities.module.css";

/*
|--------------------------------------------------------------------------
| STRATEGIC PROPERTY DATA
|--------------------------------------------------------------------------
|
| These are structured demonstration opportunities.
|
| Replace the images, titles, locations, prices and descriptions with
| the client's actual opportunities when they are available.
|
| The page intentionally does NOT describe these properties as
| automatically Golden Visa eligible.
|
*/

const opportunities = [
  {
    id: 1,
    title: "Urban Conversion Opportunity",
    location: "Athens",
    area: "Attica",
    city: "Athens",
    category: "Conversion",
    route: "€250K",
    price: 250000,
    status: "Strategic Opportunity",
    image: "/images/properties/strategic-01.jpg",
    tag: "CHANGE OF USE",
    description:
      "A non-residential asset being considered for residential conversion, where the investment case depends on planning, technical feasibility and completion of the required change of use.",
    highlights: [
      "Conversion potential",
      "Urban location",
      "Technical review required",
    ],
  },
  {
    id: 2,
    title: "Listed Building Restoration",
    location: "Peloponnese",
    area: "Peloponnese",
    city: "Nafplio",
    category: "Restoration",
    route: "€250K",
    price: 250000,
    status: "Strategic Opportunity",
    image: "/images/properties/strategic-02.jpg",
    tag: "RESTORATION",
    description:
      "A character property where the investment thesis is linked to restoration, permitted works and the technical execution required to bring the asset back into use.",
    highlights: [
      "Listed-building potential",
      "Historic location",
      "Restoration assessment",
    ],
  },
  {
    id: 3,
    title: "Northern Greece Urban Asset",
    location: "Central Macedonia",
    area: "Central Macedonia",
    city: "Thessaloniki",
    category: "Repositioning",
    route: "€400K",
    price: 400000,
    status: "Strategic Opportunity",
    image: "/images/properties/strategic-03.jpg",
    tag: "REPOSITIONING",
    description:
      "An urban asset being evaluated for its location, physical characteristics and potential repositioning within the applicable real-estate investment route.",
    highlights: [
      "Urban asset",
      "Repositioning potential",
      "Route assessment required",
    ],
  },
  {
    id: 4,
    title: "Coastal Investment Asset",
    location: "Crete",
    area: "Crete",
    city: "Heraklion",
    category: "Value Positioning",
    route: "€400K",
    price: 400000,
    status: "Strategic Opportunity",
    image: "/images/properties/strategic-04.jpg",
    tag: "LOCATION",
    description:
      "A coastal property opportunity where the location, asset characteristics and acquisition structure need to be considered together before an investment decision is made.",
    highlights: [
      "Coastal location",
      "Investment positioning",
      "Property due diligence",
    ],
  },
  {
    id: 5,
    title: "Premium Athens Asset",
    location: "Attica",
    area: "Attica",
    city: "Athens",
    category: "Premium",
    route: "€800K",
    price: 800000,
    status: "Strategic Opportunity",
    image: "/images/properties/strategic-05.jpg",
    tag: "PREMIUM ROUTE",
    description:
      "A higher-value urban opportunity requiring careful assessment of location, property characteristics, transaction structure and the applicable investment threshold.",
    highlights: [
      "Premium urban location",
      "Higher-value route",
      "Full property review",
    ],
  },
  {
    id: 6,
    title: "Peloponnese Repositioning Asset",
    location: "Peloponnese",
    area: "Peloponnese",
    city: "Kalamata",
    category: "Repositioning",
    route: "€400K",
    price: 400000,
    status: "Strategic Opportunity",
    image: "/images/properties/strategic-06.jpg",
    tag: "REPOSITIONING",
    description:
      "A property being considered for its combination of location, physical asset and potential repositioning rather than simply its current presentation.",
    highlights: [
      "Peloponnese location",
      "Asset repositioning",
      "Technical assessment",
    ],
  },
];

const locations = [
  "All locations",
  "Attica",
  "Peloponnese",
  "Crete",
  "Central Macedonia",
];

const strategies = [
  "All strategies",
  "Conversion",
  "Restoration",
  "Repositioning",
  "Value Positioning",
  "Premium",
];

const routes = [
  "All routes",
  "€250K",
  "€400K",
  "€800K",
];

const faqs = [
  {
    question: "What makes a property a strategic opportunity?",
    answer:
      "A strategic opportunity is not selected simply because it is attractive or available. The property may have a particular location, asset type, conversion possibility, restoration angle or repositioning potential that makes the investment case worth examining in more detail.",
  },
  {
    question: "Does a €250K opportunity automatically qualify for the Golden Visa?",
    answer:
      "No. The €250K threshold applies to specific categories under the current framework, including qualifying change-of-use cases and qualifying listed-building restoration or reconstruction cases. The property, transaction and required conditions must be verified individually before acquisition.",
  },
  {
    question: "Why are technical checks especially important for strategic properties?",
    answer:
      "Because the investment case can depend on matters that are not visible in a listing: permitted use, planning status, building condition, floor area, documentation, existing works and whether the proposed strategy can actually be executed.",
  },
  {
    question: "Can I submit my own property for strategic review?",
    answer:
      "Yes. If you have found an asset independently, you can send it to us for review. The objective is to understand whether the property makes sense within your intended Golden Visa strategy before you commit.",
  },
];

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function StrategicPropertyClient() {
  const [selectedLocation, setSelectedLocation] =
    useState("All locations");

  const [selectedStrategy, setSelectedStrategy] =
    useState("All strategies");

  const [selectedRoute, setSelectedRoute] =
    useState("All routes");

  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredOpportunities = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return opportunities.filter((opportunity) => {
      const matchesLocation =
        selectedLocation === "All locations" ||
        opportunity.area === selectedLocation;

      const matchesStrategy =
        selectedStrategy === "All strategies" ||
        opportunity.category === selectedStrategy;

      const matchesRoute =
        selectedRoute === "All routes" ||
        opportunity.route === selectedRoute;

      const matchesSearch =
        !query ||
        opportunity.title.toLowerCase().includes(query) ||
        opportunity.location.toLowerCase().includes(query) ||
        opportunity.city.toLowerCase().includes(query) ||
        opportunity.category.toLowerCase().includes(query) ||
        opportunity.tag.toLowerCase().includes(query);

      return (
        matchesLocation &&
        matchesStrategy &&
        matchesRoute &&
        matchesSearch
      );
    });
  }, [
    selectedLocation,
    selectedStrategy,
    selectedRoute,
    searchQuery,
  ]);

  const hasActiveFilters =
    selectedLocation !== "All locations" ||
    selectedStrategy !== "All strategies" ||
    selectedRoute !== "All routes" ||
    searchQuery.trim() !== "";

  function resetFilters() {
    setSelectedLocation("All locations");
    setSelectedStrategy("All strategies");
    setSelectedRoute("All routes");
    setSearchQuery("");
  }

  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span />
                STRATEGIC PROPERTY OPPORTUNITIES
              </div>

              <h1>
                The right property
                <br />
                is not always
                <br />
                <em>the obvious one.</em>
              </h1>

              <p>
                Some opportunities require more than comparing
                photographs, asking prices and locations. We look at
                the asset, the intended strategy and the applicable
                Golden Visa route together before an investment is
                treated as viable.
              </p>

              <div className={styles.heroActions}>
                <a
                  href="#opportunities"
                  className={styles.primaryButton}
                >
                  Explore Opportunities
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/team/contact"
                  className={styles.secondaryButton}
                >
                  Discuss an Opportunity
                </Link>
              </div>
            </div>

            <div className={styles.heroAside}>
              <div className={styles.heroAsideLine} />

              <span>STRATEGY</span>
              <strong>PROPERTY</strong>
              <span>EXECUTION</span>

              <div className={styles.heroAsideNumber}>
                02
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POSITIONING
      ========================================================= */}

      <section className={styles.positionSection}>
        <div className={styles.container}>
          <div className={styles.positionHeader}>
            <div>
              <div className={styles.sectionLabel}>
                NOT JUST A CHEAPER PROPERTY
              </div>

              <h2>
                Strategic value is
                <br />
                <span>usually hidden in the details.</span>
              </h2>
            </div>

            <p>
              A strategic property may need a different way of
              looking at it. The opportunity can come from a
              conversion, restoration, repositioning or a location
              that makes sense for a particular investment route.
              <br />
              <br />
              That also means the risks need to be understood before
              the opportunity is treated as an investment.
            </p>
          </div>

          <div className={styles.strategyGrid}>
            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>01</span>
                <Sparkles size={19} strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.cardLabel}>
                  OPPORTUNITY
                </span>

                <h3>See beyond the listing.</h3>

                <p>
                  We look at what the asset could become, not only
                  how it is presented today.
                </p>
              </div>
            </article>

            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>02</span>
                <Hammer size={19} strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.cardLabel}>
                  FEASIBILITY
                </span>

                <h3>Can the strategy actually work?</h3>

                <p>
                  Proposed conversions, restoration or repositioning
                  need to be technically and legally examined.
                </p>
              </div>
            </article>

            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>03</span>
                <FileCheck2 size={19} strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.cardLabel}>
                  DOCUMENTATION
                </span>

                <h3>The paperwork matters.</h3>

                <p>
                  Ownership, planning and property documentation form
                  part of the investment assessment.
                </p>
              </div>
            </article>

            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>04</span>
                <ShieldCheck size={19} strokeWidth={1.5} />
              </div>

              <div>
                <span className={styles.cardLabel}>
                  ROUTE
                </span>

                <h3>Match the asset to the route.</h3>

                <p>
                  The intended Golden Visa route must be identified
                  before the property is treated as qualifying.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          STRATEGIC CATEGORIES
      ========================================================= */}

      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <div className={styles.categoriesHeader}>
            <div>
              <div className={styles.sectionLabel}>
                WHAT WE LOOK FOR
              </div>

              <h2>
                Different assets.
                <br />
                <span>Different strategies.</span>
              </h2>
            </div>

            <p>
              Strategic opportunities are assessed according to what
              makes the property interesting and what needs to happen
              before that potential can become a real investment.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            <article className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <Building2 size={21} strokeWidth={1.4} />
              </div>

              <span>01 / CONVERSION</span>

              <h3>
                Non-residential
                <br />
                into residential.
              </h3>

              <p>
                Assets where a change of use may form part of the
                investment strategy, subject to the applicable
                planning and legal requirements.
              </p>

              <div className={styles.categoryFoot}>
                <span>€250K ROUTE MAY APPLY</span>
                <ArrowRight size={15} />
              </div>
            </article>

            <article className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <Hammer size={21} strokeWidth={1.4} />
              </div>

              <span>02 / RESTORATION</span>

              <h3>
                Character assets
                <br />
                worth restoring.
              </h3>

              <p>
                Listed or protected buildings where restoration or
                reconstruction forms part of the investment thesis.
              </p>

              <div className={styles.categoryFoot}>
                <span>€250K ROUTE MAY APPLY</span>
                <ArrowRight size={15} />
              </div>
            </article>

            <article className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                <MapPin size={21} strokeWidth={1.4} />
              </div>

              <span>03 / LOCATION</span>

              <h3>
                Location-led
                <br />
                opportunities.
              </h3>

              <p>
                Properties where the location, market positioning and
                applicable investment threshold need to be considered
                together.
              </p>

              <div className={styles.categoryFoot}>
                <span>ROUTE DEPENDENT</span>
                <ArrowRight size={15} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENT OPPORTUNITIES
      ========================================================= */}

      <section
        className={styles.opportunitiesSection}
        id="opportunities"
      >
        <div className={styles.container}>
          <div className={styles.opportunitiesHeader}>
            <div>
              <div className={styles.sectionLabel}>
                STRATEGIC COLLECTION
              </div>

              <h2>
                Opportunities worth
                <br />
                <span>looking at differently.</span>
              </h2>
            </div>

            <p>
              Explore the current selection by location, strategy or
              indicative route. These are opportunities for
              investigation — not automatic eligibility statements.
            </p>
          </div>

          {/* =====================================================
              FILTERS
          ===================================================== */}

          <div className={styles.filterShell}>
            <div className={styles.filterTop}>
              <div className={styles.filterTitle}>
                <Search size={15} />
                FIND AN OPPORTUNITY
              </div>

              <button
                type="button"
                className={styles.mobileFilterButton}
                onClick={() =>
                  setFiltersOpen((current) => !current)
                }
                aria-expanded={filtersOpen}
              >
                Filters
                <ChevronDown
                  size={14}
                  className={
                    filtersOpen ? styles.rotateIcon : ""
                  }
                />
              </button>

              {hasActiveFilters && (
                <button
                  type="button"
                  className={styles.clearButton}
                  onClick={resetFilters}
                >
                  Clear filters
                  <X size={13} />
                </button>
              )}
            </div>

            <div
              className={`${styles.filterControls} ${
                filtersOpen ? styles.filterControlsOpen : ""
              }`}
            >
              <div className={styles.searchField}>
                <Search size={16} />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Search opportunity or location..."
                  aria-label="Search strategic opportunities"
                />

                {searchQuery && (
                  <button
                    type="button"
                    className={styles.clearSearch}
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className={styles.selectField}>
                <span>LOCATION</span>

                <select
                  value={selectedLocation}
                  onChange={(event) =>
                    setSelectedLocation(event.target.value)
                  }
                >
                  {locations.map((location) => (
                    <option
                      value={location}
                      key={location}
                    >
                      {location}
                    </option>
                  ))}
                </select>

                <MapPin size={14} />
              </div>

              <div className={styles.selectField}>
                <span>STRATEGY</span>

                <select
                  value={selectedStrategy}
                  onChange={(event) =>
                    setSelectedStrategy(event.target.value)
                  }
                >
                  {strategies.map((strategy) => (
                    <option
                      value={strategy}
                      key={strategy}
                    >
                      {strategy}
                    </option>
                  ))}
                </select>

                <Sparkles size={14} />
              </div>

              <div className={styles.selectField}>
                <span>INDICATIVE ROUTE</span>

                <select
                  value={selectedRoute}
                  onChange={(event) =>
                    setSelectedRoute(event.target.value)
                  }
                >
                  {routes.map((route) => (
                    <option
                      value={route}
                      key={route}
                    >
                      {route}
                    </option>
                  ))}
                </select>

                <Euro size={14} />
              </div>
            </div>
          </div>

          {/* =====================================================
              RESULTS
          ===================================================== */}

          <div className={styles.resultsHeader}>
            <span>
              {filteredOpportunities.length}{" "}
              {filteredOpportunities.length === 1
                ? "strategic opportunity"
                : "strategic opportunities"}
            </span>

            {hasActiveFilters && (
              <span className={styles.filteredLabel}>
                Filtered selection
              </span>
            )}
          </div>

          {filteredOpportunities.length > 0 ? (
            <div className={styles.opportunityGrid}>
              {filteredOpportunities.map((opportunity) => (
                <article
                  className={styles.opportunityCard}
                  key={opportunity.id}
                >
                  <div className={styles.imageWrap}>
                    <img
                      src={opportunity.image}
                      alt={opportunity.title}
                      className={styles.opportunityImage}
                    />

                    <div className={styles.opportunityStatus}>
                      <span />
                      {opportunity.status}
                    </div>

                    <div className={styles.opportunityTag}>
                      {opportunity.tag}
                    </div>
                  </div>

                  <div className={styles.opportunityBody}>
                    <div className={styles.locationLine}>
                      <MapPin size={13} />
                      {opportunity.city},{" "}
                      {opportunity.location}
                    </div>

                    <div className={styles.titleRow}>
                      <div>
                        <h3>{opportunity.title}</h3>

                        <span>
                          {opportunity.category}
                        </span>
                      </div>

                      <strong>{opportunity.route}</strong>
                    </div>

                    <p className={styles.description}>
                      {opportunity.description}
                    </p>

                    <div className={styles.highlights}>
                      {opportunity.highlights.map(
                        (highlight) => (
                          <span key={highlight}>
                            <Check size={12} />
                            {highlight}
                          </span>
                        )
                      )}
                    </div>

                    <div className={styles.opportunityBottom}>
                      <div className={styles.price}>
                        <span>INDICATIVE ACQUISITION</span>
                        <strong>
                          {formatPrice(opportunity.price)}
                        </strong>
                      </div>

                      <Link
                        href={`/team/contact?property=${encodeURIComponent(
                          opportunity.title
                        )}`}
                        className={styles.reviewLink}
                      >
                        Discuss Opportunity
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <Search size={21} />
              </div>

              <span>NO MATCHES</span>

              <h3>
                Nothing matches those criteria.
              </h3>

              <p>
                Try another location, strategy or indicative route.
              </p>

              <button
                type="button"
                className={styles.emptyButton}
                onClick={resetFilters}
              >
                Clear filters
                <X size={14} />
              </button>
            </div>
          )}

          <div className={styles.collectionNote}>
            <ShieldCheck size={17} />

            <p>
              <strong>Important:</strong> An indicative route or
              investment amount shown here does not constitute a
              determination of Golden Visa eligibility. The specific
              property, acquisition structure, documentation and
              applicable legislation must be reviewed before
              acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE ASSESS STRATEGIC ASSETS
      ========================================================= */}

      <section className={styles.assessmentSection}>
        <div className={styles.container}>
          <div className={styles.assessmentCard}>
            <div className={styles.assessmentIntro}>
              <div className={styles.sectionLabel}>
                THE INVESTMENT QUESTION
              </div>

              <h2>
                Interesting is not
                <br />
                the same as <span>viable.</span>
              </h2>

              <p>
                A strategic opportunity only becomes useful when the
                proposed investment can survive technical, legal and
                route-specific scrutiny.
              </p>
            </div>

            <div className={styles.assessmentList}>
              <div className={styles.assessmentItem}>
                <span>01</span>

                <div>
                  <h3>Asset & location</h3>

                  <p>
                    What exactly is being acquired, where is it
                    located and why does the location matter to the
                    intended route?
                  </p>
                </div>

                <MapPin size={18} />
              </div>

              <div className={styles.assessmentItem}>
                <span>02</span>

                <div>
                  <h3>Existing condition</h3>

                  <p>
                    What is physically there today, and what works
                    would be required to achieve the proposed
                    investment strategy?
                  </p>
                </div>

                <Hammer size={18} />
              </div>

              <div className={styles.assessmentItem}>
                <span>03</span>

                <div>
                  <h3>Permitted use & documentation</h3>

                  <p>
                    The intended use, planning position, ownership
                    structure and supporting documentation need to
                    align with the transaction.
                  </p>
                </div>

                <FileCheck2 size={18} />
              </div>

              <div className={styles.assessmentItem}>
                <span>04</span>

                <div>
                  <h3>Golden Visa route</h3>

                  <p>
                    Only after the property and its circumstances are
                    understood should the applicable investment route
                    be assessed.
                  </p>
                </div>

                <ShieldCheck size={18} />
              </div>
            </div>
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
                Strategic
                <br />
                <span>doesn't mean speculative.</span>
              </h2>

              <p>
                The important questions to ask before treating a
                property with potential as an investment opportunity.
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

                    <CircleHelp
                      size={18}
                      className={styles.faqIcon}
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
          CTA
      ========================================================= */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <Sparkles size={23} strokeWidth={1.5} />
            </div>

            <div className={styles.ctaContent}>
              <div className={styles.sectionLabel}>
                HAVE SOMETHING INTERESTING?
              </div>

              <h2>
                Bring us the
                <br />
                <span>property.</span>
              </h2>

              <p>
                If you have found an unusual property, conversion
                opportunity or restoration asset yourself, send it to
                us. We can help establish what needs to be checked
                before you commit.
              </p>
            </div>

            <Link
              href="/team/contact"
              className={styles.ctaButton}
            >
              Request a Strategic Review
              <ArrowRight size={16} />
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
              <strong>Legal information.</strong> The information
              presented on this page is for general informational
              purposes and does not constitute legal, tax,
              immigration or investment advice. Indicative investment
              routes and amounts are subject to the specific
              property, transaction structure, applicant
              circumstances and legislation in force at the relevant
              time. Independent legal and technical verification is
              required before acquisition.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}