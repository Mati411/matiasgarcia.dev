import React from "react";

export default function Logo({
  className = "w-8 h-8",
  strokeWidth = 1.5,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Matías García Logo"
    >
      {/* Corchetes Estructurales (simbolizan código y MG abstracta) 
        El trazo es limpio y angular para un look enterprise moderno.
      */}
      <path
        d="M25 20 H15 V80 H25"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M75 20 H85 V80 H75"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* La "M" de Matías - Geométrica y centrada 
        El pico de la M imita una terminal prompt abstracta
      */}
      <path
        d="M35 80 V20 L50 35 L65 20 V80"
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.5} // Ligeramente más grueso para impacto
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
