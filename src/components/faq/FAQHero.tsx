import React from "react";
import data from "../../data/faq.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface FAQHeroProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
}

const FAQHero: React.FC<FAQHeroProps> = ({ searchQuery, setSearchQuery }) => {
	const { hero } = data;
	const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

	return (
		<div ref={ref} className="relative bg-white dark:bg-[#101922] transition-colors duration-1000 overflow-hidden">
			{/* Mesh Gradient Background */}
			<div className="absolute inset-0 mesh-gradient opacity-20 dark:opacity-10 pointer-events-none"></div>

			<div className="w-full max-w-[1440px] mx-auto relative z-10 px-4 py-20 md:py-32">
				<div className={`flex flex-col items-center justify-center gap-8 text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
					<div className="flex flex-col gap-4">
						<span className="inline-block px-5 py-2 mb-2 text-sm font-black tracking-widest text-primary uppercase bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 self-center">
							Support Center
						</span>
						<h1 className="text-[#111418] dark:text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
							{hero.title}
						</h1>
						<p className="text-slate-600 dark:text-slate-400 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
							{hero.subtitle}
						</p>
					</div>

					<div className="w-full max-w-2xl mt-4">
						<div className="relative group">
							<div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-2xl group-focus-within:bg-primary/10 transition-colors"></div>
							<div className="relative flex items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl border border-slate-100 dark:border-slate-800 p-2 shadow-2xl focus-within:border-primary/50 transition-all">
								<div className="flex items-center justify-center pl-6 pr-4 text-slate-400">
									<span className="material-symbols-outlined text-2xl">search</span>
								</div>
								<input
									className="flex-1 bg-transparent text-slate-900 dark:text-white focus:outline-none placeholder:text-slate-400 text-lg font-medium h-14"
									placeholder={hero.searchPlaceholder}
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
								<button className="hidden sm:flex items-center justify-center rounded-2xl h-14 px-10 bg-primary hover:bg-[#D41C25] text-white text-lg font-black transition-all shadow-xl shadow-primary/25 active:scale-95">
									{hero.searchButtonText}
								</button>
							</div>
							<button className="sm:hidden w-full mt-4 flex items-center justify-center rounded-2xl h-14 bg-primary text-white text-lg font-black shadow-xl active:scale-95 transition-all">
								{hero.searchButtonText}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQHero;
