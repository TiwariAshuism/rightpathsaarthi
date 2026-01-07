import React from "react";
import { Link } from "@tanstack/react-router";
import data from "../../data/faq.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const FAQCTA: React.FC = () => {
	const { cta } = data;
	const { ref, isVisible } = useScrollReveal<HTMLElement>();

	return (
		<section
			ref={ref}
			className={`mt-20 pb-32 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
		>
			<div className="rounded-[3rem] bg-slate-900 border border-slate-800 p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group">
				{/* Abstract decorative circles */}
				<div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px] group-hover:bg-primary/10 transition-colors duration-1000"></div>
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-[100px] group-hover:bg-primary/10 transition-colors duration-1000"></div>

				<div className="relative z-10 flex flex-col items-center">
					<div className="size-20 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-3xl mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500">
						<span className="material-symbols-outlined text-4xl text-white font-black">
							{cta.icon}
						</span>
					</div>
					<h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
						{cta.title}
					</h3>
					<p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto mb-12 font-medium leading-relaxed">
						{cta.description}
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
						<Link
							to="/contact"
							className="flex items-center justify-center rounded-2xl h-16 px-10 bg-primary hover:bg-[#D41C25] text-white text-lg font-black transition-all shadow-xl shadow-primary/30 active:scale-95"
						>
							{cta.primaryButton}
						</Link>
						<button className="flex items-center justify-center rounded-2xl h-16 px-10 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-lg font-black transition-all active:scale-95 backdrop-blur-md">
							{cta.secondaryButton}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQCTA;
