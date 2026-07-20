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

  subsets:["latin"],

  weight:[
    "400",
    "500",
    "600",
    "700"
  ],

});



export default function GreeceExperience(){



const sectionRef = useRef(null);
const [progress,setProgress] = useState(0);
const [activeSceneIndex,setActiveSceneIndex] = useState(0);
const [previousScene,setPreviousScene] = useState(null);
const [isTransitioning,setIsTransitioning] = useState(false);


/*
-----------------------------------
SCENE CALCULATION
-----------------------------------
*/


const calculatedScene = Math.min(

Math.floor(
progress * greeceScenes.length
),

greeceScenes.length - 1

);






/*
-----------------------------------
SCENE CHANGE WITH CROSSFADE
-----------------------------------
*/


useEffect(()=>{


if(
calculatedScene !== activeSceneIndex
){

setPreviousScene(
greeceScenes[activeSceneIndex]
);

setIsTransitioning(true);


setActiveSceneIndex(
calculatedScene
);


const timer=setTimeout(()=>{

setPreviousScene(null);

setIsTransitioning(false);

},900);


return ()=>clearTimeout(timer);

}},[
calculatedScene,
activeSceneIndex
]);






const currentScene =
greeceScenes[activeSceneIndex];





/*
-----------------------------------
LOCAL SCENE PROGRESS
-----------------------------------
*/


const sceneProgress =
(
progress *
greeceScenes.length
)
%
1;




const easedProgress =
sceneProgress *
sceneProgress *
(
3 -
2 * sceneProgress
);





/*
-----------------------------------
TEXT ANIMATION
-----------------------------------
*/


const textEnter = Math.min(

Math.max(

(sceneProgress - 0.05)
/0.15,

0

),

1

);




const textExit = Math.min(

Math.max(

(sceneProgress - 0.85)
/0.15,

0

),

1

);




const textOpacity =
textEnter *
(1-textExit);





const textTranslate =
15 -
(textEnter * 15)
-
(textExit * 25);






const {
setCinematic
}=useNavbar();






/*
-----------------------------------
NAVBAR CINEMATIC MODE
-----------------------------------
*/


useEffect(()=>{


const observer =
new IntersectionObserver(

([entry])=>{


setCinematic(
entry.isIntersecting
);


},

{

threshold:0.1,

rootMargin:"-84px 0px 0px 0px"

}

);




if(sectionRef.current){

observer.observe(
sectionRef.current
);

}




return ()=>observer.disconnect();



},[
setCinematic
]);





/*
-----------------------------------
SCROLL TRACKING
-----------------------------------
*/


useEffect(()=>{


function handleScroll(){


if(!sectionRef.current)
return;



const section =
sectionRef.current;



const rect =
section.getBoundingClientRect();



const scrollHeight =
section.offsetHeight -
window.innerHeight;



const scrolled =
-rect.top;




const value =
Math.min(

Math.max(

scrolled / scrollHeight,

0

),

1

);



setProgress(value);



}



window.addEventListener(
"scroll",
handleScroll
);




return ()=>{


window.removeEventListener(
"scroll",
handleScroll
);


};



},[]);
return (

<section

className={
`${styles.greeceExperience} ${playfair.className}`
}

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







{/* STORY AREA */}


<div

ref={sectionRef}

className={styles.storyWrapper}

>



<div className={styles.stickyStage}>




<div className={styles.imageWrapper}>


{/* PREVIOUS IMAGE */}


{
previousScene && (

<Image


src={previousScene.image}


alt=""


fill


quality={100}


className={
`${styles.image} ${styles.previousImage}`
}



style={{


objectPosition:
previousScene.position,
opacity:
isTransitioning ? 0.8 : 0,


}}



/>

)

}





{/* CURRENT IMAGE */}



<Image


key={currentScene.id}


src={currentScene.image}


alt={currentScene.title}


fill


quality={100}


className={
`${styles.image} ${styles.currentImage}`
}



style={{


objectPosition:
currentScene.position,
opacity:
isTransitioning ? 1 : 1,



transform:

`
scale(
${
1 +
(
easedProgress *
currentScene.camera.scale
)
}
)

translateY(

${
easedProgress *
currentScene.camera.moveY
}px

)

`

}}


/>



</div>







{/* OVERLAY */}



<div


className={styles.overlay}



style={{


background:

`

linear-gradient(

180deg,

rgba(
15,44,89,
${currentScene.overlay.top}
),

rgba(
0,0,0,
${currentScene.overlay.bottom}
)

)

`

}}



/>








{/* TEXT */}



<div


className={styles.sceneContent}



style={{


"--text-top":
currentScene.text.top,


"--text-width":
currentScene.text.width,


"--text-align":
currentScene.text.align,



opacity:textOpacity,



transform:

`
translate(

-50%,

calc(

-50% + ${textTranslate}px

)

)

`



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