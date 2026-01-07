import type { FunctionComponent } from "../common/types";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/layout/SEO";
import { AboutHero } from "../components/about/AboutHero";
import { AboutStats } from "../components/about/AboutStats";
import { AboutIntro } from "../components/about/AboutIntro";
import { AboutPhilosophy } from "../components/about/AboutPhilosophy";
import { AboutValues } from "../components/about/AboutValues";
import { AboutTeam } from "../components/about/AboutTeam";
import { AboutCTA } from "../components/about/AboutCTA";

export const About = (): FunctionComponent => {
	return (
		<div className="font-display bg-white dark:bg-[#101922] text-[#111418] dark:text-white overflow-x-hidden antialiased transition-colors duration-1000">
			<SEO
				title="About Us"
				description="Learn about RightPath Saarthi, our mission, vision, and the team dedicated to your academic success."
				keywords="about us, education team, career mentors, admission consultants"
			/>
			<Header />
			<main className="flex-1">
				<div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
					<AboutHero />
				</div>
				<div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
					<AboutStats />
				</div>
				<div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
					<AboutIntro />
				</div>
				<div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
					<AboutPhilosophy />
				</div>
				<div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
					<AboutValues />
				</div>
				<div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
					<AboutTeam />
				</div>
				<div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
					<AboutCTA />
				</div>
			</main>
			<Footer />
		</div>
	);
};
