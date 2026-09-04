
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
import { navigation } from "./navigationData";

export default function MobileMenu({ open, onClose }) {
  const [openSection, setOpenSection] = useState(null);

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
        aria-label="Mobile navigation"
      >
        {/* HEADER */}
        <div className={styles.header}>
          <Link
            href="/"
            className={styles.logoLink}
            onClick={handleNavigation}
            aria-label="Greece Golden Visa — Home"
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

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={24} strokeWidth={1.8} />
          </button>
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
                <span className={styles.menuItemLeft}>
                  <span className={styles.number}>
                    0{index + 1}
                  </span>

                  <span>{item.title}</span>
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
                    {item.dropdown.cards.map((card) => (
                      <Link
                        key={card.title}
                        href={card.href}
                        className={styles.subLink}
                        onClick={handleNavigation}
                      >
                        <span>{card.title}</span>

                        <ArrowRight
                          size={16}
                          strokeWidth={1.7}
                        />
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.bottom}>
          <Link
            href="/team/contact"
            className={styles.cta}
            onClick={handleNavigation}
          >
            <span>Free Consultation</span>

            <ArrowRight
              size={18}
              strokeWidth={1.8}
            />
          </Link>

          <p className={styles.note}>
            Speak directly with a Golden Visa specialist.
          </p>
        </div>
      </aside>
    </>
  );
}
