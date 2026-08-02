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

  const mobileTouchStartY =
    useRef(0);

  const mobileTouchActive =
    useRef(false);


  const [progress, setProgress] =
    useState(0);

  const [isMovieMode, setIsMovieMode] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(false);

  const [mobileSceneIndex, setMobileSceneIndex] =
    useState(0);

  const [mobileStep, setMobileStep] =
    useState(0);

  const [mobileTransitioning, setMobileTransitioning] =
    useState(false);


  // =========================================================
  // SCENE CALCULATION
  //
  // DESKTOP ONLY.
  //
  // DO NOT CHANGE THIS BEHAVIOR.
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
  // DESKTOP CURRENT SCENE
  // =========================================================

  const desktopScene =
    greeceScenes[
      calculatedScene
    ];


  // =========================================================
  // MOBILE CURRENT SCENE
  // =========================================================

  const mobileScene =
    greeceScenes[
      mobileSceneIndex
    ];


  // =========================================================
  // LOCAL DESKTOP SCENE PROGRESS
  // =========================================================

  const sceneProgress =
    Math.min(
      Math.max(
        activeSceneProgress,
        0
      ),
      1
    );


  // =========================================================
  // DESKTOP SMOOTHSTEP
  //
  // UNCHANGED.
  // =========================================================

  const easedProgress =
    sceneProgress *
    sceneProgress *
    (
      3 -
      2 * sceneProgress
    );


  // =========================================================
  // DESKTOP CINEMATIC CAMERA
  //
  // UNCHANGED.
  //
  // 1.000 → 1.055
  // =========================================================

  const desktopCameraScale =
    1 +
    (
      easedProgress *
      0.055
    );


  // =========================================================
  // MOBILE CAMERA
  //
  // 3 CLICK STAGES
  //
  // 0 → 1.055
  // 1 → 1.105
  // 2 → 1.160
  //
  // The third click changes scene.
  // =========================================================

  const mobileCameraScales = [
    1,
    1.055,
    1.105
  ];


  const mobileCameraScale =
    mobileCameraScales[
      Math.min(
        mobileStep,
        mobileCameraScales.length - 1
      )
    ];


  // =========================================================
  // DESKTOP TEXT ANIMATION
  //
  // UNCHANGED.
  // =========================================================

  const textEnter =
    Math.min(
      Math.max(
        (
          sceneProgress -
          0.05
        ) /
        0.15,
        0
      ),
      1
    );


  const textExit =
    Math.min(
      Math.max(
        (
          sceneProgress -
          0.85
        ) /
        0.15,
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
    15 -
    (
      textEnter *
      15
    ) -
    (
      textExit *
      25
    );


  // =========================================================
  // NAVBAR
  // =========================================================

  const {
    setCinematic
  } = useNavbar();


  // =========================================================
  // NAVBAR CINEMATIC MODE
  //
  // DESKTOP BEHAVIOR REMAINS THE SAME.
  // =========================================================

  useEffect(() => {

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


    if (
      sectionRef.current
    ) {

      observer.observe(
        sectionRef.current
      );

    }


    return () => {

      observer.disconnect();

    };

  }, [
    setCinematic
  ]);


  // =========================================================
  // MOBILE NAVBAR CINEMATIC MODE
  //
  // Separate observer because desktop story is hidden
  // on mobile/tablet.
  // =========================================================

  useEffect(() => {

    if (!isMobile) {

      return;

    }


    const element =
      mobileSectionRef.current;


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
  // MOBILE / TABLET DETECTION
  //
  // 1024px is intentional.
  //
  // Tablet gets the mobile experience too.
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
  // IMAGE PRELOADING
  //
  // IMPORTANT:
  //
  // Keep all images preloaded.
  // This prevents black flashes.
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
  // MOBILE/TABLET DOES NOT USE THIS.
  //
  // DESKTOP BEHAVIOR REMAINS UNCHANGED.
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
  // MOBILE / TABLET SECTION STATE
  //
  // The experience is considered "locked" when the
  // mobile story occupies the viewport.
  // =========================================================

  const isMobileStoryActive =
    isMobile &&
    mobileSectionRef.current &&
    (() => {

      const rect =
        mobileSectionRef.current
          .getBoundingClientRect();

      return (
        rect.top <= 2 &&
        rect.bottom >=
          window.innerHeight - 2
      );

    })();


  // =========================================================
  // PREVENT DOWNWARD SCROLL
  //
  // UPWARD SCROLL REMAINS COMPLETELY NATURAL.
  //
  // This means:
  //
  // ↓ = button
  // ↑ = normal page scrolling
  // =========================================================

  useEffect(() => {

    if (!isMobile) {

      return;

    }


    function isInsideMobileStory() {

      const section =
        mobileSectionRef.current;


      if (!section) {

        return false;

      }


      const rect =
        section.getBoundingClientRect();


      return (
        rect.top <= 2 &&
        rect.bottom >=
          window.innerHeight - 2
      );

    }


    function handleWheel(event) {

      if (
        event.ctrlKey
      ) {

        return;

      }


      if (
        event.deltaY <= 0
      ) {

        return;

      }


      if (
        !isInsideMobileStory()
      ) {

        return;

      }


      if (
        event.cancelable
      ) {

        event.preventDefault();

      }

    }


    function handleTouchStart(event) {

      if (
        !isInsideMobileStory()
      ) {

        return;

      }


      if (
        event.touches.length !== 1
      ) {

        return;

      }


      mobileTouchStartY.current =
        event.touches[0].clientY;


      mobileTouchActive.current =
        true;

    }


    function handleTouchMove(event) {

      if (
        !mobileTouchActive.current
      ) {

        return;

      }


      if (
        !isInsideMobileStory()
      ) {

        return;

      }


      if (
        event.touches.length !== 1
      ) {

        return;

      }


      const currentY =
        event.touches[0].clientY;


      const deltaY =
        mobileTouchStartY.current -
        currentY;


      /*
        Positive deltaY =
        finger moving upward =
        user wants to scroll DOWN.

        Block it.

        Negative deltaY =
        finger moving downward =
        user wants to scroll UP.

        Allow it.
      */

      if (
        deltaY > 0 &&
        event.cancelable
      ) {

        event.preventDefault();

      }

    }


    function handleTouchEnd() {

      mobileTouchActive.current =
        false;

    }


    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive:false
      }
    );


    window.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive:true
      }
    );


    window.addEventListener(
      "touchmove",
      handleTouchMove,
      {
        passive:false
      }
    );


    window.addEventListener(
      "touchend",
      handleTouchEnd,
      {
        passive:true
      }
    );


    window.addEventListener(
      "touchcancel",
      handleTouchEnd,
      {
        passive:true
      }
    );


    return () => {

      window.removeEventListener(
        "wheel",
        handleWheel
      );


      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );


      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );


      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );


      window.removeEventListener(
        "touchcancel",
        handleTouchEnd
      );

    };

  }, [
    isMobile
  ]);


  // =========================================================
  // MOBILE BUTTON
  //
  // THREE TAPS PER SCENE.
  // =========================================================

  function handleMobileContinue() {

    if (
      mobileTransitioning
    ) {

      return;

    }


    // -----------------------------------------
    // TAP 1
    // -----------------------------------------

    if (
      mobileStep === 0
    ) {

      setMobileStep(1);

      return;

    }


    // -----------------------------------------
    // TAP 2
    // -----------------------------------------

    if (
      mobileStep === 1
    ) {

      setMobileStep(2);

      return;

    }


    // -----------------------------------------
    // TAP 3
    // -----------------------------------------

    setMobileTransitioning(
      true
    );


    /*
      Give the current image a brief cinematic
      push before changing scene.
    */

    setTimeout(() => {

      if (
        mobileSceneIndex <
        greeceScenes.length - 1
      ) {

        setMobileSceneIndex(
          previous =>
            previous + 1
        );


        setMobileStep(0);


        setMobileTransitioning(
          false
        );


        return;

      }


      // =========================================
      // FINAL SCENE
      //
      // Move to the next page section.
      // =========================================

      const currentSection =
        mobileSectionRef.current;


      const nextSection =
        currentSection
          ?.nextElementSibling;


      if (
        nextSection
      ) {

        nextSection.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

      }


      setMobileTransitioning(
        false
      );

    }, 650);

  }


  // =========================================================
  // MOBILE BUTTON SCALE
  // =========================================================

  const buttonScale =
    mobileStep === 0
      ? 1
      : mobileStep === 1
        ? 1.08
        : 1.16;


  // =========================================================
  // MOBILE BUTTON PROGRESS
  // =========================================================

  const progressPercentage =
    mobileStep === 0
      ? 0
      : mobileStep === 1
        ? 33
        : 66;


  // =========================================================
  // MOBILE SCENE DATA
  // =========================================================

  const mobileOverlay =
    mobileScene.overlay;


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
          
          DO NOT CHANGE.
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
                    ${desktopScene.overlay.top}
                  ),
                  rgba(
                    0,
                    0,
                    0,
                    ${desktopScene.overlay.bottom}
                  )
                )
              `

            }}
          />


          <div
            className={
              styles.sceneContent
            }
            style={{

              "--text-top":
                desktopScene.text.top,

              "--text-width":
                desktopScene.text.width,

              "--text-align":
                desktopScene.text.align,

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
                desktopScene.title
              }
            </h3>


            <p
              className={
                styles.sceneDescription
              }
            >
              {
                desktopScene.description
              }
            </p>

          </div>


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
          MOBILE + TABLET STORY
      ===================================================== */}

      <div
        ref={
          mobileSectionRef
        }
        className={
          styles.mobileStoryWrapper
        }
      >

        <div
          className={`
            ${styles.mobileStickyStage}
            ${
              mobileTransitioning
                ? styles.mobileTransitioning
                : ""
            }
          `}
        >

          {/* =================================================
              MOBILE IMAGE
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
                  mobileSceneIndex;


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
                      ${mobileOverlay.top}
                    ),
                    rgba(
                      0,
                      0,
                      0,
                      ${mobileOverlay.bottom}
                    )
                  )
                `

              }}
            />

          </div>


          {/* =================================================
              MOBILE SCENE CONTENT
          ================================================= */}

          <div
            key={`mobile-text-${mobileScene.id}`}
            className={
              styles.mobileContent
            }
          >

            <div
              className={
                styles.mobileSceneCounter
              }
            >

              {mobileSceneIndex + 1}

              <span>
                /
              </span>

              {greeceScenes.length}

            </div>


            <h3>
              {
                mobileScene.title
              }
            </h3>


            <p>
              {
                mobileScene.description
              }
            </p>

          </div>


          {/* =================================================
              MOBILE PROGRESS INDICATOR
          ================================================= */}

          <div
            className={
              styles.mobileIndicator
            }
          >

            {greeceScenes.map(
              (scene, index) => (

                <div
                  key={scene.id}
                  className={
                    styles.mobileIndicatorItem
                  }
                >

                  <div
                    className={`
                      ${styles.sceneDot}
                      ${
                        index ===
                        mobileSceneIndex
                          ? styles.activeDot
                          : ""
                      }
                    `}
                  />

                </div>

              )
            )}

          </div>


          {/* =================================================
              MOBILE CONTINUE CONTROL
          ================================================= */}

          <div
            className={
              styles.mobileControls
            }
          >

            <div
              className={
                styles.mobileInstruction
              }
            >

              <span>
                Tap to continue
              </span>

              <small>
                Swipe up to go back
              </small>

            </div>


            <button
              type="button"
              className={`
                ${styles.mobileContinueButton}
                ${
                  mobileStep > 0
                    ? styles.mobileContinueActive
                    : ""
                }
              `}
              onClick={
                handleMobileContinue
              }
              disabled={
                mobileTransitioning
              }
              aria-label={
                mobileStep === 0
                  ? "Continue to the next moment"
                  : mobileStep === 1
                    ? "Continue, step two of three"
                    : "Continue, final step"
              }
              style={{
                "--button-scale":
                  buttonScale
              }}
            >

              <span
                className={
                  styles.mobileButtonRing
                }
              />

              <span
                className={
                  styles.mobileButtonInner
                }
              >

                <span
                  className={
                    styles.mobileButtonArrow
                  }
                >
                  →
                </span>

              </span>

            </button>


            <div
              className={
                styles.mobileTapProgress
              }
              aria-hidden="true"
            >

              <span
                className={
                  mobileStep >= 1
                    ? styles.tapDone
                    : ""
                }
              />

              <span
                className={
                  mobileStep >= 2
                    ? styles.tapDone
                    : ""
                }
              />

              <span
                className={
                  mobileStep >= 3
                    ? styles.tapDone
                    : ""
                }
              />

            </div>


            <span
              className={
                styles.mobileTapHint
              }
            >
              {
                mobileStep === 0
                  ? "1 of 3"
                  : mobileStep === 1
                    ? "2 of 3"
                    : "3 of 3"
              }
            </span>

          </div>


        </div>

      </div>

    </section>

  );

}