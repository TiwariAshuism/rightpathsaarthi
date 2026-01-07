import React from "react";
import layoutData from "../../data/layout.json";

export const AdmissionHelplineBanner: React.FC = () => {
	const { helplineBanner } = layoutData;

	return (
		<section className="w-full bg-primary py-4 px-4 md:px-10 lg:px-40 text-white shadow-xl">
			<div className="max-w-[1280px] mx-auto flex items-center justify-center lg:justify-between flex-wrap gap-3">
				<p className="text-lg font-semibold tracking-wide text-center lg:text-left">
					{helplineBanner.text}{" "}
					<span className="text-yellow-300 font-bold">
						{helplineBanner.phoneNumber}
					</span>{" "}
					{helplineBanner.availability}
				</p>
				<button className="flex items-center justify-center rounded-lg h-10 px-6 bg-white hover:bg-gray-100 text-primary text-sm font-bold tracking-[0.015em] transition-all shadow-md hover:scale-105 active:scale-95 group">
					<span className="material-symbols-outlined mr-2 text-base group-hover:animate-bounce">
						call
					</span>
					<span className="truncate">{helplineBanner.buttonText}</span>
				</button>
			</div>
		</section>
	);
};
