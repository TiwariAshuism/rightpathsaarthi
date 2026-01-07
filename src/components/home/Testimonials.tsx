import { useRef, useEffect, useState } from "react";
import type { FunctionComponent } from "../../common/types";
import homeData from "../../data/home.json";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Testimonials = (): FunctionComponent => {
	const { testimonials } = homeData;
	const { ref: revealRef, isVisible } = useScrollReveal();
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (!isVisible || isPaused) return;

		const interval = setInterval(() => {
			if (scrollRef.current) {
				const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
				const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 50;

				if (isAtEnd) {
					scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
				} else {
					scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
				}
			}
		}, 4000);

		return () => clearInterval(interval);
	}, [isVisible, isPaused]);

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			const scrollAmount = direction === "left" ? -400 : 400;
			scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	return (
		<section ref={revealRef} className="w-full px-4 md:px-10 lg:px-40 py-24 lg:py-32 bg-white dark:bg-[#101922] overflow-hidden">
			<div className="max-w-[1400px] w-full mx-auto flex flex-col gap-12">
				<div className={`flex items-end justify-between transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
					<div className="flex flex-col gap-4">
						<span className="text-primary font-black tracking-widest uppercase text-sm">Testimonials</span>
						<h2 className="text-slate-900 dark:text-white text-4xl lg:text-6xl font-black tracking-tight leading-tight max-w-2xl">
							{testimonials.title}
						</h2>
					</div>
					<div className="hidden md:flex gap-4 mb-4">
						<button
							onClick={() => scroll("left")}
							className="size-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-sm group"
						>
							<span className="material-symbols-outlined font-black group-active:-translate-x-1 transition-transform">arrow_back</span>
						</button>
						<button
							onClick={() => scroll("right")}
							className="size-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-sm group"
						>
							<span className="material-symbols-outlined font-black group-active:translate-x-1 transition-transform">arrow_forward</span>
						</button>
					</div>
				</div>

				<div
					ref={scrollRef}
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 transition-all duration-1000"
					style={{
						paddingLeft: '2px',
						scrollPaddingLeft: '2px'
					}}
				>
					{testimonials.items.map((testimonial, index) => (
						<div
							key={index}
							className={`flex-shrink-0 w-full md:w-[450px] snap-start flex flex-col gap-8 p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
								}`}
							style={{ transitionDelay: `${index * 0.1}s` }}
						>
							<div className="flex text-primary text-xl">
								{[...Array(5)].map((_, i) => (
									<span key={i} className="material-symbols-outlined font-black fill-current">star</span>
								))}
							</div>

							<p className="text-slate-700 dark:text-slate-300 text-xl font-medium leading-relaxed italic">
								"{testimonial.quote}"
							</p>

							<div className="flex items-center gap-5 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
								<div
									className="size-14 bg-center bg-no-repeat bg-cover rounded-2xl shadow-lg ring-2 ring-white dark:ring-slate-800"
									style={{ backgroundImage: `url("${testimonial.image}")` }}
								></div>
								<div>
									<p className="text-slate-900 dark:text-white font-black text-lg leading-none">
										{testimonial.name}
									</p>
									<p className="text-primary text-sm font-bold mt-1.5 uppercase tracking-wider">
										{testimonial.subtitle}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
