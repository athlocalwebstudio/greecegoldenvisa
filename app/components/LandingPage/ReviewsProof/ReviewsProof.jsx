"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";

import styles from "./reviewsProof.module.css";

const clientStories = [
  {
    id: "alexander-m",
    number: "01",
    name: "Alexander M.",
    country: "United Kingdom",
    countryCode: "GB",
    profile: "Private Investor",
    investmentRoute: "€400K Investment Route",
    investmentValue: "€425,000",
    location: "Athens Riviera",
    propertyType: "Residential",
    property: "Premium Coastal Residence",
    experience: "5 / 5",
    reviewSource: "Client Testimonial",
    quote:
      "We were initially overwhelmed by the number of steps involved. Having one person coordinate the property, technical and professional aspects made the entire process much easier to understand.",
    image: "/man_stock.jpg",
    propertyImage: "/alternative-investments.jpg",
    journeyStage: "Technical Due Diligence",
    journeyText:
      "The property was reviewed carefully before we moved forward with the investment.",
  },

  {
    id: "maria-daniel",
    number: "02",
    name: "Maria & Daniel R.",
    country: "Germany",
    countryCode: "DE",
    profile: "Family Investors",
    investmentRoute: "€250K Investment Route",
    investmentValue: "€285,000",
    location: "Athens, Attica",
    propertyType: "Residential",
    property: "Contemporary Athens Residence",
    experience: "5 / 5",
    reviewSource: "Client Testimonial",
    quote:
      "What we appreciated most was how clearly everything was explained. We always knew what the next step was and who was responsible for it.",
    image: "/wm.jpg",
    propertyImage: "/ready-to-move.jpg",
    journeyStage: "Property Selection",
    journeyText:
      "Several options were considered before selecting a property aligned with their objectives.",
  },

  {
    id: "david-k",
    number: "03",
    name: "David K.",
    country: "United Arab Emirates",
    countryCode: "AE",
    profile: "International Investor",
    investmentRoute: "€800K Investment Route",
    investmentValue: "€820,000",
    location: "Central Athens",
    propertyType: "Investment Residence",
    property: "Central Athens Investment",
    experience: "5 / 5",
    reviewSource: "Client Testimonial",
    quote:
      "The technical review was extremely important to us. We wanted confidence in the property itself, not simply someone helping us complete paperwork.",
    image: "/man_stock_2.jpg",
    propertyImage: "/commercial-image.jpg",
    journeyStage: "Technical Due Diligence",
    journeyText:
      "The investment was assessed from both a property and technical perspective before proceeding.",
  },

  {
    id: "sophia-p",
    number: "04",
    name: "Sophia P.",
    country: "United States",
    countryCode: "US",
    profile: "Lifestyle Investor",
    investmentRoute: "Lifestyle Investment",
    investmentValue: "€650,000",
    location: "Greek Islands",
    propertyType: "Private Villa",
    property: "Greek Island Villa",
    experience: "5 / 5",
    reviewSource: "Client Testimonial",
    quote:
      "Greece had been on our list for years. The difference was finally having someone who could connect the investment side with the lifestyle we were looking for.",
    image: "/woman_stock.jpg",
    propertyImage: "/third_scene.jpg",
    journeyStage: "Initial Consultation",
    journeyText:
      "The process began by understanding the client's goals, preferred locations and investment priorities.",
  },
];

const journeyStages = [
  {
    number: "01",
    title: "Consultation",
  },
  {
    number: "02",
    title: "Property Selection",
  },
  {
    number: "03",
    title: "Due Diligence",
  },
  {
    number: "04",
    title: "Golden Visa Process",
  },
];

