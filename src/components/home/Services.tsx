import type { FunctionComponent } from "../../common/types";
import homeData from "../../data/home.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useMouseTilt } from "../../hooks/useMouseTilt";

export const Services = (): FunctionComponent => {
	const { services } = homeData;
	const { ref: revealRef, isVisible } = useScrollReveal();

	const tiltRef1 = useMouseTilt({ max: 10, perspective: 1000, scale: 1.02 });
	const tiltRef2 = useMouseTilt({ max: 10, perspective: 1000, scale: 1.02 });
	const tiltRef3 = useMouseTilt({ max: 10, perspective: 1000, scale: 1.02 });
	const tiltRefs = [tiltRef1, tiltRef2, tiltRef3];

	return (
		<section ref={revealRef} className="w-full px-4 md:px-10 lg:px-40 py-16 lg:py-24 bg-white dark:bg-[#101922] transition-colors duration-1000 relative">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 dots-pattern opacity-50 pointer-events-none"></div>

			<div className="max-w-[1280px] w-full mx-auto flex flex-col gap-12 relative z-10">
				<div className={`flex flex-col gap-4 text-center items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}>
					<span className="text-primary font-bold text-sm tracking-wider uppercase">
						{services.tagline}
					</span>
					<h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold leading-tight max-w-[720px]">
						{services.title}
					</h2>
					<p className="text-slate-600 dark:text-slate-400 text-lg max-w-[720px]">
						{services.description}
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{services.items.map((service, index) => (
						<div
							key={index}
							ref={tiltRefs[index] as any}
							className={`group relative flex flex-col gap-4 rounded-xl border border-[#e5e7eb] dark:border-slate-800 bg-white dark:bg-[#1a2632] p-8 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary hover:-translate-y-2 transition-all duration-700 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
								}`}
							style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
						>
							{/* Hover Gradient Background */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

							<div className="relative z-10 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
								<span className="material-symbols-outlined text-[28px]">
									{service.icon}
								</span>
							</div>
							<div className="relative z-10 flex flex-col gap-2">
								<h3 className="text-[#111418] dark:text-white text-xl font-bold group-hover:text-primary transition-colors">
									{service.title}
								</h3>
								<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
									{service.description}
								</p>
							</div>
							<a
								className="relative z-10 mt-2 text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
								href="#"
							>
								{service.linkText}{" "}
								<span className="material-symbols-outlined text-sm font-bold">
									arrow_forward
								</span>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
