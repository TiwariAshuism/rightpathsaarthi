import { Link } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";
import type { Exam } from "../../data/exams";

const banners: Record<string, string> = {
	wbjee: "from-sky-600 via-sky-800 to-slate-950",
	comedk: "from-indigo-500 via-blue-800 to-slate-950",
	srmjeee: "from-amber-500 via-orange-800 to-slate-950",
	iemjee: "from-emerald-600 via-teal-800 to-slate-950",
	viteee: "from-violet-600 via-purple-900 to-slate-950",
	"jee-main": "from-blue-700 via-slate-800 to-slate-950",
	neet: "from-emerald-700 via-teal-900 to-slate-950",
};

interface ExamGridProps {
	items: Array<Exam>;
}

const ExamGrid = ({ items }: ExamGridProps): FunctionComponent => {
	if (items.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
						Counselling
					</p>
					<h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
						Entrance Exams
					</h3>
				</div>
				<p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
					Showing {items.length} {items.length === 1 ? "exam" : "exams"}
				</p>
			</div>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
				{items.map((exam) => (
					<article
						key={exam.slug}
						className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 dark:border-slate-800 dark:bg-slate-900/70"
					>
						<div
							className={`relative flex h-40 items-end overflow-hidden bg-gradient-to-br px-6 pb-5 ${banners[exam.slug] ?? "from-slate-700 to-slate-950"}`}
						>
							<div className="absolute -right-6 -top-8 text-7xl font-black tracking-tight text-white/10">
								{exam.shortName}
							</div>
							<span
								className={`absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide text-white ${
									exam.category === "Medical" ? "bg-emerald-500" : "bg-rose-500"
								}`}
							>
								{exam.category}
							</span>
							<p className="relative text-4xl font-black tracking-tight text-white">
								{exam.shortName}
							</p>
						</div>
						<div className="flex flex-1 flex-col gap-4 p-6">
							<div>
								<h4 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
									{exam.title}
								</h4>
								<p className="mt-1 line-clamp-2 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
									{exam.fullName}
								</p>
								<p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
									{exam.body}
								</p>
							</div>
							<div className="flex flex-wrap gap-2">
								<span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
									<span className="material-symbols-outlined text-base text-primary">
										calendar_month
									</span>
									{exam.date}
								</span>
								<span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
									<span className="material-symbols-outlined text-base text-primary">
										schedule
									</span>
									{exam.mode}
								</span>
							</div>
							<div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-800/60">
								<p className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
									<span className="material-symbols-outlined text-base text-slate-400">
										groups
									</span>
									{exam.reachLabel}: {exam.reach}
								</p>
								<p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
									<span className="material-symbols-outlined text-base text-slate-400">
										payments
									</span>
									Fee: {exam.fee}
								</p>
							</div>
							<Link
								className="mt-auto flex items-center justify-center gap-2 rounded-2xl bg-rose-50 py-3.5 text-base font-black text-primary transition-colors hover:bg-primary hover:text-white dark:bg-rose-950/40"
								params={{ slug: exam.slug }}
								to="/exams/$slug"
							>
								View Full Details
								<span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
									arrow_forward
								</span>
							</Link>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};

export default ExamGrid;
