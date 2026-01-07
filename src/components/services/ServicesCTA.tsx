import React from "react";
import { Link } from "@tanstack/react-router";
import data from "../../data/services.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const ServicesCTA: React.FC = () => {
	const { cta } = data;
	const { ref, isVisible } = useScrollReveal<HTMLElement>();

	return (
		<section
			ref={ref}
			className={`py-32 bg-white dark:bg-[#101922] transition-colors duration-1000 border-t border-slate-100 dark:border-slate-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
		>
			<div className="layout-container px-6 lg:px-40 flex justify-center">
				<div className="max-w-6xl w-full bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center flex flex-col items-center gap-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
					{/* Decorative Blobs */}
					<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[120px] group-hover:bg-primary/10 transition-colors duration-1000"></div>
					<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-[120px] group-hover:bg-primary/10 transition-colors duration-1000"></div>

					<div className="relative z-10 flex flex-col items-center gap-8">
						<div className="size-20 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center text-white shadow-inner mb-2 transform group-hover:scale-110 transition-transform duration-500">
							<span className="material-symbols-outlined text-4xl font-black">
								{cta.icon}
							</span>
						</div>
						<h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-3xl">
							{cta.title}
						</h2>
						<p className="text-slate-400 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
							{cta.description}
						</p>
						<div className="flex flex-col sm:flex-row gap-6 mt-6 w-full sm:w-auto">
							<Link
								to="/contact"
								className="flex items-center justify-center gap-3 bg-primary hover:bg-[#D41C25] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-primary/30 active:scale-95"
							>
								<span>{cta.primaryButton}</span>
								<span className="material-symbols-outlined font-black text-xl">arrow_forward</span>
							</Link>
							<Link
								to="/contact"
								className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all active:scale-95"
							>
								{cta.secondaryButton}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesCTA;
