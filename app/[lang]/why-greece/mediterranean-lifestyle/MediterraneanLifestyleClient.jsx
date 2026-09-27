"use client";

import { useState } from "react";
import LocalizedLink from "@/app/components/LocalizedLink";
import { useLanguage } from "@/app/LanguageContext";
import {
  ArrowDown,
  ArrowRight,
  Clock3,
  Compass,
  MapPin,
  Mountain,
  ShieldCheck,
  Sun,
  Utensils,
  Waves,
} from "lucide-react";

import styles from "./mediterranean-lifestyle.module.css";

const lifestyleImages = {
  hero: "/images/why-greece/mediterranean-lifestyle/hero.jpg",

  morning: "/images/why-greece/mediterranean-lifestyle/morning.jpg",
  coffee: "/images/why-greece/mediterranean-lifestyle/coffee.jpg",
  sea: "/images/why-greece/mediterranean-lifestyle/sea.jpg",
  afternoon: "/images/why-greece/mediterranean-lifestyle/afternoon.jpg",
  evening: "/images/why-greece/mediterranean-lifestyle/evening.jpg",
  night: "/images/why-greece/mediterranean-lifestyle/night.jpg",

  athens: "/images/why-greece/mediterranean-lifestyle/athens.jpg",
  crete: "/images/why-greece/mediterranean-lifestyle/crete.jpg",
  peloponnese:
    "/images/why-greece/mediterranean-lifestyle/peloponnese.jpg",
  islands: "/images/why-greece/mediterranean-lifestyle/islands.jpg",

  coast: "/images/why-greece/mediterranean-lifestyle/coast.jpg",
  beach: "/images/why-greece/mediterranean-lifestyle/beach.jpg",
  boat: "/images/why-greece/mediterranean-lifestyle/boat.jpg",

  food: "/images/why-greece/mediterranean-lifestyle/food.jpg",
  table: "/images/why-greece/mediterranean-lifestyle/table.jpg",
  market: "/images/why-greece/mediterranean-lifestyle/market.jpg",
  olive: "/images/why-greece/mediterranean-lifestyle/olive.jpg",

  spring: "/images/why-greece/mediterranean-lifestyle/spring.jpg",
  summer: "/images/why-greece/mediterranean-lifestyle/summer.jpg",
  autumn: "/images/why-greece/mediterranean-lifestyle/autumn.jpg",
  winter: "/images/why-greece/mediterranean-lifestyle/winter.jpg",

  family: "/images/why-greece/mediterranean-lifestyle/family.jpg",
  village: "/images/why-greece/mediterranean-lifestyle/village.jpg",
  mountains: "/images/why-greece/mediterranean-lifestyle/mountains.jpg",
  cityLife: "/images/why-greece/mediterranean-lifestyle/city-life.jpg",

  closing: "/images/why-greece/mediterranean-lifestyle/closing.jpg",
};

const lifestyleLocations = [
  {
    id: "athens",
    image: lifestyleImages.athens,
  },
  {
    id: "crete",
    image: lifestyleImages.crete,
  },
  {
    id: "peloponnese",
    image: lifestyleImages.peloponnese,
  },
  {
    id: "islands",
    image: lifestyleImages.islands,
  },
];

const seasons = [
  {
    id: "spring",
    number: "01",
    image: lifestyleImages.spring,
  },
  {
    id: "summer",
    number: "02",
    image: lifestyleImages.summer,
  },
  {
    id: "autumn",
    number: "03",
    image: lifestyleImages.autumn,
  },
  {
    id: "winter",
    number: "04",
    image: lifestyleImages.winter,
  },
];

const dayMoments = [
  {
    id: "morning",
    time: "08:00",
    image: lifestyleImages.morning,
  },
  {
    id: "everyday",
    time: "10:30",
    image: lifestyleImages.coffee,
  },
  {
    id: "afternoon",
    time: "13:00",
    image: lifestyleImages.afternoon,
  },
  {
    id: "sea",
    time: "17:30",
    image: lifestyleImages.sea,
  },
  {
    id: "evening",
    time: "20:30",
    image: lifestyleImages.evening,
  },
  {
    id: "night",
    time: "23:30",
    image: lifestyleImages.night,
  },
];

