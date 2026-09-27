"use client";

import { useMemo, useState } from "react";
import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
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

const locations = [
  { value: "All locations", key: "all" },
  { value: "Attica", key: "attica" },
  { value: "Peloponnese", key: "peloponnese" },
  { value: "Crete", key: "crete" },
  { value: "Central Macedonia", key: "centralMacedonia" },
];

const routes = [
  { value: "All routes", key: "all" },
  { value: "€250K", key: "twoFifty" },
  { value: "€400K", key: "fourHundred" },
  { value: "€800K", key: "eightHundred" },
  { value: "Lifestyle Investment", key: "lifestyle" },
  { value: "Not Yet Verified", key: "notVerified" },
];

const propertyTypes = [
  { value: "All property types", key: "all" },
  { value: "Apartment", key: "apartment" },
  { value: "Residence", key: "residence" },
  { value: "Villa", key: "villa" },
  { value: "Land", key: "land" },
  { value: "Commercial", key: "commercial" },
];

const faqs = [
  "automaticEligibility",
  "reviewBeforePurchase",
  "readyToMove",
  "propertyElsewhere",
];

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ReadyPropertiesClient({ properties }) {
  const { t } = useLanguage();

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
    properties,
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

  function getLocationLabel(value) {
    const location = locations.find((item) => item.value === value);
    return location
      ? t(`readyProperties.filters.locations.${location.key}`)
      : value;
  }

  function getRouteLabel(value) {
    const route = routes.find((item) => item.value === value);
    return route
      ? t(`readyProperties.filters.routes.${route.key}`)
      : value;
  }

  function getPropertyTypeLabel(value) {
    const type = propertyTypes.find((item) => item.value === value);
    return type
      ? t(`readyProperties.filters.types.${type.key}`)
      : value;
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              {t("readyProperties.hero.eyebrow")}
            </div>

            <h1>
              {t("readyProperties.hero.titleLineOne")}
              <br />
              <em>{t("readyProperties.hero.titleLineTwo")}</em>
            </h1>

            <p>{t("readyProperties.hero.description")}</p>

            <div className={styles.heroActions}>
              <a
                href="#properties"
                className={styles.primaryButton}
              >
                {t("readyProperties.hero.primaryButton")}
                <ArrowRight size={16} />
              </a>

              <LocalizedLink
                href="/team/contact"
                className={styles.secondaryButton}
              >
                {t("readyProperties.hero.secondaryButton")}
              </LocalizedLink>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>{t("readyProperties.hero.meta.investment")}</span>
            <strong>{t("readyProperties.hero.meta.property")}</strong>
            <span>{t("readyProperties.hero.meta.greece")}</span>
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div>
              <div className={styles.sectionLabel}>
                {t("readyProperties.intro.label")}
              </div>

              <h2>
                {t("readyProperties.intro.titleLineOne")}
                <br />
                <span>
                  {t("readyProperties.intro.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>
              {t("readyProperties.intro.paragraphOne")}
              <br />
              <br />
              {t("readyProperties.intro.paragraphTwo")}
            </p>
          </div>

          <div className={styles.strategyGrid}>
            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>01</span>
                <MapPin size={20} strokeWidth={1.5} />
              </div>

              <div>
                <strong>
                  {t("readyProperties.strategy.location.label")}
                </strong>
                <h3>
                  {t("readyProperties.strategy.location.title")}
                </h3>
                <p>
                  {t("readyProperties.strategy.location.text")}
                </p>
              </div>
            </article>

            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>02</span>
                <Home size={20} strokeWidth={1.5} />
              </div>

              <div>
                <strong>
                  {t("readyProperties.strategy.property.label")}
                </strong>
                <h3>
                  {t("readyProperties.strategy.property.title")}
                </h3>
                <p>
                  {t("readyProperties.strategy.property.text")}
                </p>
              </div>
            </article>

            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>03</span>
                <Building2 size={20} strokeWidth={1.5} />
              </div>

              <div>
                <strong>
                  {t("readyProperties.strategy.route.label")}
                </strong>
                <h3>
                  {t("readyProperties.strategy.route.title")}
                </h3>
                <p>
                  {t("readyProperties.strategy.route.text")}
                </p>
              </div>
            </article>

            <article className={styles.strategyCard}>
              <div className={styles.strategyTop}>
                <span>04</span>
                <ShieldCheck size={20} strokeWidth={1.5} />
              </div>

              <div>
                <strong>
                  {t("readyProperties.strategy.review.label")}
                </strong>
                <h3>
                  {t("readyProperties.strategy.review.title")}
                </h3>
                <p>
                  {t("readyProperties.strategy.review.text")}
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
                {t("readyProperties.collection.label")}
              </div>

              <h2>
                {t("readyProperties.collection.titleLineOne")}
                <br />
                <span>
                  {t("readyProperties.collection.titleLineTwo")}
                </span>
              </h2>
            </div>

            <div className={styles.propertiesHeaderRight}>
              <p>
                {t("readyProperties.collection.description")}
              </p>

              <div className={styles.resultCount}>
                {filteredProperties.length}{" "}
                {filteredProperties.length === 1
                  ? t("readyProperties.collection.opportunity")
                  : t("readyProperties.collection.opportunities")}
              </div>
            </div>
          </div>

          <div className={styles.filterShell}>
            <div className={styles.filterTop}>
              <div className={styles.filterTitle}>
                <SlidersHorizontal size={16} />
                {t("readyProperties.filters.title")}
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
                {t("readyProperties.filters.mobileButton")}
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
                  {t("readyProperties.filters.clear")}
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
                  placeholder={t(
                    "readyProperties.filters.searchPlaceholder"
                  )}
                  aria-label={t(
                    "readyProperties.filters.searchAriaLabel"
                  )}
                />

                {searchQuery && (
                  <button
                    type="button"
                    className={styles.searchClear}
                    onClick={() => setSearchQuery("")}
                    aria-label={t(
                      "readyProperties.filters.clearSearch"
                    )}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <label className={styles.selectField}>
                <span>
                  {t("readyProperties.filters.locationLabel")}
                </span>

                <div className={styles.selectInner}>
                  <MapPin size={15} />

                  <select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    aria-label={t(
                      "readyProperties.filters.locationLabel"
                    )}
                  >
                    {locations.map((location) => (
                      <option
                        value={location.value}
                        key={location.value}
                      >
                        {getLocationLabel(location.value)}
                      </option>
                    ))}
                  </select>

                  <ChevronDown size={15} />
                </div>
              </label>

              <label className={styles.selectField}>
                <span>
                  {t("readyProperties.filters.routeLabel")}
                </span>

                <div className={styles.selectInner}>
                  <Euro size={15} />

                  <select
                    value={selectedRoute}
                    onChange={handleRouteChange}
                    aria-label={t(
                      "readyProperties.filters.routeLabel"
                    )}
                  >
                    {routes.map((route) => (
                      <option
                        value={route.value}
                        key={route.value}
                      >
                        {getRouteLabel(route.value)}
                      </option>
                    ))}
                  </select>

                  <ChevronDown size={15} />
                </div>
              </label>

              <label className={styles.selectField}>
                <span>
                  {t("readyProperties.filters.typeLabel")}
                </span>

                <div className={styles.selectInner}>
                  <Home size={15} />

                  <select
                    value={selectedType}
                    onChange={handleTypeChange}
                    aria-label={t(
                      "readyProperties.filters.typeLabel"
                    )}
                  >
                    {propertyTypes.map((type) => (
                      <option
                        value={type.value}
                        key={type.value}
                      >
                        {getPropertyTypeLabel(type.value)}
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
              {t("readyProperties.results.showing")}{" "}
              {filteredProperties.length}{" "}
              {filteredProperties.length === 1
                ? t("readyProperties.results.property")
                : t("readyProperties.results.properties")}
            </span>

            {hasActiveFilters && (
              <span className={styles.resultsFiltered}>
                {t("readyProperties.results.filtered")}
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
                      {property.route === "Not Yet Verified"
                        ? t(
                            "readyProperties.propertyCard.routeNotVerified"
                          )
                        : `${property.route} ${t(
                            "readyProperties.propertyCard.routeSuffix"
                          )}`}
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
                      <LocalizedLink
                        href={`/team/contact?property=${encodeURIComponent(
                          property.title
                        )}`}
                        className={styles.propertyPrimary}
                      >
                        {t(
                          "readyProperties.propertyCard.reviewButton"
                        )}
                        <ArrowRight size={15} />
                      </LocalizedLink>
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

              <span>
                {t("readyProperties.empty.label")}
              </span>

              <h3>
                {t("readyProperties.empty.title")}
              </h3>

              <p>
                {t("readyProperties.empty.description")}
              </p>

              <button
                type="button"
                className={styles.emptyButton}
                onClick={resetFilters}
              >
                {t("readyProperties.empty.button")}
                <X size={14} />
              </button>
            </div>
          )}

          <div className={styles.collectionNote}>
            <ShieldCheck size={17} />

            <p>
              <strong>
                {t("readyProperties.collectionNote.important")}
              </strong>{" "}
              {t("readyProperties.collectionNote.text")}
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
                {t("readyProperties.review.label")}
              </div>

              <h2>
                {t("readyProperties.review.titleLineOne")}
                <br />
                <span>
                  {t("readyProperties.review.titleLineTwo")}
                </span>
              </h2>

              <p>{t("readyProperties.review.description")}</p>
            </div>

            <LocalizedLink
              href="/team/contact"
              className={styles.reviewButton}
            >
              {t("readyProperties.review.button")}
              <ArrowRight size={16} />
            </LocalizedLink>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIntro}>
              <div className={styles.sectionLabel}>
                {t("readyProperties.faq.label")}
              </div>

              <h2>
                {t("readyProperties.faq.titleLineOne")}
                <br />
                <span>
                  {t("readyProperties.faq.titleLineTwo")}
                </span>
              </h2>

              <p>
                {t("readyProperties.faq.description")}
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details
                  className={styles.faqItem}
                  key={faq}
                >
                  <summary>
                    <span className={styles.faqNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      {t(
                        `readyProperties.faq.items.${faq}.question`
                      )}
                    </span>

                    <CircleHelp
                      className={styles.faqIcon}
                      size={18}
                    />
                  </summary>

                  <div className={styles.answer}>
                    <p>
                      {t(
                        `readyProperties.faq.items.${faq}.answer`
                      )}
                    </p>
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
                {t("readyProperties.cta.label")}
              </div>

              <h2>
                {t("readyProperties.cta.titleLineOne")}
                <br />
                <span>
                  {t("readyProperties.cta.titleLineTwo")}
                </span>
              </h2>

              <p>{t("readyProperties.cta.description")}</p>
            </div>

            <LocalizedLink
              href="/team/contact"
              className={styles.ctaButton}
            >
              {t("readyProperties.cta.button")}
              <ArrowRight size={17} />
            </LocalizedLink>
          </div>
        </div>
      </section>

      <section className={styles.legalSection}>
        <div className={styles.container}>
          <div className={styles.legalInner}>
            <ShieldCheck size={17} />

            <p>
              <strong>
                {t("readyProperties.legal.title")}
              </strong>{" "}
              {t("readyProperties.legal.text")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}