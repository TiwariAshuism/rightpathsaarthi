import type { FunctionComponent } from "../../common/types";
import homeData from "../../data/home.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Founders = (): FunctionComponent => {
	const { founders } = homeData;
	const { ref, isVisible } = useScrollReveal();

	return (
		<section ref={ref} className="w-full px-4 md:px-10 lg:px-40 py-8 lg:py-12 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-background-dark dark:to-accent/20 border-t border-slate-200 dark:border-slate-800">
			<div className="max-w-[1280px] w-full mx-auto">
				<div className={`flex flex-col gap-6 text-center items-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}>
					<span className="text-primary font-bold text-sm tracking-wider uppercase">
						{founders.tagline}
					</span>
					<h2 className="font-display text-text-light dark:text-text-dark text-2xl md:text-3xl font-bold leading-tight max-w-[720px]">
						{founders.title}
					</h2>
					<p className="text-slate-600 dark:text-slate-400 text-base max-w-[720px]">
						{founders.description}
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
					{founders.items.map((founder, index) => (
						<div
							key={index}
							className={`relative flex flex-col items-center p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 group overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
								}`}
							style={{ transitionDelay: `${index * 0.2}s` }}
						>
							<div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
								{index === 0 ? (
									<>
										<div className="absolute top-10 left-10 w-24 h-24 bg-primary rounded-full blur-xl animate-rotate-shape delay-[0s]"></div>
										<div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent rounded-full opacity-60 blur-xl animate-rotate-shape delay-[1s]"></div>
									</>
								) : (
									<>
										<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary rounded-full blur-xl opacity-70 animate-rotate-shape delay-[0.5s]"></div>
										<div className="absolute bottom-10 right-10 w-28 h-28 bg-accent rounded-full animate-rotate-shape delay-[1.5s]"></div>
									</>
								)}
							</div>
							<div className="relative group flex-shrink-0 z-10">
								<div
									className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full p-2 border-2 border-dashed ${index === 0 ? "border-primary/50" : "border-accent/50"
										} animate-pulse-glow`}
								>
									<div
										className="w-full h-full rounded-full overflow-hidden bg-cover bg-center shadow-2xl transition-transform duration-500 group-hover:scale-105"
										style={{
											backgroundImage: `url("${founder.image}")`,
										}}
									></div>
								</div>
								<div
									className={`absolute ${index === 0
											? "bottom-0 right-0 md:bottom-2 md:right-2 bg-primary"
											: "bottom-0 left-0 md:bottom-2 md:left-2 bg-accent"
										} text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900`}
								>
									<span className="material-symbols-outlined text-base">
										format_quote
									</span>
								</div>
							</div>
							<div className="flex flex-col text-center mt-4 z-10">
								<h3 className="font-display text-lg md:text-xl font-bold text-text-light dark:text-text-dark leading-tight mb-4 relative">
									<span className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-slate-200 dark:text-slate-700 -z-10 font-serif">
										“
									</span>
									{founder.quote}
								</h3>
								<p
									className={`text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-3 italic ${index === 0
											? "border-l-4 border-primary/30 pl-4"
											: "border-r-4 border-accent/30 pr-4"
										}`}
								>
									"{founder.subQuote}"
								</p>
								<div className="flex flex-col items-center gap-2">
									<span className="text-base font-bold text-text-light dark:text-text-dark">
										{founder.name}
									</span>
									<span className="text-slate-500 dark:text-slate-400 text-xs font-medium">
										{founder.role}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
