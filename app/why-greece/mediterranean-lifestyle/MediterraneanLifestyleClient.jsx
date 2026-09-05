"use client";

import { useState } from "react";
import Link from "next/link";
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
    name: "Athens",
    subtitle: "CITY ENERGY",
    image: lifestyleImages.athens,
    description:
      "A capital where ancient heritage, contemporary culture, business, dining and everyday urban life exist side by side.",
    tags: ["Culture", "Business", "Dining", "City life"],
  },
  {
    id: "crete",
    name: "Crete",
    subtitle: "ISLAND LIVING",
    image: lifestyleImages.crete,
    description:
      "A large island with its own rhythm — combining beaches, mountains, villages, agriculture, food and established communities.",
    tags: ["Sea", "Nature", "Food", "Community"],
  },
  {
    id: "peloponnese",
    name: "Peloponnese",
    subtitle: "COAST & COUNTRYSIDE",
    image: lifestyleImages.peloponnese,
    description:
      "Coastal towns, historic landscapes, mountains and a slower rhythm make the Peloponnese one of Greece's most varied regions.",
    tags: ["Coast", "History", "Nature", "Space"],
  },
  {
    id: "islands",
    name: "The Islands",
    subtitle: "A DIFFERENT PACE",
    image: lifestyleImages.islands,
    description:
      "From well-connected destinations to quieter islands, each offers a distinct relationship with the sea and local life.",
    tags: ["Sea", "Privacy", "Community", "Escape"],
  },
];

const seasons = [
  {
    name: "Spring",
    number: "01",
    image: lifestyleImages.spring,
    description:
      "Mild weather, green landscapes, outdoor cafés and the beginning of the long outdoor season.",
  },
  {
    name: "Summer",
    number: "02",
    image: lifestyleImages.summer,
    description:
      "Long days, swimming, coastal living and evenings that naturally move outdoors.",
  },
  {
    name: "Autumn",
    number: "03",
    image: lifestyleImages.autumn,
    description:
      "A quieter rhythm returns while much of the country remains comfortable for outdoor life.",
  },
  {
    name: "Winter",
    number: "04",
    image: lifestyleImages.winter,
    description:
      "A different Greece — cities, mountains, villages, food and cultural life beyond the summer season.",
  },
];

const dayMoments = [
  {
    time: "08:00",
    title: "Start slowly.",
    label: "MORNING",
    image: lifestyleImages.morning,
    text:
      "A coffee outside. A walk through the neighbourhood. The sea, a square or a bakery within easy reach.",
  },
  {
    time: "10:30",
    title: "Outside becomes normal.",
    label: "EVERYDAY LIFE",
    image: lifestyleImages.coffee,
    text:
      "The Mediterranean climate makes outdoor space part of ordinary life rather than something reserved for holidays.",
  },
  {
    time: "13:00",
    title: "Take your time.",
    label: "AFTERNOON",
    image: lifestyleImages.afternoon,
    text:
      "Lunch can become a social occasion, followed by a swim, a walk or simply time spent with family and friends.",
  },
  {
    time: "17:30",
    title: "The coast is close.",
    label: "THE SEA",
    image: lifestyleImages.sea,
    text:
      "For many parts of Greece, the relationship between towns, cities and the coastline is one of the defining features of everyday life.",
  },
  {
    time: "20:30",
    title: "Evenings move outside.",
    label: "EVENING",
    image: lifestyleImages.evening,
    text:
      "Dinner, conversation and a walk can stretch well into the evening as streets and waterfronts come alive.",
  },
  {
    time: "23:30",
    title: "Stay out a little longer.",
    label: "NIGHT",
    image: lifestyleImages.night,
    text:
      "From a lively capital to a quiet island village, Greek evenings can have completely different personalities.",
  },
];

