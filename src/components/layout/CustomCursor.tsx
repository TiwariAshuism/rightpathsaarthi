import React, { useState, useEffect, useRef } from "react";

export const CustomCursor: React.FC = () => {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            const { clientX, clientY } = e;

            if (cursorDotRef.current && cursorOutlineRef.current) {
                // Precise dot position
                cursorDotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;

                // Outline with a slight delay/lerp (handled via CSS transition)
                cursorOutlineRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button' ||
                target.classList.contains('cursor-pointer');

            setIsHovering(!!isClickable);
        };

        const handleMouseLeave = () => setIsHidden(true);
        const handleMouseEnter = () => setIsHidden(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    // Hide custom cursor on touch devices
    useEffect(() => {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch) setIsHidden(true);
    }, []);

    return (
        <>
            <div
                ref={cursorDotRef}
                className={`fixed top-0 left-0 size-2 bg-primary rounded-full z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"
                    }`}
            />
            <div
                ref={cursorOutlineRef}
                className={`fixed top-0 left-0 size-10 border-2 border-primary/30 rounded-full z-[99] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${isHidden ? "opacity-0" : "opacity-100"
                    } ${isHovering ? "size-14 bg-primary/5 border-primary/60" : ""
                    } ${isClicked ? "scale-90 bg-primary/20" : ""
                    }`}
            />
        </>
    );
};
