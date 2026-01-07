import React, { useState, useMemo } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/layout/SEO";
import ServicesHero from "../components/services/ServicesHero";
import ServicesFilter from "../components/services/ServicesFilter";
import ServicesList from "../components/services/ServicesList";
import ServicesTestimonials from "../components/services/ServicesTestimonials";
import ServicesCTA from "../components/services/ServicesCTA";
import data from "../data/services.json";

const Services: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredSections = useMemo(() => {
		// 1. Filter by Category
		let sections = data.sections;
		if (activeCategory !== "all") {
			sections = sections.filter((section) => section.id === activeCategory);
		}

		// 2. Filter by Search Query
		if (!searchQuery.trim()) {
			return sections;
		}

		const lowerQuery = searchQuery.toLowerCase();

		return sections
			.map((section) => {
				// Filter items within the section
				const filteredItems = section.items.filter(
					(item) =>
						item.title.toLowerCase().includes(lowerQuery) ||
						item.description.toLowerCase().includes(lowerQuery)
				);

				// Return section with filtered items
				return {
					...section,
					items: filteredItems,
				};
			})
			.filter((section) => section.items.length > 0); // Remove empty sections
	}, [searchQuery, activeCategory]);

	return (
		<>
			<SEO
				title="Our Services"
				description="Explore our educational consulting services including MBA, Engineering, Medical admissions, and Study Abroad guidance."
				keywords="educational consulting, mba admissions, engineering admissions, medical admissions, study abroad"
			/>

			<div className="min-h-screen bg-white dark:bg-[#101922] transition-colors duration-1000 flex flex-col overflow-x-hidden">
				<Header />
				<ServicesHero
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>

				<div className="layout-container px-6 lg:px-40 py-20 lg:py-32">
					<div className="flex flex-col lg:flex-row gap-20">
						{/* Sidebar Filter */}
						<aside className="lg:w-80 flex-shrink-0">
							<div className="sticky top-32">
								<ServicesFilter
									activeCategory={activeCategory}
									setActiveCategory={setActiveCategory}
								/>
							</div>
						</aside>

						{/* Main Content */}
						<main className="flex-grow">
							{filteredSections.length > 0 ? (
								<ServicesList sections={filteredSections} />
							) : (
								<div className="text-center py-24 bg-slate-50/50 dark:bg-slate-900/30 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
									<div className="size-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-6">
										<span className="material-symbols-outlined text-4xl text-slate-400">
											search_off
										</span>
									</div>
									<h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
										No services found
									</h3>
									<p className="text-slate-500 font-medium">
										We couldn't find any services matching "{searchQuery}" in
										this category.
									</p>
									<button
										onClick={() => {
											setSearchQuery("");
											setActiveCategory("all");
										}}
										className="mt-8 text-primary font-black text-lg hover:underline decoration-2 underline-offset-4"
									>
										Clear all filters
									</button>
								</div>
							)}
						</main>
					</div>
				</div>

				<ServicesTestimonials />
				<ServicesCTA />
				<Footer />
			</div>
		</>
	);
};

export default Services;
