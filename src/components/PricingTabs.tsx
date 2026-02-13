import { useState, useRef, useEffect } from "react";

type Duration = 3 | 6 | 12;

interface PricingTabsProps {
    onDurationChange: (duration: Duration) => void;
    activeDuration?: Duration;
}

export default function PricingTabs({ onDurationChange, activeDuration = 3 }: PricingTabsProps) {
    const tabs: { label: string; value: Duration }[] = [
        { label: "3-months", value: 3 },
        { label: "6-months", value: 6 },
        { label: "12-months", value: 12 },
    ];

    const containerRef = useRef<HTMLDivElement>(null);
    const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;
        const activeIndex = tabs.findIndex(t => t.value === activeDuration);
        const buttons = containerRef.current.querySelectorAll<HTMLButtonElement>("[data-tab-btn]");
        if (buttons[activeIndex]) {
            const btn = buttons[activeIndex];
            setPillStyle({
                left: btn.offsetLeft,
                width: btn.offsetWidth,
            });
        }
        if (!mounted) setMounted(true);
    }, [activeDuration]);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Tab bar */}
            <div
                ref={containerRef}
                style={{
                    display: "flex",
                    position: "relative",
                    background: "#e67e22",
                    borderRadius: 50,
                    padding: 5,
                    width: 280,
                }}
            >
                {/* Animated sliding pill */}
                <div
                    style={{
                        position: "absolute",
                        top: 4,
                        left: pillStyle.left,
                        width: pillStyle.width,
                        height: "calc(100% - 10px)",
                        background: "#000000",
                        borderRadius: 40,
                        transition: mounted
                            ? "left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                            : "none",
                        zIndex: 0,
                    }}
                />
                {tabs.map((tab) => {
                    const isActive = activeDuration === tab.value;
                    return (
                        <button
                            key={tab.value}
                            data-tab-btn
                            onClick={() => onDurationChange(tab.value)}
                            style={{
                                flex: 1,
                                position: "relative",
                                zIndex: 1,
                                border: "none",
                                background: "transparent",
                                color: "#ffffff",
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: isActive ? 700 : 500,
                                fontSize: 10,
                                padding: "7px 0",
                                cursor: "pointer",
                                transition: "font-weight 0.2s ease",
                                outline: "none",
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Keyframe injection */}
            <style>{`
                @keyframes priceFadeIn {
                    0% { opacity: 0; transform: translateY(6px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

// Exact pricing data per duration
interface PlanPricing {
    price: number;
    originalPrice: number;
    savePercent: string;
    suffix: string;
}

interface DurationPricing {
    starter: PlanPricing;
    growth: PlanPricing;
    pro: PlanPricing;
}

// AED pricing data (from reference images)
export function getAEDPricing(duration: Duration): DurationPricing {
    switch (duration) {
        case 3:
            return {
                starter: { price: 94, originalPrice: 250, savePercent: "62.4%", suffix: "/Month" },
                growth: { price: 329, originalPrice: 667, savePercent: "50.7%", suffix: "/Month" },
                pro: { price: 394, originalPrice: 1250, savePercent: "68.5%", suffix: "/Month" },
            };
        case 6:
            return {
                starter: { price: 62.5, originalPrice: 250, savePercent: "75%", suffix: "/Month" },
                growth: { price: 166.5, originalPrice: 667, savePercent: "75%", suffix: "/Month" },
                pro: { price: 241.6, originalPrice: 1250, savePercent: "80.25%", suffix: "/Month" },
            };
        case 12:
            return {
                starter: { price: 499, originalPrice: 3000, savePercent: "83.4%", suffix: "/Year" },
                growth: { price: 1490, originalPrice: 8000, savePercent: "81.4%", suffix: "/Year" },
                pro: { price: 1990, originalPrice: 15000, savePercent: "86.7%", suffix: "/Year" },
            };
    }
}

// THB pricing data (proportional to AED)
export function getTHBPricing(duration: Duration): DurationPricing {
    switch (duration) {
        case 3:
            return {
                starter: { price: 807, originalPrice: 2150, savePercent: "62.4%", suffix: "/Month" },
                growth: { price: 2826, originalPrice: 5730, savePercent: "50.7%", suffix: "/Month" },
                pro: { price: 3384, originalPrice: 10740, savePercent: "68.5%", suffix: "/Month" },
            };
        case 6:
            return {
                starter: { price: 537, originalPrice: 2150, savePercent: "75%", suffix: "/Month" },
                growth: { price: 1430, originalPrice: 5730, savePercent: "75%", suffix: "/Month" },
                pro: { price: 2075, originalPrice: 10740, savePercent: "80.25%", suffix: "/Month" },
            };
        case 12:
            return {
                starter: { price: 4286, originalPrice: 25800, savePercent: "83.4%", suffix: "/Year" },
                growth: { price: 12800, originalPrice: 68760, savePercent: "81.4%", suffix: "/Year" },
                pro: { price: 17100, originalPrice: 128880, savePercent: "86.7%", suffix: "/Year" },
            };
    }
}

export type { Duration, PlanPricing, DurationPricing };

// Animation component for smooth text transitions without layout shift
export function AnimatedText({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const [key, setKey] = useState(0);
    const prevRef = useRef(children);

    if (prevRef.current !== children) {
        prevRef.current = children;
        setKey(k => k + 1);
    }

    return (
        <span
            key={key}
            className={className}
            style={{
                display: "inline-block",
                animation: `textSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`,
                opacity: 0,
                transform: "translateY(20px)",
            }}
        >
            {children}
        </span>
    );
}

// Global styles for the text animation
const style = document.createElement("style");
style.innerHTML = `
    @keyframes textSlideIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
`;
if (typeof document !== 'undefined' && !document.getElementById("text-slide-style")) {
    style.id = "text-slide-style";
    document.head.appendChild(style);
}

