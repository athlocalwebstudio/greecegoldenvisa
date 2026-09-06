"use client";

import { ArrowRight } from "lucide-react";
import { useConsultation } from "./ConsultationProvider";

export default function ConsultationButton({
  children = "Request a Consultation",
  className = "",
}) {
  const { openConsultation } = useConsultation();

  return (
    <button
      type="button"
      onClick={openConsultation}
      className={className}
    >
      {children}
      <ArrowRight size={16} />
    </button>
  );
}