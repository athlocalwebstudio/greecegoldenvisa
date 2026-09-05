
import styles from "@/app/styles/legal.module.css";

export const metadata = {
  title: "Cookie Policy | Greece Golden Visa",
  description:
    "Learn how Greece Golden Visa uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <main className={styles.page}>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span />
              LEGAL INFORMATION
            </div>

            <h1>
              Cookie
              <br />
              <em>Policy.</em>
            </h1>

            <p>
              Learn what cookies and similar technologies may be used
              on the Greece Golden Visa website and how you can manage
              your preferences.
            </p>

            <div className={styles.updated}>
              LAST UPDATED
              <strong>September 2026</strong>
            </div>
          </div>

          <div className={styles.heroMeta}>
            <span>WEBSITE</span>
            <strong>COOKIES</strong>
            <span>PRIVACY</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentLayout}>
            <aside className={styles.sideNav}>
              <span>CONTENTS</span>

              <a href="#what">01 — What Are Cookies?</a>
              <a href="#necessary">02 — Necessary Cookies</a>
              <a href="#analytics">03 — Analytics</a>
              <a href="#marketing">04 — Marketing</a>
              <a href="#third-party">05 — Third-Party Cookies</a>
              <a href="#consent">06 — Your Choices</a>
              <a href="#browser">07 — Browser Controls</a>
              <a href="#changes">08 — Changes</a>
              <a href="#contact">09 — Contact</a>
            </aside>

            <article className={styles.legalContent}>
              <p className={styles.lead}>
                This Cookie Policy explains how cookies and similar
                technologies may be used when you visit the Greece
                Golden Visa website.
              </p>

              <section id="what">
                <span className={styles.sectionNumber}>01</span>

                <h2>What are cookies?</h2>

                <p>
                  Cookies are small text files or similar technologies
                  that can be stored on your device when you visit a
                  website. They can allow a website to remember
                  information about your visit, maintain functionality,
                  understand website usage or support other services.
                </p>

                <p>
                  Cookies may be set directly by the website
                  (first-party cookies) or by third-party services used
                  by the website.
                </p>
              </section>

              <section id="necessary">
                <span className={styles.sectionNumber}>02</span>

                <h2>Necessary cookies</h2>

                <p>
                  Some cookies or similar technologies may be necessary
                  for the website to operate properly or to provide a
                  service that you have specifically requested.
                </p>

                <p>
                  These may include technologies used for security,
                  session management, navigation or storing essential
                  privacy preferences.
                </p>

                <div className={styles.cookieCard}>
                  <div>
                    <strong>Necessary</strong>
                    <span>Required for essential functionality</span>
                  </div>

                  <p>
                    These technologies may operate without consent where
                    applicable law permits their use because they are
                    strictly necessary for the requested service or
                    website operation.
                  </p>
                </div>
              </section>

              <section id="analytics">
                <span className={styles.sectionNumber}>03</span>

                <h2>Analytics cookies</h2>

                <p>
                  If analytics services are enabled, cookies or similar
                  technologies may be used to understand how visitors
                  interact with the website.
                </p>

                <p>
                  Analytics information can help us understand which
                  pages are useful, identify technical problems and
                  improve the website.
                </p>

                <p>
                  Optional analytics technologies should only be
                  activated in accordance with applicable consent
                  requirements.
                </p>

                <div className={styles.cookieCard}>
                  <div>
                    <strong>Analytics</strong>
                    <span>Optional audience measurement</span>
                  </div>

                  <p>
                    Status: Only enabled if the website uses an
                    analytics service requiring consent.
                  </p>
                </div>
              </section>

              <section id="marketing">
                <span className={styles.sectionNumber}>04</span>

                <h2>Marketing and advertising cookies</h2>

                <p>
                  The website may in the future use technologies for
                  advertising, remarketing or conversion measurement.
                </p>

                <p>
                  If such technologies are introduced, they should be
                  disclosed through the cookie consent mechanism and
                  activated only where the required legal basis or
                  consent has been obtained.
                </p>

                <div className={styles.cookieCard}>
                  <div>
                    <strong>Marketing</strong>
                    <span>Advertising and remarketing technologies</span>
                  </div>

                  <p>
                    Status: Not assumed to be active unless explicitly
                    configured on the website.
                  </p>
                </div>
              </section>

              <section id="third-party">
                <span className={styles.sectionNumber}>05</span>

                <h2>Third-party technologies</h2>

                <p>
                  Some website functionality may rely on third-party
                  providers. Depending on the services actually
                  installed on the website, those providers may place
                  their own cookies or process technical information.
                </p>

                <p>
                  Examples can include analytics, embedded content,
                  communication tools, maps, security services or other
                  external functionality.
                </p>

                <p>
                  The actual list of third-party technologies should be
                  reviewed against the live website configuration before
                  this policy is published.
                </p>
              </section>

              <section id="consent">
                <span className={styles.sectionNumber}>06</span>

                <h2>Your cookie choices</h2>

                <p>
                  Where consent is required for optional cookies or
                  similar technologies, you should be able to accept or
                  reject those technologies through the website's cookie
                  consent mechanism.
                </p>

                <p>
                  Optional cookies should not be activated merely
                  because you visit the website. Where applicable, your
                  choices should be recorded and respected.
                </p>

                <p>
                  You may also withdraw or change your choices where the
                  website provides a cookie preference management tool.
                </p>
              </section>

              <section id="browser">
                <span className={styles.sectionNumber}>07</span>

                <h2>Browser controls</h2>

                <p>
                  Most modern browsers allow you to control or delete
                  cookies through their settings.
                </p>

                <p>
                  Disabling certain cookies may affect the functionality
                  or user experience of parts of the website, especially
                  where a cookie is necessary for a requested service.
                </p>
              </section>

              <section id="changes">
                <span className={styles.sectionNumber}>08</span>

                <h2>Changes to this policy</h2>

                <p>
                  We may update this Cookie Policy when the website's
                  technologies, services or legal requirements change.
                </p>

                <p>
                  The date shown at the beginning of the policy
                  indicates when it was most recently updated.
                </p>
              </section>

              <section id="contact">
                <span className={styles.sectionNumber}>09</span>

                <h2>Contact</h2>

                <p>
                  If you have questions about cookies or similar
                  technologies used by the website, contact:
                </p>

                <div className={styles.contactBox}>
                  <strong>Greece Golden Visa</strong>

                  <a href="mailto:info@homesingreece.eu">
                    info@homesingreece.eu
                  </a>
                </div>
              </section>

              <div className={styles.disclaimer}>
                <strong>Important</strong>

                <p>
                  This Cookie Policy must be checked against the actual
                  cookies, scripts, analytics platforms, embeds and
                  third-party services installed on the live website.
                  Do not publish cookie categories or providers that are
                  not actually being used.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
