import { Link } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";
import homeData from "../../data/home.json";

export const CTA = (): FunctionComponent => {
	const { cta } = homeData;

	return (
		<section className="w-full px-4 md:px-10 lg:px-40 py-20 bg-accent">
			<div className="max-w-[800px] w-full mx-auto text-center flex flex-col items-center gap-6 animate-fade-in-up">
				<h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
					{cta.title}
				</h2>
				<p className="text-white/90 text-lg max-w-2xl">{cta.description}</p>
				<div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
					<Link
						to="/contact"
						className="flex items-center justify-center h-12 px-8 rounded-lg bg-white text-accent text-base font-bold hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
					>
						{cta.buttons.primary}
					</Link>
					<Link
						to="/about"
						className="flex items-center justify-center h-12 px-8 rounded-lg border-2 border-white/30 text-white text-base font-bold hover:bg-white/10 transition-colors"
					>
						{cta.buttons.secondary}
					</Link>
				</div>
			</div>
		</section>
	);
};
