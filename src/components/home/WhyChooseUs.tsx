import type { FunctionComponent } from "../../common/types";
import homeData from "../../data/home.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useMouseTilt } from "../../hooks/useMouseTilt";

export const WhyChooseUs = (): FunctionComponent => {
	const { whyChooseUs } = homeData;
	const { ref, isVisible } = useScrollReveal();
	const cardRef1 = useMouseTilt({ max: 10, perspective: 1000, scale: 1.02 });
	const cardRef2 = useMouseTilt({ max: 10, perspective: 1000, scale: 1.02 });
	const cardRef3 = useMouseTilt({ max: 10, perspective: 1000, scale: 1.02 });

	return (
		<section ref={ref} className="w-full px-4 md:px-10 lg:px-40 py-20 bg-white dark:bg-[#101922] relative overflow-hidden">
			{/* Decorative background blobs */}
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

			<div className="max-w-[1280px] w-full mx-auto relative z-10">
				<div className={`flex flex-col gap-4 text-center items-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}>
					<span className="text-primary font-bold text-sm tracking-wider uppercase">
						{whyChooseUs.tagline}
					</span>
					<h2 className="text-[#111418] dark:text-white text-3xl md:text-5xl font-black leading-tight max-w-[800px]">
						{whyChooseUs.title}
					</h2>
					<p className="text-slate-600 dark:text-slate-400 text-lg max-w-[700px]">
						{whyChooseUs.description}
					</p>
				</div>

				{/* Bento Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
					{/* Main Large Card */}
					<div
						ref={cardRef1 as any}
						className={`md:col-span-7 relative group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-1000 bg-white dark:bg-slate-900 shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
							}`}
					>
						<div
							className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 dark:opacity-20 translate-z-0"
							style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_B9risfZ_HEGAf8PG8QvxiZUmcvq4SgyR7uhttMJNDB8xWtCPNp-JeGT5KMsuI4Ig0UJj4ogqaizxBebLcqODiDZX7BmexpjF6OzrR2JIOmSyXX4nHIgPKUkMPDPbqolUcWEAi8PVDR5RrjgQOiG3edsCjuwyHx_06X5LKdlm2W3UEHDs7fcdoqp00uXky2a6lO3ccwQfewF0jnAuSzK-uQBSRCTZD3dTW4JcXhLk2SQsdCv7AnBaOJtI1UgXZ_RNxkwePbbMksU")' }}
						></div>
						<div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent"></div>
						<div className="relative h-full p-8 md:p-12 flex flex-col justify-end">
							<div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/30">
								<span className="material-symbols-outlined">psychology</span>
							</div>
							<h3 className="text-2xl md:text-3xl font-bold mb-4">{whyChooseUs.features[0]?.title}</h3>
							<p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg leading-relaxed">{whyChooseUs.features[0]?.description}</p>
						</div>
					</div>

					{/* Top Right Card */}
					<div
						ref={cardRef2 as any}
						className={`md:col-span-5 relative group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-1000 bg-slate-50 dark:bg-slate-900/50 shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
							}`}
						style={{ transitionDelay: "0.2s" }}
					>
						<div className="h-full p-8 flex flex-col justify-center">
							<div className="size-10 rounded-xl bg-secondary flex items-center justify-center text-white mb-6 shadow-lg shadow-secondary/30">
								<span className="material-symbols-outlined">trending_up</span>
							</div>
							<h3 className="text-xl font-bold mb-3">{whyChooseUs.features[1]?.title}</h3>
							<p className="text-slate-600 dark:text-slate-400 leading-relaxed">{whyChooseUs.features[1]?.description}</p>
						</div>
					</div>

					{/* Bottom Right Card */}
					<div
						ref={cardRef3 as any}
						className={`md:col-span-5 relative group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-1000 bg-primary/[0.03] dark:bg-primary/[0.05] shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
							}`}
						style={{ transitionDelay: "0.4s" }}
					>
						<div className="h-full p-8 flex flex-col justify-center">
							<div className="size-10 rounded-xl bg-accent flex items-center justify-center text-white mb-6 shadow-lg shadow-accent/30">
								<span className="material-symbols-outlined">verified</span>
							</div>
							<h3 className="text-xl font-bold mb-3">{whyChooseUs.features[2]?.title}</h3>
							<p className="text-slate-600 dark:text-slate-400 leading-relaxed">{whyChooseUs.features[2]?.description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
