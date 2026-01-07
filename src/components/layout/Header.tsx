import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";
import layoutData from "../../data/layout.json";
import { AdmissionHelplineBanner } from "./AdmissionHelplineBanner";
import { useMouseTilt } from "../../hooks/useMouseTilt";

export const Header = (): FunctionComponent => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const { header } = layoutData;
	const logoRef = useMouseTilt({ max: 20, perspective: 1000, scale: 1.1 });

	useEffect(() => {
		const updateScrollProgress = () => {
			const currentScroll = window.scrollY;
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			if (scrollHeight > 0) {
				setScrollProgress((currentScroll / scrollHeight) * 100);
			}
		};

		window.addEventListener("scroll", updateScrollProgress);
		return () => window.removeEventListener("scroll", updateScrollProgress);
	}, []);

	return (
		<header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-[#101922]/70 backdrop-blur-xl">
			{/* Scroll Progress Bar */}
			<div
				className="absolute bottom-0 left-0 h-[2px] bg-primary z-50 transition-all duration-150 ease-out"
				style={{ width: `${scrollProgress}%` }}
			></div>
			<div className="px-4 md:px-10 lg:px-40 py-3 flex items-center justify-between">
				<div
					ref={logoRef as any}
					className="transition-transform duration-200 ease-out"
				>
					<Link
						to="/"
						className="flex items-center gap-4 text-[#111418] dark:text-white group"
					>
						<div className="size-8 text-primary transition-transform group-hover:scale-110">
							<svg
								className="w-full h-full"
								fill="none"
								viewBox="0 0 48 48"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clipRule="evenodd"
									d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
									fill="currentColor"
									fillRule="evenodd"
								></path>
							</svg>
						</div>
						<h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
							{header.logoText}
						</h2>
					</Link>
				</div>
				<div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
					<nav className="flex items-center gap-8">
						{header.navLinks.map((link, index) => (
							<Link
								key={index}
								className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-white"
								to={link.href}
							>
								{link.text}
							</Link>
						))}
					</nav>
					<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-[#D41C25] text-white text-sm font-bold transition-colors">
						<span className="truncate">{header.ctaButton}</span>
					</button>
				</div>
				<button
					className="lg:hidden text-[#111418] dark:text-white p-2"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<span className="material-symbols-outlined">
						{isMenuOpen ? "close" : "menu"}
					</span>
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#101922] border-b border-[#f0f2f4] dark:border-slate-800 p-4 flex flex-col gap-4 shadow-lg animate-fade-in-down">
					<nav className="flex flex-col gap-4">
						{header.navLinks.map((link, index) => (
							<Link
								key={index}
								className="text-base font-medium hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-white"
								to={link.href}
								onClick={() => setIsMenuOpen(false)}
							>
								{link.text}
							</Link>
						))}
					</nav>
					<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-[#D41C25] text-white text-sm font-bold transition-colors">
						<span className="truncate">{header.ctaButton}</span>
					</button>
				</div>
			)}
			<AdmissionHelplineBanner />
		</header>
	);
};
