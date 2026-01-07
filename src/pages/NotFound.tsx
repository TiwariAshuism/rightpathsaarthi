import { Link } from "@tanstack/react-router";
import { DotLottiePlayer } from "@dotlottie/react-player";
import type { FunctionComponent } from "../common/types";

export const NotFound = (): FunctionComponent => {
	return (
		<div className="font-display bg-white dark:bg-[#101922] text-[#111418] dark:text-white overflow-x-hidden antialiased min-h-screen flex flex-col items-center justify-center px-6 relative">
			{/* Mesh Gradient Background */}
			<div className="absolute inset-0 mesh-gradient opacity-20 dark:opacity-10 pointer-events-none"></div>

			<main className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center py-20">
				{/* 404 Hero Section */}
				<div className="flex flex-col items-center animate-page-enter">
					<div className="relative mb-8 group">
						<div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
						<div className="relative flex h-80 w-80 items-center justify-center rounded-[3rem] p-4 overflow-hidden transform hover:scale-105 transition-transform duration-700">
							<DotLottiePlayer
								src="/images/404.lottie"
								autoplay
								loop
								style={{ width: "100%", height: "100%" }}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-6 max-w-2xl">
						<h1 className="text-primary text-[100px] lg:text-[140px] font-black leading-none tracking-tighter drop-shadow-2xl">
							404
						</h1>
						<h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
							Page off the syllabus?
						</h2>
						<p className="text-xl lg:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
							Looks like you've wandered into an empty classroom. The page
							you're looking for might have been moved or doesn't exist in our curriculum.
						</p>
					</div>

					<div className="mt-12 flex flex-col sm:flex-row gap-6">
						<Link
							to="/"
							className="flex h-16 min-w-[240px] items-center justify-center rounded-2xl bg-primary px-10 text-xl font-black text-white shadow-2xl shadow-primary/25 transition-all hover:bg-[#D41C25] hover:-translate-y-1 active:scale-95"
						>
							Back to Homepage
						</Link>
						<Link
							to="/contact"
							className="flex h-16 min-w-[240px] items-center justify-center rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent px-10 text-xl font-black text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-white/5 hover:-translate-y-1 active:scale-95"
						>
							Contact Support
						</Link>
					</div>
				</div>

				{/* Suggested Links */}
				<div className="mt-32 w-full grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60 hover:opacity-100 transition-opacity duration-500">
					{['Universities', 'Exam Prep', 'Career Guide', 'Help Center'].map((item, i) => (
						<Link
							key={i}
							to="/"
							className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-bold hover:text-primary dark:hover:text-primary hover:border-primary/30 transition-all text-sm uppercase tracking-widest"
						>
							{item}
						</Link>
					))}
				</div>
			</main>
		</div>
	);
};
