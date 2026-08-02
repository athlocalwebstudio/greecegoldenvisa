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
// SCENE CALCULATION
//
// ONE SOURCE OF TRUTH FOR BOTH DESKTOP + MOBILE.
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
// CINEMATIC EASING
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
// MOBILE / TABLET SCROLL TRACKING
//
// THIS WAS THE MISSING PIECE.
//
// The mobile story is physically 4 viewport heights.
//
// Progress:
//
// 0.00 → scene 1
// 0.25 → scene 2
// 0.50 → scene 3
// 0.75 → scene 4
// 1.00 → end of story
// =========================================================

useEffect(() => {


function handleMobileScroll() {

  if (
    window.innerWidth > 1024
  ) {

    return;

  }


  const section =
    mobileSectionRef.current;


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


handleMobileScroll();


window.addEventListener(
  "scroll",
  handleMobileScroll,
  {
    passive: true
  }
);


window.addEventListener(
  "resize",
  handleMobileScroll
);


return () => {

  window.removeEventListener(
    "scroll",
    handleMobileScroll
  );


  window.removeEventListener(
    "resize",
    handleMobileScroll
  );

};


}, []);

// =========================================================
// BUTTON → NEXT SCENE
//
// This does NOT replace scrolling.
//
// It simply gives the user a second way
// to advance through the cinematic story.
// =========================================================

function handleNextScene() {


const section =
  mobileSectionRef.current;


if (!section) {

  return;

}


const currentProgress =
  progress;


const totalScenes =
  greeceScenes.length;


const currentIndex =
  Math.min(
    Math.floor(
      currentProgress *
      totalScenes
    ),
    totalScenes - 1
  );


const nextIndex =
  Math.min(
    currentIndex + 1,
    totalScenes - 1
  );


if (
  nextIndex === currentIndex
) {

  const nextSection =
    section.nextElementSibling;


  if (nextSection) {

    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }


  return;

}


const sectionTop =
  section.getBoundingClientRect().top +
  window.scrollY;


const target =
  sectionTop +
  (
    nextIndex *
    window.innerHeight
  );


window.scrollTo({
  top: target,
  behavior: "smooth"
});


}

// =========================================================
// MOBILE IMAGE SCALE
// =========================================================

const mobileSceneStart =
calculatedScene /
greeceScenes.length;

const mobileSceneEnd =
(
calculatedScene + 1
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
// MOBILE SCENE POSITION
// =========================================================

const mobileSceneNumber =
calculatedScene + 1;

const isLastMobileScene =
calculatedScene ===
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
          `mobile-content-${calculatedScene}`
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
          MINIMAL SCENE INDICATOR
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


      {/* =================================================
          MINIMAL NEXT BUTTON
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
            : `Go to scene ${mobileSceneNumber + 1}`
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
