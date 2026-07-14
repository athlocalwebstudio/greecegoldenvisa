"use client";

import { useState } from "react";
import { ChevronDown,Menu } from "lucide-react";
import styles from "@/app/styles/navbar.module.css";
import DropdownPanel from "./DropdownPanel";
import MobileMenu from "./MobileMenu";
import { navigation } from "./navigationData";

export default function Navbar() {

  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);


  return (
    <nav
      className={styles.navbar}
      onMouseLeave={() => setActiveMenu(null)}
    >


      {/* LOGO */}
      <div className={styles.logoContainer}>
        <span className={styles.logoGold}>
          GOLDEN VISA
        </span>{" "}
        GREECE
      </div>



      {/* NAVIGATION */}
      <div className={styles.navLinks}>

        {navigation.map((item) => (

          <button
            key={item.id}
            className={styles.navItem}
            onMouseEnter={() =>
              item.hasDropdown
                ? setActiveMenu(item.id)
                : setActiveMenu(null)
            }
          >

            {item.title}

            {item.hasDropdown && (
              <ChevronDown size={14}/>
            )}

          </button>

        ))}


      </div>



      {/* CTA */}
      <button className={styles.cta}>
        Free Consultation
      </button>

      <button
        className={styles.mobileButton}
        onClick={() => setMobileOpen(true)}>
            <Menu size={28} />
      </button>

      {/* DROPDOWN */}
      <DropdownPanel 
        activeMenu={activeMenu}
      />
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}/>


    </nav>
  );
}