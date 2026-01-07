import type { FunctionComponent } from "../../common/types";
import homeData from "../../data/home.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Partners = (): FunctionComponent => {
	const { partners } = homeData;
	const { ref, isVisible } = useScrollReveal();

	return (
		<section ref={ref} className="w-full py-10 bg-white dark:bg-[#101922] border-t border-slate-100 dark:border-slate-800 overflow-hidden">
			<div className={`max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 mb-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
				}`}>
				<p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
					{partners.title}
				</p>
			</div>
			<div className="relative w-full max-w-[1600px] mx-auto overflow-hidden mask-linear-gradient">
				<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#101922] to-transparent z-10"></div>
				<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#101922] to-transparent z-10"></div>
				<div className="flex items-center whitespace-nowrap animate-scroll w-max">
					<div className="flex items-center gap-12 sm:gap-20 pr-12 sm:pr-20">
						{partners.images.map((partner, index) => (
							<div
								key={index}
								className="h-20 md:h-28 w-auto transition-transform duration-300 hover:scale-110"
							>
								<img
									src={partner}
									alt={`Partner ${index + 1}`}
									className="h-full w-auto object-contain"
								/>
							</div>
						))}
					</div>
					<div
						aria-hidden="true"
						className="flex items-center gap-12 sm:gap-20 pr-12 sm:pr-20"
					>
						{partners.images.map((partner, index) => (
							<div
								key={index}
								className="h-20 md:h-28 w-auto transition-transform duration-300 hover:scale-110"
							>
								<img
									src={partner}
									alt={`Partner ${index + 1}`}
									className="h-full w-auto object-contain"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
