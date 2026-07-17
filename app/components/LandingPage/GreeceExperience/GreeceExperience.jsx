"use client";

import { useEffect, useRef, useState } from "react";
import { useNavbar } from "@/app/context/NavbarContext";
import Image from "next/image";
import { greeceScenes } from "./GreeceExperienceData";
import styles from "./GreeceExperience.module.css";

export default function GreeceExperience() {

  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const activeScene = Math.min(
  Math.floor(progress * greeceScenes.length),
  greeceScenes.length - 1
);

const currentScene = greeceScenes[activeScene];

  const { setCinematic } = useNavbar();


  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        setCinematic(entry.isIntersecting);

      },

      {
        threshold:0.2
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


  return (
   <section
  ref={sectionRef}
  className={styles.greeceExperience}
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

    <div className={styles.storyWrapper}>

  <div className={styles.stickyStage}>

    <Image
 src={currentScene.image}
 alt={currentScene.title}
 fill
 className={styles.image}
 priority
/>


    <div className={styles.overlay} />


    <div className={styles.sceneContent}>

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