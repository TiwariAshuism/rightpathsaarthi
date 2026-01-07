import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";

const Loader: React.FC = () => {
	return (
		<div className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen overflow-hidden bg-white dark:bg-[#101922] transition-colors duration-1000 font-display">
			{/* Mesh Background for Loader */}
			<div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none"></div>

			{/* Main Content */}
			<div className="relative z-10 flex flex-col items-center max-w-[480px] w-full p-6">
				{/* Lottie Animation Area */}
				<div className="mb-10 flex items-center justify-center w-40 h-40">
					<DotLottiePlayer
						src="/images/loader.lottie"
						autoplay
						loop
						style={{ width: "100%", height: "100%" }}
					/>
				</div>

				{/* Text */}
				<div className="text-center mb-4">
					<h3 className="text-slate-900 dark:text-white tracking-tighter text-4xl font-black leading-tight">
						RightPath Saarthi
					</h3>
				</div>

				<div className="text-center max-w-[85%]">
					<p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">
						Curating your path to success...
					</p>
				</div>
			</div>

			{/* Bottom Watermark */}
			<div className="fixed bottom-12 w-full text-center z-10 opacity-30">
				<p className="text-[10px] text-slate-400 dark:text-slate-600 font-black tracking-[0.4em] uppercase">
					Admissions & Career Guidance
				</p>
			</div>
		</div>
	);
};

export default Loader;
