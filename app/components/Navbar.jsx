
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import styles from "@/app/styles/navbar.module.css";
import DropdownPanel from "./DropdownPanel";
import MobileMenu from "./MobileMenu";
import { navigation } from "./navigationData";
import { useNavbar } from "@/app/context/NavbarContext";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { cinematic } = useNavbar();

  const navClass = `${styles.navbar} ${
    cinematic ? styles.cinematic : ""
  }`;

  return (
    <nav
      className={navClass}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* BRAND / HOMEPAGE */}
      <Link
        href="/"
        className={styles.logoLink}
        aria-label="Greece Golden Visa — Home"
      >
        <Image
          src="/logo.jpg"
          alt="Greece Golden Visa"
          fill
          priority
          sizes="220px"
          className={styles.logoImage}
        />
      </Link>

      {/* DESKTOP NAVIGATION */}
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
              <ChevronDown size={14} strokeWidth={1.8} />
            )}
          </button>
        ))}
      </div>

      {/* DESKTOP CTA */}
      <Link
        href="/team/contact"
        className={styles.cta}
      >
        Free Consultation
      </Link>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className={styles.mobileButton}
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={mobileOpen}
      >
        <Menu size={27} strokeWidth={1.8} />
      </button>

      {/* DESKTOP DROPDOWN */}
      <DropdownPanel activeMenu={activeMenu} />

      {/* MOBILE MENU */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </nav>
  );
}
