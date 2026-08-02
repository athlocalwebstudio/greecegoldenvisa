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

// =========================================================
// SCENE CALCULATION
//
// DESKTOP:
// Scene changes are driven by scroll progress.
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
// CURRENT DESKTOP SCENE
// =========================================================

const desktopScene =
greeceScenes[
calculatedScene
];

// =========================================================
// DESKTOP LOCAL PROGRESS
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
// DESKTOP EASING
//
// Slightly sharper than before.
// =========================================================

const easedProgress =
sceneProgress *
sceneProgress *
(
3 -
2 * sceneProgress
);

// =========================================================
// DESKTOP CAMERA
//
// 1.000 → 1.050
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
// NAVBAR — DESKTOP
// =========================================================

useEffect(() => {


if (isMobile) {
  return;
}


const element =
  sectionRef.current;


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
// NAVBAR — MOBILE / TABLET
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
// IMAGE PRELOADING
//
// Keep this because the cinematic image swaps should
// never expose a black frame.
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


      {/* =================================================
          DESKTOP TEXT
      ================================================= */}

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

      IMPORTANT:

      This is now a REAL scroll-driven story.

      1 scene = 1 viewport.

      ↓ next scene
      ↑ previous scene

      When the user reaches scene 1 and continues
      scrolling upward, they naturally leave the section.
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

            const sceneStart =
              index /
              greeceScenes.length;


            const sceneEnd =
              (
                index + 1
              ) /
              greeceScenes.length;


            const localProgress =
              Math.min(
                Math.max(
                  (
                    (
                      progress -
                      sceneStart
                    ) /
                    (
                      sceneEnd -
                      sceneStart
                    )
                  ),
                  0
                ),
                1
              );


            const isActive =
              progress >= sceneStart &&
              (
                progress < sceneEnd ||
                index ===
                  greeceScenes.length - 1
              );


            const scale =
              1 +
              (
                localProgress *
                0.045
              );


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
                      ? `scale(${scale})`
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

      </div>


      {/* =================================================
          MOBILE TEXT
      ================================================= */}

      <div
        className={
          styles.mobileContent
        }
        key={
          `mobile-content-${calculatedScene}`
        }
      >

        <h3>
          {
            desktopScene.title
          }
        </h3>


        <p>
          {
            desktopScene.description
          }
        </p>

      </div>


      {/* =================================================
          MINIMAL MOBILE INDICATOR
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
                  calculatedScene
                    ? styles.mobileDotActive
                    : ""
                }
              `}
            />

          )
        )}

      </div>

    </div>

  </div>

</section>


);

}
