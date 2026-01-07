import type { FunctionComponent } from "../common/types";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/layout/SEO";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactForm } from "../components/contact/ContactForm";
import { FAQTeaser } from "../components/contact/FAQTeaser";

export const Contact = (): FunctionComponent => {
	return (
		<div className="bg-white dark:bg-[#101922] text-[#111418] dark:text-white font-display overflow-x-hidden transition-colors duration-1000">
			<SEO
				title="Contact Us"
				description="Get in touch with RightPath Saarthi for personalized career counseling and admission guidance."
				keywords="contact us, admission enquiry, career counseling appointment"
			/>
			<div className="relative flex h-auto min-h-screen w-full flex-col">
				<Header />
				<main className="flex-1 flex flex-col">
					<div
						className="animate-fade-in-up"
						style={{ animationDelay: "0.1s" }}
					>
						<ContactHero />
					</div>
					<div
						className="px-4 md:px-40 pb-20 flex justify-center animate-fade-in-up"
						style={{ animationDelay: "0.3s" }}
					>
						<div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
							<ContactInfo />
							<ContactForm />
						</div>
					</div>
					<div
						className="animate-fade-in-up"
						style={{ animationDelay: "0.5s" }}
					>
						<FAQTeaser />
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
};
