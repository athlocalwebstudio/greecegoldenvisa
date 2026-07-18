"use client";

import { useEffect, useRef, useState } from "react";
import { useNavbar } from "@/app/context/NavbarContext";
import Image from "next/image";
import { greeceScenes } from "./GreeceExperienceData";
import styles from "./GreeceExperience.module.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets:["latin"],
  weight:["400","500","600","700"],
});

export default function GreeceExperience() {

  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [previousScene, setPreviousScene] = useState(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const calculatedScene = Math.min(
  Math.floor(progress * greeceScenes.length),
  greeceScenes.length - 1
);


useEffect(() => {

  if(calculatedScene !== activeSceneIndex){

    setPreviousScene(
      greeceScenes[activeSceneIndex]
    );


    setActiveSceneIndex(calculatedScene);


    const timer = setTimeout(() => {

      setPreviousScene(null);

    },800);


    return () => clearTimeout(timer);

  }


},[
 calculatedScene,
 activeSceneIndex
]);


const currentScene = greeceScenes[activeSceneIndex];
const sceneProgress =
(progress * greeceScenes.length) % 1;

const textEnter = Math.min(
  Math.max((sceneProgress - 0.02) / 0.10, 0),
  1
);


const textExit = Math.min(
  Math.max((sceneProgress - 0.85) / 0.15, 0),
  1
);


const textOpacity = textEnter * (1 - textExit);


const textTranslate =
15 - textEnter * 15 - textExit * 25;




  const { setCinematic } = useNavbar();


  useEffect(() => {

   const observer = new IntersectionObserver(
  ([entry]) => {
    setCinematic(entry.isIntersecting);
  },
  {
  threshold:0.1,
  rootMargin:"-84px 0px 0px 0px"
  }
);


    if(sectionRef.current){

      observer.observe(sectionRef.current);

    }


    return () => observer.disconnect();


  }, [setCinematic]);

  useEffect(() => {

  function handleScroll(){

    if(!sectionRef.current) return;


    const section = sectionRef.current;

    const rect = section.getBoundingClientRect();

    const scrollHeight = section.offsetHeight - window.innerHeight;


    const scrolled = -rect.top;


    const value = Math.min(
      Math.max(scrolled / scrollHeight,0),
     1
    );


    setProgress(value);

  }


  window.addEventListener(
    "scroll",
    handleScroll
  );


  return () => 
    window.removeEventListener(
      "scroll",
      handleScroll
    );


}, []);

const easedProgress =
sceneProgress * sceneProgress * (3 - 2 * sceneProgress);


  return (
<section
  className={`${styles.greeceExperience} ${playfair.className}`}
>


      {/* INTRO */}

      <div className={styles.intro}>

        <span className={styles.label}>
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



      {/* SCROLL STORY AREA */}

    <div 
  ref={sectionRef}
  className={styles.storyWrapper}
>

  <div className={styles.stickyStage}>
<div className={styles.imageWrapper}>


{previousScene && (

<Image

src={previousScene.image}

alt=""

fill

quality={100}

className={`${styles.image} ${styles.previousImage}`}

style={{
objectPosition:previousScene.position
}}

/>

)}



<Image

key={currentScene.id}

src={currentScene.image}

alt={currentScene.title}

fill

quality={100}

className={`${styles.image} ${styles.currentImage}`}

style={{
  objectPosition: currentScene.position,

  transform:`
scale(${1 + easedProgress * 0.08})
translateY(${easedProgress * -35}px)
`
}}

/>


</div>


    <div 
className={`${styles.overlay} ${
 currentScene.overlay === "light"
 ? styles.lightOverlay
 : styles.darkOverlay
}`}
/>


<div 
key={currentScene.id}
className={styles.sceneContent}
style={{

opacity:textOpacity,

transform:`
translate(-50%, calc(-50% + ${textTranslate}px))
`,

filter:
`blur(${10 - textOpacity * 10}px)`

}}
>

     <h3>
  {currentScene.title}
</h3>

<p>
  {currentScene.description}
</p>

    </div>


  </div>

</div>



    </section>
  );
}