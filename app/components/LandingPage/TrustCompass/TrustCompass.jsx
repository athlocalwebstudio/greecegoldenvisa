import { compassPoints } from "./compassData";
import styles from "./trustCompass.module.css";

export default function TrustCompass() {
  return (
    <section className={styles.trustCompass}>


      <div className={styles.container}>


        {/* INTRO CONTENT */}

        <div className={styles.content}>


          <span className={styles.eyebrow}>
            WHY INVESTORS TRUST US
          </span>


          <h2>
            Every investor needs more than an investment.
            They need trusted guidance.
          </h2>


          <p>
            From understanding your options to completing your
            residency journey, we provide the clarity and expertise
            needed to make confident decisions in Greece.
          </p>


          <div className={styles.trustStatement}>

            <span>
              A structured approach built around your goals.
            </span>

          </div>


        </div>




        {/* DESKTOP COMPASS */}

        <div className={styles.desktopCompass}>


          <div className={styles.center}>

            <span>Your</span>

            <span>Golden Visa</span>

            <span>Journey</span>

          </div>



          {compassPoints.map((point) => (

            <div
              key={point.id}
              className={`${styles.point} ${styles[point.position]}`}
            >

              <span className={styles.direction}>
                {point.direction}
              </span>


              <h3>
                {point.title}
              </h3>


              <p>
                {point.description}
              </p>


            </div>

          ))}


        </div>




        {/* MOBILE VERSION */}

        <div className={styles.mobileJourney}>


          <div className={styles.mobileCenter}>

            <span>Your</span>

            <span>Golden Visa</span>

            <span>Journey</span>

          </div>



          {compassPoints.map((point) => (

           <div
  key={point.id}
  className={styles.mobilePoint}
>

  <span className={styles.stepNumber}>
    {point.step}
  </span>


  <h3>
    {point.title}
  </h3>


  <p>
    {point.description}
  </p>

</div>

          ))}


        </div>


      </div>


    </section>
  );
}