"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  X,
} from "lucide-react";

import styles from "@/app/styles/mobileMenu.module.css";
import { getNavigation } from "./navigationData";
import { useLanguage } from "@/app/LanguageContext";

export default function MobileMenu({ open, onClose }) {
  const [openSection, setOpenSection] = useState(null);

  const {
    language,
    toggleLanguage,
    t,
  } = useLanguage();

  const navigation = getNavigation(language);

  function handleSectionClick(id) {
    setOpenSection((current) =>
      current === id ? null : id
    );
  }

  function handleNavigation() {
    setOpenSection(null);
    onClose();
  }

  if (!open) {
    return null;
  }

  return (
    <>
      <div
        className={styles.overlay}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={styles.drawer}
        aria-label={t("nav.common.mobileNavigation")}
      >
        {/* HEADER */}

        <div className={styles.header}>
          <Link
            href={`/${language}`}
            className={styles.logoLink}
            onClick={handleNavigation}
            aria-label={t("nav.common.home")}
          >
            <Image
              src="/logo.jpg"
              alt="Greece Golden Visa"
              fill
              priority
              sizes="190px"
              className={styles.logo}
            />
          </Link>

          <div className={styles.headerActions}>
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

              <span
                className={styles.languageDivider}
              >
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

            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label={t(
                "nav.common.closeNavigation"
              )}
            >
              <X
                size={24}
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>

        {/* NAVIGATION */}

        <div className={styles.menuList}>
          {navigation.map((item, index) => (
            <div
              key={item.id}
              className={styles.menuSection}
            >
              <button
                type="button"
                className={styles.menuItem}
                onClick={() =>
                  item.hasDropdown
                    ? handleSectionClick(item.id)
                    : handleNavigation()
                }
                aria-expanded={
                  item.hasDropdown
                    ? openSection === item.id
                    : undefined
                }
              >
                <span
                  className={styles.menuItemLeft}
                >
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>
                    {t(item.titleKey)}
                  </span>
                </span>

                {item.hasDropdown && (
                  <ChevronDown
                    size={18}
                    strokeWidth={1.7}
                    className={
                      openSection === item.id
                        ? styles.chevronOpen
                        : styles.chevron
                    }
                  />
                )}
              </button>

              {item.hasDropdown &&
                openSection === item.id && (
                  <div className={styles.subMenu}>
                    {item.dropdown.cards.map(
                      (card) => (
                        <Link
                          key={card.titleKey}
                          href={card.href}
                          className={styles.subLink}
                          onClick={
                            handleNavigation
                          }
                        >
                          <span>
                            {t(card.titleKey)}
                          </span>

                          <ArrowRight
                            size={16}
                            strokeWidth={1.7}
                          />
                        </Link>
                      )
                    )}
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className={styles.bottom}>
          <Link
            href={`/${language}/team/contact`}
            className={styles.cta}
            onClick={handleNavigation}
          >
            <span>
              {t(
                "nav.common.freeConsultation"
              )}
            </span>

            <ArrowRight
              size={18}
              strokeWidth={1.8}
            />
          </Link>

          <p className={styles.note}>
            {t(
              "nav.common.specialistNote"
            )}
          </p>
        </div>
      </aside>
    </>
  );
}