export default function MediterraneanLifestyleClient() {
  const { t } = useLanguage();

  const [activeLocation, setActiveLocation] = useState(
    lifestyleLocations[0]
  );

  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className={styles.hero}>
        <img
          src={lifestyleImages.hero}
          alt={t("mediterraneanLifestyle.images.hero")}
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroNoise} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              {t("mediterraneanLifestyle.hero.eyebrow")}
            </div>

            <h1>
              {t("mediterraneanLifestyle.hero.titleLineOne")}
              <br />
              <em>{t("mediterraneanLifestyle.hero.titleLineTwo")}</em>
            </h1>

            <p>{t("mediterraneanLifestyle.hero.description")}</p>

            <a href="#lifestyle" className={styles.heroButton}>
              {t("mediterraneanLifestyle.hero.button")}
              <ArrowDown size={16} />
            </a>
          </div>

          <div className={styles.heroBottom}>
            <span>36° N</span>
            <span>{t("mediterraneanLifestyle.hero.location")}</span>
            <span>{t("mediterraneanLifestyle.hero.country")}</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className={styles.introSection} id="lifestyle">
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <div className={styles.sectionLabel}>
                {t("mediterraneanLifestyle.intro.label")}
              </div>

              <h2>
                {t("mediterraneanLifestyle.intro.titleLineOne")}
                <br />
                <span>
                  {t("mediterraneanLifestyle.intro.titleLineTwo")}
                </span>
              </h2>
            </div>

            <div className={styles.introText}>
              <p>{t("mediterraneanLifestyle.intro.paragraphOne")}</p>

              <p>{t("mediterraneanLifestyle.intro.paragraphTwo")}</p>
            </div>
          </div>

          <div className={styles.imageMosaic}>
            <div
              className={`${styles.mosaicItem} ${styles.mosaicLarge}`}
            >
              <img
                src={lifestyleImages.coast}
                alt={t("mediterraneanLifestyle.images.coast")}
              />
              <span>{t("mediterraneanLifestyle.intro.mosaic.coast")}</span>
            </div>

            <div
              className={`${styles.mosaicItem} ${styles.mosaicSmall}`}
            >
              <img
                src={lifestyleImages.village}
                alt={t("mediterraneanLifestyle.images.village")}
              />
              <span>
                {t("mediterraneanLifestyle.intro.mosaic.localLife")}
              </span>
            </div>

            <div
              className={`${styles.mosaicItem} ${styles.mosaicSmall}`}
            >
              <img
                src={lifestyleImages.mountains}
                alt={t("mediterraneanLifestyle.images.mountains")}
              />
              <span>
                {t("mediterraneanLifestyle.intro.mosaic.landscape")}
              </span>
            </div>

            <div
              className={`${styles.mosaicItem} ${styles.mosaicWide}`}
            >
              <img
                src={lifestyleImages.cityLife}
                alt={t("mediterraneanLifestyle.images.cityLife")}
              />
              <span>
                {t("mediterraneanLifestyle.intro.mosaic.cityLife")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          A DAY IN GREECE
      ========================================================= */}

      <section className={styles.daySection}>
        <div className={styles.container}>
          <div className={styles.dayHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("mediterraneanLifestyle.day.label")}
              </div>

              <h2>
                {t("mediterraneanLifestyle.day.titleLineOne")}
                <br />
                <span>
                  {t("mediterraneanLifestyle.day.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>{t("mediterraneanLifestyle.day.description")}</p>
          </div>

          <div className={styles.dayTimeline}>
            {dayMoments.map((moment, index) => (
              <article
                className={`${styles.dayMoment} ${
                  styles[`dayMoment${index + 1}`]
                }`}
                key={moment.time}
              >
                <div className={styles.dayTime}>
                  <span>{moment.time}</span>
                  <div className={styles.timelineLine} />
                </div>

                <div className={styles.dayImageWrap}>
                  <img
                    src={moment.image}
                    alt={t(
                      `mediterraneanLifestyle.day.moments.${moment.id}.title`
                    )}
                    className={styles.dayImage}
                  />

                  <span className={styles.imageNumber}>
                    0{index + 1}
                  </span>
                </div>

                <div className={styles.dayContent}>
                  <span>
                    {t(
                      `mediterraneanLifestyle.day.moments.${moment.id}.label`
                    )}
                  </span>

                  <h3>
                    {t(
                      `mediterraneanLifestyle.day.moments.${moment.id}.title`
                    )}
                  </h3>

                  <p>
                    {t(
                      `mediterraneanLifestyle.day.moments.${moment.id}.text`
                    )}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DIFFERENT WAYS TO LIVE
      ========================================================= */}

      <section className={styles.locationsSection}>
        <div className={styles.container}>
          <div className={styles.locationsHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("mediterraneanLifestyle.locations.label")}
              </div>

              <h2>
                {t("mediterraneanLifestyle.locations.titleLineOne")}
                <br />
                <span>
                  {t("mediterraneanLifestyle.locations.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>{t("mediterraneanLifestyle.locations.description")}</p>
          </div>

          <div className={styles.locationExperience}>
            <div className={styles.locationImagePanel}>
              <img
                src={activeLocation.image}
                alt={t(
                  `mediterraneanLifestyle.locations.items.${activeLocation.id}.name`
                )}
                className={styles.locationMainImage}
              />

              <div className={styles.locationImageOverlay} />

              <div className={styles.locationImageInfo}>
                <span>
                  {t(
                    `mediterraneanLifestyle.locations.items.${activeLocation.id}.subtitle`
                  )}
                </span>

                <strong>
                  {t(
                    `mediterraneanLifestyle.locations.items.${activeLocation.id}.name`
                  )}
                </strong>
              </div>
            </div>

            <div className={styles.locationDetails}>
              <div className={styles.locationCounter}>
                <span>
                  {t("mediterraneanLifestyle.locations.select")}
                </span>

                <strong>
                  {String(
                    lifestyleLocations.findIndex(
                      (location) =>
                        location.id === activeLocation.id
                    ) + 1
                  ).padStart(2, "0")}
                  {" / "}
                  {String(lifestyleLocations.length).padStart(
                    2,
                    "0"
                  )}
                </strong>
              </div>

              <div className={styles.locationSelector}>
                {lifestyleLocations.map((location, index) => (
                  <button
                    type="button"
                    key={location.id}
                    className={
                      activeLocation.id === location.id
                        ? styles.locationButtonActive
                        : styles.locationButton
                    }
                    onClick={() => setActiveLocation(location)}
                  >
                    <span>0{index + 1}</span>

                    {t(
                      `mediterraneanLifestyle.locations.items.${location.id}.name`
                    )}
                  </button>
                ))}
              </div>

              <div className={styles.locationDescription}>
                <div className={styles.locationIcon}>
                  <Compass size={19} />
                </div>

                <div>
                  <h3>
                    {t(
                      `mediterraneanLifestyle.locations.items.${activeLocation.id}.name`
                    )}
                  </h3>

                  <p>
                    {t(
                      `mediterraneanLifestyle.locations.items.${activeLocation.id}.description`
                    )}
                  </p>

                  <div className={styles.locationTags}>
                    {t(
                      `mediterraneanLifestyle.locations.items.${activeLocation.id}.tags`
                    ).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.locationGallery}>
            <div>
              <img
                src={lifestyleImages.athens}
                alt={t("mediterraneanLifestyle.images.athens")}
              />
            </div>

            <div>
              <img
                src={lifestyleImages.crete}
                alt={t("mediterraneanLifestyle.images.crete")}
              />
            </div>

            <div>
              <img
                src={lifestyleImages.peloponnese}
                alt={t("mediterraneanLifestyle.images.peloponnese")}
              />
            </div>

            <div>
              <img
                src={lifestyleImages.islands}
                alt={t("mediterraneanLifestyle.images.islands")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE SEA
      ========================================================= */}

      <section className={styles.seaSection}>
        <img
          src={lifestyleImages.beach}
          alt={t("mediterraneanLifestyle.images.beach")}
          className={styles.seaBackground}
        />

        <div className={styles.seaOverlay} />

        <div className={styles.container}>
          <div className={styles.seaContent}>
            <div className={styles.sectionLabel}>
              {t("mediterraneanLifestyle.sea.label")}
            </div>

            <h2>
              {t("mediterraneanLifestyle.sea.titleLineOne")}
              <br />
              <span>
                {t("mediterraneanLifestyle.sea.titleLineTwo")}
              </span>
            </h2>

            <p>{t("mediterraneanLifestyle.sea.description")}</p>

            <div className={styles.seaStats}>
              <div>
                <strong>623</strong>
                <span>
                  {t("mediterraneanLifestyle.sea.stats.beaches")}
                </span>
              </div>

              <div>
                <strong>#2</strong>
                <span>
                  {t("mediterraneanLifestyle.sea.stats.ranking")}
                </span>
              </div>

              <div>
                <strong>6,000+</strong>
                <span>
                  {t("mediterraneanLifestyle.sea.stats.islands")}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.seaFloatingImage}>
            <img
              src={lifestyleImages.boat}
              alt={t("mediterraneanLifestyle.images.boat")}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOD
      ========================================================= */}

      <section className={styles.foodSection}>
        <div className={styles.container}>
          <div className={styles.foodGrid}>
            <div className={styles.foodVisual}>
              <div className={styles.foodImageLarge}>
                <img
                  src={lifestyleImages.food}
                  alt={t("mediterraneanLifestyle.images.food")}
                />
              </div>

              <div className={styles.foodImageSmall}>
                <img
                  src={lifestyleImages.table}
                  alt={t("mediterraneanLifestyle.images.table")}
                />
              </div>

              <div className={styles.foodImageTiny}>
                <img
                  src={lifestyleImages.market}
                  alt={t("mediterraneanLifestyle.images.market")}
                />
              </div>
            </div>

            <div className={styles.foodContent}>
              <div className={styles.sectionLabel}>
                {t("mediterraneanLifestyle.food.label")}
              </div>

              <h2>
                {t("mediterraneanLifestyle.food.titleLineOne")}
                <br />
                <span>
                  {t("mediterraneanLifestyle.food.titleLineTwo")}
                </span>
              </h2>

              <p>{t("mediterraneanLifestyle.food.description")}</p>

              <div className={styles.foodPoints}>
                <div>
                  <Utensils size={18} />

                  <div>
                    <strong>
                      {t(
                        "mediterraneanLifestyle.food.points.regional.title"
                      )}
                    </strong>

                    <p>
                      {t(
                        "mediterraneanLifestyle.food.points.regional.text"
                      )}
                    </p>
                  </div>
                </div>

                <div>
                  <Sun size={18} />

                  <div>
                    <strong>
                      {t(
                        "mediterraneanLifestyle.food.points.produce.title"
                      )}
                    </strong>

                    <p>
                      {t(
                        "mediterraneanLifestyle.food.points.produce.text"
                      )}
                    </p>
                  </div>
                </div>

                <div>
                  <Clock3 size={18} />

                  <div>
                    <strong>
                      {t(
                        "mediterraneanLifestyle.food.points.table.title"
                      )}
                    </strong>

                    <p>
                      {t(
                        "mediterraneanLifestyle.food.points.table.text"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUR SEASONS
      ========================================================= */}

      <section className={styles.seasonsSection}>
        <div className={styles.container}>
          <div className={styles.seasonsHeader}>
            <div>
              <div className={styles.sectionLabel}>
                {t("mediterraneanLifestyle.seasons.label")}
              </div>

              <h2>
                {t("mediterraneanLifestyle.seasons.titleLineOne")}
                <br />
                <span>
                  {t("mediterraneanLifestyle.seasons.titleLineTwo")}
                </span>
              </h2>
            </div>

            <p>{t("mediterraneanLifestyle.seasons.description")}</p>
          </div>

          <div className={styles.seasonsGrid}>
            {seasons.map((season) => (
              <article
                className={styles.seasonCard}
                key={season.id}
              >
                <img
                  src={season.image}
                  alt={t(
                    `mediterraneanLifestyle.seasons.items.${season.id}.name`
                  )}
                />

                <div className={styles.seasonOverlay} />

                <div className={styles.seasonInfo}>
                  <span>{season.number}</span>

                  <h3>
                    {t(
                      `mediterraneanLifestyle.seasons.items.${season.id}.name`
                    )}
                  </h3>

                  <p>
                    {t(
                      `mediterraneanLifestyle.seasons.items.${season.id}.description`
                    )}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUTDOOR LIFE
      ========================================================= */}

      <section className={styles.outdoorSection}>
        <div className={styles.container}>
          <div className={styles.outdoorGrid}>
            <div className={styles.outdoorContent}>
              <div className={styles.sectionLabel}>
                {t("mediterraneanLifestyle.outdoor.label")}
              </div>

              <h2>
                {t("mediterraneanLifestyle.outdoor.titleLineOne")}
                <br />
                <span>
                  {t("mediterraneanLifestyle.outdoor.titleLineTwo")}
                </span>
              </h2>

              <p>{t("mediterraneanLifestyle.outdoor.description")}</p>

              <div className={styles.outdoorFacts}>
                <div>
                  <Waves size={19} />
                  <span>
                    {t("mediterraneanLifestyle.outdoor.facts.coast")}
                  </span>
                </div>

                <div>
                  <Mountain size={19} />
                  <span>
                    {t("mediterraneanLifestyle.outdoor.facts.mountains")}
                  </span>
                </div>

                <div>
                  <MapPin size={19} />
                  <span>
                    {t("mediterraneanLifestyle.outdoor.facts.towns")}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.outdoorImages}>
              <div className={styles.outdoorImageOne}>
                <img
                  src={lifestyleImages.mountains}
                  alt={t("mediterraneanLifestyle.images.mountains")}
                />
              </div>

              <div className={styles.outdoorImageTwo}>
                <img
                  src={lifestyleImages.coast}
                  alt={t("mediterraneanLifestyle.images.coast")}
                />
              </div>

              <div className={styles.outdoorImageThree}>
                <img
                  src={lifestyleImages.village}
                  alt={t("mediterraneanLifestyle.images.village")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INVESTOR CONNECTION
      ========================================================= */}

      <section className={styles.investorSection}>
        <div className={styles.container}>
          <div className={styles.investorCard}>
            <div className={styles.investorImage}>
              <img
                src={lifestyleImages.family}
                alt={t("mediterraneanLifestyle.images.family")}
              />

              <div className={styles.investorImageOverlay} />
            </div>

            <div className={styles.investorContent}>
              <div className={styles.sectionLabel}>
                {t("mediterraneanLifestyle.investor.label")}
              </div>

              <h2>
                {t("mediterraneanLifestyle.investor.titleLineOne")}
                <br />
                <span>
                  {t("mediterraneanLifestyle.investor.titleLineTwo")}
                </span>
              </h2>

              <p>{t("mediterraneanLifestyle.investor.description")}</p>

              <div className={styles.investorPoints}>
                <div>
                  <span>01</span>

                  <strong>
                    {t(
                      "mediterraneanLifestyle.investor.points.return.title"
                    )}
                  </strong>

                  <p>
                    {t(
                      "mediterraneanLifestyle.investor.points.return.text"
                    )}
                  </p>
                </div>

                <div>
                  <span>02</span>

                  <strong>
                    {t(
                      "mediterraneanLifestyle.investor.points.lifestyles.title"
                    )}
                  </strong>

                  <p>
                    {t(
                      "mediterraneanLifestyle.investor.points.lifestyles.text"
                    )}
                  </p>
                </div>

                <div>
                  <span>03</span>

                  <strong>
                    {t(
                      "mediterraneanLifestyle.investor.points.experience.title"
                    )}
                  </strong>

                  <p>
                    {t(
                      "mediterraneanLifestyle.investor.points.experience.text"
                    )}
                  </p>
                </div>
              </div>

              <LocalizedLink
                href="/investments/compare-options"
                className={styles.investorButton}
              >
                {t("mediterraneanLifestyle.investor.button")}
                <ArrowRight size={16} />
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL IMAGE
      ========================================================= */}

      <section className={styles.closingSection}>
        <img
          src={lifestyleImages.closing}
          alt={t("mediterraneanLifestyle.images.closing")}
          className={styles.closingImage}
        />

        <div className={styles.closingOverlay} />

        <div className={styles.container}>
          <div className={styles.closingContent}>
            <div className={styles.sectionLabel}>
              {t("mediterraneanLifestyle.closing.label")}
            </div>

            <h2>
              {t("mediterraneanLifestyle.closing.titleLineOne")}
              <br />
              <span>
                {t("mediterraneanLifestyle.closing.titleLineTwo")}
              </span>
            </h2>

            <p>{t("mediterraneanLifestyle.closing.description")}</p>

            <LocalizedLink
              href="/team/contact"
              className={styles.closingButton}
            >
              {t("mediterraneanLifestyle.closing.button")}
              <ArrowRight size={16} />
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEGAL / DISCLAIMER
      ========================================================= */}

      <section className={styles.legalSection}>
        <div className={styles.container}>
          <div className={styles.legalInner}>
            <ShieldCheck size={17} />

            <p>
              <strong>
                {t("mediterraneanLifestyle.legal.title")}
              </strong>{" "}
              {t("mediterraneanLifestyle.legal.text")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}