import type { FunctionComponent } from "../../common/types";
import aboutData from "../../data/about.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useMouseTilt } from "../../hooks/useMouseTilt";

export const AboutValues = (): FunctionComponent => {
	const { values } = aboutData;
	const { ref: revealRef, isVisible } = useScrollReveal<HTMLElement>();

	// Create separate refs for tilt cards
	const tiltRef1 = useMouseTilt<HTMLDivElement>({ max: 10, perspective: 1000, scale: 1.05 });
	const tiltRef2 = useMouseTilt<HTMLDivElement>({ max: 10, perspective: 1000, scale: 1.05 });
	const tiltRef3 = useMouseTilt<HTMLDivElement>({ max: 10, perspective: 1000, scale: 1.05 });
	const tiltRefs = [tiltRef1, tiltRef2, tiltRef3];

	return (
		<section ref={revealRef} className="relative bg-white dark:bg-[#101922] py-24 px-4 md:px-10 lg:px-40 overflow-hidden">
			{/* Decorative Dots Pattern */}
			<div className="absolute inset-0 dots-pattern opacity-40 pointer-events-none"></div>

			<div className="max-w-[1200px] mx-auto relative z-10">
				<div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}>
					<span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
						Core Foundations
					</span>
					<h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
						{values.title}
					</h2>
					<p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
						{values.subtitle}
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{values.items.map((value, index) => (
						<div
							key={index}
							ref={tiltRefs[index]}
							className={`flex flex-col items-center text-center p-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
								}`}
							style={{ transitionDelay: `${index * 0.2}s` }}
						>
							<div className="w-20 h-20 text-primary mb-8 bg-primary/10 flex items-center justify-center rounded-3xl shadow-inner group transition-all duration-500 hover:scale-110">
								<span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
									{value.icon}
								</span>
							</div>
							<h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
								{value.title}
							</h3>
							<p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
