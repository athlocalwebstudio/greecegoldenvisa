"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import styles from "./whatWeDo.module.css";

const approaches = [
  {
    number: "01",
    title: "PROPERTY SELECTION",
    shortTitle: "Property Selection",
    tabDescription: "Find the right property.",
    description:
      "We help identify properties that fit your investment goals, location preferences and Golden Visa requirements before you move forward.",
  },
  {
    number: "02",
    title: "TECHNICAL DUE DILIGENCE",
    shortTitle: "Technical Due Diligence",
    tabDescription: "Know what you are buying.",
    description:
      "Before you commit, we examine the property's technical and planning status to help identify potential issues and confirm whether it can support your investment objectives.",
  },
  {
    number: "03",
    title: "LEGAL & VISA COORDINATION",
    shortTitle: "Legal & Visa Coordination",
    tabDescription: "One coordinated process.",
    description:
      "We coordinate the legal and Golden Visa process with the relevant professionals, keeping the different stages connected and clearly structured.",
  },
  {
    number: "04",
    title: "ONGOING SUPPORT",
    shortTitle: "Ongoing Support",
    tabDescription: "Support beyond the purchase.",
    description:
      "Our involvement does not end when the purchase is completed. We remain available to help coordinate the next steps and provide continued support when needed.",
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeApproach = approaches[activeIndex];

  return (
    <section className={styles.whatWeDo} id="what-we-do">

      <div className={styles.container}>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <header className={styles.intro}>

          <span className={styles.eyebrow}>
            WHAT WE DO
          </span>

          <h2>
            More than Golden Visa.
            <br />
            One coordinated investment process.
          </h2>

          <p className={styles.introDescription}>
            From selecting the right property to completing your
            Golden Visa journey, we bring the technical, legal and
            investment sides together under one coordinated process.
          </p>

        </header>


        {/* =====================================================
            APPROACH
        ===================================================== */}

        <div className={styles.approachSection}>

          <div className={styles.approachHeader}>

            <div>
              <span className={styles.sectionEyebrow}>
                OUR APPROACH
              </span>

              <h3>
                One process.
                <br />
                Every important detail.
              </h3>
            </div>

            <span className={styles.approachCounter}>
              {activeApproach.number} / 04
            </span>

          </div>


          {/* =================================================
              TABS
          ================================================= */}

          <div className={styles.approachTabs}>

            {approaches.map((approach, index) => (

              <button
                key={approach.number}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`${styles.approachTab} ${
                  index === activeIndex
                    ? styles.approachTabActive
                    : ""
                }`}
              >

                <span className={styles.tabNumber}>
                  {approach.number}
                </span>

                <span className={styles.tabContent}>

                  <span className={styles.tabTitle}>
                    {approach.title}
                  </span>

                  <span className={styles.tabDescription}>
                    {approach.tabDescription}
                  </span>

                </span>

                <span className={styles.tabArrow}>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                  />
                </span>

              </button>

            ))}

          </div>


          {/* =================================================
              ACTIVE APPROACH
          ================================================= */}

          <div className={styles.approachDetail}>

            <div className={styles.detailNumber}>
              {activeApproach.number}
            </div>

            <div className={styles.detailContent}>

              <span className={styles.detailLabel}>
                {activeApproach.number} / 04
              </span>

              <h4>
                {activeApproach.shortTitle}
              </h4>

              <p>
                {activeApproach.description}
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            COORDINATED APPROACH
        ===================================================== */}

        <div className={styles.coordinated}>

          <div className={styles.coordinatedContent}>

            <span className={styles.coordinatedEyebrow}>
              ONE COORDINATED APPROACH
            </span>

            <h3>
              Your investment is not passed
              <br className={styles.desktopBreak} />
              from one provider to another.
            </h3>

            <p>
              We coordinate the process around you.
            </p>

          </div>


          <div className={styles.stats}>

            <div className={styles.stat}>
              <strong>15+</strong>
              <span>Years of experience</span>
            </div>

            <div className={styles.stat}>
              <strong>1,000+</strong>
              <span>Properties examined</span>
            </div>

            <div className={styles.stat}>
              <strong>3</strong>
              <span>Languages supported</span>
            </div>

          </div>


          <Link
            href="/program/eligibility"
            className={styles.coordinatedButton}
          >
            <span>
              Discuss your investment
            </span>

            <span className={styles.buttonIcon}>
              <ArrowUpRight
                size={17}
                strokeWidth={2}
              />
            </span>
          </Link>

        </div>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <div className={styles.finalCta}>

          <div className={styles.finalCtaContent}>

            <span className={styles.finalCtaEyebrow}>
              YOUR NEXT STEP
            </span>

            <h3>
              Ready to explore your options?
            </h3>

          </div>

          <Link
            href="/program/eligibility"
            className={styles.finalCtaButton}
          >
            <span>
              Check Your Eligibility
            </span>

            <ArrowRight
              size={18}
              strokeWidth={2}
            />
          </Link>

        </div>

      </div>

    </section>
  );
}