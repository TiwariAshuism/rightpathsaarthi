import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxProps {
	children: ReactNode;
	speed?: number;
	className?: string;
}

export const Parallax = ({
	children,
	speed = 0.1,
	className = "",
}: ParallaxProps) => {
	const [offset, setOffset] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let rafId: number;

		const handleScroll = () => {
			if (!ref.current) return;
			const rect = ref.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Only animate if element is in view or close to it
			if (rect.top < windowHeight + 100 && rect.bottom > -100) {
				const distanceFromCenter =
					rect.top - windowHeight / 2 + rect.height / 2;
				setOffset(distanceFromCenter * speed);
			}
		};

		const onScroll = () => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(handleScroll);
		};

		window.addEventListener("scroll", onScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", onScroll);
			cancelAnimationFrame(rafId);
		};
	}, [speed]);

	return (
		<div
			ref={ref}
			className={className}
			style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}
		>
			{children}
		</div>
	);
};
