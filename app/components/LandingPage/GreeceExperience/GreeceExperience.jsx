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

  const sectionRef =
    useRef(null);

  const mobileSectionRef =
    useRef(null);

  const [progress, setProgress] =
    useState(0);

  const [isMovieMode, setIsMovieMode] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(false);

  const [cinematicLocked, setCinematicLocked] =
    useState(false);

  const [cinematicFinished, setCinematicFinished] =
    useState(false);

  const lockedScrollYRef =
    useRef(0);

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
  // DESKTOP CINEMATIC WHEEL CONTROL
  // =========================================================

  useEffect(() => {

    if (isMobile) {
      return;
    }

    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    function handleWheel(e) {

      const rect =
        section.getBoundingClientRect();

      const inside =
        rect.top <= 100 &&
        rect.bottom >= window.innerHeight;

      if (!inside) {
        return;
      }

      if (cinematicFinished) {
        return;
      }

      e.preventDefault();

      const direction =
        e.deltaY > 0
          ? 1
          : -1;

      setProgress(prev => {

        let next =
          prev +
          (
            direction *
            0.25
          );

        if (next >= 1) {

          setCinematicFinished(true);

          return 1;

        }

        if (next <= 0) {

          return 0;

        }

        return next;

      });

    }

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false
      }
    );

    return () => {

      window.removeEventListener(
        "wheel",
        handleWheel
      );

    };

  }, [
    cinematicFinished,
    isMobile
  ]);

  // =========================================================
  // MOBILE CINEMATIC LOCK
  //
  // MOBILE:
  //
  // Enter cinematic
  // ↓
  // Lock page
  // ↓
  // Disable wheel/touch scrolling
  // ↓
  // Button becomes ONLY way to advance
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

    function lockScroll() {

      if (
        cinematicLocked ||
        cinematicFinished
      ) {
        return;
      }

      const rect =
        section.getBoundingClientRect();

      const entered =
        rect.top <= 5 &&
        rect.bottom >
          window.innerHeight * 0.5;

      if (!entered) {
        return;
      }

      lockedScrollYRef.current =
        window.scrollY;

      setCinematicLocked(true);

      setIsMovieMode(true);

      document.body.style.overflow =
        "hidden";

      document.documentElement.style.overflow =
        "hidden";

    }

    function preventWheel(event) {

      if (!cinematicLocked) {
        return;
      }

      if (event.cancelable) {
        event.preventDefault();
      }

    }

    function preventTouch(event) {

      if (!cinematicLocked) {
        return;
      }

      if (event.cancelable) {
        event.preventDefault();
      }

    }

    function keepPosition() {

      if (!cinematicLocked) {
        return;
      }

      if (
        window.scrollY !==
        lockedScrollYRef.current
      ) {

        window.scrollTo(
          0,
          lockedScrollYRef.current
        );

      }

    }

    window.addEventListener(
      "scroll",
      lockScroll,
      {
        passive: true
      }
    );

    window.addEventListener(
      "wheel",
      preventWheel,
      {
        passive: false
      }
    );

    window.addEventListener(
      "touchmove",
      preventTouch,
      {
        passive: false
      }
    );

    window.addEventListener(
      "scroll",
      keepPosition,
      {
        passive: true
      }
    );

    lockScroll();

    return () => {

      window.removeEventListener(
        "scroll",
        lockScroll
      );

      window.removeEventListener(
        "wheel",
        preventWheel
      );

      window.removeEventListener(
        "touchmove",
        preventTouch
      );

      window.removeEventListener(
        "scroll",
        keepPosition
      );

      document.body.style.overflow =
        "";

      document.documentElement.style.overflow =
        "";

    };

  }, [
    isMobile,
    cinematicLocked,
    cinematicFinished
  ]);

  // =========================================================
  // SCENE CALCULATION
  //
  // DESKTOP:
  // Uses scene durations.
  //
  // MOBILE:
  // Every scene gets exactly one button press.
  // =========================================================

  const totalDuration =
    greeceScenes.reduce(
      (total, scene) =>
        total + scene.duration,
      0
    );

  let accumulated = 0;

  let calculatedScene = 0;

  let activeSceneProgress = 0;

  greeceScenes.forEach(
    (scene, index) => {

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
            progress - start
          ) /
          (
            end - start
          );

      }

      accumulated +=
        scene.duration;

    }
  );

  // =========================================================
  // MOBILE SCENE
  //
  // Mobile intentionally ignores scene.duration.
  //
  // 0.00 → Scene 1
  // 0.25 → Scene 2
  // 0.50 → Scene 3
  // 0.75 → Scene 4
  // 1.00 → Finish
  // =========================================================

  const mobileCalculatedScene =
    Math.min(
      Math.floor(
        progress *
        greeceScenes.length
      ),
      greeceScenes.length - 1
    );

  // =========================================================
  // CURRENT SCENE
  // =========================================================

  const currentScene =
    isMobile
      ? greeceScenes[
          mobileCalculatedScene
        ]
      : greeceScenes[
          calculatedScene
        ];

  // =========================================================
  // LOCAL SCENE PROGRESS
  // =========================================================

  const sceneProgress =
    isMobile
      ? Math.min(
          Math.max(
            (
              progress *
              greeceScenes.length
            ) -
            mobileCalculatedScene,
            0
          ),
          1
        )
      : Math.min(
          Math.max(
            activeSceneProgress,
            0
          ),
          1
        );

  // =========================================================
  // CINEMATIC EASING
  // =========================================================

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
          sceneProgress -
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
          sceneProgress -
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

    observer.observe(
      element
    );

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

        img.src =
          src;

      }
    );

  }, []);

  // =========================================================
  // DESKTOP SCROLL TRACKING
  //
  // MOBILE DOES NOT USE THIS.
  // =========================================================

  useEffect(() => {

    function handleScroll() {

      if (
        window.innerWidth <= 1024
      ) {
        return;
      }

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

      if (
        scrollHeight <= 0
      ) {
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

      setProgress(
        value
      );

      setIsMovieMode(
        value > 0.02
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

  }, []);

  // =========================================================
  // BUTTON → NEXT SCENE
  //
  // MOBILE ONLY.
  //
  // This is now the ONLY way to advance.
  // =========================================================

  function handleNextScene() {

    if (!isMobile) {
      return;
    }

    if (!cinematicLocked) {
      return;
    }

    const totalScenes =
      greeceScenes.length;

    const currentIndex =
      mobileCalculatedScene;

    const nextIndex =
      currentIndex + 1;

    // =======================================================
    // FINAL SCENE
    // =======================================================

    if (
      nextIndex >= totalScenes
    ) {

      const section =
        mobileSectionRef.current;

      const nextSection =
        section?.nextElementSibling;

      setProgress(1);

      setCinematicFinished(true);

      setCinematicLocked(false);

      setIsMovieMode(false);

      document.body.style.overflow =
        "";

      document.documentElement.style.overflow =
        "";

      if (nextSection) {

        requestAnimationFrame(() => {

          nextSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        });

      }

      return;

    }

    // =======================================================
    // NEXT SCENE
    // =======================================================

    const nextProgress =
      nextIndex /
      totalScenes;

    setProgress(
      nextProgress
    );

  }

  // =========================================================
  // MOBILE CAMERA
  // =========================================================

  const mobileSceneStart =
    mobileCalculatedScene /
    greeceScenes.length;

  const mobileSceneEnd =
    (
      mobileCalculatedScene + 1
    ) /
    greeceScenes.length;

  const mobileLocalProgress =
    Math.min(
      Math.max(
        (
          progress -
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

  const mobileEasedProgress =
    mobileLocalProgress *
    mobileLocalProgress *
    (
      3 -
      2 *
      mobileLocalProgress
    );

  const mobileCameraScale =
    1 +
    (
      mobileEasedProgress *
      0.045
    );

  // =========================================================
  // MOBILE SCENE INFO
  // =========================================================

  const mobileSceneNumber =
    mobileCalculatedScene + 1;

  const showButton =
    isMobile &&
    cinematicLocked &&
    !cinematicFinished;

  const isLastMobileScene =
    mobileCalculatedScene ===
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
        ref={sectionRef}
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
              (scene, index) => {

                const isActive =
                  index ===
                  calculatedScene;

                return (

                  <Image
                    key={`desktop-${scene.id}`}
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
              (scene, index) => (

                <div
                  key={scene.id}
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
          MOBILE / TABLET STORY

          ONE VIEWPORT PER SCENE.
          SCROLLING IS LOCKED.
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
              (scene, index) => {

                const isActive =
                  index ===
                  mobileCalculatedScene;

                return (

                  <Image
                    key={`mobile-${scene.id}`}
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
              `mobile-content-${mobileCalculatedScene}`
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
              (scene, index) => (

                <span
                  key={scene.id}
                  className={`
                    ${styles.mobileDot}
                    ${
                      index ===
                      mobileCalculatedScene
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

              ONLY WAY TO ADVANCE.
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