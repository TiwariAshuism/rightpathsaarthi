import { useState } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import type { FunctionComponent } from "../../common/types";
import homeData from "../../data/home.json";

export const EnquiryForm = (): FunctionComponent => {
	const { enquiryForm } = homeData;
	// ... (rest of state remains same)
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		country: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleNext = (e: React.FormEvent) => {
		e.preventDefault();
		if (currentStep < 3) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			setCurrentStep(3);
		}, 1500);
	};

	return (
		<section className="w-full px-4 md:px-10 lg:px-40 py-16 lg:py-24 bg-white dark:bg-[#101922] transition-colors duration-1000 relative overflow-hidden">
			{/* Background accent */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

			<div className="max-w-[800px] w-full mx-auto flex flex-col items-center gap-12 relative z-10">
				<div className="text-center animate-fade-in-up">
					<span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
						{enquiryForm.tagline}
					</span>
					<h2 className="font-display text-text-light dark:text-text-dark text-3xl md:text-5xl font-black leading-tight mb-4">
						{enquiryForm.title}
					</h2>
					<p className="text-slate-600 dark:text-slate-400 text-lg max-w-[600px] mx-auto">
						{enquiryForm.description}
					</p>
				</div>

				<div className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-primary/5">
					{/* Progress Indicator */}
					<div className="flex justify-between items-center mb-12 relative px-4">
						<div className="absolute top-4 left-0 right-0 h-[2px] bg-slate-200 dark:bg-slate-700 -z-10 mx-12"></div>
						<div
							className="absolute top-4 left-0 h-[2px] bg-primary -z-10 transition-all duration-500 ease-out mx-12"
							style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
						></div>

						{[1, 2, 3].map((step) => (
							<div key={step} className="flex flex-col items-center gap-3">
								<div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${currentStep >= step
									? "bg-primary text-white scale-110 shadow-lg shadow-primary/30"
									: "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
									}`}>
									{currentStep > step ? (
										<span className="material-symbols-outlined text-xl">check</span>
									) : (
										step
									)}
								</div>
								<p className={`text-xs font-bold uppercase tracking-widest transition-colors duration-500 ${currentStep >= step ? "text-primary" : "text-slate-400 dark:text-slate-600"
									}`}>
									{enquiryForm.steps[step - 1]}
								</p>
							</div>
						))}
					</div>

					{/* Form Steps */}
					<div className="relative overflow-hidden min-h-[300px]">
						{currentStep === 1 && (
							<form key="step1" onSubmit={handleNext} className="flex flex-col gap-6 animate-fade-in-right">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label className="block text-sm font-bold text-text-light dark:text-text-dark ml-1" htmlFor="name">
											{enquiryForm.fields.name}
										</label>
										<input
											required
											className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
											id="name"
											placeholder="Jane Smith"
											type="text"
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										/>
									</div>
									<div className="space-y-2">
										<label className="block text-sm font-bold text-text-light dark:text-text-dark ml-1" htmlFor="email">
											{enquiryForm.fields.email}
										</label>
										<input
											required
											className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
											id="email"
											placeholder="jane@example.com"
											type="email"
											value={formData.email}
											onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										/>
									</div>
								</div>
								<button
									className="group mt-4 w-full h-14 px-8 rounded-2xl bg-primary hover:bg-[#D41C25] text-white text-lg font-black transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 overflow-hidden relative"
									type="submit"
								>
									<span className="relative z-10">{enquiryForm.button}</span>
									<span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
								</button>
							</form>
						)}

						{currentStep === 2 && (
							<form key="step2" onSubmit={handleSubmit} className="flex flex-col gap-6 animate-fade-in-right">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label className="block text-sm font-bold text-text-light dark:text-text-dark ml-1" htmlFor="phone">
											{enquiryForm.fields.phone}
										</label>
										<input
											required
											className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
											id="phone"
											placeholder="+91 99999 99999"
											type="tel"
											value={formData.phone}
											onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
										/>
									</div>
									<div className="space-y-2">
										<label className="block text-sm font-bold text-text-light dark:text-text-dark ml-1" htmlFor="country">
											{enquiryForm.fields.country}
										</label>
										<select
											required
											className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none"
											id="country"
											value={formData.country}
											onChange={(e) => setFormData({ ...formData, country: e.target.value })}
										>
											<option value="">Select Country</option>
											<option value="US">United States</option>
											<option value="UK">United Kingdom</option>
											<option value="CA">Canada</option>
											<option value="IN">India</option>
											<option value="AU">Australia</option>
										</select>
									</div>
								</div>
								<div className="flex flex-col md:flex-row gap-4 mt-4">
									<button
										onClick={handleBack}
										className="flex-1 h-14 px-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-white text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
										type="button"
									>
										<span className="material-symbols-outlined">arrow_back</span>
										Back
									</button>
									<button
										className="flex-[2] h-14 px-8 rounded-2xl bg-primary hover:bg-[#D41C25] text-white text-lg font-black transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
										type="submit"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<div className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
										) : (
											<>
												Complete Signup
												<span className="material-symbols-outlined">stars</span>
											</>
										)}
									</button>
								</div>
							</form>
						)}

						{currentStep === 3 && (
							<div key="step3" className="flex flex-col items-center text-center py-8 animate-fade-in-up">
								<div className="size-40 flex items-center justify-center mb-6">
									<DotLottiePlayer
										src="/images/success.lottie"
										autoplay
										loop={false}
										style={{ width: "100%", height: "100%" }}
									/>
								</div>
								<h3 className="text-3xl font-black mb-4">You're All Set!</h3>
								<p className="text-slate-600 dark:text-slate-400 text-lg max-w-sm">
									Thanks {formData.name.split(' ')[0]}! Our lead counselor will reach out to you within the next 24 hours.
								</p>
								<button
									onClick={() => setCurrentStep(1)}
									className="mt-8 text-primary font-bold hover:underline"
								>
									Submit another response
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
