import type { FunctionComponent } from "../../common/types";
import homeData from "../../data/home.json";
import CountUp from "react-countup";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Stats = (): FunctionComponent => {
	const { stats } = homeData;
	const { ref, isVisible } = useScrollReveal();

	// Helper to parse value string into number and suffix
	const parseValue = (val: string) => {
		const number = parseFloat(val.replace(/,/g, "").replace(/[^0-9.]/g, ""));
		const prefix = val.includes("$") ? "$" : "";
		const suffix = val.replace(/[^a-zA-Z+%]/g, "");
		return { number, prefix, suffix };
	};

	return (
		<section ref={ref} className="w-full px-4 md:px-10 lg:px-40 py-8 bg-[#f8f9fa] dark:bg-[#15202b] border-y border-[#e5e7eb] dark:border-slate-800">
			<div className="max-w-[1280px] w-full mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
					{stats.map((stat, index) => {
						const { number, prefix, suffix } = parseValue(stat.value);
						return (
							<div
								key={index}
								className={`flex flex-col gap-1 items-center sm:items-start text-center sm:text-left transition-all duration-1000 ${index > 0
										? "border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700 pt-4 sm:pt-0 sm:pl-6"
										: ""
									} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
									}`}
								style={{ transitionDelay: `${index * 0.15}s` }}
							>
								<p className="text-primary text-4xl font-bold leading-tight">
									{prefix}
									<CountUp
										end={number}
										duration={2.5}
										separator=","
										enableScrollSpy
										scrollSpyOnce
									/>
									{suffix}
								</p>
								<p className="text-[#111418] dark:text-slate-300 text-sm font-medium uppercase tracking-wide">
									{stat.label}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
