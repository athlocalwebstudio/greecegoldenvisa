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
Home,
MapPin,
Search,
ShieldCheck,
SlidersHorizontal,
X,
} from "lucide-react";

import styles from "./ready-properties.module.css";

const properties = [
{
id: 1,
title: "Coastal Residence",
location: "Peloponnese",
city: "Nafplio",
price: 250000,
route: "€250K",
type: "Apartment",
status: "Ready to Move",
image: "/images/properties/property-01.jpg",
description:
"A completed coastal residence positioned for investors exploring the €250K qualifying property route.",
features: [
"Completed property",
"Coastal location",
"€250K route",
],
},
{
id: 2,
title: "Athens Investment Residence",
location: "Attica",
city: "Athens",
price: 400000,
route: "€400K",
type: "Apartment",
status: "Ready to Move",
image: "/images/properties/property-02.jpg",
description:
"A completed residential opportunity in Attica for investors considering the applicable €400K route.",
features: [
"Completed property",
"Athens",
"€400K route",
],
},
{
id: 3,
title: "Premium Athens Residence",
location: "Attica",
city: "Athens",
price: 800000,
route: "€800K",
type: "Apartment",
status: "Ready to Move",
image: "/images/properties/property-03.jpg",
description:
"A premium completed property in a location subject to the applicable €800K investment threshold.",
features: [
"Premium location",
"Completed property",
"€800K route",
],
},
{
id: 4,
title: "Crete Coastal Residence",
location: "Crete",
city: "Heraklion",
price: 250000,
route: "€250K",
type: "Residence",
status: "Ready to Move",
image: "/images/properties/property-04.jpg",
description:
"A completed residence in Crete for investors evaluating a qualifying property investment.",
features: [
"Completed property",
"Island location",
"€250K route",
],
},
{
id: 5,
title: "Thessaloniki Residence",
location: "Central Macedonia",
city: "Thessaloniki",
price: 400000,
route: "€400K",
type: "Apartment",
status: "Ready to Move",
image: "/images/properties/property-05.jpg",
description:
"A completed urban residence for investors exploring qualifying opportunities in Northern Greece.",
features: [
"Completed property",
"Urban location",
"€400K route",
],
},
{
id: 6,
title: "Peloponnese Investment Home",
location: "Peloponnese",
city: "Kalamata",
price: 250000,
route: "€250K",
type: "Residence",
status: "Ready to Move",
image: "/images/properties/property-06.jpg",
description:
"A completed property opportunity in the Peloponnese suitable for investors exploring qualifying routes.",
features: [
"Completed property",
"Peloponnese",
"€250K route",
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

const routes = [
"All routes",
"€250K",
"€400K",
"€800K",
];

const propertyTypes = [
"All property types",
"Apartment",
"Residence",
];

const faqs = [
{
question:
"Are these properties automatically eligible for the Golden Visa?",
answer:
"No. A property being presented as a Golden Visa opportunity does not replace the necessary legal, technical and transaction checks. Each property should be assessed against the applicable investment route before acquisition.",
},
{
question:
"Can I review a property before deciding to purchase it?",
answer:
"Yes. Investors can request a property review before committing to a transaction so the property can be considered in the context of the intended Golden Visa route.",
},
{
question: "What does 'ready-to-move' mean?",
answer:
"It refers to completed or substantially completed residential properties rather than development projects that require a renovation or redevelopment strategy.",
},
{
question:
"Can you help if I already found a property elsewhere?",
answer:
"Yes. You do not have to choose a property from this collection. You can request a review of a property you have independently identified.",
},
];

function formatPrice(price) {
return new Intl.NumberFormat("en-US", {
style: "currency",
currency: "EUR",
maximumFractionDigits: 0,
}).format(price);
}

export default function ReadyPropertiesClient() {
const [selectedLocation, setSelectedLocation] =
useState("All locations");

const [selectedRoute, setSelectedRoute] =
useState("All routes");

const [selectedType, setSelectedType] =
useState("All property types");

const [searchQuery, setSearchQuery] = useState("");

const [filtersOpen, setFiltersOpen] = useState(false);

const filteredProperties = useMemo(() => {
const query = searchQuery.trim().toLowerCase();


return properties.filter((property) => {
  const matchesLocation =
    selectedLocation === "All locations" ||
    property.location === selectedLocation;

  const matchesRoute =
    selectedRoute === "All routes" ||
    property.route === selectedRoute;

  const matchesType =
    selectedType === "All property types" ||
    property.type === selectedType;

  const searchableText = [
    property.title,
    property.location,
    property.city,
    property.type,
    property.route,
    property.description,
    ...property.features,
  ]
    .join(" ")
    .toLowerCase();

  const matchesSearch =
    query.length === 0 || searchableText.includes(query);

  return (
    matchesLocation &&
    matchesRoute &&
    matchesType &&
    matchesSearch
  );
});


}, [
selectedLocation,
selectedRoute,
selectedType,
searchQuery,
]);

const hasActiveFilters =
selectedLocation !== "All locations" ||
selectedRoute !== "All routes" ||
selectedType !== "All property types" ||
searchQuery.trim() !== "";

function resetFilters() {
setSelectedLocation("All locations");
setSelectedRoute("All routes");
setSelectedType("All property types");
setSearchQuery("");
}

function handleLocationChange(event) {
setSelectedLocation(event.target.value);
}

function handleRouteChange(event) {
setSelectedRoute(event.target.value);
}

function handleTypeChange(event) {
setSelectedType(event.target.value);
}

return ( <main className={styles.page}> <section className={styles.hero}> <div className={styles.heroGlow} /> <div className={styles.heroGrid} />


    <div className={styles.container}>
      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>
          <span />
          READY-TO-MOVE PROPERTIES
        </div>

        <h1>
          Find the property.
          <br />
          <em>Then verify the investment.</em>
        </h1>

        <p>
          Explore completed property opportunities selected for
          investors considering the Greek Golden Visa through real
          estate. Every opportunity should be assessed against
          the applicable route before you commit.
        </p>

        <div className={styles.heroActions}>
          <a
            href="#properties"
            className={styles.primaryButton}
          >
            Explore Properties
            <ArrowRight size={16} />
          </a>

          <Link
            href="/team/contact"
            className={styles.secondaryButton}
          >
            Request a Property Review
          </Link>
        </div>
      </div>

      <div className={styles.heroMeta}>
        <span>INVESTMENT</span>
        <strong>PROPERTY</strong>
        <span>GREECE</span>
      </div>
    </div>
  </section>

  <section className={styles.introSection}>
    <div className={styles.container}>
      <div className={styles.sectionIntro}>
        <div>
          <div className={styles.sectionLabel}>
            NOT JUST ANOTHER LISTING
          </div>

          <h2>
            A property can look right
            <br />
            <span>and still need checking.</span>
          </h2>
        </div>

        <p>
          The asking price is only one part of a Golden Visa
          property investment. Location, property characteristics,
          ownership, documentation and the applicable investment
          route all matter.
          <br />
          <br />
          That is why our approach begins with the investment
          strategy rather than simply showing you properties.
        </p>
      </div>

      <div className={styles.strategyGrid}>
        <article className={styles.strategyCard}>
          <div className={styles.strategyTop}>
            <span>01</span>
            <MapPin size={20} strokeWidth={1.5} />
          </div>

          <div>
            <strong>LOCATION</strong>
            <h3>Where?</h3>
            <p>
              Location can determine which investment threshold
              and route applies.
            </p>
          </div>
        </article>

        <article className={styles.strategyCard}>
          <div className={styles.strategyTop}>
            <span>02</span>
            <Home size={20} strokeWidth={1.5} />
          </div>

          <div>
            <strong>PROPERTY</strong>
            <h3>What?</h3>
            <p>
              The property's characteristics need to fit the
              intended investment route.
            </p>
          </div>
        </article>

        <article className={styles.strategyCard}>
          <div className={styles.strategyTop}>
            <span>03</span>
            <Building2 size={20} strokeWidth={1.5} />
          </div>

          <div>
            <strong>ROUTE</strong>
            <h3>Which?</h3>
            <p>
              The intended route determines the conditions that
              need to be satisfied.
            </p>
          </div>
        </article>

        <article className={styles.strategyCard}>
          <div className={styles.strategyTop}>
            <span>04</span>
            <ShieldCheck size={20} strokeWidth={1.5} />
          </div>

          <div>
            <strong>REVIEW</strong>
            <h3>Verify.</h3>
            <p>
              The property should be reviewed before you commit
              to the transaction.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section
    className={styles.propertiesSection}
    id="properties"
  >
    <div className={styles.container}>
      <div className={styles.propertiesHeader}>
        <div>
          <div className={styles.sectionLabel}>
            PROPERTY COLLECTION
          </div>

          <h2>
            Explore available
            <br />
            <span>opportunities.</span>
          </h2>
        </div>

        <div className={styles.propertiesHeaderRight}>
          <p>
            Filter the collection by location, investment route or
            property type. Every property should still be reviewed
            individually before acquisition.
          </p>

          <div className={styles.resultCount}>
            {filteredProperties.length}{" "}
            {filteredProperties.length === 1
              ? "opportunity"
              : "opportunities"}
          </div>
        </div>
      </div>

      <div className={styles.filterShell}>
        <div className={styles.filterTop}>
          <div className={styles.filterTitle}>
            <SlidersHorizontal size={16} />
            FIND YOUR PROPERTY
          </div>

          <button
            type="button"
            className={styles.mobileFilterButton}
            onClick={() =>
              setFiltersOpen((current) => !current)
            }
            aria-expanded={filtersOpen}
            aria-controls="property-filters"
          >
            <SlidersHorizontal size={15} />
            Filters
            <ChevronDown
              size={14}
              className={
                filtersOpen
                  ? styles.rotateIcon
                  : styles.rotateIconClosed
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
              <X size={14} />
            </button>
          )}
        </div>

        <div
          id="property-filters"
          className={`${styles.filterControls} ${
            filtersOpen
              ? styles.filterControlsOpen
              : ""
          }`}
        >
          <div className={styles.searchField}>
            <Search size={17} />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search location or property..."
              aria-label="Search properties"
            />

            {searchQuery && (
              <button
                type="button"
                className={styles.searchClear}
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <label className={styles.selectField}>
            <span>LOCATION</span>

            <div className={styles.selectInner}>
              <MapPin size={15} />

              <select
                value={selectedLocation}
                onChange={handleLocationChange}
                aria-label="Filter by location"
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

              <ChevronDown size={15} />
            </div>
          </label>

          <label className={styles.selectField}>
            <span>INVESTMENT ROUTE</span>

            <div className={styles.selectInner}>
              <Euro size={15} />

              <select
                value={selectedRoute}
                onChange={handleRouteChange}
                aria-label="Filter by investment route"
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

              <ChevronDown size={15} />
            </div>
          </label>

          <label className={styles.selectField}>
            <span>PROPERTY TYPE</span>

            <div className={styles.selectInner}>
              <Home size={15} />

              <select
                value={selectedType}
                onChange={handleTypeChange}
                aria-label="Filter by property type"
              >
                {propertyTypes.map((type) => (
                  <option
                    value={type}
                    key={type}
                  >
                    {type}
                  </option>
                ))}
              </select>

              <ChevronDown size={15} />
            </div>
          </label>
        </div>
      </div>

      <div className={styles.resultsHeader}>
        <span>
          Showing {filteredProperties.length}{" "}
          {filteredProperties.length === 1
            ? "property"
            : "properties"}
        </span>

        {hasActiveFilters && (
          <span className={styles.resultsFiltered}>
            Filtered collection
          </span>
        )}
      </div>

      {filteredProperties.length > 0 ? (
        <div className={styles.propertyGrid}>
          {filteredProperties.map((property) => (
            <article
              className={styles.propertyCard}
              key={property.id}
            >
              <div className={styles.propertyImageWrap}>
                <img
                  className={styles.propertyImage}
                  src={property.image}
                  alt={property.title}
                />

                <div className={styles.propertyStatus}>
                  <span />
                  {property.status}
                </div>

                <div className={styles.propertyRoute}>
                  {property.route} route
                </div>
              </div>

              <div className={styles.propertyBody}>
                <div className={styles.propertyLocation}>
                  <MapPin size={13} />
                  {property.city}, {property.location}
                </div>

                <div className={styles.propertyTitleRow}>
                  <div>
                    <h3>{property.title}</h3>
                    <p>{property.type}</p>
                  </div>

                  <strong>
                    {formatPrice(property.price)}
                  </strong>
                </div>

                <p className={styles.propertyDescription}>
                  {property.description}
                </p>

                <div className={styles.propertySpecs}>
                  {property.features.map((feature) => (
                    <span key={feature}>
                      <Check size={12} />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className={styles.propertyActions}>
                  <Link
                    href={`/team/contact?property=${encodeURIComponent(
                      property.title
                    )}`}
                    className={styles.propertyPrimary}
                  >
                    Request Property Review
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

          <h3>No matching properties.</h3>

          <p>
            Try another location, investment route or property
            type.
          </p>

          <button
            type="button"
            className={styles.emptyButton}
            onClick={resetFilters}
          >
            Clear all filters
            <X size={14} />
          </button>
        </div>
      )}

      <div className={styles.collectionNote}>
        <ShieldCheck size={17} />

        <p>
          <strong>Important:</strong> Property availability,
          pricing and Golden Visa qualification can change.
          Individual properties must be verified against the
          applicable legislation, investment route and
          documentation before acquisition.
        </p>
      </div>
    </div>
  </section>

  <section className={styles.reviewSection}>
    <div className={styles.container}>
      <div className={styles.reviewCard}>
        <div className={styles.reviewIcon}>
          <ShieldCheck size={23} strokeWidth={1.5} />
        </div>

        <div className={styles.reviewContent}>
          <div className={styles.sectionLabel}>
            BEFORE YOU COMMIT
          </div>

          <h2>
            Found a property
            <br />
            <span>somewhere else?</span>
          </h2>

          <p>
            You do not need to choose a property from our
            collection. If you have already found a property in
            Greece, you can request a property review before
            moving forward.
          </p>
        </div>

        <Link
          href="/team/contact"
          className={styles.reviewButton}
        >
          Request a Property Review
          <ArrowRight size={16} />
        </Link>
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
            <span>choose a property.</span>
          </h2>

          <p>
            The important questions to consider before treating
            a property as a Golden Visa investment.
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
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{faq.question}</span>

                <CircleHelp
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

  <section className={styles.ctaSection}>
    <div className={styles.container}>
      <div className={styles.ctaCard}>
        <div className={styles.ctaIcon}>
          <Home size={23} strokeWidth={1.5} />
        </div>

        <div className={styles.ctaContent}>
          <div className={styles.sectionLabel}>
            READY TO LOOK SERIOUSLY?
          </div>

          <h2>
            Have a property
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            Send us the property and we can help you understand
            what should be checked before you make a commitment.
          </p>
        </div>

        <Link
          href="/team/contact"
          className={styles.ctaButton}
        >
          Speak With an Advisor
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
          <strong>Legal information.</strong> Property
          information on this page is provided for general
          informational purposes and does not constitute legal,
          tax, immigration or investment advice. Golden Visa
          eligibility depends on the specific property,
          investment route, applicant circumstances and
          legislation in force at the relevant time.
        </p>
      </div>
    </div>
  </section>
</main>


);
}
