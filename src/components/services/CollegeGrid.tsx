import { Link } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";
import { type College, directLabel, feeRange } from "../../data/colleges";

const tones = [
	"from-sky-700 via-slate-800 to-slate-950",
	"from-indigo-600 via-blue-900 to-slate-950",
	"from-teal-700 via-slate-800 to-slate-950",
	"from-rose-700 via-slate-900 to-slate-950",
	"from-amber-600 via-orange-900 to-slate-950",
	"from-violet-700 via-slate-900 to-slate-950",
];

interface CollegeGridProps {
	items: Array<College>;
}

const CollegeGrid = ({ items }: CollegeGridProps): FunctionComponent => {
	if (items.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
						Admissions 2026
					</p>
					<h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
						Colleges
					</h3>
				</div>
				<p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
					Showing {items.length} {items.length === 1 ? "college" : "colleges"}
				</p>
			</div>
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
				{items.map((college, index) => {
					const admission = directLabel(college);
					return (
						<article
							key={college.slug}
							className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 dark:border-slate-800 dark:bg-slate-900/70"
						>
							<div
								className={`relative flex h-36 items-end bg-gradient-to-br px-6 pb-5 ${tones[index % tones.length]}`}
							>
								<span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
									Engineering
								</span>
								<p className="relative text-3xl font-black tracking-tight text-white">
									{college.shortName}
								</p>
							</div>
							<div className="flex flex-1 flex-col gap-4 p-6">
								<div>
									<h4 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
										{college.name}
									</h4>
									<p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
										{college.location}
									</p>
									{college.accreditation ? (
										<p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
											{college.accreditation}
										</p>
									) : null}
								</div>
								<div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-800/60">
									<p className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
										<span className="material-symbols-outlined text-base text-slate-400">
											school
										</span>
										{college.programs.length > 0
											? `${college.programs.length} courses`
											: "Course list on request"}
									</p>
									<p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
										<span className="material-symbols-outlined text-base text-slate-400">
											payments
										</span>
										Total fee: {feeRange(college)}
									</p>
									<p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
										<span className="material-symbols-outlined text-base text-slate-400">
											verified
										</span>
										Without JEE / WBJEE: {admission}
									</p>
								</div>
								<Link
									className="mt-auto flex items-center justify-center gap-2 rounded-2xl bg-rose-50 py-3.5 text-base font-black text-primary transition-colors hover:bg-primary hover:text-white dark:bg-rose-950/40"
									params={{ slug: college.slug }}
									to="/colleges/$slug"
								>
									View Full Details
									<span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
										arrow_forward
									</span>
								</Link>
							</div>
						</article>
					);
				})}
			</div>
			<p className="text-sm font-medium text-slate-500 dark:text-slate-400">
				More colleges will be added soon. Fees are from the Admission 2026
				B.Tech sheet.
			</p>
		</div>
	);
};

export default CollegeGrid;
