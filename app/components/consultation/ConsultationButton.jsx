"use client";

import { useConsultation } from "./ConsultationProvider";

export default function ConsultationButton({
  children = "Request a Consultation",
  className = "",
  onClick,
}) {
  const { openConsultation } = useConsultation();

  function handleClick(e) {
    if (onClick) {
      onClick(e);
    }
    openConsultation();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}