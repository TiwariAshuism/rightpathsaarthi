import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect when an element enters the viewport.
 * @param options IntersectionObserver options
 * @returns [ref, isVisible]
 */
export const useScrollReveal = <T extends HTMLElement>(options: IntersectionObserverInit = { threshold: 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry && entry.isIntersecting) {
                setIsVisible(true);
                // Once visible, we can stop observing if we only want entry animation
                if (ref.current) observer.unobserve(ref.current);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return { ref, isVisible };
};
