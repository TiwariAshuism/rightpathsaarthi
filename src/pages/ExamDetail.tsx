import { Link, useParams } from "@tanstack/react-router";
import type { FunctionComponent } from "../common/types";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/layout/SEO";
import { allExams } from "../data/exams";
import { NotFound } from "./NotFound";

const banners: Record<string, string> = {
	wbjee: "from-sky-600 via-sky-800 to-slate-950",
	comedk: "from-indigo-500 via-blue-800 to-slate-950",
	srmjeee: "from-amber-500 via-orange-800 to-slate-950",
	iemjee: "from-emerald-600 via-teal-800 to-slate-950",
	viteee: "from-violet-600 via-purple-900 to-slate-950",
	"jee-main": "from-blue-700 via-slate-800 to-slate-950",
	neet: "from-emerald-700 via-teal-900 to-slate-950",
};

const helpPoints = [
	"Shortlist colleges and branches that match your score and preferences.",
	"Read cut-offs, seat matrix and counselling rounds with you.",
	"Plan documents, choice filling and the admission timeline.",
];

export const ExamDetail = (): FunctionComponent => {
	const { slug } = useParams({ from: "/exams/$slug" });
	const exam = allExams.find((item) => item.slug === slug);

	if (!exam) {
		return <NotFound />;
	}

	return (
		<div className="min-h-screen bg-white text-slate-900 dark:bg-[#101922] dark:text-white">
			<SEO
				description={`${exam.fullName}. ${exam.summary}`}
				keywords={`${exam.shortName}, ${exam.title}, ${exam.body}, admission counselling, RightPath Saarthi`}
				title={`${exam.title} counselling`}
			/>
			<Header />
			<main className="px-6 py-12 lg:px-40 lg:py-16">
				<div className="mx-auto flex max-w-5xl flex-col gap-10">
					<Link
						className="inline-flex w-fit items-center gap-1 text-sm font-bold text-primary"
						to="/services"
					>
						<span className="material-symbols-outlined text-base">
							arrow_back
						</span>
						Back to courses
					</Link>

					<section
						className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br px-8 py-10 text-white ${banners[exam.slug] ?? "from-slate-700 to-slate-950"}`}
					>
						<span
							className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${
								exam.category === "Medical" ? "bg-emerald-500" : "bg-rose-500"
							}`}
						>
							{exam.category}
						</span>
						<h1 className="mt-4 text-4xl font-black tracking-tight lg:text-6xl">
							{exam.title}
						</h1>
						<p className="mt-3 max-w-3xl text-lg font-medium text-white/85">
							{exam.fullName}
						</p>
						<p className="mt-2 text-sm font-semibold text-white/70">
							{exam.body}
						</p>
					</section>

					<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{ icon: "calendar_month", label: "Exam date", value: exam.date },
							{ icon: "schedule", label: "Mode", value: exam.mode },
							{ icon: "payments", label: "Fee", value: exam.fee },
							{ icon: "groups", label: exam.reachLabel, value: exam.reach },
						].map((fact) => (
							<div
								key={fact.label}
								className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/60"
							>
								<span className="material-symbols-outlined text-primary">
									{fact.icon}
								</span>
								<p className="mt-3 text-xs font-black uppercase tracking-wider text-slate-500">
									{fact.label}
								</p>
								<p className="mt-1 text-base font-black leading-snug">
									{fact.value}
								</p>
							</div>
						))}
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-2xl font-black tracking-tight">
							About this exam
						</h2>
						<p className="text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
							{exam.summary}
						</p>
					</section>

					<section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<div className="rounded-[1.75rem] border border-slate-200 p-6 dark:border-slate-800">
							<h2 className="text-xl font-black">Who can apply</h2>
							<ul className="mt-4 flex flex-col gap-3">
								{exam.eligibility.map((point) => (
									<li
										key={point}
										className="flex gap-3 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300"
									>
										<span className="material-symbols-outlined mt-0.5 text-base text-primary">
											check_circle
										</span>
										{point}
									</li>
								))}
							</ul>
						</div>
						<div className="rounded-[1.75rem] border border-slate-200 p-6 dark:border-slate-800">
							<h2 className="text-xl font-black">Exam pattern</h2>
							<ul className="mt-4 flex flex-col gap-3">
								{exam.pattern.map((point) => (
									<li
										key={point}
										className="flex gap-3 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300"
									>
										<span className="material-symbols-outlined mt-0.5 text-base text-primary">
											menu_book
										</span>
										{point}
									</li>
								))}
							</ul>
						</div>
					</section>

					<section className="rounded-[1.75rem] border border-slate-200 p-6 dark:border-slate-800">
						<h2 className="text-xl font-black">2026 schedule</h2>
						<dl className="mt-4 divide-y divide-slate-100 dark:divide-slate-800">
							{exam.schedule.map((row) => (
								<div
									key={row.label}
									className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between"
								>
									<dt className="text-sm font-bold text-slate-500">
										{row.label}
									</dt>
									<dd className="text-sm font-black sm:text-right">
										{row.value}
									</dd>
								</div>
							))}
						</dl>
						{exam.note ? (
							<p className="mt-2 text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">
								{exam.note}
							</p>
						) : null}
					</section>

					<section className="rounded-[1.75rem] bg-slate-50 p-6 dark:bg-slate-900/50">
						<h2 className="text-xl font-black">How RightPath Saarthi helps</h2>
						<ul className="mt-4 flex flex-col gap-3">
							{helpPoints.map((point) => (
								<li
									key={point}
									className="flex gap-3 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300"
								>
									<span className="material-symbols-outlined mt-0.5 text-base text-primary">
										support_agent
									</span>
									{point}
								</li>
							))}
						</ul>
						<div className="mt-6 flex flex-col gap-3 sm:flex-row">
							<Link
								className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-black text-white transition-colors hover:bg-[#D41C25]"
								to="/contact"
							>
								Book free counselling
							</Link>
							<a
								className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 text-sm font-black transition-colors hover:border-primary hover:text-primary dark:border-slate-700"
								href={exam.officialUrl}
								rel="noopener noreferrer"
								target="_blank"
							>
								Official site · {exam.officialLabel}
							</a>
						</div>
					</section>

					<p className="text-xs font-medium leading-relaxed text-slate-400">
						Dates, fees and pattern notes are from the 2026 notices of the
						conducting body. Confirm the latest instruction on{" "}
						{exam.officialLabel} before you apply or attend counselling.
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
};
