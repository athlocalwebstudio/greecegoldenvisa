"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, RotateCcw, Building, MapPin, Wallet } from "lucide-react";
import styles from "@/app/styles/quiz.module.css";

const questions = [
  {
    id: 1,
    title: "What is your primary goal for the Greek Golden Visa?",
    icon: <Building size={32} />,
    options: [
      { label: "Acquiring premium property in top locations (Athens, Mykonos, etc.)", value: "premium" },
      { label: "Finding a balanced investment in quieter regions or smaller islands", value: "regional" },
      { label: "Securing residency with the absolute lowest investment possible", value: "budget" }
    ]
  },
  {
    id: 2,
    title: "Are you open to property development or restoration projects?",
    icon: <MapPin size={32} />,
    options: [
      { label: "Yes, I am open to commercial-to-residential conversions or restoring historic buildings", value: "conversion" },
      { label: "No, I prefer a ready-to-move-in residential property", value: "ready" }
    ]
  },
  {
    id: 3,
    title: "What is your expected investment budget?",
    icon: <Wallet size={32} />,
    options: [
      { label: "€250,000 - €400,000", value: "250k" },
      { label: "€400,000 - €800,000", value: "400k" },
      { label: "€800,000+", value: "800k" }
    ]
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (value) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsFinished(false);
  };

  const getResult = () => {
    const goal = answers[1];
    const dev = answers[2];
    const budget = answers[3];

    if (budget === "250k" || goal === "budget" || dev === "conversion") {
      return {
        tier: "€250,000 Investment Route",
        description: "Based on your answers, the €250,000 pathway fits best. This requires investing in commercial-to-residential conversions or restoring listed heritage buildings. Note that these properties cannot be used for short-term rentals (like Airbnb).",
        color: styles.resultBlue
      };
    } else if (budget === "400k" || goal === "regional") {
      return {
        tier: "€400,000 Regional Route",
        description: "You qualify for the €400,000 route. This applies to a single residential property (minimum 120 sq.m) located in regions outside the high-demand zones, such as mainland Greece and smaller islands. Short-term rentals are prohibited.",
        color: styles.resultBlue
      };
    } else {
      return {
        tier: "€800,000 Premium Route",
        description: "Your profile aligns with the €800,000 premium route. This involves purchasing a single residential property (minimum 120 sq.m) in high-demand areas like Attica (Athens), Thessaloniki, Mykonos, Santorini, or Crete. Short-term rentals are strictly prohibited.",
        color: styles.resultBlue
      };
    }
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizCard}>
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.progressHeader}>
                <span>Question {currentStep + 1} of {questions.length}</span>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className={styles.questionHeader}>
                <div className={styles.iconWrapper}>{questions[currentStep].icon}</div>
                <h2>{questions[currentStep].title}</h2>
              </div>

              <div className={styles.optionsList}>
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`${styles.optionBtn} ${
                      answers[questions[currentStep].id] === option.value ? styles.selected : ""
                    }`}
                  >
                    <div className={styles.radioCircle}>
                      {answers[questions[currentStep].id] === option.value && <CheckCircle2 size={16} />}
                    </div>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>

              <div className={styles.footer}>
                <button 
                  onClick={handleNext} 
                  disabled={!answers[questions[currentStep].id]}
                  className={styles.nextBtn}
                >
                  {currentStep === questions.length - 1 ? "See Results" : "Next Step"} <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={styles.resultView}
            >
              <div className={styles.successIcon}><CheckCircle2 size={48} /></div>
              <h3>Your Recommended Pathway</h3>
              <div className={`${styles.resultBox} ${getResult().color}`}>
                <h4>{getResult().tier}</h4>
                <p>{getResult().description}</p>
              </div>
              
              <div className={styles.resultActions}>
                <button className={styles.primaryCta}>Book Free Strategy Call</button>
                <button onClick={handleRestart} className={styles.restartBtn}>
                  <RotateCcw size={16} /> Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}