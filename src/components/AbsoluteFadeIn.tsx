
import { motion, HTMLMotionProps } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface AbsoluteFadeInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    triggerTop: string | number; // e.g. "715px" or 715
    triggerHeight: string | number;
    className?: string;
    delay?: number;
    duration?: number;
}

export default function AbsoluteFadeIn({
    children,
    triggerTop,
    triggerHeight,
    className,
    delay = 0,
    duration = 0.5,
    ...props
}: AbsoluteFadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <>
            <div
                ref={ref}
                className="absolute w-full pointer-events-none left-0 z-[-1]"
                style={{ top: triggerTop, height: triggerHeight }}
            />
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration,
                            delay,
                            ease: [0.21, 0.47, 0.32, 0.98]
                        }
                    }
                }}
                className={cn(className)} // Typically empty or static
                style={{ position: 'static' }} // Explicitly static to ensure it sits at 0,0 of parent
                {...props}
            >
                {children}
            </motion.div>
        </>
    );
}
