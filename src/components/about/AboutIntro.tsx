import type { FunctionComponent } from "../../common/types";
import aboutData from "../../data/about.json";

export const AboutIntro = (): FunctionComponent => {
	const { intro } = aboutData;

	return (
		<section className="bg-white dark:bg-[#101922] py-16 px-4 md:px-10">
			<div className="max-w-[800px] mx-auto text-center flex flex-col gap-6">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
					{intro.title}
				</h2>
				<p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
					{intro.description}
				</p>
			</div>
		</section>
	);
};
