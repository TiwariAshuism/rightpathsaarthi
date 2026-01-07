import { useState, useEffect, useMemo } from "react";

interface TypewriterProps {
	text: string | string[];
	speed?: number;
	deleteSpeed?: number;
	delay?: number;
	waitBeforeDelete?: number;
	className?: string;
	cursor?: boolean;
	loop?: boolean;
}

export const Typewriter = ({
	text,
	speed = 50,
	deleteSpeed = 30,
	delay = 0,
	waitBeforeDelete = 2000,
	className = "",
	cursor = true,
	loop = true,
}: TypewriterProps) => {
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [textIndex, setTextIndex] = useState(0);
	const [started, setStarted] = useState(false);

	// Memoize texts to prevent unnecessary effect re-runs when parent re-renders
	const texts = useMemo(
		() => (Array.isArray(text) ? text : [text]),
		[JSON.stringify(text)]
	);
	const currentFullText = texts[textIndex] || "";

	useEffect(() => {
		const timeout = setTimeout(() => {
			setStarted(true);
		}, delay);

		return () => clearTimeout(timeout);
	}, [delay]);

	useEffect(() => {
		if (!started) return;

		const handleTyping = () => {
			setDisplayText((current) => {
				if (isDeleting) {
					return currentFullText.substring(0, current.length - 1);
				} else {
					return currentFullText.substring(0, current.length + 1);
				}
			});
		};

		let timer: NodeJS.Timeout;

		if (!isDeleting && displayText === currentFullText) {
			// Finished typing current string
			if (texts.length > 1 || loop) {
				timer = setTimeout(() => setIsDeleting(true), waitBeforeDelete);
			}
		} else if (isDeleting && displayText === "") {
			// Finished deleting
			setIsDeleting(false);
			setTextIndex((prev) => (prev + 1) % texts.length);
		} else {
			// In progress
			timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
		}

		return () => clearTimeout(timer);
	}, [
		displayText,
		isDeleting,
		textIndex,
		texts,
		speed,
		deleteSpeed,
		waitBeforeDelete,
		loop,
		started,
		currentFullText,
	]);

	return (
		<span className={className}>
			{displayText}
			{cursor && <span className="animate-pulse">|</span>}
		</span>
	);
};
