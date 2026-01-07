import React, { useState, useMemo } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/layout/SEO";
import FAQHero from "../components/faq/FAQHero";
import FAQCategories from "../components/faq/FAQCategories";
import FAQList from "../components/faq/FAQList";
import FAQCTA from "../components/faq/FAQCTA";
import data from "../data/faq.json";

const FAQ: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("General");

	const filteredSections = useMemo(() => {
		// First filter by category (unless "General" shows all or specific logic is needed)
		// Assuming "General" might be a specific category in the JSON, or if we want "All" behavior.
		// Looking at the JSON, "General" is a specific category.
		// However, usually "General" implies a specific section.
		// Let's assume the user wants to filter sections based on the selected category label matching the section title?
		// Or maybe the JSON structure has categories that map to sections?
		// Let's look at the JSON structure again.
		// categories: [{label: "General"}, {label: "Admissions"}, ...]
		// sections: [{title: "General Information"}, {title: "University Admissions"}]
		// The mapping isn't 1:1 exact string match ("General" vs "General Information").
		// Let's try to match loosely or just filter items if the search query is present.

		// If search query is present, we search across ALL sections and items, ignoring category?
		// Or search within category? Usually search overrides category.

		let sections = data.sections;

		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			return sections
				.map((section) => ({
					...section,
					items: section.items.filter(
						(item) =>
							item.question.toLowerCase().includes(query) ||
							item.answer.toLowerCase().includes(query)
					),
				}))
				.filter((section) => section.items.length > 0);
		}

		// If no search query, filter by category.
		// We need to map the chip label to the section title.
		// "General" -> "General Information"
		// "Admissions" -> "University Admissions"
		// "Exam Prep" -> "Exam Preparation" (assuming)
		// "Pricing" -> "Pricing"
		// "Support" -> "Support"

		// Let's do a simple includes check or keyword match.
		if (selectedCategory) {
			return sections.filter((section) => {
				// This is a bit heuristic.
				// If selectedCategory is "General", show "General Information"
				// If "Admissions", show "University Admissions"
				return (
					section.title.includes(selectedCategory) ||
					(selectedCategory === "General" && section.title.includes("General"))
				);
			});
		}

		return sections;
	}, [searchQuery, selectedCategory]);

	return (
		<div className="relative flex flex-col min-h-screen w-full bg-white dark:bg-[#101922] transition-colors duration-1000 overflow-x-hidden">
			<SEO
				title="FAQ"
				description="Find answers to common questions about our services, admissions process, and more."
				keywords="faq, frequently asked questions, admission questions, counseling help"
			/>
			<Header />
			<main className="flex-1 w-full">
				<FAQHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
				<div className="max-w-[1200px] mx-auto px-4 md:px-10 py-20 pb-20">
					<FAQCategories
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
					<FAQList sections={filteredSections} />
					<FAQCTA />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default FAQ;
