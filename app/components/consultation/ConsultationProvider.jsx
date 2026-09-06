"use client";

import { createContext, useContext, useState } from "react";
import ConsultationModal from "./ConsultationModal";

const ConsultationContext = createContext(null);

export function ConsultationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function openConsultation() {
    setIsOpen(true);
  }

  function closeConsultation() {
    setIsOpen(false);
  }

  return (
    <ConsultationContext.Provider
      value={{
        isOpen,
        openConsultation,
        closeConsultation,
      }}
    >
      {children}

      <ConsultationModal
        open={isOpen}
        onClose={closeConsultation}
      />
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);

  if (!context) {
    throw new Error(
      "useConsultation must be used inside ConsultationProvider"
    );
  }

  return context;
}