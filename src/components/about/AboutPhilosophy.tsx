import type { FunctionComponent } from "../../common/types";
import aboutData from "../../data/about.json";

export const AboutPhilosophy = (): FunctionComponent => {
	const { philosophy } = aboutData;

	return (
		<section className="bg-white dark:bg-background-dark py-16 px-4 md:px-10">
			<div className="max-w-[1200px] mx-auto">
				<div className="flex flex-col lg:flex-row gap-12 items-start">
					{/* Left Content */}
					<div className="flex-1 flex flex-col gap-6">
						<h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
							{philosophy.title}
						</h2>
						<p className="text-lg text-slate-600 dark:text-slate-300">
							{philosophy.description}
						</p>
						<div className="grid gap-6 mt-4">
							{philosophy.cards.map((card, index) => (
								<div
									key={index}
									className="flex gap-5 p-6 rounded-xl border border-slate-100 dark:border-slate-800 bg-background-light dark:bg-[#15202b] shadow-sm"
								>
									<div className="shrink-0 flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
										<span className="material-symbols-outlined text-3xl">
											{card.icon}
										</span>
									</div>
									<div className="flex flex-col gap-2">
										<h3 className="text-xl font-bold text-slate-900 dark:text-white">
											{card.title}
										</h3>
										<p className="text-slate-600 dark:text-slate-300 leading-relaxed">
											{card.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* Right Image */}
					<div className="flex-1 w-full h-full min-h-[400px]">
						<div
							className="w-full h-full rounded-2xl bg-cover bg-center min-h-[500px]"
							data-alt="Team of counselors collaborating around a table"
							style={{ backgroundImage: `url("${philosophy.image}")` }}
						></div>
					</div>
				</div>
			</div>
		</section>
	);
};
