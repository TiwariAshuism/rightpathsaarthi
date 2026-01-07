import type { FunctionComponent } from "../../common/types";
import aboutData from "../../data/about.json";
import CountUp from "react-countup";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const AboutStats = (): FunctionComponent => {
	const { stats } = aboutData;
	const { ref, isVisible } = useScrollReveal();

	// Helper to parse value string into number and suffix
	const parseValue = (val: string) => {
		const number = parseFloat(val.replace(/,/g, "").replace(/[^0-9.]/g, ""));
		const prefix = val.includes("$") ? "$" : "";
		const suffix = val.replace(/[^a-zA-Z+%]/g, "");
		return { number, prefix, suffix };
	};

	return (
		<section ref={ref} className="bg-white dark:bg-[#101922] transition-colors duration-1000">
			<div className="max-w-[1200px] mx-auto px-4 py-16 md:px-10">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
					{stats.map((stat, index) => {
						const { number, prefix, suffix } = parseValue(stat.value);
						return (
							<div
								key={index}
								className={`flex flex-col items-center gap-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
									}`}
								style={{ transitionDelay: `${index * 0.1}s` }}
							>
								<span className="text-5xl font-black text-primary tracking-tighter">
									{prefix}
									<CountUp
										end={number}
										duration={2.5}
										separator=","
										enableScrollSpy
										scrollSpyOnce
									/>
									{suffix}
								</span>
								<span className="text-base font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
									{stat.label}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
