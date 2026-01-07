import React from "react";
import data from "../../data/services.json";

const ServicesTestimonials: React.FC = () => {
	const { testimonials } = data;

	return (
		<section
			className="mt-8 animate-fade-in-up"
			style={{ animationDelay: "0.3s" }}
		>
			<div className="bg-white dark:bg-[#2a1a1a] rounded-2xl p-8 border border-gray-100 dark:border-[#332222] shadow-sm">
				<h3 className="text-xl font-bold mb-6 text-[#1b0e0e] dark:text-white">
					{testimonials.title}
				</h3>
				<div className="grid md:grid-cols-2 gap-6">
					{testimonials.items.map((item, index) => (
						<div
							key={index}
							className="bg-gray-50 dark:bg-[#221515] p-6 rounded-xl relative"
						>
							<span className="material-symbols-outlined text-4xl text-primary/20 absolute top-4 right-4">
								format_quote
							</span>
							<p className="text-sm italic text-gray-600 dark:text-gray-400 mb-4">
								"{item.quote}"
							</p>
							<div className="flex items-center gap-3">
								<div
									className="size-10 rounded-full bg-gray-300 bg-cover bg-center"
									style={{ backgroundImage: `url("${item.image}")` }}
								></div>
								<div>
									<p className="font-bold text-sm text-[#1b0e0e] dark:text-white">
										{item.name}
									</p>
									<p className="text-xs text-gray-500">{item.role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesTestimonials;