export default function MediterraneanLifestyleClient() {
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
          alt="Mediterranean coastline in Greece"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroNoise} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              WHY GREECE / MEDITERRANEAN LIFESTYLE
            </div>

            <h1>
              Life isn't measured
              <br />
              <em>in hours here.</em>
            </h1>

            <p>
              Greece offers a way of living shaped by climate, coastline,
              food, community, culture and an extraordinary variety of
              places to call home.
            </p>

            <a href="#lifestyle" className={styles.heroButton}>
              Explore the lifestyle
              <ArrowDown size={16} />
            </a>
          </div>

          <div className={styles.heroBottom}>
            <span>36° N</span>
            <span>AEGEAN / MEDITERRANEAN</span>
            <span>GREECE</span>
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
                MORE THAN A DESTINATION
              </div>

              <h2>
                What attracts people
                <br />
                <span>isn't only the weather.</span>
              </h2>
            </div>

            <div className={styles.introText}>
              <p>
                Greece's appeal goes beyond its climate. It is the
                combination of landscape, food, social life, culture,
                outdoor living and proximity to the sea that creates a
                distinctive everyday rhythm.
              </p>

              <p>
                And because Greece is not one single environment, that
                lifestyle can look very different depending on where
                you choose to spend your time.
              </p>
            </div>
          </div>

          <div className={styles.imageMosaic}>
            <div className={`${styles.mosaicItem} ${styles.mosaicLarge}`}>
              <img
                src={lifestyleImages.coast}
                alt="Greek coastline"
              />
              <span>THE COAST</span>
            </div>

            <div className={`${styles.mosaicItem} ${styles.mosaicSmall}`}>
              <img
                src={lifestyleImages.village}
                alt="Greek village"
              />
              <span>LOCAL LIFE</span>
            </div>

            <div className={`${styles.mosaicItem} ${styles.mosaicSmall}`}>
              <img
                src={lifestyleImages.mountains}
                alt="Greek mountains"
              />
              <span>THE LANDSCAPE</span>
            </div>

            <div className={`${styles.mosaicItem} ${styles.mosaicWide}`}>
              <img
                src={lifestyleImages.cityLife}
                alt="Greek city life"
              />
              <span>CITY LIFE</span>
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
                A DAY IN GREECE
              </div>

              <h2>
                Imagine an ordinary
                <br />
                <span>day here.</span>
              </h2>
            </div>

            <p>
              The Mediterranean lifestyle is easiest to understand
              when you stop treating it as a holiday and imagine it as
              everyday life.
            </p>
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
                    alt={moment.title}
                    className={styles.dayImage}
                  />

                  <span className={styles.imageNumber}>
                    0{index + 1}
                  </span>
                </div>

                <div className={styles.dayContent}>
                  <span>{moment.label}</span>

                  <h3>{moment.title}</h3>

                  <p>{moment.text}</p>
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
                ONE COUNTRY / MANY LIFESTYLES
              </div>

              <h2>
                Where you live
                <br />
                <span>changes the experience.</span>
              </h2>
            </div>

            <p>
              Greece offers dramatically different environments
              within one country. A metropolitan lifestyle in Athens
              is a very different proposition from a coastal town,
              island community or mountain village.
            </p>
          </div>

          <div className={styles.locationExperience}>
            <div className={styles.locationImagePanel}>
              <img
                src={activeLocation.image}
                alt={activeLocation.name}
                className={styles.locationMainImage}
              />

              <div className={styles.locationImageOverlay} />

              <div className={styles.locationImageInfo}>
                <span>{activeLocation.subtitle}</span>
                <strong>{activeLocation.name}</strong>
              </div>
            </div>

            <div className={styles.locationDetails}>
              <div className={styles.locationCounter}>
                <span>SELECT A LOCATION</span>

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
                    {location.name}
                  </button>
                ))}
              </div>

              <div className={styles.locationDescription}>
                <div className={styles.locationIcon}>
                  <Compass size={19} />
                </div>

                <div>
                  <h3>{activeLocation.name}</h3>

                  <p>{activeLocation.description}</p>

                  <div className={styles.locationTags}>
                    {activeLocation.tags.map((tag) => (
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
                alt="Athens lifestyle"
              />
            </div>

            <div>
              <img
                src={lifestyleImages.crete}
                alt="Crete lifestyle"
              />
            </div>

            <div>
              <img
                src={lifestyleImages.peloponnese}
                alt="Peloponnese lifestyle"
              />
            </div>

            <div>
              <img
                src={lifestyleImages.islands}
                alt="Greek island lifestyle"
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
          alt="Greek beach and Mediterranean sea"
          className={styles.seaBackground}
        />

        <div className={styles.seaOverlay} />

        <div className={styles.container}>
          <div className={styles.seaContent}>
            <div className={styles.sectionLabel}>
              THE MEDITERRANEAN
            </div>

            <h2>
              The sea is not
              <br />
              <span>just scenery.</span>
            </h2>

            <p>
              For much of Greece, the coastline is woven into the
              rhythm of everyday life. Swimming, sailing, waterfront
              walks, fishing villages and coastal dining are not
              necessarily special occasions — they can become part of
              the routine.
            </p>

            <div className={styles.seaStats}>
              <div>
                <strong>623</strong>
                <span>BLUE FLAG BEACHES</span>
              </div>

              <div>
                <strong>#2</strong>
                <span>WORLDWIDE IN 2025</span>
              </div>

              <div>
                <strong>6,000+</strong>
                <span>ISLANDS & ISLETS</span>
              </div>
            </div>
          </div>

          <div className={styles.seaFloatingImage}>
            <img
              src={lifestyleImages.boat}
              alt="Boat in the Greek Mediterranean"
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
                  alt="Greek food"
                />
              </div>

              <div className={styles.foodImageSmall}>
                <img
                  src={lifestyleImages.table}
                  alt="Greek dining table"
                />
              </div>

              <div className={styles.foodImageTiny}>
                <img
                  src={lifestyleImages.market}
                  alt="Greek food market"
                />
              </div>
            </div>

            <div className={styles.foodContent}>
              <div className={styles.sectionLabel}>
                FOOD / COMMUNITY
              </div>

              <h2>
                Food is part of
                <br />
                <span>the rhythm.</span>
              </h2>

              <p>
                Greek food is deeply connected to place, seasonality,
                local produce and social life. Meals often become
                opportunities to slow down and spend time together.
              </p>

              <div className={styles.foodPoints}>
                <div>
                  <Utensils size={18} />

                  <div>
                    <strong>Regional identity</strong>

                    <p>
                      From island kitchens to mainland villages,
                      ingredients and traditions vary from place to
                      place.
                    </p>
                  </div>
                </div>

                <div>
                  <Sun size={18} />

                  <div>
                    <strong>Local produce</strong>

                    <p>
                      Olive oil, vegetables, seafood, herbs and other
                      local ingredients are central to the cuisine.
                    </p>
                  </div>
                </div>

                <div>
                  <Clock3 size={18} />

                  <div>
                    <strong>Time around the table</strong>

                    <p>
                      Dining is often as much about conversation and
                      company as it is about the meal itself.
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
                BEYOND THE SUMMER
              </div>

              <h2>
                Greece is not
                <br />
                <span>only August.</span>
              </h2>
            </div>

            <p>
              A country of cities, islands, mountains and villages
              naturally changes with the seasons. The experience does
              too.
            </p>
          </div>

          <div className={styles.seasonsGrid}>
            {seasons.map((season) => (
              <article
                className={styles.seasonCard}
                key={season.name}
              >
                <img
                  src={season.image}
                  alt={`${season.name} in Greece`}
                />

                <div className={styles.seasonOverlay} />

                <div className={styles.seasonInfo}>
                  <span>{season.number}</span>
                  <h3>{season.name}</h3>
                  <p>{season.description}</p>
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
                OUTDOOR LIVING
              </div>

              <h2>
                The landscape
                <br />
                <span>becomes part of life.</span>
              </h2>

              <p>
                Greece's geography creates an unusual variety of
                experiences within relatively short distances:
                coastline, islands, mountains, countryside and urban
                centres.
              </p>

              <div className={styles.outdoorFacts}>
                <div>
                  <Waves size={19} />
                  <span>COASTAL LIVING</span>
                </div>

                <div>
                  <Mountain size={19} />
                  <span>MOUNTAIN LANDSCAPES</span>
                </div>

                <div>
                  <MapPin size={19} />
                  <span>HISTORIC TOWNS</span>
                </div>
              </div>
            </div>

            <div className={styles.outdoorImages}>
              <div className={styles.outdoorImageOne}>
                <img
                  src={lifestyleImages.mountains}
                  alt="Greek mountain landscape"
                />
              </div>

              <div className={styles.outdoorImageTwo}>
                <img
                  src={lifestyleImages.coast}
                  alt="Greek coastal landscape"
                />
              </div>

              <div className={styles.outdoorImageThree}>
                <img
                  src={lifestyleImages.village}
                  alt="Greek village landscape"
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
                alt="Family enjoying life in Greece"
              />

              <div className={styles.investorImageOverlay} />
            </div>

            <div className={styles.investorContent}>
              <div className={styles.sectionLabel}>
                WHY THIS MATTERS
              </div>

              <h2>
                A residence decision
                <br />
                <span>is also a lifestyle decision.</span>
              </h2>

              <p>
                For an international investor, choosing Greece is not
                necessarily only about obtaining residence rights. It
                can also be about having a place to return to, a
                country to explore and an environment in which family
                and personal life can develop.
              </p>

              <div className={styles.investorPoints}>
                <div>
                  <span>01</span>
                  <strong>A place to return to</strong>
                  <p>
                    Your connection with Greece can extend beyond the
                    transaction itself.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Different ways to live</strong>
                  <p>
                    City, coast, island and countryside offer
                    genuinely different experiences.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>A country to experience</strong>
                  <p>
                    Greece rewards exploration far beyond a single
                    destination.
                  </p>
                </div>
              </div>

              <Link
                href="/investments/compare-options"
                className={styles.investorButton}
              >
                Explore Investment Options
                <ArrowRight size={16} />
              </Link>
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
          alt="Mediterranean sunset in Greece"
          className={styles.closingImage}
        />

        <div className={styles.closingOverlay} />

        <div className={styles.container}>
          <div className={styles.closingContent}>
            <div className={styles.sectionLabel}>
              THE GREEK WAY OF LIFE
            </div>

            <h2>
              Maybe the real
              <br />
              <span>investment is time.</span>
            </h2>

            <p>
              Discover Greece not simply as a destination, but as a
              place where you could spend more of it.
            </p>

            <Link
              href="/team/contact"
              className={styles.closingButton}
            >
              Speak With an Advisor
              <ArrowRight size={16} />
            </Link>
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
              <strong>Information note.</strong> Lifestyle and
              destination information is provided for general
              informational purposes. Individual locations,
              accessibility, climate, services and property
              suitability vary. Any investment or residence decision
              should be considered separately from lifestyle
              information and assessed according to the applicable
              legislation and individual circumstances.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}