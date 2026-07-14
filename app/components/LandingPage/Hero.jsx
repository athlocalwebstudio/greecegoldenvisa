"use client";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.container}>

        {/* =========================
            HERO IMAGE
        ========================= */}
        



        {/* =========================
            HERO CONTENT
        ========================= */}
        <div className={styles.content}>

  <h1 className={styles.title}>
    Invest in Greece.
    <br />
    Unlock European Residency.
  </h1>


  <p className={styles.description}>
    Explore the right investment path in Greece and receive expert guidance throughout your residency journey.
  </p>


  <div className={styles.actions}>

    <button className={styles.primaryButton}>
      Check Your Eligibility
    </button>


    <button className={styles.secondaryButton}>
      Explore Investment Routes →
    </button>

  </div>



  {/* TRUST */}
  <div className={styles.trust}>

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

  </div>


</div>
<div className={styles.visual}>

          <div className={styles.imageWrapper}>

            <img
              src="greek_background.jpg"
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