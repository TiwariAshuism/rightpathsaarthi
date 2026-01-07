import type { FunctionComponent } from "../../common/types";
import aboutData from "../../data/about.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useMouseTilt } from "../../hooks/useMouseTilt";

export const AboutTeam = (): FunctionComponent => {
	const { team } = aboutData;
	const { ref: revealRef, isVisible } = useScrollReveal<HTMLElement>();

	// Create refs for first 4 members (common case)
	const t1 = useMouseTilt<HTMLDivElement>({ max: 8, perspective: 1000, scale: 1.02 });
	const t2 = useMouseTilt<HTMLDivElement>({ max: 8, perspective: 1000, scale: 1.02 });
	const t3 = useMouseTilt<HTMLDivElement>({ max: 8, perspective: 1000, scale: 1.02 });
	const t4 = useMouseTilt<HTMLDivElement>({ max: 8, perspective: 1000, scale: 1.02 });
	const tiltRefs = [t1, t2, t3, t4];

	return (
		<section ref={revealRef} className="bg-white dark:bg-[#101922] py-24 px-4 md:px-10 lg:px-40 relative overflow-hidden transition-colors duration-1000">
			{/* Background blob */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

			<div className="max-w-[1200px] mx-auto relative z-10">
				<div className={`flex flex-col gap-4 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
					}`}>
					<span className="text-primary font-bold text-sm tracking-widest uppercase mb-1">
						The Minds Behind
					</span>
					<h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
						{team.title}
					</h2>
					<p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
						{team.description}
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{team.members.map((member, index) => (
						<div
							key={index}
							ref={tiltRefs[index] as any}
							className={`group flex flex-col gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
								}`}
							style={{ transitionDelay: `${index * 0.15}s` }}
						>
							<div className="overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-slate-200 dark:bg-slate-800 shadow-xl border border-white dark:border-slate-800 transform transition-transform group-hover:scale-[1.03]">
								<div
									className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
									style={{ backgroundImage: `url("${member.image}")` }}
								></div>
							</div>
							<div className="px-2">
								<h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mb-1">
									{member.name}
								</h3>
								<p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">
									{member.role}
								</p>
								<p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium line-clamp-3">
									{member.bio}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
