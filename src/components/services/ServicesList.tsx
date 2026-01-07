import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { DotLottiePlayer } from "@dotlottie/react-player";

interface ServiceItem {
	title: string;
	description: string;
	image: string;
}

interface ServiceSection {
	id: string;
	title: string;
	icon: string;
	colorClass: string;
	items: ServiceItem[];
}

interface ServicesListProps {
	sections: ServiceSection[];
}

const ServicesList: React.FC<ServicesListProps> = ({ sections }) => {
	const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

	if (sections.length === 0) {
		return (
			<div className="flex-1 flex flex-col items-center justify-center py-24 text-center animate-fade-in-up">
				<div className="size-48 flex items-center justify-center mb-6">
					<DotLottiePlayer
						src="/images/empty.lottie"
						autoplay
						loop
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
				<h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
					No services found
				</h3>
				<p className="text-slate-500 font-medium">
					Try adjusting your search or filter criteria.
				</p>
			</div>
		);
	}

	return (
		<div
			ref={ref}
			className="flex-1 flex flex-col gap-20"
		>
			{sections.map((section, sIdx) => (
				<section
					key={section.id}
					className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
					style={{ transitionDelay: `${sIdx * 0.1}s` }}
				>
					<div className="flex items-center gap-4 mb-10">
						<div className={`size-12 rounded-xl flex items-center justify-center shadow-inner ${section.colorClass}`}>
							<span className="material-symbols-outlined text-3xl font-black">{section.icon}</span>
						</div>
						<h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
							{section.title}
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
						{section.items.map((item, index) => (
							<div
								key={index}
								className="group bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-primary/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
							>
								<div
									className="aspect-[16/10] w-full bg-cover bg-center relative transition-transform duration-700 group-hover:scale-110"
									style={{ backgroundImage: `url("${item.image}")` }}
								>
									<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8">
										<h3 className="text-white font-black text-xl leading-tight">
											{item.title}
										</h3>
									</div>
								</div>
								<div className="p-8 flex flex-col gap-4">
									<p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed line-clamp-3">
										{item.description}
									</p>
									<a
										className="text-primary font-black text-base flex items-center gap-2 group/btn transition-all mt-4"
										href="#"
									>
										<span>View Details</span>
										<span className="material-symbols-outlined text-xl transition-transform group-hover/btn:translate-x-2">
											arrow_forward
										</span>
									</a>
								</div>
							</div>
						))}
					</div>
				</section>
			))}
		</div>
	);
};

export default ServicesList;
