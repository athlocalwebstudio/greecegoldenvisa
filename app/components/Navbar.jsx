"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import styles from "@/app/styles/navbar.module.css";
import DropdownPanel from "./DropdownPanel";
import MobileMenu from "./MobileMenu";
import { getNavigation } from "./navigationData";
import { useNavbar } from "@/app/context/NavbarContext";
import ConsultationButton from "./consultation/ConsultationButton";
import { useLanguage } from "@/app/LanguageContext";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { cinematic } = useNavbar();
  const { language, toggleLanguage, t } = useLanguage();

  const navigation = getNavigation(language);

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
        href={`/${language}`}
        className={styles.logoLink}
        aria-label={t("nav.common.home")}
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

      {/* LANGUAGE TOGGLE */}
      <button
        type="button"
        className={styles.languageToggle}
        onClick={toggleLanguage}
        aria-label={
          language === "en"
            ? t("nav.common.switchToRussian")
            : t("nav.common.switchToEnglish")
        }
        title={
          language === "en"
            ? t("nav.common.switchToRussian")
            : t("nav.common.switchToEnglish")
        }
      >
        <span
          className={
            language === "en"
              ? styles.languageActive
              : styles.languageOption
          }
        >
          EN
        </span>

        <span className={styles.languageDivider}>
          /
        </span>

        <span
          className={
            language === "ru"
              ? styles.languageActive
              : styles.languageOption
          }
        >
          RU
        </span>
      </button>

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
            {t(item.titleKey)}

            {item.hasDropdown && (
              <ChevronDown
                size={14}
                strokeWidth={1.8}
              />
            )}
          </button>
        ))}
      </div>

      {/* DESKTOP CTA */}
      <ConsultationButton className={styles.cta}>
        {t("nav.common.freeConsultation")}
      </ConsultationButton>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className={styles.mobileButton}
        onClick={() => setMobileOpen(true)}
        aria-label={t("nav.common.openNavigation")}
        aria-expanded={mobileOpen}
      >
        <Menu
          size={27}
          strokeWidth={1.8}
        />
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