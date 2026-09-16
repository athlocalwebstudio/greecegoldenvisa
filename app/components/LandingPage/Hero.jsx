"use client";

import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import styles from "./hero.module.css";

export default function Hero({ homepage }) {
  const heroImage = homepage?.heroImage
    ? urlFor(homepage.heroImage).width(1600).quality(85).url()
    : "/greek_background.jpg";

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* HERO IMAGE */}
        {/* HERO CONTENT */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            {homepage?.heroTitle || "Invest in Greece."}
            <br />
            {homepage?.heroHighlight ||
              "Unlock European Residency."}
          </h1>

          <p className={styles.description}>
            {homepage?.heroDescription ||
              "Explore the right investment path in Greece and receive expert guidance throughout your residency journey."}
          </p>

          <div className={styles.actions}>
            <Link
              href={
                homepage?.primaryCtaLink ||
                "/program/eligibility"
              }
              className={styles.primaryButton}
            >
              {homepage?.primaryCtaText ||
                "Check Your Eligibility"}
            </Link>

            <Link
              href={
                homepage?.secondaryCtaLink ||
                "/investments/compare-options"
              }
              className={styles.secondaryButton}
            >
              {homepage?.secondaryCtaText ||
                "Explore Investment Routes →"}
            </Link>
          </div>

          {/* TRUST */}
          <div className={styles.trust}>
            {homepage?.trustItems?.length > 0 ? (
              homepage.trustItems.map((item) => (
                <div
                  className={styles.trustItem}
                  key={`${item.title}-${item.description}`}
                >
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              ))
            ) : (
              <>
                <div className={styles.trustItem}>
                  <strong>Family</strong>
                  <span>Residency Benefits</span>
                </div>

                <div className={styles.trustItem}>
                  <strong>EU</strong>
                  <span>Schengen Access</span>
                </div>

                <div className={styles.trustItem}>
                  <strong>Expert</strong>
                  <span>Guidance</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageWrapper}>
            <img
              src={heroImage}
              alt="Luxury Greek property overlooking the Aegean Sea"
              className={styles.heroImage}
            />

            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
}