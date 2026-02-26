import type { FunctionComponent } from "../../common/types";
import aboutData from "../../data/about.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useMouseTilt } from "../../hooks/useMouseTilt";

export const AboutTeam = (): FunctionComponent => {
	const { team } = aboutData;
	const { ref: revealRef, isVisible } = useScrollReveal<HTMLElement>();

	// Create refs for comparison cards
	const otherPlatformsRef = useMouseTilt<HTMLDivElement>({ max: 5, perspective: 1000, scale: 1.02 });
	const rightPathSarthi = useMouseTilt<HTMLDivElement>({ max: 5, perspective: 1000, scale: 1.02 });

	return (
		<section ref={revealRef} className="bg-white dark:bg-[#101922] py-24 px-4 md:px-10 lg:px-40 relative overflow-hidden transition-colors duration-1000">
			{/* Background blob */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

			<div className="max-w-[1200px] mx-auto relative z-10">
				<div className={`flex flex-col gap-4 mb-16 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
					}`}>
					<h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
						{team.title}
					</h2>
					<p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
						{team.description}
					</p>
				</div>

				{/* Comparison Cards */}
				<div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
					}`}>
					{/* Other Platforms Card */}
					<div
						ref={otherPlatformsRef}
						className="group flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-10 shadow-xl border-2 border-red-100 dark:border-red-900/30 transition-all duration-500 hover:shadow-2xl"
					>
						<h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-8 text-center">
							{team.otherPlatforms.title}
						</h3>
						<div className="flex flex-col gap-5">
							{team.otherPlatforms.features.map((feature, index) => (
								<div
									key={index}
									className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 transition-all duration-300 hover:bg-red-100 dark:hover:bg-red-900/20"
									style={{ transitionDelay: `${index * 0.1}s` }}
								>
									<span className="text-red-500 dark:text-red-400 text-2xl font-bold mt-0.5 flex-shrink-0">×</span>
									<p className="text-slate-700 dark:text-slate-300 font-semibold text-base md:text-lg leading-relaxed">
										{feature}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* VS Divider */}
					<div className="flex items-center justify-center lg:flex-col lg:justify-center py-8 lg:py-0">
						<div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center shadow-lg border-2 border-primary/20 dark:border-primary/30">
							<span className="text-primary font-black text-2xl">VS</span>
						</div>
					</div>

					{/* College Bazaar Card */}
					<div
						ref={rightPathSarthi}
						className="group flex flex-col bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-[2rem] p-8 md:p-10 shadow-xl border-2 border-primary/30 dark:border-primary/40 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
					>
						{/* Decorative gradient overlay */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
						<div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

						<div className="relative z-10">
							<h3 className="text-2xl md:text-3xl font-black text-primary dark:text-primary mb-8 text-center">
								{team.rightPathSarthi.title}
							</h3>
							<div className="flex flex-col gap-5">
								{team.rightPathSarthi.features.map((feature, index) => (
									<div
										key={index}
										className="flex items-start gap-3 p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-primary/20 dark:border-primary/30 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:scale-[1.02]"
										style={{ transitionDelay: `${index * 0.1}s` }}
									>
										<span className="text-primary dark:text-primary text-2xl font-bold mt-0.5 flex-shrink-0">✓</span>
										<p className="text-slate-800 dark:text-slate-200 font-semibold text-base md:text-lg leading-relaxed">
											{feature}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
