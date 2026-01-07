import { Link } from "@tanstack/react-router";
import { DotLottiePlayer } from "@dotlottie/react-player";
import type { FunctionComponent } from "../../common/types";
import { Typewriter } from "../utils/Typewriter";
import { Parallax } from "../utils/Parallax";
import homeData from "../../data/home.json";

export const Hero = (): FunctionComponent => {
	const { hero } = homeData;

	return (
		<section className="w-full px-4 md:px-10 lg:px-40 py-12 lg:py-20 flex justify-center bg-white dark:bg-[#101922] overflow-hidden mesh-gradient relative">
			<div className="max-w-[1280px] w-full relative z-10">
				<div className="@container">
					<div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
						<div className="flex flex-col gap-6 lg:w-1/2 lg:pr-10 animate-fade-in-up z-10 relative">
							<div className="flex flex-col gap-4 text-left">
								<h1 className="text-[#111418] dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em] min-h-[3.3em] sm:min-h-[2.2em] lg:min-h-[2.2em]">
									<Typewriter
										text={hero.typewriterTexts}
										speed={50}
										waitBeforeDelete={2000}
										loop={true}
									/>
								</h1>
								<h2 className="text-[#111418]/80 dark:text-slate-300 text-lg font-normal leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
									{hero.subtitle}
								</h2>
							</div>
							<div className="flex flex-wrap gap-3 mt-2 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
								<Link
									to="/contact"
									className="group relative flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-[#D41C25] text-white text-base font-bold tracking-[0.015em] transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 overflow-hidden"
								>
									<span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full animate-spotlight pointer-events-none"></span>
									<span className="truncate relative z-10">{hero.ctaButtons.primary}</span>
								</Link>
								<Link
									to="/about"
									className="flex items-center justify-center rounded-lg h-12 px-6 bg-[#f0f2f4] hover:bg-[#e0e2e4] dark:bg-slate-800 dark:hover:bg-slate-700 text-[#111418] dark:text-white text-base font-bold tracking-[0.015em] transition-all hover:scale-105 active:scale-95"
								>
									<span className="truncate">{hero.ctaButtons.secondary}</span>
								</Link>
							</div>
							<div className="pt-6 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
								<div className="flex -space-x-2">
									<div
										className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-cover bg-center hover:scale-110 transition-transform duration-300"
										role="img"
										aria-label="Student Avatar 1"
										style={{
											backgroundImage:
												'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABG6WVhZ97Kz4ZG6QEzUvysAuLjhq-xO7Q_8Vc53cDiE_bVXII4GPP_3ocj458WNQk1NUQ5gYW8sVOTTd2XKT2MQkqOM5lW7K6wU3P-T2RfDT6XPKCk7f53Om-lJJ0UOlep8WFcJHGQQDFcKcqqbC3NK3xXZQUBcirGpbnHyiJdG32NW1v0zOtvpKmQTWdO8eW534TdTBjI6O1Xa8O7C8f1KKvK0BS8_Mt54pCcCi_GxaxsirvKfWlrujBdewl0afFo_U1PK4W1sQ")',
										}}
									></div>
									<div
										className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-cover bg-center hover:scale-110 transition-transform duration-300"
										role="img"
										aria-label="Student Avatar 2"
										style={{
											backgroundImage:
												'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWdCalWdXAForvZLuhHrbtiojFeRoMJC5yoisRyq5FXQR88FJqf7lfA7jAqV0oEfTuAL3HFEVBlgQJXnSZTuZCqegUHmFF7xRFN5fthIAlFIm1po-NJ4gvdQuJOmF_1UBpkM6w_efkxcpe5s6yPGZ6pvk4xj1SExwVFXxD0RyIg79SLPGTWkQ1iTjvnbVCT9obCv83v_DBV2ZNIBkhh9GcTq3oL-APc5eqZlmcGp6W7I0OyQTJiVyhDr6GVa6gWB5x50XncpnWceQ")',
										}}
									></div>
									<div
										className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-cover bg-center hover:scale-110 transition-transform duration-300"
										role="img"
										aria-label="Student Avatar 3"
										style={{
											backgroundImage:
												'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAuMgKsUCSJAIP5PP5-4uX3PDu2rAnoJTAYkPXnBhrlIrUWqWWvMxc_nshaNmuodVan9jo-I5AC2XO4MwnA17HaTwKyBsc6JS-0f6575JDdhNCjZJI8opj3oUMDDNa4BplhHrqwfKfWMpvq48vADLHKQ6weOOW3_6j5uOLIMQ9fuKNKNBm9W2w_tAupThMnqrbQlOiYnuoUOFSSOTO9iNF_oEXShvBaub6QcGfVQMk-Zi26AgX8d3jqv1NCwynzffvmtbx2pw2mZxA")',
										}}
									></div>
								</div>
								<p>{hero.trustText}</p>
							</div>
						</div>
						<div
							className="w-full lg:w-1/2 animate-float"
						>
							<Parallax speed={-0.05}>
								<div className="w-full aspect-[4/3] bg-transparent rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 drop-shadow-2xl">
									<DotLottiePlayer
										src="/images/learning.lottie"
										autoplay
										loop
										style={{ width: "100%", height: "100%" }}
									/>
								</div>
							</Parallax>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
