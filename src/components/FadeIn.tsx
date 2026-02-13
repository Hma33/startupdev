
import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
    stagger?: number; // Delay between children animations
}

export default function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.5,
    direction = "up",
    fullWidth = false,
    stagger = 0,
    ...props
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const getHiddenState = () => {
        switch (direction) {
            case "up":
                return { opacity: 0, y: 20 };
            case "down":
                return { opacity: 0, y: -20 };
            case "left":
                return { opacity: 0, x: 20 };
            case "right":
                return { opacity: 0, x: -20 };
            case "none":
            default:
                return { opacity: 0 };
        }
    };

    const variants: Variants = {
        hidden: getHiddenState(),
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom ease for smooth feel
                staggerChildren: stagger,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={cn(fullWidth ? "w-full" : "", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
