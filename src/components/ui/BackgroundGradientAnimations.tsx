"use client";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx"; 

interface BackgroundGradientProps {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string; s
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    pointerColor?: string;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    interactive?: boolean;
    containerClassName?: string;
}

export const BackgroundGradientAnimation: React.FC<BackgroundGradientProps> = ({
    gradientBackgroundStart = "#111111",
    gradientBackgroundEnd = "#222222",
    firstColor = "rgba(255, 0, 0, 0.5)",
    secondColor = "rgba(0, 255, 0, 0.5)",
    thirdColor = "rgba(0, 0, 255, 0.5)",
    fourthColor = "rgba(255, 255, 0, 0.5)",
    fifthColor = "rgba(255, 0, 255, 0.5)",
    pointerColor = "rgba(255, 255, 255, 0.8)",
    size = "100px",
    blendingValue = "multiply",
    children,
    className,
    interactive = false,
    containerClassName,
}) => {
    const interactiveRef = useRef<HTMLDivElement | null>(null);
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const [tgX, setTgX] = useState(0);
    const [tgY, setTgY] = useState(0);

    // Handle mouse movement
    useEffect(() => {
        if (!interactive) return;

        const handleMouseMove = (event: MouseEvent) => {
            setTgX(event.clientX);
            setTgY(event.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [interactive]);

    // Smooth movement effect
    useEffect(() => {
        if (!interactiveRef.current) return;

        function move() {
            setCurX((prev) => prev + (tgX - prev) / 20);
            setCurY((prev) => prev + (tgY - prev) / 20);
            if (interactiveRef.current) {
                interactiveRef.current.style.transform = `translate(${Math.round(
                    curX
                )}px, ${Math.round(curY)}px)`;
            }
        }

        move();
    }, [tgX, tgY]);

    // Update CSS variables dynamically
    useEffect(() => {
        document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
        document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--pointer-color", pointerColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, [
        gradientBackgroundStart,
        gradientBackgroundEnd,
        firstColor,
        secondColor,
        thirdColor,
        fourthColor,
        fifthColor,
        pointerColor,
        size,
        blendingValue,
    ]);

    return (
        <div className={clsx("relative w-full h-full", containerClassName)}>
            <div className={clsx("absolute inset-0 w-full h-full", className)} />
            {interactive && (
                <div
                    ref={interactiveRef}
                    className="absolute w-20 h-20 rounded-full bg-white opacity-30"
                />
            )}
            {children}
        </div>
    );
};
