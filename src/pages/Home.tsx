import type { FunctionComponent } from "../common/types";
import { Header } from "../components/layout/Header";
import { SEO } from "../components/layout/SEO";
import { Hero } from "../components/home/Hero";
import { Partners } from "../components/home/Partners";
import { Stats } from "../components/home/Stats";
import { Services } from "../components/home/Services";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Testimonials } from "../components/home/Testimonials";
import { Founders } from "../components/home/Founders";
import { EnquiryForm } from "../components/home/EnquiryForm";
import { CTA } from "../components/home/CTA";
import { Footer } from "../components/layout/Footer";

export const Home = (): FunctionComponent => {
	return (
		<div className="font-display bg-background-light dark:bg-background-dark text-[#111418] dark:text-white overflow-x-hidden antialiased">
			<SEO
				title="Home"
				description="Expert guidance for university admissions, exam preparation, and career counseling tailored to your goals."
				keywords="career counseling, university admissions, exam prep, study abroad, education consultant"
			/>
			<Header />
			<main className="flex flex-col items-center">
				<Hero />
				<Partners />
				<Stats />
				<Services />
				<WhyChooseUs />
				<Testimonials />
				<Founders />
				<EnquiryForm />
				<CTA />
				<Footer />
			</main>
		</div>
	);
};
