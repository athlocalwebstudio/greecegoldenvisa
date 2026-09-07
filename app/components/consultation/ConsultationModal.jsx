"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  X,
} from "lucide-react";

import styles from "./ConsultationModal.module.css";

const budgetOptions = [
  {
    value: "250000-400000",
    label: "€250,000 – €400,000",
  },
  {
    value: "400000-800000",
    label: "€400,000 – €800,000",
  },
  {
    value: "800000-plus",
    label: "€800,000+",
  },
  {
    value: "undecided",
    label: "Still exploring",
  },
];

export default function ConsultationModal({
  open,
  onClose,
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  /*
  |--------------------------------------------------------------------------
  | CLOSE WITH ESC
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!open) return;

    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  /*
  |--------------------------------------------------------------------------
  | LOCK BODY SCROLL
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /*
  |--------------------------------------------------------------------------
  | RESET WHEN CLOSED
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setSubmitting(false);
      setError("");
    }
  }, [open]);

  /*
  |--------------------------------------------------------------------------
  | SUBMIT
  |--------------------------------------------------------------------------
  */

 async function handleSubmit(event) {
  event.preventDefault();

  setSubmitting(true);
  setError("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const fields = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    nationality: formData.get("nationality"),
    budget: formData.get("budget"),
    propertyStatus: formData.get("propertyStatus"),
    language: formData.get("language"),
    topics: formData.getAll("topic"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.error ||
          "Something went wrong. Please try again."
      );
    }

    setSubmitted(true);
    form.reset();
  } catch (submitError) {
    setError(
      submitError.message ||
        "Something went wrong. Please try again."
    );
  } finally {
    setSubmitting(false);
  }
}

  /*
  |--------------------------------------------------------------------------
  | DON'T RENDER
  |--------------------------------------------------------------------------
  */

  if (!open) {
    return null;
  }

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        {/* =====================================================
            CLOSE
        ====================================================== */}

        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close consultation window"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* =================================================
                HEADER
            ================================================== */}

            <div className={styles.header}>
              <div className={styles.eyebrow}>
                <span />
                PRIVATE CONSULTATION
              </div>

              <h2 id="consultation-modal-title">
                Let&apos;s discuss
                <br />
                <span>your plans for Greece.</span>
              </h2>

              <p>
                Tell us a few details about your plans and
                Svetlana will get back to you.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              {/* NAME + EMAIL */}

              <div className={styles.formRow}>
                <label className={styles.field}>
                  <span>FULL NAME</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span>EMAIL ADDRESS</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              {/* PHONE + NATIONALITY */}

              <div className={styles.formRow}>
                <label className={styles.field}>
                  <span>PHONE / WHATSAPP</span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+30..."
                    autoComplete="tel"
                  />
                </label>

                <label className={styles.field}>
                  <span>NATIONALITY</span>

                  <input
                    type="text"
                    name="nationality"
                    placeholder="Your nationality"
                    autoComplete="country-name"
                  />
                </label>
              </div>

              {/* BUDGET */}

              <label className={styles.field}>
                <span>INVESTMENT BUDGET</span>

                <select
                  name="budget"
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                  >
                    Select a range
                  </option>

                  {budgetOptions.map((option) => (
                    <option
                      value={option.value}
                      key={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              {/* LANGUAGE */}

              <div className={styles.languageField}>
                <span className={styles.fieldLabel}>
                  PREFERRED LANGUAGE
                </span>

                <div className={styles.languageRow}>
                  <label>
                    <input
                      type="radio"
                      name="language"
                      value="English"
                      defaultChecked
                    />

                    <span>English</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="language"
                      value="Greek"
                    />

                    <span>Greek</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="language"
                      value="Russian"
                    />

                    <span>Russian</span>
                  </label>
                </div>
              </div>

              {/* MESSAGE */}

              <label className={styles.field}>
                <span>MESSAGE</span>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your plans or the question you want answered..."
                />
              </label>

              {/* ERROR */}

              {error && (
                <div
                  className={styles.error}
                  role="alert"
                >
                  {error}
                </div>
              )}

              {/* BOTTOM */}

              <div className={styles.formBottom}>
                <p>
                  By submitting this form, you are asking
                  Greece Golden Visa to respond to your
                  enquiry.
                </p>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={submitting}
                >
                  {submitting
                    ? "Sending..."
                    : "Request Consultation"}

                  {!submitting && (
                    <ArrowRight size={16} />
                  )}
                </button>
              </div>
            </form>
          </>
        ) : (
          /* ===================================================
             SUCCESS
          ==================================================== */

          <div className={styles.success}>
            <div className={styles.successIcon}>
              <Check size={26} />
            </div>

            <div className={styles.eyebrow}>
              ENQUIRY RECEIVED
            </div>

            <h2>
              Thank you.
              <br />
              <span>Let&apos;s talk Greece.</span>
            </h2>

            <p>
              Your consultation request has been received.
              Svetlana will get back to you as soon as
              possible.
            </p>

            <div className={styles.successActions}>
              <a href="tel:+306993229390">
                Call directly
                <ArrowRight size={15} />
              </a>

              <a href="https://wa.me/306993229390">
                WhatsApp
                <ArrowRight size={15} />
              </a>

              <a href="mailto:higolgenvisa@gmail.com">
                Email directly
                <ArrowRight size={15} />
              </a>
            </div>

            <button
              type="button"
              className={styles.doneButton}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}