"use client";

import Link from "next/link";

import styles from "@/app/styles/navbar.module.css";
import { getNavigation } from "./navigationData";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/LanguageContext";

export default function DropdownPanel({ activeMenu }) {
  const { language, t } = useLanguage();

  const navigation = getNavigation(language);

  const menuItem = navigation.find(
    (item) => item.id === activeMenu
  );

  if (!menuItem) {
    return null;
  }

  const menu = menuItem.dropdown;

  return (
    <div className={styles.dropdownPanel}>

      {/* =========================================
          HEADER
      ========================================= */}

      <div className={styles.dropdownHeader}>

        <h3>
          {t(menu.titleKey)}
        </h3>

        <p>
          {t(menu.descriptionKey)}
        </p>

      </div>

      {/* =========================================
          CARDS
      ========================================= */}

      <div className={styles.dropdownGrid}>

        {menu.cards.map((card) => {

          const Icon = card.icon;

          return (
            <Link
              href={card.href}
              key={card.href}
              className={styles.dropdownCard}
            >

              <div className={styles.cardIcon}>
                <Icon size={24} />
              </div>

              <div className={styles.cardInfo}>

                <h4>
                  {t(card.titleKey)}
                </h4>

                <p>
                  {t(card.descriptionKey)}
                </p>

                <span className={styles.cardAction}>
                  {t("nav.common.explore")}
                  <ArrowRight size={16} />
                </span>

              </div>

            </Link>
          );

        })}

      </div>

      {/* =========================================
          BOTTOM BUTTON
      ========================================= */}

      <button className={styles.dropdownButton}>
        {t(menu.buttonKey)}
      </button>

    </div>
  );
}