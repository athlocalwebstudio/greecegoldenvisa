"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";

import {
  Playfair_Display,
} from "next/font/google";

import {
  useNavbar,
} from "@/app/context/NavbarContext";

import {
  useLanguage,
} from "@/app/LanguageContext";

import {
  greeceScenes,
} from "./GreeceExperienceData";

import styles from "./GreeceExperience.module.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700",
  ],
});

export default function GreeceExperience() {
  const { t } = useLanguage();

  // =========================================================
  // REFS
  // =========================================================

  const sectionRef = useRef(null);

  const imageCache = useRef(new Map());

  const touchStartX = useRef(0);

  const touchStartY = useRef(0);

  const touchStartTime = useRef(0);

  const transitionTimeoutRef = useRef(null);

  // =========================================================
  // STATE
  // =========================================================

  const [currentScene, setCurrentScene] = useState(0);

  const [direction, setDirection] = useState("next");

  const [isTransitioning, setIsTransitioning] =
    useState(false);

  // =========================================================
  // NAVBAR
  // =========================================================

  const {
    setCinematic,
  } = useNavbar();

  // =========================================================
  // PRELOAD IMAGE
  // =========================================================

  const preloadImage = useCallback(
    (src) => {
      if (!src) {
        return Promise.resolve();
      }

      if (imageCache.current.has(src)) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const img = new window.Image();

        img.decoding = "async";

        img.onload = async () => {
          if (typeof img.decode === "function") {
            try {
              await img.decode();
            } catch {
              // The image is still usable.
            }
          }

          imageCache.current.set(src, true);

          resolve();
        };

        img.onerror = () => {
          resolve();
        };

        img.src = src;
      });
    },
    []
  );

  // =========================================================
  // PRELOAD ALL SCENES
  // =========================================================

  useEffect(() => {
    let cancelled = false;

    async function preloadScenes() {
      for (const scene of greeceScenes) {
        if (cancelled) {
          return;
        }

        await Promise.all([
          preloadImage(scene.image),
          preloadImage(
            scene.mobileImage || scene.image
          ),
        ]);
      }
    }

    preloadScenes();

    return () => {
      cancelled = true;
    };
  }, [preloadImage]);

  // =========================================================
  // NAVBAR CINEMATIC MODE
  // =========================================================

  useEffect(() => {
    const element = sectionRef.current;

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
            "-84px 0px 0px 0px",
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [setCinematic]);

  // =========================================================
  // CLEANUP
  // =========================================================

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(
          transitionTimeoutRef.current
        );
      }
    };
  }, []);

  // =========================================================
  // START TRANSITION
  // =========================================================

  const finishTransition = useCallback(() => {
    if (transitionTimeoutRef.current) {
      clearTimeout(
        transitionTimeoutRef.current
      );
    }

    transitionTimeoutRef.current =
      window.setTimeout(() => {
        setIsTransitioning(false);
      }, 650);
  }, []);

  // =========================================================
  // CHANGE SCENE
  // =========================================================

  const changeScene = useCallback(
    async (nextDirection) => {
      if (isTransitioning) {
        return;
      }

      const totalScenes =
        greeceScenes.length;

      if (totalScenes <= 1) {
        return;
      }

      const nextIndex =
        nextDirection === "next"
          ? currentScene + 1
          : currentScene - 1;

      if (
        nextIndex < 0 ||
        nextIndex >= totalScenes
      ) {
        return;
      }

      const destination =
        greeceScenes[nextIndex];

      if (!destination) {
        return;
      }

      setIsTransitioning(true);

      setDirection(nextDirection);

      await Promise.all([
        preloadImage(
          destination.image
        ),
        preloadImage(
          destination.mobileImage ||
            destination.image
        ),
      ]);

      if (!sectionRef.current) {
        setIsTransitioning(false);
        return;
      }

      setCurrentScene(nextIndex);

      finishTransition();
    },
    [
      currentScene,
      isTransitioning,
      preloadImage,
      finishTransition,
    ]
  );

  // =========================================================
  // DIRECT SCENE NAVIGATION
  // =========================================================

  const goToScene = useCallback(
    async (targetIndex) => {
      if (isTransitioning) {
        return;
      }

      if (
        targetIndex < 0 ||
        targetIndex >= greeceScenes.length ||
        targetIndex === currentScene
      ) {
        return;
      }

      const destination =
        greeceScenes[targetIndex];

      if (!destination) {
        return;
      }

      const nextDirection =
        targetIndex > currentScene
          ? "next"
          : "previous";

      setIsTransitioning(true);

      setDirection(nextDirection);

      await Promise.all([
        preloadImage(
          destination.image
        ),
        preloadImage(
          destination.mobileImage ||
            destination.image
        ),
      ]);

      if (!sectionRef.current) {
        setIsTransitioning(false);
        return;
      }

      setCurrentScene(targetIndex);

      finishTransition();
    },
    [
      currentScene,
      isTransitioning,
      preloadImage,
      finishTransition,
    ]
  );

  // =========================================================
  // KEYBOARD NAVIGATION
  // =========================================================

  useEffect(() => {
    function handleKeyDown(event) {
      const target = event.target;

      if (
        target instanceof
          HTMLInputElement ||
        target instanceof
          HTMLTextAreaElement ||
        target instanceof
          HTMLSelectElement ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.key === "ArrowRight") {
        changeScene("next");
      }

      if (event.key === "ArrowLeft") {
        changeScene("previous");
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [changeScene]);

  // =========================================================
  // TOUCH START
  // =========================================================

  function handleTouchStart(event) {
    if (isTransitioning) {
      return;
    }

    const touch =
      event.touches[0];

    if (!touch) {
      return;
    }

    touchStartX.current =
      touch.clientX;

    touchStartY.current =
      touch.clientY;

    touchStartTime.current =
      Date.now();
  }

  // =========================================================
  // TOUCH END
  // =========================================================

  function handleTouchEnd(event) {
    if (isTransitioning) {
      return;
    }

    const touch =
      event.changedTouches[0];

    if (!touch) {
      return;
    }

    const deltaX =
      touch.clientX -
      touchStartX.current;

    const deltaY =
      touch.clientY -
      touchStartY.current;

    const elapsed =
      Date.now() -
      touchStartTime.current;

    const minimumDistance = 45;

    const isHorizontal =
      Math.abs(deltaX) >
      Math.abs(deltaY) * 1.2;

    const isFastEnough =
      elapsed < 800;

    if (
      Math.abs(deltaX) <
        minimumDistance ||
      !isHorizontal ||
      !isFastEnough
    ) {
      return;
    }

    if (deltaX < 0) {
      changeScene("next");
    } else {
      changeScene("previous");
    }
  }

  // =========================================================
  // TOUCH CANCEL
  // =========================================================

  function handleTouchCancel() {
    touchStartX.current = 0;
    touchStartY.current = 0;
    touchStartTime.current = 0;
  }

  // =========================================================
  // SCENE
  // =========================================================

  const scene =
    greeceScenes[currentScene];

  if (!scene) {
    return null;
  }

  // =========================================================
  // NAVIGATION STATE
  // =========================================================

  const isFirstScene =
    currentScene === 0;

  const isLastScene =
    currentScene ===
    greeceScenes.length - 1;

  const sceneNumber =
    String(currentScene + 1).padStart(
      2,
      "0"
    );

  const totalSceneNumber =
    String(greeceScenes.length).padStart(
      2,
      "0"
    );

  // =========================================================
  // TRANSLATED SCENE CONTENT
  // =========================================================

  const sceneTitle = t(
    `greeceExperience.scenes.${scene.id}.title`
  );

  const sceneDescription = t(
    `greeceExperience.scenes.${scene.id}.description`
  );

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <section
      ref={sectionRef}
      className={`
        ${styles.greeceExperience}
        ${playfair.className}
      `}
    >
      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className={styles.intro}>
        <span className={styles.label}>
          {t("greeceExperience.intro.label")}
        </span>

        <h2>
          {t("greeceExperience.intro.title")}
        </h2>

        <p>
          {t("greeceExperience.intro.description")}
        </p>
      </div>

      {/* =====================================================
          SLIDESHOW
      ===================================================== */}

      <div
        className={
          styles.slideshowShell
        }
      >
        <div
          className={`
            ${styles.slideshow}
            ${
              isTransitioning
                ? styles.transitioning
                : ""
            }
            ${
              direction === "next"
                ? styles.directionNext
                : styles.directionPrevious
            }
          `}
          onTouchStart={
            handleTouchStart
          }
          onTouchEnd={
            handleTouchEnd
          }
          onTouchCancel={
            handleTouchCancel
          }
        >
          {/* =================================================
              IMAGE STAGE
          ================================================= */}

          <div
            className={
              styles.imageStage
            }
          >
            {greeceScenes.map(
              (
                sceneItem,
                index
              ) => {
                const isActive =
                  index ===
                  currentScene;

                const isPrevious =
                  index ===
                  currentScene - 1;

                const isNext =
                  index ===
                  currentScene + 1;

                let imageClass =
                  styles.slideImageInactive;

                if (isActive) {
                  imageClass =
                    styles.slideImageActive;
                }

                if (
                  isTransitioning &&
                  isActive &&
                  direction === "next"
                ) {
                  imageClass =
                    styles.slideImageEnterNext;
                }

                if (
                  isTransitioning &&
                  isActive &&
                  direction ===
                    "previous"
                ) {
                  imageClass =
                    styles.slideImageEnterPrevious;
                }

                const shouldStayMounted =
                  isActive ||
                  isPrevious ||
                  isNext;

                if (
                  !shouldStayMounted
                ) {
                  return null;
                }

                return (
                  <div
                    key={
                      sceneItem.id
                    }
                    className={`
                      ${styles.slideImageWrapper}
                      ${imageClass}
                    `}
                  >
                    {/* =====================================
                        DESKTOP IMAGE
                    ===================================== */}

                    <Image
                      src={
                        sceneItem.image
                      }
                      alt={
                        isActive
                          ? sceneTitle
                          : ""
                      }
                      fill
                      sizes="
                        (min-width: 1800px) calc(100vw - 80px),
                        (min-width: 1200px) calc(100vw - 64px),
                        (min-width: 769px) calc(100vw - 32px),
                        100vw
                      "
                      quality={92}
                      priority={
                        index === 0
                      }
                      className={
                        styles.slideImageDesktop
                      }
                      style={{
                        objectPosition:
                          sceneItem.position,
                      }}
                    />

                    {/* =====================================
                        MOBILE / TABLET IMAGE
                    ===================================== */}

                    <Image
                      src={
                        sceneItem.mobileImage ||
                        sceneItem.image
                      }
                      alt=""
                      fill
                      sizes="100vw"
                      quality={92}
                      priority={
                        index === 0
                      }
                      className={
                        styles.slideImageMobile
                      }
                      style={{
                        objectPosition:
                          sceneItem.position,
                      }}
                    />
                  </div>
                );
              }
            )}

            {/* =================================================
                OVERLAY
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
                      ${scene.overlay.top}
                    ),
                    rgba(
                      0,
                      0,
                      0,
                      ${scene.overlay.bottom}
                    )
                  )
                `,
              }}
            />

            {/* =================================================
                DESKTOP VIGNETTE
            ================================================= */}

            <div
              className={
                styles.vignette
              }
            />

            {/* =================================================
                MOBILE READABILITY
            ================================================= */}

            <div
              className={
                styles.mobileReadability
              }
            />
          </div>

          {/* =================================================
              TEXT
          ================================================= */}

          <div
            key={
              `content-${currentScene}`
            }
            className={
              styles.sceneContent
            }
          >
            <span
              className={
                styles.sceneEyebrow
              }
            >
              {t("greeceExperience.sceneEyebrow")}
            </span>

            <h3>
              {sceneTitle}
            </h3>

            <p>
              {sceneDescription}
            </p>
          </div>

          {/* =================================================
              PREVIOUS
          ================================================= */}

          <button
            type="button"
            className={`
              ${styles.navigationButton}
              ${styles.previousButton}
              ${
                isFirstScene
                  ? styles.disabledButton
                  : ""
              }
            `}
            onClick={() =>
              changeScene(
                "previous"
              )
            }
            disabled={
              isFirstScene ||
              isTransitioning
            }
            aria-label={t(
              "greeceExperience.previous"
            )}
          >
            <span aria-hidden="true">
              ←
            </span>
          </button>

          {/* =================================================
              NEXT
          ================================================= */}

          <button
            type="button"
            className={`
              ${styles.navigationButton}
              ${styles.nextButton}
              ${
                isLastScene
                  ? styles.disabledButton
                  : ""
              }
            `}
            onClick={() =>
              changeScene("next")
            }
            disabled={
              isLastScene ||
              isTransitioning
            }
            aria-label={t(
              "greeceExperience.next"
            )}
          >
            <span aria-hidden="true">
              →
            </span>
          </button>

          {/* =================================================
              BOTTOM NAVIGATION
          ================================================= */}

          <div
            className={
              styles.bottomNavigation
            }
          >
            {/* =================================================
                COUNTER
            ================================================= */}

            <div
              className={
                styles.counter
              }
              aria-live="polite"
            >
              <span>
                {sceneNumber}
              </span>

              <span
                className={
                  styles.counterDivider
                }
              >
                /
              </span>

              <span
                className={
                  styles.counterTotal
                }
              >
                {totalSceneNumber}
              </span>
            </div>

            {/* =================================================
                DOTS
            ================================================= */}

            <div
              className={
                styles.progressDots
              }
            >
              {greeceScenes.map(
                (
                  sceneItem,
                  index
                ) => (
                  <button
                    key={
                      sceneItem.id
                    }
                    type="button"
                    className={`
                      ${styles.progressDot}
                      ${
                        index ===
                        currentScene
                          ? styles.progressDotActive
                          : ""
                      }
                    `}
                    onClick={() =>
                      goToScene(index)
                    }
                    disabled={
                      index ===
                        currentScene ||
                      isTransitioning
                    }
                    aria-label={t(
                      "greeceExperience.goToScene"
                    ).replace(
                      "{number}",
                      String(index + 1)
                    )}
                    aria-current={
                      index ===
                      currentScene
                        ? "true"
                        : undefined
                    }
                  />
                )
              )}
            </div>

            {/* =================================================
                SWIPE HINT
            ================================================= */}

            <span
              className={
                styles.swipeHint
              }
            >
              {t("greeceExperience.swipe")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}