import { useRef, useState, useEffect } from "react";

// --- Constants ---
const BRAND_ORANGE = "#E06734";

export type Duration = 3 | 6 | 12;

interface HomePricingToggleProps {
  duration: Duration;
  setDuration: (d: Duration) => void;
  className?: string;
}

export default function HomePricingToggle({
  duration,
  setDuration,
  className = "",
}: HomePricingToggleProps) {
  const tabs: { label: string; value: Duration }[] = [
    { label: "3-months", value: 3 },
    { label: "6-months", value: 6 },
    { label: "12-months", value: 12 },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const updatePillPosition = () => {
      if (!containerRef.current) return;

      const activeIndex = tabs.findIndex((t) => t.value === duration);
      const buttons =
        containerRef.current.querySelectorAll<HTMLButtonElement>("[data-tab-btn]");

      if (buttons[activeIndex]) {
        const btn = buttons[activeIndex];
        setPillStyle({
          left: btn.offsetLeft,
          width: btn.offsetWidth,
        });
      }
    };

    // Calculate immediately
    updatePillPosition();

    // Small delay to ensure layout is stable before enabling transitions
    const timer = setTimeout(() => setIsReady(true), 100);

    // Recalculate on window resize
    window.addEventListener("resize", updatePillPosition);

    return () => {
      window.removeEventListener("resize", updatePillPosition);
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: BRAND_ORANGE,
        height: "28px", // Fixed Tiny Height
        borderRadius: "9999px",
        padding: "2px", // Tiny Padding
        minWidth: "auto",
        width: "fit-content",
        fontFamily: "'Roboto', 'Inter', sans-serif",
        userSelect: "none",
        boxSizing: "border-box",
      }}
    >
      {/* Animated Black Pill */}
      <div
        style={{
          position: "absolute",
          backgroundColor: "black",
          height: "24px", // 28px container - 2px top - 2px bottom
          borderRadius: "9999px",
          left: pillStyle.left,
          width: pillStyle.width,
          // Smooth spring-like transition
          transition: isReady
            ? "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
          opacity: pillStyle.width > 0 ? 1 : 0,
          zIndex: 0,
        }}
      />

      {tabs.map((tab) => {
        const isActive = duration === tab.value;
        return (
          <button
            key={tab.value}
            data-tab-btn
            onClick={() => setDuration(tab.value)}
            style={{
              position: "relative",
              flex: 1,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 1,
              fontSize: "11px", // Tiny Font
              fontWeight: "600",
              letterSpacing: "0.5px",
              padding: "0 12px",
              whiteSpace: "nowrap",
              color: isActive ? "white" : "rgba(255, 255, 255, 0.9)",
              transition: "color 0.2s ease",
              outline: "none",
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}