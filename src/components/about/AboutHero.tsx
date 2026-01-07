import type { FunctionComponent } from "../../common/types";
import aboutData from "../../data/about.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useMouseTilt } from "../../hooks/useMouseTilt";

export const AboutHero = (): FunctionComponent => {
	const { hero } = aboutData;
	const { ref: revealRef, isVisible } = useScrollReveal<HTMLElement>();
	const tiltRef = useMouseTilt<HTMLDivElement>({ max: 5, perspective: 1000, scale: 1.01 });

	return (
		<section ref={revealRef} className="relative w-full overflow-hidden">
			<div className="px-4 py-16 md:px-20 lg:px-40 md:py-24 bg-white dark:bg-[#101922] relative">
				{/* Mesh Gradient Background */}
				<div className="absolute inset-0 mesh-gradient opacity-30 dark:opacity-20 pointer-events-none"></div>

				<div className="max-w-[1200px] mx-auto relative z-10 text-center">
					<div
						ref={tiltRef}
						className={`relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
							}`}
					>
						<div className="absolute inset-0 opacity-60">
							<div
								className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
								style={{ backgroundImage: `url("${hero.image}")` }}
							></div>
						</div>
						<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
						<div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 py-24 text-center md:px-12 md:py-32">
							<span className="inline-block px-4 py-1.5 mb-2 text-sm font-bold tracking-wider text-primary uppercase bg-white/10 backdrop-blur-md rounded-full">
								Our Story
							</span>
							<h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl max-w-4xl drop-shadow-2xl">
								{hero.title}
							</h1>
							<p className="max-w-2xl text-lg font-medium text-slate-200 md:text-2xl leading-relaxed">
								{hero.subtitle}
							</p>
							<div className="flex gap-4 mt-6">
								<button className="h-14 px-10 rounded-2xl bg-primary text-white font-black text-lg hover:bg-[#D41C25] transition-all shadow-xl shadow-primary/30 transform hover:-translate-y-1">
									{hero.buttonText}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
