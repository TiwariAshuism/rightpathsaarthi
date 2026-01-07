import React from "react";
import data from "../../data/services.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface ServicesFilterProps {
	activeCategory: string;
	setActiveCategory: (category: string) => void;
}

const ServicesFilter: React.FC<ServicesFilterProps> = ({
	activeCategory,
	setActiveCategory,
}) => {
	const { categories } = data;
	const { ref, isVisible } = useScrollReveal<HTMLElement>();

	return (
		<aside
			ref={ref}
			className={`w-full lg:w-80 flex-shrink-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
		>
			<div className="lg:sticky lg:top-32 flex flex-col gap-8">
				<div className="flex items-center gap-3 px-2">
					<div className="size-1 bg-primary rounded-full"></div>
					<h3 className="font-black text-xl tracking-tight text-slate-900 dark:text-white uppercase text-sm">Categories</h3>
				</div>
				<div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 scrollbar-hide snap-x px-2">
					<button
						onClick={() => setActiveCategory("all")}
						className={`snap-start flex items-center gap-4 w-full p-5 rounded-2xl transition-all duration-300 text-left min-w-[200px] lg:min-w-0 flex-shrink-0 lg:flex-shrink group border shadow-sm ${activeCategory === "all"
								? "bg-primary text-white border-primary shadow-xl shadow-primary/20"
								: "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-primary/50 text-slate-700 dark:text-slate-300"
							}`}
					>
						<span className={`material-symbols-outlined text-2xl font-black ${activeCategory === "all" ? "" : "text-slate-400 group-hover:text-primary"}`}>apps</span>
						<span className="text-base font-black tracking-tight">All Services</span>
					</button>
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							className={`snap-start flex items-center gap-4 w-full p-5 rounded-2xl transition-all duration-300 text-left min-w-[200px] lg:min-w-0 flex-shrink-0 lg:flex-shrink group border shadow-sm ${activeCategory === category.id
									? "bg-primary text-white border-primary shadow-xl shadow-primary/20"
									: "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-primary/50 text-slate-700 dark:text-slate-300"
								}`}
						>
							<span
								className={`material-symbols-outlined text-2xl font-black ${activeCategory === category.id ? "" : "text-slate-400 group-hover:text-primary"}`}
							>
								{category.icon}
							</span>
							<span className="text-base font-black tracking-tight">{category.label}</span>
						</button>
					))}
				</div>
			</div>
		</aside>
	);
};

export default ServicesFilter;
