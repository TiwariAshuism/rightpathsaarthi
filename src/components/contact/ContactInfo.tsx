import type { FunctionComponent } from "../../common/types";
import contactData from "../../data/contact.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const ContactInfo = (): FunctionComponent => {
	const { contactInfo } = contactData;
	const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

	return (
		<div ref={ref} className="lg:col-span-5 flex flex-col gap-10">
			{/* Info Cards */}
			<div className="flex flex-col gap-6">
				<h3 className={`text-[#111418] dark:text-white text-3xl font-black mb-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
					}`}>
					{contactInfo.title}
				</h3>
				{contactInfo.items.map((item, index) => (
					<div
						key={index}
						className={`flex items-center gap-6 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 hover:border-primary/50 transition-all duration-700 group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
							}`}
						style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
					>
						<div className="text-primary flex items-center justify-center rounded-2xl bg-primary/10 shrink-0 size-14 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-inner">
							<span className="material-symbols-outlined text-2xl">{item.icon}</span>
						</div>
						<div className="flex flex-col justify-center">
							<p className="text-[#111418] dark:text-white text-lg font-bold leading-tight mb-1">
								{item.label}
							</p>
							<p className="text-[#617589] dark:text-slate-400 text-base font-medium leading-normal">
								{item.value}
							</p>
						</div>
					</div>
				))}
			</div>
			{/* Map */}
			<div className={`w-full h-80 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800 relative bg-gray-200 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
				}`}>
				<iframe
					title="Location Map"
					src={contactInfo.mapEmbedUrl}
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
				></iframe>
			</div>
		</div>
	);
};
