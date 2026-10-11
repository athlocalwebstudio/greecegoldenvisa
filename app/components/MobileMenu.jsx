"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import styles from "@/app/styles/mobileMenu.module.css";
import { getNavigation } from "./navigationData";
import { useLanguage } from "@/app/LanguageContext";
import ConsultationButton from "./consultation/ConsultationButton";

export default function MobileMenu({ open, onClose }) {
  const [openSection, setOpenSection] = useState(null);

  const { language, toggleLanguage, t } = useLanguage();
  const navigation = getNavigation(language);

  function handleSectionClick(id) {
    setOpenSection((current) => (current === id ? null : id));
  }

  function handleNavigation() {
    setOpenSection(null);
    onClose();
  }

  return (
    <div
      className={`${styles.menuOverlay} ${
        open ? styles.menuOverlayOpen : ""
      }`}
      aria-hidden={!open}
    >
      <div className={styles.menuAmbient} aria-hidden="true">
        <div className={styles.ambientWord}>GOLDEN VISA</div>
        <div className={styles.ambientMonogram}>
          <span>GV</span>
        </div>
      </div>

      <nav
        className={styles.navigation}
        aria-label={t("nav.common.mobileNavigation")}
      >
        <div className={styles.navigationTop}>
          <div className={styles.navigationIntro}>
            <span className={styles.introLine} />
            <div className={styles.introText}>
              <span>GREECE RESIDENCY & REAL ESTATE</span>
              <small>Official Investment & Legal Guidance</small>
            </div>
          </div>
          <span className={styles.location}>ATHENS, GREECE</span>
        </div>

        <div className={styles.navigationLabel}>
          <span>DIRECTORY / INDEX</span>
          <span>01 — 05</span>
        </div>

        <div className={styles.navigationLinks}>
          {navigation.map((item, index) => {
            const isExpanded = openSection === item.id;
            const itemNumber = String(index + 1).padStart(2, "0");

            if (item.hasDropdown) {
              return (
                <div
                  key={item.id}
                  className={styles.navigationGroup}
                  style={{ "--delay": `${index * 60}ms` }}
                >
                  <div className={styles.expandableRow}>
                    <button
                      type="button"
                      className={styles.navLinkButton}
                      onClick={() => handleSectionClick(item.id)}
                      aria-expanded={isExpanded}
                    >
                      <span className={styles.navNumber}>{itemNumber}</span>
                      <span className={styles.navLabel}>
                        {t(item.titleKey)}
                      </span>
                      <span
                        className={`${styles.navArrow} ${
                          isExpanded ? styles.navArrowOpen : ""
                        }`}
                      >
                        ↗
                      </span>
                    </button>
                  </div>

                  <div
                    className={`${styles.submenu} ${
                      isExpanded ? styles.submenuOpen : ""
                    }`}
                  >
                    <div className={styles.submenuInner}>
                      <div className={styles.submenuHeader}>
                        <span>{t(item.dropdown?.titleKey) || "SECTIONS"}</span>
                        <span>{item.dropdown?.cards?.length || 0} ROUTES</span>
                      </div>

                      {item.dropdown?.cards?.map((card, cardIndex) => (
                        <Link
                          key={card.titleKey}
                          href={card.href}
                          className={styles.submenuLink}
                          onClick={handleNavigation}
                        >
                          <span className={styles.submenuNumber}>
                            {itemNumber}.{cardIndex + 1}
                          </span>
                          <span className={styles.submenuLabel}>
                            {t(card.titleKey)}
                          </span>
                          <span className={styles.submenuArrow}>→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                href={`/${language}`}
                className={styles.navLink}
                style={{ "--delay": `${index * 60}ms` }}
                onClick={handleNavigation}
              >
                <span className={styles.navNumber}>{itemNumber}</span>
                <span className={styles.navLabel}>{t(item.titleKey)}</span>
                <span className={styles.navArrow}>↗</span>
              </Link>
            );
          })}
        </div>

        <div className={styles.menuBottom}>
          <div className={styles.bottomMeta}>
            <span>START YOUR RESIDENCY JOURNEY</span>
            <span>FROM €250K</span>
          </div>

          <ConsultationButton
            className={styles.appointment}
            onClick={handleNavigation}
          >
            <span className={styles.appointmentText}>
              {t("nav.common.freeConsultation") || "Book Free Consultation"}
            </span>
            <span className={styles.appointmentCircle}>
              <ArrowRight size={17} strokeWidth={1.8} />
            </span>
          </ConsultationButton>

          <div className={styles.menuFooter}>
            <span className={styles.footerLabel}>LANGUAGE</span>
            <div className={styles.footerLanguages}>
              <button
                type="button"
                onClick={toggleLanguage}
                className={`${styles.footerLanguage} ${
                  language === "en" ? styles.footerLanguageActive : ""
                }`}
              >
                ENGLISH (EN)
              </button>
              <span>/</span>
              <button
                type="button"
                onClick={toggleLanguage}
                className={`${styles.footerLanguage} ${
                  language === "ru" ? styles.footerLanguageActive : ""
                }`}
              >
                РУССКИЙ (RU)
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}