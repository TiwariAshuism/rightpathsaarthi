import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once any part of it enters the viewport.
 * A tall block (the full services catalog) never reaches a 10%
 * visibility threshold, so the default is "any pixel".
 */
export const useScrollReveal = <T extends HTMLElement>(
	options?: IntersectionObserverInit
) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<T | null>(null);
	const threshold = options?.threshold ?? 0;
	const rootMargin = options?.rootMargin ?? "0px";

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry?.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold, rootMargin }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [threshold, rootMargin]);

	return { ref, isVisible };
};
