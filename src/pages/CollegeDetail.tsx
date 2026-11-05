import { Link, useParams } from "@tanstack/react-router";
import type { FunctionComponent } from "../common/types";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/layout/SEO";
import { allColleges, directLabel, feeRange } from "../data/colleges";
import { NotFound } from "./NotFound";

export const CollegeDetail = (): FunctionComponent => {
	const { slug } = useParams({ from: "/colleges/$slug" });
	const college = allColleges.find((item) => item.slug === slug);

	if (!college) {
		return <NotFound />;
	}

	const sharedEligibility =
		college.programs.length > 0 &&
		college.programs.every(
			(program) => program.eligibility === college.programs[0]?.eligibility
		)
			? college.programs[0]?.eligibility
			: "";

	return (
		<div className="min-h-screen bg-white text-slate-900 dark:bg-[#101922] dark:text-white">
			<SEO
				description={`${college.name}, ${college.location}. B.Tech fees, eligibility and direct admission for 2026.`}
				keywords={`${college.name}, B.Tech admission, ${college.location}, RightPath Saarthi`}
				title={`${college.name} admission`}
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

					<section className="rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-950 px-8 py-10 text-white">
						<span className="inline-flex rounded-full bg-rose-500 px-3 py-1 text-xs font-black uppercase tracking-wide">
							Engineering
						</span>
						<h1 className="mt-4 text-4xl font-black tracking-tight lg:text-5xl">
							{college.name}
						</h1>
						<p className="mt-3 text-lg font-medium text-white/80">
							{college.location}
						</p>
						{college.accreditation ? (
							<p className="mt-1 text-sm font-semibold text-white/70">
								{college.accreditation}
							</p>
						) : null}
					</section>

					<section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
						{[
							{
								icon: "payments",
								label: "Total course fee",
								value: feeRange(college),
							},
							{
								icon: "school",
								label: "Courses listed",
								value:
									college.programs.length > 0
										? String(college.programs.length)
										: "On request",
							},
							{
								icon: "verified",
								label: "Without JEE / WBJEE",
								value: directLabel(college),
							},
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

					{college.programs.length === 0 ? (
						<section className="rounded-[1.75rem] border border-slate-200 p-6 dark:border-slate-800">
							<h2 className="text-xl font-black">Courses and fees</h2>
							<p className="mt-3 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
								This college is on the 2026 B.Tech list
								{college.directAdmission
									? ", and admission is possible without JEE Main or WBJEE"
									: ""}
								. Course-wise fees were not printed on the sheet. RightPath
								Saarthi can share the current offer.
							</p>
						</section>
					) : (
						<section className="flex flex-col gap-4">
							<h2 className="text-2xl font-black tracking-tight">
								Courses and fees
							</h2>
							{sharedEligibility ? (
								<p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
									Eligibility: {sharedEligibility}
								</p>
							) : null}
							<div className="flex flex-col gap-4">
								{college.programs.map((program) => (
									<article
										key={program.course}
										className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800"
									>
										<div className="flex flex-wrap items-start justify-between gap-3">
											<h3 className="text-lg font-black">{program.course}</h3>
											<span
												className={`rounded-full px-3 py-1 text-xs font-black uppercase ${
													program.directAdmission
														? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
														: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
												}`}
											>
												{program.directAdmission
													? "Direct admission"
													: "Through JEE / WBJEE"}
											</span>
										</div>
										<dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
											<div>
												<dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
													Total course fee
												</dt>
												<dd className="text-sm font-black">
													{program.totalFee}
												</dd>
											</div>
											<div>
												<dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
													At admission / 1st semester
												</dt>
												<dd className="text-sm font-black">
													{program.admissionFee}
												</dd>
											</div>
										</dl>
										{sharedEligibility ? null : (
											<p className="mt-3 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
												{program.eligibility}
											</p>
										)}
									</article>
								))}
							</div>
							{college.feeNote ? (
								<p className="text-sm font-medium text-slate-500">
									{college.feeNote}
								</p>
							) : null}
						</section>
					)}

					<section className="rounded-[1.75rem] bg-slate-50 p-6 dark:bg-slate-900/50">
						<h2 className="text-xl font-black">Talk to a counsellor</h2>
						<p className="mt-2 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
							RightPath Saarthi can check your marks against these courses and
							walk you through the 2026 admission.
						</p>
						<Link
							className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-black text-white transition-colors hover:bg-[#D41C25]"
							to="/contact"
						>
							Book free counselling
						</Link>
					</section>

					<p className="text-xs font-medium leading-relaxed text-slate-400">
						Taken from the Admission 2026 B.Tech sheet. Confirm the latest fee
						and eligibility with the college before you pay.
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
};
