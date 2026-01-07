import React from "react";
import data from "../../data/faq.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface FAQCategoriesProps {
	selectedCategory: string;
	setSelectedCategory: (category: string) => void;
}

const FAQCategories: React.FC<FAQCategoriesProps> = ({
	selectedCategory,
	setSelectedCategory,
}) => {
	const { categories } = data;
	const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

	return (
		<div
			ref={ref}
			className={`mb-16 overflow-x-auto scrollbar-hide transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
		>
			<div className="flex gap-5 min-w-max pb-4 px-2">
				{categories.map((category, index) => (
					<button
						key={index}
						onClick={() => setSelectedCategory(category.label)}
						className={`flex h-12 items-center justify-center gap-x-3 rounded-2xl px-8 shadow-sm transition-all duration-300 active:scale-95 border ${selectedCategory === category.label
								? "bg-primary text-white border-primary shadow-xl shadow-primary/20"
								: "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-primary/50 text-slate-700 dark:text-slate-300 group"
							}`}
						style={{ transitionDelay: `${index * 0.05}s` }}
					>
						<span
							className={`material-symbols-outlined text-xl font-black ${selectedCategory === category.label ? "" : "text-slate-400 group-hover:text-primary transition-colors"}`}
						>
							{category.icon}
						</span>
						<span className="text-base font-black tracking-tight">{category.label}</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default FAQCategories;