export default function ReviewsProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStory = clientStories[activeIndex];

  const previousStory = () => {
    setActiveIndex((current) =>
      current === 0 ? clientStories.length - 1 : current - 1
    );
  };

  const nextStory = () => {
    setActiveIndex((current) =>
      current === clientStories.length - 1 ? 0 : current + 1
    );
  };

  const goToStory = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.reviewsProof}>
      <div className={styles.container}>
        {/* =========================================
            INTRO
        ========================================= */}

        <div className={styles.intro}>
          <div className={styles.introEyebrow}>
            <span className={styles.eyebrowLine} />
            <span>CLIENT STORIES</span>
          </div>

          <div className={styles.introGrid}>
            <div className={styles.introHeading}>
              <h2>
                Real experiences.
                <br />
                A clearer journey.
              </h2>
            </div>

            <div className={styles.introDescription}>
              <p>
                Every investment journey is different. Here, clients share
                what the process looked like from their perspective — from
                choosing a property to moving forward with confidence.
              </p>

              <span className={styles.introNote}>
                Client experiences are presented with permission and reflect
                individual investment journeys.
              </span>
            </div>
          </div>
        </div>

        {/* =========================================
            JOURNEY
        ========================================= */}

        <div className={styles.journey}>
          <div className={styles.journeyHeader}>
            <span>THE JOURNEY</span>
            <p>From first conversation to investment.</p>
          </div>

          <div className={styles.journeyStages}>
            {journeyStages.map((stage, index) => (
              <button
                type="button"
                key={stage.number}
                onClick={() => {
                  const matchingIndex = clientStories.findIndex(
                    (story) =>
                      (index === 0 &&
                        story.journeyStage === "Initial Consultation") ||
                      (index === 1 &&
                        story.journeyStage === "Property Selection") ||
                      (index === 2 &&
                        story.journeyStage === "Technical Due Diligence") ||
                      (index === 3 &&
                        story.journeyStage === "Golden Visa Process")
                  );

                  if (matchingIndex !== -1) {
                    setActiveIndex(matchingIndex);
                  }
                }}
                className={`${styles.journeyStage} ${
                  activeStory.journeyStage ===
                    (index === 0
                      ? "Initial Consultation"
                      : index === 1
                      ? "Property Selection"
                      : index === 2
                      ? "Technical Due Diligence"
                      : "Golden Visa Process")
                    ? styles.journeyStageActive
                    : ""
                }`}
              >
                <span className={styles.journeyNumber}>
                  {stage.number}
                </span>

                <span className={styles.journeyTitle}>
                  {stage.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* =========================================
            STORY CAROUSEL
        ========================================= */}

        <div className={styles.carousel}>
          {/* LEFT ARROW */}

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={previousStory}
            aria-label="Previous client story"
          >
            <ArrowLeft size={19} strokeWidth={1.8} />
          </button>

          {/* =========================================
              STORY CARD
          ========================================= */}

          <article className={styles.storyCard}>
            {/* =========================================
                CLIENT PANEL
            ========================================= */}

            <div className={styles.clientPanel}>
              <div className={styles.clientImageWrapper}>
                <img
                  key={activeStory.image}
                  src={activeStory.image}
                  alt={activeStory.name}
                  className={styles.clientImage}
                />

                <div className={styles.clientImageOverlay} />

                <div className={styles.clientNumber}>
                  {activeStory.number} /{" "}
                  {String(clientStories.length).padStart(2, "0")}
                </div>

                <div className={styles.clientImageBottom}>
                  <div className={styles.clientIdentity}>
                    <h3>{activeStory.name}</h3>

                    <span>{activeStory.profile}</span>
                  </div>

                  <div className={styles.countryBadge}>
                    <span className={styles.flag}>
                      {activeStory.countryCode}
                    </span>

                    <span>{activeStory.country}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================
                STORY CONTENT
            ========================================= */}

            <div className={styles.storyContent}>
              <div className={styles.storyTop}>
                <div className={styles.storyLabel}>
                  <ShieldCheck size={14} strokeWidth={1.9} />

                  <span>CLIENT TESTIMONIAL</span>
                </div>

                <div className={styles.rating}>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={13}
                        strokeWidth={1.8}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <span>{activeStory.experience}</span>
                </div>
              </div>

              <div className={styles.quoteBlock}>
                <Quote
                  className={styles.quoteIcon}
                  size={30}
                  strokeWidth={1.4}
                />

                <blockquote key={activeStory.id}>
                  “{activeStory.quote}”
                </blockquote>
              </div>

              {/* =========================================
                  INVESTMENT SNAPSHOT
              ========================================= */}

              <div className={styles.snapshot}>
                <div className={styles.snapshotHeader}>
                  <span>INVESTMENT SNAPSHOT</span>
                </div>

                <div className={styles.snapshotGrid}>
                  <div className={styles.snapshotItem}>
                    <span>INVESTMENT</span>
                    <strong>{activeStory.investmentValue}</strong>
                  </div>

                  <div className={styles.snapshotItem}>
                    <span>ROUTE</span>
                    <strong>{activeStory.investmentRoute}</strong>
                  </div>

                  <div className={styles.snapshotItem}>
                    <span>LOCATION</span>

                    <strong className={styles.locationValue}>
                      <MapPin size={13} strokeWidth={1.8} />
                      {activeStory.location}
                    </strong>
                  </div>

                  <div className={styles.snapshotItem}>
                    <span>PROPERTY</span>
                    <strong>{activeStory.propertyType}</strong>
                  </div>
                </div>
              </div>

              {/* =========================================
                  PROPERTY FOOTER
              ========================================= */}

              <div className={styles.propertyFooter}>
                <div className={styles.propertyPreview}>
                  <div className={styles.propertyImageWrapper}>
                    <img
                      src={activeStory.propertyImage}
                      alt={activeStory.property}
                      className={styles.propertyImage}
                    />
                  </div>

                  <div className={styles.propertyInfo}>
                    <span>INVESTMENT PROPERTY</span>

                    <strong>{activeStory.property}</strong>
                  </div>
                </div>

                <div className={styles.journeyInfo}>
                  <span>{activeStory.journeyStage}</span>

                  <p>{activeStory.journeyText}</p>
                </div>
              </div>
            </div>
          </article>

          {/* RIGHT ARROW */}

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={nextStory}
            aria-label="Next client story"
          >
            <ArrowRight size={19} strokeWidth={1.8} />
          </button>
        </div>

        {/* =========================================
            CONTROLS
        ========================================= */}

        <div className={styles.controls}>
          <div className={styles.progress}>
            {clientStories.map((story, index) => (
              <button
                type="button"
                key={story.id}
                onClick={() => goToStory(index)}
                className={`${styles.progressItem} ${
                  index === activeIndex ? styles.progressActive : ""
                }`}
                aria-label={`View ${story.name}'s story`}
              />
            ))}
          </div>

          <span className={styles.progressText}>
            {activeStory.number} /{" "}
            {String(clientStories.length).padStart(2, "0")}
          </span>
        </div>

        {/* =========================================
            TRUST FOOTER
        ========================================= */}

        <div className={styles.trustFooter}>
          <div className={styles.trustMark}>
            <ShieldCheck size={18} strokeWidth={1.7} />
          </div>

          <div className={styles.trustCopy}>
            <span>BUILT AROUND YOUR OBJECTIVES</span>

            <p>
              Property selection, technical review and professional
              coordination are considered together — not as separate steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}