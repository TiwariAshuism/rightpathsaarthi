import type { FunctionComponent } from "../../common/types";
import contactData from "../../data/contact.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useMouseTilt } from "../../hooks/useMouseTilt";

export const ContactForm = (): FunctionComponent => {
	const { form } = contactData;
	const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
	const tiltRef = useMouseTilt<HTMLDivElement>({ max: 5, perspective: 1000, scale: 1.01 });

	return (
		<div ref={ref} className="lg:col-span-7">
			<div
				ref={tiltRef}
				className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white dark:border-slate-800 h-full transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
					}`}
			>
				<h3 className="text-[#111418] dark:text-white text-3xl font-black mb-8 tracking-tight">
					{form.title}
				</h3>
				<form className="flex flex-col gap-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className={`flex flex-col gap-2 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
							<label
								className="text-[#111418] dark:text-gray-200 text-sm font-bold ml-1"
								htmlFor="fullName"
							>
								{form.fields.fullName.label}
							</label>
							<input
								className="w-full h-14 rounded-2xl border border-[#d1d5db] dark:border-gray-700 bg-slate-50/50 dark:bg-slate-800/50 px-5 text-base text-[#111418] dark:text-white placeholder:text-[#9ca3af] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
								id="fullName"
								placeholder={form.fields.fullName.placeholder}
								type="text"
							/>
						</div>
						<div className={`flex flex-col gap-2 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
							<label
								className="text-[#111418] dark:text-gray-200 text-sm font-bold ml-1"
								htmlFor="email"
							>
								{form.fields.email.label}
							</label>
							<input
								className="w-full h-14 rounded-2xl border border-[#d1d5db] dark:border-gray-700 bg-slate-50/50 dark:bg-slate-800/50 px-5 text-base text-[#111418] dark:text-white placeholder:text-[#9ca3af] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
								id="email"
								placeholder={form.fields.email.placeholder}
								type="email"
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className={`flex flex-col gap-2 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
							<label
								className="text-[#111418] dark:text-gray-200 text-sm font-bold ml-1"
								htmlFor="phone"
							>
								{form.fields.phone.label}
							</label>
							<input
								className="w-full h-14 rounded-2xl border border-[#d1d5db] dark:border-gray-700 bg-slate-50/50 dark:bg-slate-800/50 px-5 text-base text-[#111418] dark:text-white placeholder:text-[#9ca3af] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
								id="phone"
								placeholder={form.fields.phone.placeholder}
								type="tel"
							/>
						</div>
						<div className={`flex flex-col gap-2 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
							<label
								className="text-[#111418] dark:text-gray-200 text-sm font-bold ml-1"
								htmlFor="subject"
							>
								{form.fields.subject.label}
							</label>
							<div className="relative">
								<select
									className="w-full h-14 rounded-2xl border border-[#d1d5db] dark:border-gray-700 bg-slate-50/50 dark:bg-slate-800/50 px-5 text-base text-[#111418] dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none appearance-none transition-all cursor-pointer"
									id="subject"
								>
									{form.fields.subject.options.map((option, index) => (
										<option key={index} className="dark:bg-[#1a2632]">
											{option}
										</option>
									))}
								</select>
								<span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#617589]">
									expand_more
								</span>
							</div>
						</div>
					</div>
					<div className={`flex flex-col gap-2 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
						<label
							className="text-[#111418] dark:text-gray-200 text-sm font-bold ml-1"
							htmlFor="message"
						>
							{form.fields.message.label}
						</label>
						<textarea
							className="w-full rounded-2xl border border-[#d1d5db] dark:border-gray-700 bg-slate-50/50 dark:bg-slate-800/50 p-5 text-base text-[#111418] dark:text-white placeholder:text-[#9ca3af] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
							id="message"
							placeholder={form.fields.message.placeholder}
							rows={5}
						></textarea>
					</div>
					<div className={`pt-4 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
						<button
							className="group w-full md:w-auto min-w-[200px] h-14 rounded-2xl bg-primary hover:bg-[#D41C25] text-white text-lg font-black shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-3 active:scale-95"
							type="button"
						>
							<span>{form.buttonText}</span>
							<span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">send</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
