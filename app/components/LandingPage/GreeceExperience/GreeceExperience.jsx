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

  const mobileProgressRef =
    useRef(0);

  const mobileAnimationRef =
    useRef(null);

  const mobileAnimationStartRef =
    useRef(0);

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
  // NAVBAR
  // =========================================================

  const {
    setCinematic
  } = useNavbar();

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
  // IMAGE PRELOADING
  // =========================================================

  useEffect(() => {

    const mobile =
      window.innerWidth <= 1024;

    greeceScenes.forEach(
      (scene) => {

        const src =
          mobile
            ? scene.mobileImage
            : scene.image;

        const img =
          new window.Image();

        img.src = src;

      }
    );

  }, []);

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
  // MOBILE SCENE ANIMATION
  //
  // IMPORTANT:
  //
  // We do NOT keep mobileProgress in React state.
  //
  // The animation is driven through a ref and the scene
  // itself is changed only when necessary.
  //
  // This avoids re-rendering the entire component every
  // animation frame.
  // =========================================================

  function animateMobileTo(
    targetScene
  ) {

    const totalScenes =
      greeceScenes.length;

    const target =
      targetScene /
      totalScenes;

    const start =
      mobileProgressRef.current;

    const difference =
      target -
      start;

    if (
      Math.abs(difference) <
      0.0001
    ) {

      mobileProgressRef.current =
        target;

      setMobileScene(
        targetScene
      );

      return;

    }

    cancelAnimationFrame(
      mobileAnimationRef.current
    );

    const duration =
      650;

    const startTime =
      performance.now();

    mobileAnimationStartRef.current =
      startTime;

    function animate(now) {

      const elapsed =
        now -
        startTime;

      const raw =
        Math.min(
          elapsed /
          duration,
          1
        );

      // Smoothstep easing.
      const eased =
        raw *
        raw *
        (
          3 -
          2 *
          raw
        );

      const value =
        start +
        difference *
        eased;

      mobileProgressRef.current =
        value;

      /*
       * Only update the scene when we actually
       * cross into another scene.
       */
      const scene =
        Math.min(
          Math.floor(
            value *
            totalScenes
          ),
          totalScenes - 1
        );

      setMobileScene(
        previous => {

          if (
            previous === scene
          ) {
            return previous;
          }

          return scene;

        }
      );

      if (
        raw <
        1
      ) {

        mobileAnimationRef.current =
          requestAnimationFrame(
            animate
          );

      } else {

        mobileProgressRef.current =
          target;

        setMobileScene(
          targetScene
        );

        mobileAnimationRef.current =
          null;

      }

    }

    mobileAnimationRef.current =
      requestAnimationFrame(
        animate
      );

  }

  // =========================================================
  // CANCEL MOBILE ANIMATION ON UNMOUNT
  // =========================================================

  useEffect(() => {

    return () => {

      cancelAnimationFrame(
        mobileAnimationRef.current
      );

    };

  }, []);

  // =========================================================
  // MOBILE SCENE → NEXT
  // =========================================================

  function handleNextScene() {

    if (!isMobile) {
      return;
    }

    const totalScenes =
      greeceScenes.length;

    const current =
      mobileScene;

    const next =
      current + 1;

    // -------------------------------------------------------
    // LAST SCENE
    // -------------------------------------------------------

    if (
      next >=
      totalScenes
    ) {

      /*
       * We are already at the end of the cinematic.
       *
       * Do NOT permanently disable the section.
       *
       * Instead, simply let the user continue down the page.
       */

      cancelAnimationFrame(
        mobileAnimationRef.current
      );

      mobileProgressRef.current =
        1;

      /*
       * Find the element immediately after
       * the cinematic section.
       */

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

    // -------------------------------------------------------
    // NEXT SCENE
    // -------------------------------------------------------

    animateMobileTo(
      next
    );

  }

  // =========================================================
  // MOBILE SCROLL BACK / EXIT
  //
  // We deliberately DO NOT lock the page.
  //
  // The user can always scroll upward.
  // =========================================================

  useEffect(() => {

    if (!isMobile) {
      return;
    }

    const section =
      mobileSectionRef.current;

    if (!section) {
      return;
    }

    function handleScroll() {

      const rect =
        section.getBoundingClientRect();

      /*
       * If the user is scrolling upward and the
       * cinematic section is moving below the viewport,
       * simply allow normal browser scrolling.
       *
       * No body overflow locking.
       * No scroll hijacking.
       */

      if (
        rect.top >
        10
      ) {

        return;

      }

    }

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true
      }
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, [
    isMobile
  ]);

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
  // DESKTOP LOCAL SCENE PROGRESS
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
  // MOBILE LOCAL SCENE PROGRESS
  //
  // The camera uses the actual animation progress.
  // =========================================================

  const mobileProgress =
    mobileProgressRef.current;

  const mobileSceneStart =
    mobileScene /
    greeceScenes.length;

  const mobileSceneEnd =
    (
      mobileScene +
      1
    ) /
    greeceScenes.length;

  const mobileLocalProgress =
    Math.min(
      Math.max(
        (
          mobileProgress -
          mobileSceneStart
        ) /
        (
          mobileSceneEnd -
          mobileSceneStart
        ),
        0
      ),
      1
    );

  // =========================================================
  // CINEMATIC EASING
  //
  // THIS WAS THE MISSING PART.
  // =========================================================

  const sceneProgress =
    isMobile
      ? mobileLocalProgress
      : desktopSceneProgress;

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
  // MOBILE CAMERA
  // =========================================================

  const mobileCameraScale =
    1 +
    (
      easedProgress *
      0.045
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
  // MOBILE SCENE INFO
  // =========================================================

  const mobileSceneNumber =
    mobileScene + 1;

  const isLastMobileScene =
    mobileScene ===
    greeceScenes.length - 1;

  /*
   * The button is always available while
   * the mobile cinematic is visible.
   */

  const showButton =
    isMobile;

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

          IMPORTANT:
          NO SCROLL LOCK.

          The user can always scroll upward and leave.
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
                    quality={100}
                    sizes="100vw"
                    className={
                      styles.mobileImage
                    }
                    style={{

                      objectPosition:
                        "center center",

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
                          ? `scale(${mobileCameraScale})`
                          : "scale(1)"

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
              MOBILE NEXT BUTTON
          ================================================= */}

          <button
            type="button"
            className={`
              ${styles.mobileNextButton}
              ${
                showButton
                  ? styles.buttonVisible
                  : styles.buttonHidden
              }
            `}
            onClick={
              handleNextScene
            }
            aria-label={
              isLastMobileScene
                ? "Continue to the next section"
                : `Go to scene ${
                    mobileSceneNumber + 1
                  }`
            }
          >

            <span
              className={
                styles.mobileNextArrow
              }
            >
              ↓
            </span>

          </button>

        </div>

      </div>

    </section>

  );

}