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
  // IMAGE PRELOADING
  //
  // Only preload the images for the active layout.
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

        img.decoding =
          "async";

        img.src =
          src;

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
  // MOBILE SCENE → NEXT
  //
  // IMPORTANT:
  //
  // No requestAnimationFrame.
  // No continuous React updates.
  //
  // React changes the scene ONCE.
  // CSS performs the cinematic transition.
  // =========================================================

  function handleNextScene() {

    if (!isMobile) {
      return;
    }

    const totalScenes =
      greeceScenes.length;

    const next =
      mobileScene + 1;

    // -------------------------------------------------------
    // LAST SCENE
    // -------------------------------------------------------

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

    // -------------------------------------------------------
    // NEXT SCENE
    // -------------------------------------------------------

    setMobileScene(
      next
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
  // MOBILE SCENE INFO
  // =========================================================

  const mobileSceneNumber =
    mobileScene + 1;

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

          This is hidden on desktop by CSS.
          It only exists visually at <= 1024px.
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
                    quality={90}
                    sizes="100vw"
                    className={`
                      ${styles.mobileImage}
                      ${
                        isActive
                          ? styles.mobileImageActive
                          : styles.mobileImageInactive
                      }
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
              MOBILE NEXT BUTTON
          ================================================= */}

          <button
            type="button"
            className={
              styles.mobileNextButton
            }
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
              ↑
            </span>

          </button>

        </div>

      </div>

    </section>

  );

}