"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

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
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className={navClass}
        onMouseLeave={() => setActiveMenu(null)}
      >
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

        <button
          type="button"
          className={styles.languageToggle}
          onClick={toggleLanguage}
          aria-label={
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

          <span className={styles.languageDivider}>/</span>

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

        <ConsultationButton className={styles.cta}>
          {t("nav.common.freeConsultation")}
        </ConsultationButton>

        <DropdownPanel activeMenu={activeMenu} />
      </nav>

      {/* MOBILE & TABLET HEADER */}
      <header className={styles.mobileHeader}>
        <div className={styles.headerInner}>
          <div className={styles.leftControls}>
            <Link
              href={`/${language}`}
              className={styles.homeButton}
              aria-label={t("nav.common.home")}
            >
              <div className={styles.mobileLogoWrapper}>
                <Image
                  src="/logo.jpg"
                  alt="Greece Golden Visa"
                  fill
                  sizes="120px"
                  className={styles.mobileLogoImage}
                />
              </div>
            </Link>

            <div className={styles.languageSwitcher}>
              <button
                type="button"
                onClick={toggleLanguage}
                className={`${styles.language} ${
                  language === "en" ? styles.languageActive : ""
                }`}
              >
                EN
              </button>
              <span className={styles.languageDivider}>/</span>
              <button
                type="button"
                onClick={toggleLanguage}
                className={`${styles.language} ${
                  language === "ru" ? styles.languageActive : ""
                }`}
              >
                RU
              </button>
            </div>
          </div>

          <button
            type="button"
            className={`${styles.menuButton} ${
              mobileOpen ? styles.menuButtonOpen : ""
            }`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={
              mobileOpen
                ? t("nav.common.closeNavigation")
                : t("nav.common.openNavigation")
            }
            aria-expanded={mobileOpen}
          >
            <span>{mobileOpen ? "CLOSE" : "MENU"}</span>
            <span
              className={`${styles.menuIcon} ${
                mobileOpen ? styles.menuIconOpen : ""
              }`}
            >
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}