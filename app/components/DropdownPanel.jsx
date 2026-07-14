"use client";

import styles from "@/app/styles/navbar.module.css";
import { navigation } from "./navigationData";

import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Home,
  Building2,
  Landmark,
  Scale,
  Sun,
  Globe2,
  TrendingUp,
  HeartHandshake,
  BookOpen,
  FileCheck,
  Files,
  CircleHelp,
  ArrowRight,
} from "lucide-react";




export default function DropdownPanel({ activeMenu }) {

  const menuItem = navigation.find(
  (item) => item.id === activeMenu
);


if (!menuItem) {
  return null;
}


const menu = menuItem?.dropdown;


  return (

    <div className={styles.dropdownPanel}>

      <div className={styles.dropdownHeader}>

        <h3>
          {menu.title}
        </h3>

        <p>
          {menu.description}
        </p>

      </div>



      <div className={styles.dropdownGrid}>

        {menu.cards.map((card)=>{

          const Icon = card.icon;


          return (

            <a
              href="#"
              key={card.title}
              className={styles.dropdownCard}
            >

              <div className={styles.cardIcon}>
                <Icon size={24}/>
              </div>


              <div className={styles.cardInfo}>

                <h4>
                  {card.title}
                </h4>

                <p>
                  {card.description}
                </p>


                <span className={styles.cardAction}>
                  Explore
                  <ArrowRight size={16}/>
                </span>

              </div>


            </a>

          );

        })}

      </div>



      <button className={styles.dropdownButton}>
        {menu.button}
      </button>


    </div>

  );
}