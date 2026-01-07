import React, { useState, useEffect } from "react";

export const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 left-8 z-[60] group flex items-center justify-center size-14 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            aria-label="Back to Top"
        >
            {/* Circular Progress Ring */}
            <svg className="absolute inset-0 size-full -rotate-90 pointer-events-none overflow-visible">
                <circle
                    cx="28"
                    cy="28"
                    r="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    className="opacity-10"
                />
                <circle
                    cx="28"
                    cy="28"
                    r="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray="150"
                    strokeDashoffset={150 - (150 * scrollProgress) / 100}
                    className="transition-all duration-100 ease-out"
                />
            </svg>

            <span className="material-symbols-outlined text-2xl font-black group-hover:-translate-y-1 transition-transform duration-300">
                arrow_upward
            </span>
        </button>
    );
};
