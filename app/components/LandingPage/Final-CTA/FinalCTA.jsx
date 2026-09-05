"use client";

import Link from "next/link";
import styles from "@/app/components/LandingPage/Final-CTA/finalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.finalCta} aria-labelledby="final-cta-heading">
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>START YOUR JOURNEY</span>
          </div>

          <h2 id="final-cta-heading">
            Your journey to Greece
            <br />
            starts with clarity.
          </h2>

          <p>
            Tell us what you are looking for and receive an initial assessment
            of the investment route, property requirements and next steps
            relevant to your goals.
          </p>

          <div className={styles.actions}>
            <Link href="/investor-guide/application-checklist" className={styles.primaryButton}>
              <span>Start Your Free Assessment</span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M8 3L13 8L8 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link href="/team/contact" className={styles.secondaryButton}>
              Talk to Us
            </Link>
          </div>
        </div>

        <div className={styles.sideNote}>
          <span>INITIAL CONSULTATION</span>

          <div className={styles.sideLine} />

          <p>
            A clear first conversation about your objectives, preferred
            location and investment route.
          </p>
        </div>
      </div>
    </section>
  );
}