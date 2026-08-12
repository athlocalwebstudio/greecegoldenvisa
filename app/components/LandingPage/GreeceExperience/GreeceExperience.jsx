"use client";

import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  useNavbar
} from "@/app/context/NavbarContext";

import Image from "next/image";

import {
  greeceScenes
} from "./GreeceExperienceData";

import styles from "./GreeceExperience.module.css";

import {
  Playfair_Display
} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700"
  ]
});

export default function GreeceExperience() {

  // =========================================================
  // REFS
  // =========================================================

  const sectionRef =
    useRef(null);

  const mobileSectionRef =
    useRef(null);

  const mobileTransitionTimeoutRef =
    useRef(null);

  /*
   * Stores images that have already been prepared.
   *
   * Example:
   *
   * imageCache.current["/images/scene3.jpg"]
   *
   * means the browser has already loaded/decoded it.
   */
  const mobileImageCache =
    useRef(new Map());

  // =========================================================
  // STATE
  // =========================================================

  const [progress, setProgress] =
    useState(0);

  const [isMovieMode, setIsMovieMode] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(false);

  const [mobileScene, setMobileScene] =
    useState(0);

  const [mobileDirection, setMobileDirection] =
    useState("next");

  const [isMobileTransitioning, setIsMobileTransitioning] =
    useState(false);

  // =========================================================
  // NAVBAR
  // =========================================================

  const {
    setCinematic
  } = useNavbar();

  // =========================================================
  // DEVICE DETECTION
  // =========================================================

  useEffect(() => {

    function handleResize() {

      setIsMobile(
        window.innerWidth <= 1024
      );

    }

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);

  // =========================================================
  // NAVBAR CINEMATIC MODE
  // =========================================================

  useEffect(() => {

    const element =
      isMobile
        ? mobileSectionRef.current
        : sectionRef.current;

    if (!element) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {

          setCinematic(
            entry.isIntersecting
          );

        },
        {
          threshold: 0.1,
          rootMargin:
            "-84px 0px 0px 0px"
        }
      );

    observer.observe(element);

    return () => {

      observer.disconnect();

    };

  }, [
    isMobile,
    setCinematic
  ]);

  // =========================================================
  // MOBILE IMAGE PRELOADER
  //
  // THIS IS THE IMPORTANT FIX.
  //
  // We explicitly load + decode images before allowing
  // the scene to change.
  //
  // That prevents:
  //
  // Scene 2
  // ↓
  // click
  // ↓
  // Scene 2 flashes
  // ↓
  // Scene 3 finally loads
  //
  // Instead:
  //
  // Scene 2
  // ↓
  // click
  // ↓
  // prepare Scene 3
  // ↓
  // Scene 3 ready
  // ↓
  // transition starts
  // =========================================================

  function preloadMobileImage(
    src
  ) {

    if (
      mobileImageCache.current.has(src)
    ) {

      return Promise.resolve();

    }

    return new Promise(
      (resolve) => {

        const img =
          new window.Image();

        img.decoding =
          "async";

        img.onload =
          async () => {

            /*
             * decode() makes sure the image is actually
             * decoded and ready for painting when possible.
             *
             * Some browsers may not support it, so we
             * gracefully fall back to onload.
             */

            if (
              typeof img.decode ===
              "function"
            ) {

              try {

                await img.decode();

              } catch {

                /*
                 * The image is still usable even if
                 * decode() rejects.
                 */

              }

            }

            mobileImageCache.current.set(
              src,
              true
            );

            resolve();

          };

        img.onerror =
          () => {

            /*
             * Don't permanently lock the UI if an image
             * fails to preload.
             *
             * We allow the scene transition anyway.
             */

            resolve();

          };

        img.src =
          src;

      }
    );

  }

  // =========================================================
  // PRELOAD MOBILE IMAGES
  //
  // We prepare the whole cinematic sequence once the
  // mobile version becomes active.
  // =========================================================

  useEffect(() => {

    if (!isMobile) {
      return;
    }

    let cancelled =
      false;

    async function preloadScenes() {

      for (
        const scene of greeceScenes
      ) {

        if (cancelled) {
          return;
        }

        await preloadMobileImage(
          scene.mobileImage
        );

      }

    }

    preloadScenes();

    return () => {

      cancelled =
        true;

    };

  }, [isMobile]);

  // =========================================================
  // DESKTOP SCROLL TRACKING
  // =========================================================

  useEffect(() => {

    if (isMobile) {
      return;
    }

    function handleScroll() {

      const section =
        sectionRef.current;

      if (!section) {
        return;
      }

      const rect =
        section.getBoundingClientRect();

      const scrollHeight =
        section.offsetHeight -
        window.innerHeight;

      if (scrollHeight <= 0) {
        return;
      }

      const scrolled =
        -rect.top;

      const value =
        Math.min(
          Math.max(
            scrolled /
              scrollHeight,
            0
          ),
          1
        );

      setProgress(value);

      setIsMovieMode(
        value > 0.02 &&
        value < 0.99
      );

    }

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true
      }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );

    };

  }, [
    isMobile
  ]);

  // =========================================================
  // CLEANUP MOBILE TRANSITION
  // =========================================================

  useEffect(() => {

    return () => {

      if (
        mobileTransitionTimeoutRef.current
      ) {

        clearTimeout(
          mobileTransitionTimeoutRef.current
        );

      }

    };

  }, []);

  // =========================================================
  // MOBILE SCENE NAVIGATION
  //
  // IMPORTANT:
  //
  // We DON'T change mobileScene immediately.
  //
  // First we make sure the destination image is ready.
  //
  // This is what removes the tiny "old image" flash.
  // =========================================================

  async function changeMobileScene(
    direction
  ) {

    if (!isMobile) {
      return;
    }

    if (isMobileTransitioning) {
      return;
    }

    const totalScenes =
      greeceScenes.length;

    const current =
      mobileScene;

    const next =
      direction === "next"
        ? current + 1
        : current - 1;

    // =======================================================
    // FIRST SCENE
    // =======================================================

    if (next < 0) {
      return;
    }

    // =======================================================
    // AFTER LAST SCENE
    // =======================================================

    if (
      next >=
      totalScenes
    ) {

      const section =
        mobileSectionRef.current;

      const nextSection =
        section?.nextElementSibling;

      if (nextSection) {

        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

      return;
    }

    // =======================================================
    // DESTINATION
    // =======================================================

    const destinationScene =
      greeceScenes[next];

    if (!destinationScene) {
      return;
    }

    // =======================================================
    // BEGIN LOADING STATE
    // =======================================================

    setIsMobileTransitioning(
      true
    );

    /*
     * The spinner can appear immediately.
     *
     * The actual scene DOES NOT change yet.
     */

    try {

      await preloadMobileImage(
        destinationScene.mobileImage
      );

    } catch {

      /*
       * Even if something unexpected happens,
       * don't leave the controls permanently locked.
       */

    }

    // =======================================================
    // COMPONENT MAY HAVE BEEN UNMOUNTED
    // =======================================================

    if (
      !mobileSectionRef.current
    ) {

      setIsMobileTransitioning(
        false
      );

      return;
    }

    // =======================================================
    // NOW START THE CINEMATIC TRANSITION
    // =======================================================

    setMobileDirection(
      direction
    );

    setMobileScene(
      next
    );

    // =======================================================
    // UNLOCK AFTER CSS TRANSITION
    // =======================================================

    mobileTransitionTimeoutRef.current =
      window.setTimeout(
        () => {

          setIsMobileTransitioning(
            false
          );

        },
        520
      );

  }

  // =========================================================
  // TOTAL DURATION
  // =========================================================

  const totalDuration =
    greeceScenes.reduce(
      (
        total,
        scene
      ) =>
        total +
        scene.duration,
      0
    );

  // =========================================================
  // DESKTOP SCENE CALCULATION
  // =========================================================

  let accumulated =
    0;

  let calculatedScene =
    0;

  let activeSceneProgress =
    0;

  greeceScenes.forEach(
    (
      scene,
      index
    ) => {

      const start =
        accumulated /
        totalDuration;

      const end =
        (
          accumulated +
          scene.duration
        ) /
        totalDuration;

      if (
        progress >= start &&
        (
          progress < end ||
          index ===
            greeceScenes.length - 1
        )
      ) {

        calculatedScene =
          index;

        activeSceneProgress =
          (
            progress -
            start
          ) /
          (
            end -
            start
          );

      }

      accumulated +=
        scene.duration;

    }
  );

  // =========================================================
  // CURRENT SCENE
  // =========================================================

  const currentScene =
    isMobile
      ? greeceScenes[
          mobileScene
        ]
      : greeceScenes[
          calculatedScene
        ];

  // =========================================================
  // DESKTOP LOCAL PROGRESS
  // =========================================================

  const desktopSceneProgress =
    Math.min(
      Math.max(
        activeSceneProgress,
        0
      ),
      1
    );

  // =========================================================
  // DESKTOP CINEMATIC EASING
  // =========================================================

  const sceneProgress =
    desktopSceneProgress;

  const easedProgress =
    sceneProgress *
    sceneProgress *
    (
      3 -
      2 *
      sceneProgress
    );

  // =========================================================
  // DESKTOP CAMERA
  // =========================================================

  const desktopCameraScale =
    1 +
    (
      easedProgress *
      0.05
    );

  // =========================================================
  // DESKTOP TEXT
  // =========================================================

  const textEnter =
    Math.min(
      Math.max(
        (
          desktopSceneProgress -
          0.035
        ) /
        0.12,
        0
      ),
      1
    );

  const textExit =
    Math.min(
      Math.max(
        (
          desktopSceneProgress -
          0.88
        ) /
        0.12,
        0
      ),
      1
    );

  const textOpacity =
    textEnter *
    (
      1 -
      textExit
    );

  const textTranslate =
    12 -
    (
      textEnter *
      12
    ) -
    (
      textExit *
      20
    );

  // =========================================================
  // MOBILE STATE
  // =========================================================

  const mobileSceneNumber =
    mobileScene + 1;

  const isFirstMobileScene =
    mobileScene === 0;

  const isLastMobileScene =
    mobileScene ===
    greeceScenes.length - 1;

  // =========================================================
  // RENDER
  // =========================================================

  return (

    <section
      className={`
        ${styles.greeceExperience}
        ${playfair.className}
        ${
          isMovieMode
            ? styles.movieMode
            : ""
        }
      `}
    >

      {/* =====================================================
          INTRO
      ===================================================== */}

      <div
        className={`
          ${styles.intro}
          ${
            isMovieMode
              ? styles.introMovieMode
              : ""
          }
        `}
      >

        <span
          className={
            styles.label
          }
        >
          Why Choose Greece
        </span>

        <h2>
          Imagine your mornings looked like this.
        </h2>

        <p>
          More than residency. A lifestyle built around freedom,
          security and the Mediterranean way of living.
        </p>

      </div>


      {/* =====================================================
          DESKTOP STORY
      ===================================================== */}

      <div
        ref={
          sectionRef
        }
        className={
          styles.storyWrapper
        }
      >

        <div
          className={
            styles.stickyStage
          }
        >

          {/* =================================================
              DESKTOP IMAGES
          ================================================= */}

          <div
            className={
              styles.imageWrapper
            }
          >

            {greeceScenes.map(
              (
                scene,
                index
              ) => {

                const isActive =
                  index ===
                  calculatedScene;

                return (

                  <Image
                    key={
                      `desktop-${scene.id}`
                    }
                    src={
                      scene.image
                    }
                    alt={
                      isActive
                        ? scene.title
                        : ""
                    }
                    fill
                    sizes="100vw"
                    quality={100}
                    className={
                      styles.image
                    }
                    style={{

                      objectPosition:
                        scene.position,

                      opacity:
                        isActive
                          ? 1
                          : 0,

                      zIndex:
                        isActive
                          ? 2
                          : 1,

                      transform:
                        isActive
                          ? `scale(${desktopCameraScale})`
                          : "scale(1)"

                    }}
                  />

                );

              }
            )}

          </div>


          {/* =================================================
              DESKTOP OVERLAY
          ================================================= */}

          <div
            className={
              styles.overlay
            }
            style={{

              background: `
                linear-gradient(
                  180deg,
                  rgba(
                    15,
                    44,
                    89,
                    ${currentScene.overlay.top}
                  ),
                  rgba(
                    0,
                    0,
                    0,
                    ${currentScene.overlay.bottom}
                  )
                )
              `

            }}
          />


          {/* =================================================
              DESKTOP TEXT
          ================================================= */}

          <div
            className={
              styles.sceneContent
            }
            style={{

              "--text-top":
                currentScene.text.top,

              "--text-width":
                currentScene.text.width,

              "--text-align":
                currentScene.text.align,

              opacity:
                textOpacity,

              transform: `
                translate(
                  -50%,
                  calc(
                    -50% +
                    ${textTranslate}px
                  )
                )
              `

            }}
          >

            <h3
              className={
                styles.sceneTitle
              }
            >
              {
                currentScene.title
              }
            </h3>

            <p
              className={
                styles.sceneDescription
              }
            >
              {
                currentScene.description
              }
            </p>

          </div>


          {/* =================================================
              DESKTOP INDICATOR
          ================================================= */}

          <div
            className={`
              ${styles.sceneIndicator}
              ${
                isMovieMode
                  ? styles.indicatorVisible
                  : ""
              }
            `}
          >

            {greeceScenes.map(
              (
                scene,
                index
              ) => (

                <div
                  key={
                    scene.id
                  }
                  className={
                    styles.indicatorItem
                  }
                >

                  <div
                    className={`
                      ${styles.sceneDot}
                      ${
                        index ===
                        calculatedScene
                          ? styles.activeDot
                          : ""
                      }
                    `}
                  />

                  {index !==
                    greeceScenes.length - 1 && (

                    <div
                      className={
                        styles.indicatorLine
                      }
                    />

                  )}

                </div>

              )
            )}

          </div>

        </div>

      </div>


      {/* =====================================================
          MOBILE STORY
      ===================================================== */}

      <div
        ref={
          mobileSectionRef
        }
        className={
          styles.mobileStoryWrapper
        }
        style={{
          "--scene-count":
            greeceScenes.length
        }}
      >

        <div
          className={
            styles.mobileStickyStage
          }
        >

          {/* =================================================
              MOBILE IMAGES
          ================================================= */}

          <div
            className={
              styles.mobileImageWrapper
            }
          >

            {greeceScenes.map(
              (
                scene,
                index
              ) => {

                const isActive =
                  index ===
                  mobileScene;

                const isPrevious =
                  index ===
                  mobileScene - 1;

                const isNext =
                  index ===
                  mobileScene + 1;

                let imageClass =
                  styles.mobileImageInactive;

                /*
                 * Normally only the active scene is visible.
                 */

                if (isActive) {

                  imageClass =
                    styles.mobileImageActive;

                }

                /*
                 * During a NEXT transition,
                 * the destination image gets the
                 * upward entrance animation.
                 */

                if (
                  isMobileTransitioning &&
                  isActive &&
                  mobileDirection ===
                    "next"
                ) {

                  imageClass =
                    styles.mobileImageNext;

                }

                /*
                 * During a PREVIOUS transition,
                 * the destination image gets the
                 * downward entrance animation.
                 */

                if (
                  isMobileTransitioning &&
                  isActive &&
                  mobileDirection ===
                    "previous"
                ) {

                  imageClass =
                    styles.mobileImagePrevious;

                }

                /*
                 * Keep the destination above the old
                 * scene while its animation runs.
                 */

                const isTransitionDestination =
                  isMobileTransitioning &&
                  isActive &&
                  (
                    isNext ||
                    isPrevious ||
                    true
                  );

                return (

                  <Image
                    key={
                      `mobile-${scene.id}`
                    }
                    src={
                      scene.mobileImage
                    }
                    alt={
                      isActive
                        ? scene.title
                        : ""
                    }
                    fill
                    sizes="100vw"
                    quality={85}
                    loading={
                      index === 0
                        ? "eager"
                        : "lazy"
                    }
                    decoding="async"
                    className={`
                      ${styles.mobileImage}
                      ${imageClass}
                    `}
                    style={{

                      objectPosition:
                        "center center",

                      zIndex:
                        isActive
                          ? 2
                          : 1

                    }}
                  />

                );

              }
            )}


            {/* =================================================
                MOBILE OVERLAY
            ================================================= */}

            <div
              className={
                styles.mobileOverlay
              }
              style={{

                background: `
                  linear-gradient(
                    180deg,
                    rgba(
                      15,
                      44,
                      89,
                      ${currentScene.overlay.top}
                    ),
                    rgba(
                      0,
                      0,
                      0,
                      ${currentScene.overlay.bottom}
                    )
                  )
                `

              }}
            />

          </div>


          {/* =================================================
              MOBILE CONTENT
          ================================================= */}

          <div
            key={
              `mobile-content-${mobileScene}`
            }
            className={
              styles.mobileContent
            }
          >

            <h3>
              {
                currentScene.title
              }
            </h3>

            <p>
              {
                currentScene.description
              }
            </p>

          </div>


          {/* =================================================
              MOBILE INDICATOR
          ================================================= */}

          <div
            className={
              styles.mobileIndicator
            }
            aria-hidden="true"
          >

            {greeceScenes.map(
              (
                scene,
                index
              ) => (

                <span
                  key={
                    scene.id
                  }
                  className={`
                    ${styles.mobileDot}
                    ${
                      index ===
                      mobileScene
                        ? styles.mobileDotActive
                        : ""
                    }
                  `}
                />

              )
            )}

          </div>


          {/* =================================================
              MOBILE CONTROLS
          ================================================= */}

          <div
            className={
              styles.mobileControls
            }
          >

            {/* =================================================
                PREVIOUS
            ================================================= */}

            <button
              type="button"
              className={`
                ${styles.mobileSceneButton}
                ${
                  isFirstMobileScene
                    ? styles.mobileSceneButtonDisabled
                    : ""
                }
              `}
              onClick={() =>
                changeMobileScene(
                  "previous"
                )
              }
              disabled={
                isFirstMobileScene ||
                isMobileTransitioning
              }
              aria-label={
                isFirstMobileScene
                  ? "First scene"
                  : `Go to scene ${
                      mobileSceneNumber - 1
                    }`
              }
            >

              <span
                className={
                  styles.mobileButtonArrow
                }
              >
                ↑
              </span>

            </button>


            {/* =================================================
                NEXT
            ================================================= */}

            <button
              type="button"
              className={`
                ${styles.mobileSceneButton}
                ${
                  isLastMobileScene
                    ? styles.mobileSceneButtonContinue
                    : ""
                }
              `}
              onClick={() =>
                changeMobileScene(
                  "next"
                )
              }
              disabled={
                isMobileTransitioning
              }
              aria-label={
                isLastMobileScene
                  ? "Continue to the next section"
                  : `Go to scene ${
                      mobileSceneNumber + 1
                    }`
              }
            >

              {isMobileTransitioning ? (

                <span
                  className={
                    styles.mobileSpinner
                  }
                  aria-hidden="true"
                />

              ) : (

                <span
                  className={
                    styles.mobileButtonArrow
                  }
                >
                  ↓
                </span>

              )}

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}