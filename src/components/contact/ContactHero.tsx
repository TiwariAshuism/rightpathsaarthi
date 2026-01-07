import type { FunctionComponent } from "../../common/types";
import contactData from "../../data/contact.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const ContactHero = (): FunctionComponent => {
	const { hero } = contactData;
	const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

	return (
		<div ref={ref} className="px-4 md:px-40 pt-20 pb-12 bg-white dark:bg-[#101922] flex justify-center relative overflow-hidden transition-colors duration-1000">
			{/* Decorative Blobs */}
			<div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
			<div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-float"></div>

			<div className={`w-full max-w-[1100px] flex flex-col gap-6 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
				}`}>
				<span className="text-primary font-bold text-sm tracking-widest uppercase mb-1">
					Get in Touch
				</span>
				<h1 className="text-[#111418] dark:text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em] drop-shadow-sm">
					{hero.title}
				</h1>
				<p className="text-[#617589] dark:text-slate-400 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
					{hero.description}
				</p>
			</div>
		</div>
	);
};
