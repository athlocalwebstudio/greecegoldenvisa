"use client";

import styles from "@/app/styles/mobileMenu.module.css";
import { navigation } from "./navigationData";
import { useState } from "react";

export default function MobileMenu({ open, onClose }) {

  const [openSection, setOpenSection] = useState(null);  
  function handleSectionClick(id){

    if(openSection === id){
        setOpenSection(null);
    } else {
        setOpenSection(id);
    }

}
  if (!open) return null;


  return (
    <>
      {/* Background overlay */}
      <div
        className={styles.overlay}
        onClick={onClose}
      />


      {/* Side drawer */}
      <div className={styles.drawer}>


        {/* Header */}
        <div className={styles.header}>

          <div className={styles.logo}>
            GOLDEN VISA GREECE
          </div>


          <button
            className={styles.close}
            onClick={onClose}
          >
            ×
          </button>

        </div>

        <div className={styles.menuList}>

            {navigation.map((item)=>(

        <div key={item.id}>

  <button
    className={styles.menuItem}
    onClick={() => handleSectionClick(item.id)}
  >

    <span>{item.title}</span>

    {item.hasDropdown && (
      <span>
        {openSection === item.id ? "−" : "+"}
      </span>
    )}

  </button>


  {item.hasDropdown &&
    openSection === item.id && (

      <div className={styles.subMenu}>

        {item.dropdown.cards.map((card) => (

          <a
            key={card.title}
            href={card.href}
            className={styles.subLink}
          >

            {card.title}

          </a>

        ))}

      </div>

  )}

</div>
))}
    </div>


        {/* CTA */}
        <button className={styles.cta}>
          Free Consultation
        </button>


      </div>
    </>
  );
}