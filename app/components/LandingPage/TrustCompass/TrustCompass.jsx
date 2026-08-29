import Image from "next/image";
import styles from "./trustCompass.module.css";

export default function TrustCompass() {
  return (
    <section
      className={styles.trustCompass}
      id="about"
      aria-labelledby="trust-heading"
    >
      <div className={styles.container}>

        {/* =========================================
            INTRO
        ========================================= */}

        <div className={styles.intro}>

          <span className={styles.eyebrow}>
            WHY INVESTORS TRUST US
          </span>

          <h2 id="trust-heading">
            Technical expertise.
            <br />
            <span>Personal guidance.</span>
          </h2>

          <p className={styles.introText}>
            When you are investing in a property in another country, you need
            someone who understands more than the Golden Visa process. You need
            someone who understands the property itself.
          </p>

        </div>


        {/* =========================================
            PROFILE + APPROACH
        ========================================= */}

        <div className={styles.mainGrid}>

          {/* =========================================
              SVETLANA PROFILE
          ========================================= */}

          <article className={styles.profileCard}>

            <div className={styles.profileImageWrap}>

              <Image
                src="/portait_image_for_website.jpg"
                alt="Svetlana Novikova, Dipl. Civil Engineer and Golden Visa Advisor"
                fill
                sizes="(max-width: 900px) 100vw, 460px"
                className={styles.profileImage}
              />

              <div className={styles.imageOverlay} />

              <div className={styles.profileBadge}>
                <span className={styles.badgeDot} />
                Golden Visa Advisor
              </div>

            </div>


            <div className={styles.profileContent}>

              <span className={styles.profileEyebrow}>
                YOUR ADVISOR
              </span>

              <h3>
                Svetlana
                <br />
                Novikova
              </h3>

              <p className={styles.profileRole}>
                Dipl. Civil Engineer
                <span>·</span>
                Golden Visa Advisor
              </p>

              <p className={styles.profileDescription}>
                Svetlana brings together technical knowledge, property
                experience and Golden Visa guidance to help international
                investors make informed decisions before committing to a
                property in Greece.
              </p>


              {/* CREDENTIALS */}

              <div className={styles.credentials}>

                <div className={styles.credential}>
                  <strong>15+</strong>
                  <span>YEARS EXPERIENCE</span>
                </div>

                <div className={styles.credential}>
                  <strong>1,000+</strong>
                  <span>PROPERTIES REVIEWED</span>
                </div>

              </div>


              {/* LANGUAGES */}

              <div className={styles.languages}>

                <div className={styles.languageList}>
                  <span className={styles.languageActive}>EN</span>
                  <span>GR</span>
                  <span>RU</span>
                </div>

                <p>
                  Support available in English,
                  Greek and Russian.
                </p>

              </div>

            </div>

          </article>


          {/* =========================================
              PROFESSIONAL APPROACH
          ========================================= */}

          <div className={styles.approach}>

            <div className={styles.approachHeader}>

              <div>

                <span className={styles.sectionLabel}>
                  THE DIFFERENCE
                </span>

                <h3>
                  A property decision
                  <br />
                  backed by expertise.
                </h3>

              </div>

              <span className={styles.approachIndex}>
                01 / 04
              </span>

            </div>


            {/* POINT 01 */}

            <div className={styles.approachItem}>

              <div className={styles.approachNumber}>
                01
              </div>

              <div className={styles.approachContent}>

                <h4>
                  Engineer-led perspective
                </h4>

                <p>
                  Your property is considered from a technical perspective
                  before you make a financial commitment.
                </p>

              </div>

              <span className={styles.approachArrow}>
                ↗
              </span>

            </div>


            {/* POINT 02 */}

            <div className={styles.approachItem}>

              <div className={styles.approachNumber}>
                02
              </div>

              <div className={styles.approachContent}>

                <h4>
                  Independent assessment
                </h4>

                <p>
                  The focus is on whether a property makes sense for your
                  objectives, not simply on completing a transaction.
                </p>

              </div>

              <span className={styles.approachArrow}>
                ↗
              </span>

            </div>


            {/* POINT 03 */}

            <div className={styles.approachItem}>

              <div className={styles.approachNumber}>
                03
              </div>

              <div className={styles.approachContent}>

                <h4>
                  One coordinated process
                </h4>

                <p>
                  Technical, legal and professional steps are coordinated so
                  you always know what is happening and why.
                </p>

              </div>

              <span className={styles.approachArrow}>
                ↗
              </span>

            </div>


            {/* POINT 04 */}

            <div className={styles.approachItem}>

              <div className={styles.approachNumber}>
                04
              </div>

              <div className={styles.approachContent}>

                <h4>
                  International investor support
                </h4>

                <p>
                  Clear communication and guidance for investors navigating
                  the Greek property market from abroad.
                </p>

              </div>

              <span className={styles.approachArrow}>
                ↗
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            TECHNICAL DUE DILIGENCE
        ========================================= */}

        <div className={styles.dueDiligence}>

          <div className={styles.dueIntro}>

            <span className={styles.eyebrow}>
              BEFORE YOU BUY
            </span>

            <h3>
              Technical due diligence
              <br />
              before you invest.
            </h3>

            <p>
              A property can look perfect on paper and still contain issues
              that affect its value, legality or Golden Visa eligibility.
              Technical review helps identify them before you commit.
            </p>

          </div>


          <div className={styles.checkList}>

            <div className={styles.checkItem}>

              <span>01</span>

              <div>
                <strong>Planning & permits</strong>
                <p>
                  Review of building permits and planning compliance.
                </p>
              </div>

            </div>


            <div className={styles.checkItem}>

              <span>02</span>

              <div>
                <strong>Unauthorised works</strong>
                <p>
                  Identification of unauthorised construction or alterations.
                </p>
              </div>

            </div>


            <div className={styles.checkItem}>

              <span>03</span>

              <div>
                <strong>Technical documentation</strong>
                <p>
                  Review of plans, records and relevant property documents.
                </p>
              </div>

            </div>


            <div className={styles.checkItem}>

              <span>04</span>

              <div>
                <strong>Electronic Building Identity</strong>
                <p>
                  Assessment of the property's technical documentation.
                </p>
              </div>

            </div>


            <div className={styles.checkItem}>

              <span>05</span>

              <div>
                <strong>Golden Visa suitability</strong>
                <p>
                  Technical assessment of whether the property can support
                  your intended investment route.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            CLOSING STATEMENT
        ========================================= */}

        <div className={styles.bottomStatement}>

          <div className={styles.statementLine} />

          <div className={styles.statementContent}>

            <span>
              OUR APPROACH
            </span>

            <p>
              You are making a significant investment in a foreign market.
              Our job is to help you understand the property, the process and
              the decisions before you.
            </p>

          </div>

          <div className={styles.statementSignature}>
            <span>Svetlana Novikova</span>
            <small>Dipl. Civil Engineer</small>
          </div>

        </div>

      </div>
    </section>
  );
}