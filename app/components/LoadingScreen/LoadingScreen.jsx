"use client";

import styles from "./LoadingScreen.module.css";

export default function LoadingScreen(){

return(

<div className={styles.loader}>

<div className={styles.logo}>
G
</div>


<div className={styles.circle}></div>


</div>

);

}