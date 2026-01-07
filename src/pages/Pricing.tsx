import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO } from "../components/layout/SEO";
import { Link } from "@tanstack/react-router";
import data from "../data/pricing.json";
import { useMouseTilt } from "../hooks/useMouseTilt";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Pricing: React.FC = () => {
    const { pricing } = data;
    const { ref: heroRevealRef, isVisible: heroVisible } = useScrollReveal<HTMLElement>();
    const { ref: cardsRevealRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();

    const tiltRef1 = useMouseTilt<HTMLDivElement>({ max: 8, perspective: 1000, scale: 1.02 });
    const tiltRef2 = useMouseTilt<HTMLDivElement>({ max: 8, perspective: 1000, scale: 1.02 });
    const tiltRef3 = useMouseTilt<HTMLDivElement>({ max: 8, perspective: 1000, scale: 1.02 });
    const tiltRefs = [tiltRef1, tiltRef2, tiltRef3];

    return (
        <div className="min-h-screen bg-white dark:bg-[#101922] font-display flex flex-col text-[#111418] dark:text-white transition-colors duration-1000">
            <SEO
                title="Pricing Plans"
                description="Transparent pricing for our educational consulting and admission services."
                keywords="pricing, admission fees, counseling costs, university prep prices"
            />
            <Header />

            <main className="flex-1">
                {/* Pricing Hero */}
                <section ref={heroRevealRef} className="relative pt-24 pb-20 px-4 md:px-10 lg:px-40 text-center overflow-hidden">
                    {/* Mesh Gradient Background */}
                    <div className="absolute inset-0 mesh-gradient opacity-20 dark:opacity-10 pointer-events-none"></div>

                    <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <span className="inline-block px-5 py-2 mb-6 text-sm font-black tracking-widest text-primary uppercase bg-primary/10 backdrop-blur-md rounded-full border border-primary/20">
                            {pricing.tagline}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                            {pricing.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                            {pricing.description}
                        </p>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section ref={cardsRevealRef} className="pb-32 px-4 md:px-10 lg:px-40">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                        {pricing.plans.map((plan, index) => (
                            <div
                                key={index}
                                ref={tiltRefs[index]}
                                className={`relative flex flex-col p-10 rounded-[2.5rem] transition-all duration-1000 border overflow-hidden ${plan.highlight
                                        ? "bg-white dark:bg-slate-900 border-primary/50 shadow-[0_32px_64px_-16px_rgba(227,30,36,0.15)] scale-105 z-10"
                                        : "bg-slate-50/50 dark:bg-slate-900/30 border-slate-100 dark:border-slate-800"
                                    } ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                                style={{ transitionDelay: `${index * 0.15}s` }}
                            >
                                {plan.highlight && (
                                    <>
                                        <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>
                                        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-shimmer"></div>
                                        <div className="absolute top-0 left-1/2 -track-widest translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase z-10 font-display shadow-lg">
                                            Most Popular
                                        </div>
                                    </>
                                )}

                                <div className="mb-10 relative z-10">
                                    <h3 className="text-2xl font-black mb-2 tracking-tight">{plan.name}</h3>
                                    <p className="text-base text-slate-500 dark:text-slate-400 mb-8 min-h-[48px] font-medium leading-relaxed">
                                        {plan.description}
                                    </p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white">{plan.price}</span>
                                        <span className="text-slate-500 dark:text-slate-400 font-bold italic text-lg capitalize">
                                            / {plan.period}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-5 mb-10 relative z-10">
                                    {plan.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-start gap-4 group">
                                            <div className="mt-0.5 shrink-0 size-6 rounded-full bg-secondary/10 flex items-center justify-center transition-colors group-hover:bg-secondary group-hover:text-white">
                                                <span className="material-symbols-outlined text-base font-black">
                                                    check
                                                </span>
                                            </div>
                                            <span className="text-base font-bold text-slate-700 dark:text-slate-300 transition-colors group-hover:text-slate-900 dark:group-hover:text-white">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="relative z-10 mt-auto">
                                    <Link
                                        to="/contact"
                                        className={`w-full py-5 px-8 rounded-2xl text-center font-black text-lg block transition-all active:scale-95 ${plan.highlight
                                                ? "bg-primary text-white hover:bg-[#D41C25] shadow-2xl shadow-primary/30"
                                                : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700"
                                            }`}
                                    >
                                        {plan.buttonText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section (Premium Grid) */}
                <section className="py-32 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-800 px-4 md:px-10 lg:px-40 transition-colors duration-1000">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-primary font-black text-sm tracking-widest uppercase mb-4 block">Got Questions?</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Pricing FAQ</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {pricing.faqs.map((faq, index) => (
                                <div key={index} className="space-y-4 group">
                                    <div className="flex gap-4">
                                        <span className="text-2xl font-black text-primary/30 group-hover:text-primary transition-colors">0{index + 1}</span>
                                        <h4 className="font-extrabold text-xl tracking-tight">
                                            {faq.question}
                                        </h4>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium pl-12 border-l-2 border-slate-100 dark:border-slate-800 group-hover:border-primary/30 transition-colors">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-24 text-center">
                            <Link
                                to="/faq"
                                className="group inline-flex items-center justify-center gap-3 py-4 px-10 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-lg hover:scale-105 transition-all shadow-xl"
                            >
                                <span>Explore Help Center</span>
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Pricing;
