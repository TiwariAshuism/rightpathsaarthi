import type { FunctionComponent } from "../../common/types";
import aboutData from "../../data/about.json";

export const AboutCTA = (): FunctionComponent => {
	const { cta } = aboutData;

	return (
		<section className="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark">
			<div className="max-w-[1200px] mx-auto rounded-2xl bg-primary px-6 py-16 md:px-20 text-center shadow-xl relative overflow-hidden">
				{/* Abstract decorative circles */}
				<div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
				<div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
				<div className="relative z-10 flex flex-col items-center gap-6">
					<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
						{cta.title}
					</h2>
					<p className="text-blue-100 text-lg max-w-2xl">{cta.description}</p>
					<button className="mt-4 flex items-center justify-center h-12 px-8 rounded-lg bg-white text-primary font-bold text-base hover:bg-slate-50 transition-colors shadow-lg">
						{cta.buttonText}
					</button>
				</div>
			</div>
		</section>
	);
};
