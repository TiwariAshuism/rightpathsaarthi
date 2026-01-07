import React, { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface FAQItem {
	question: string;
	answer: string;
}

interface FAQSection {
	title: string;
	icon: string;
	items: FAQItem[];
}

interface FAQListProps {
	sections: FAQSection[];
}

const FAQList: React.FC<FAQListProps> = ({ sections }) => {
	const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
	const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "0-0": true });

	const toggleItem = (sectionIdx: number, itemIdx: number) => {
		const key = `${sectionIdx}-${itemIdx}`;
		setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
	};

	if (sections.length === 0) {
		return (
			<div className="text-center py-20 animate-fade-in-up">
				<div className="inline-flex items-center justify-center size-20 rounded-full bg-slate-50 dark:bg-slate-900 mb-6">
					<span className="material-symbols-outlined text-4xl text-slate-400">search_off</span>
				</div>
				<p className="text-slate-500 dark:text-slate-400 text-xl font-medium">
					No FAQs found matching your criteria.
				</p>
			</div>
		);
	}

	return (
		<div ref={ref} className="flex flex-col gap-16 pb-20">
			{sections.map((section, sectionIndex) => (
				<section
					key={sectionIndex}
					className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
					style={{ transitionDelay: `${sectionIndex * 0.1}s` }}
				>
					<div className="flex items-center gap-4 mb-10">
						<div className="size-14 bg-primary/10 rounded-2xl text-primary flex items-center justify-center shadow-inner">
							<span className="material-symbols-outlined text-3xl font-black">{section.icon}</span>
						</div>
						<h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
							{section.title}
						</h2>
					</div>
					<div className="grid gap-4">
						{section.items.map((item, itemIndex) => {
							const isOpen = openItems[`${sectionIndex}-${itemIndex}`];
							return (
								<div
									key={itemIndex}
									className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${isOpen
											? "border-primary/30 bg-white dark:bg-slate-900/80 shadow-[0_20px_40px_-12px_rgba(227,30,36,0.1)]"
											: "border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 hover:border-primary/20"
										}`}
								>
									<button
										onClick={() => toggleItem(sectionIndex, itemIndex)}
										className="w-full flex items-center justify-between gap-6 p-8 text-left transition-colors"
									>
										<span className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? "text-primary" : "text-slate-900 dark:text-white"}`}>
											{item.question}
										</span>
										<div className={`shrink-0 size-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-primary text-white rotate-180" : "bg-slate-200/50 dark:bg-slate-800 text-slate-500"}`}>
											<span className="material-symbols-outlined text-xl font-black">
												expand_more
											</span>
										</div>
									</button>
									<div
										className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
									>
										<div className="overflow-hidden">
											<div className="px-8 pb-8 pt-0">
												<p
													className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium max-w-4xl"
													dangerouslySetInnerHTML={{ __html: item.answer }}
												/>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			))}
		</div>
	);
};

export default FAQList;
