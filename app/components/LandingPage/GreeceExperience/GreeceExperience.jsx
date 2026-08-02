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

const sectionRef = useRef(null);
const mobileSectionRef = useRef(null);

const [progress, setProgress] =
useState(0);

const [isMovieMode, setIsMovieMode] =
useState(false);

const [isMobile, setIsMobile] =
useState(false);

// =========================================================
// SCENE CALCULATION
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
// CURRENT SCENE
//
// THIS REMAINS THE ONLY SOURCE OF TRUTH.
//
// Image + text + overlay all use
// the exact same scene.
// =========================================================

const currentScene =
greeceScenes[
calculatedScene
];

// =========================================================
// LOCAL SCENE PROGRESS
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
// SMOOTHSTEP EASING
//
// This controls the camera movement.
//
// Every scene now uses the SAME
// centered cinematic zoom.
// =========================================================

const easedProgress =
sceneProgress *
sceneProgress *
(
3 -
2 * sceneProgress
);

// =========================================================
// CINEMATIC CAMERA
//
// Every image:
//
// 1.000 → 1.055
//
// No X movement.
// No Y movement.
// No scene-specific camera settings.
// =========================================================

const cameraScale =
1 +
(
easedProgress *
0.055
);

// =========================================================
// DESKTOP TEXT ANIMATION
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
// MOBILE DETECTION
// =========================================================

useEffect(() => {


function handleResize() {

  setIsMobile(
    window.innerWidth <= 768
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
// We preload ALL images for the current device.
//
// This remains untouched because it prevents
// the black flash during scene changes.
// =========================================================

useEffect(() => {


const mobile =
  window.innerWidth <= 768;


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
// SCROLL TRACKING
// =========================================================

useEffect(() => {


function handleScroll() {

  const mobile =
    window.innerWidth <= 768;


  const section =
    mobile
      ? mobileSectionRef.current
      : sectionRef.current;


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
      className={styles.label}
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

      <div
        className={
          styles.imageWrapper
        }
      >

        {/* =================================================
            ALL DESKTOP IMAGES STAY MOUNTED

            NEVER REMOVE THIS LOGIC.

            Every image remains in the DOM so there is
            always an image underneath the active image.
        ================================================= */}

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
                      ? `scale(${cameraScale})`
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
      MOBILE STORY
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

      <div
        className={
          styles.mobileImageWrapper
        }
      >

        {/* =================================================
            ALL MOBILE IMAGES STAY MOUNTED

            DO NOT CHANGE THIS.

            This is what keeps the black flash away.
        ================================================= */}

        {greeceScenes.map(
          (scene, index) => {

            const isActive =
              index ===
              calculatedScene;


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
                      ? `scale(${cameraScale})`
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
          MOBILE TEXT
      ================================================= */}

      <div
        key={`mobile-text-${currentScene.id}`}
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
                    calculatedScene
                      ? styles.activeDot
                      : ""
                  }
                `}
              />

            </div>

          )
        )}

      </div>

    </div>

  </div>

</section>

);

}
