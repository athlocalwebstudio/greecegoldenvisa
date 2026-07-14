"use client";

import styles from "./floatingCards.module.css";
import {
  Compass,
  MapPin,
  ArrowRight,
  Clock,
  CheckCircle2
} from "lucide-react";


export default function FloatingCards() {


return (

<div className={styles.floatingCards}>


<div className={`${styles.widget} ${styles.routeWidget}`}>


<div className={styles.widgetHeader}>


<div className={styles.icon}>
<Compass size={18}/>
</div>


<div>

<h3>
Find Your Route
</h3>

<span className={styles.status}>
60 second assessment
</span>

</div>


</div>



<p className={styles.description}>
Find the investment option that matches your goals.
</p>



<div className={styles.infoRow}>


<div className={styles.infoItem}>
<Clock size={12}/>
60 sec
</div>


<div className={styles.infoItem}>
<CheckCircle2 size={12}/>
Personalized
</div>


</div>



<button className={styles.action}>

Start Assessment

<ArrowRight size={13}/>

</button>



</div>





<div className={`${styles.widget} ${styles.mapWidget}`}>


<div className={styles.widgetHeader}>


<div className={styles.icon}>
<MapPin size={18}/>
</div>


<div>

<h3>
Explore Greece
</h3>

<span className={styles.status}>
Investment Map
</span>

</div>


</div>




<div className={styles.miniMap}>


<div className={`${styles.mapDot} ${styles.athens}`}></div>

<div className={`${styles.mapDot} ${styles.islands}`}></div>

<div className={`${styles.mapDot} ${styles.crete}`}></div>



</div>



<button className={styles.action}>

Explore Map

<ArrowRight size={13}/>

</button>



</div>


</div>

);

}