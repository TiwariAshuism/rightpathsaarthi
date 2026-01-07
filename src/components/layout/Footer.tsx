import { Link } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";
import layoutData from "../../data/layout.json";

export const Footer = (): FunctionComponent => {
	const { footer } = layoutData;

	return (
		<footer className="w-full bg-[#111418] text-white pt-16 pb-8 px-4 md:px-10 lg:px-40">
			<div className="max-w-[1280px] w-full mx-auto flex flex-col gap-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<div className="size-6 text-white">
								<svg
									fill="none"
									viewBox="0 0 48 48"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clipRule="evenodd"
										d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
										fill="currentColor"
										fillRule="evenodd"
									></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold">{footer.logoText}</h3>
						</div>
						<p className="text-slate-400 text-sm">{footer.description}</p>
						<div className="flex gap-4 mt-2">
							{footer.socialLinks.map((link, index) => (
								<a
									key={index}
									className="text-slate-400 hover:text-white"
									href={link.href}
								>
									<i
										className="bg-current w-5 h-5 block mask-icon"
										style={{
											WebkitMaskImage: `url('https://cdn.simpleicons.org/${link.icon}')`,
											maskImage: `url('https://cdn.simpleicons.org/${link.icon}')`,
										}}
									></i>
								</a>
							))}
						</div>
					</div>
					{footer.columns.map((column, index) => (
						<div key={index} className="flex flex-col gap-4">
							<h4 className="font-bold text-lg">{column.title}</h4>
							<div className="flex flex-col gap-2 text-slate-400 text-sm">
								{column.links.map((link, linkIndex) =>
									link.href.startsWith("/") ? (
										<Link
											key={linkIndex}
											className="hover:text-primary transition-colors"
											to={link.href}
										>
											{link.text}
										</Link>
									) : (
										<a
											key={linkIndex}
											className="hover:text-primary transition-colors"
											href={link.href}
										>
											{link.text}
										</a>
									)
								)}
							</div>
						</div>
					))}
					<div className="flex flex-col gap-4">
						<h4 className="font-bold text-lg">{footer.subscribe.title}</h4>
						<p className="text-slate-400 text-sm">
							{footer.subscribe.description}
						</p>
						<form className="flex flex-col gap-2">
							<input
								className="h-10 rounded px-3 bg-slate-800 border-none text-white text-sm focus:ring-2 focus:ring-primary placeholder-slate-500"
								placeholder={footer.subscribe.placeholder}
								type="email"
							/>
							<button
								className="h-10 rounded bg-primary text-white text-sm font-bold hover:bg-[#D41C25] transition-colors"
								type="button"
							>
								{footer.subscribe.buttonText}
							</button>
						</form>
					</div>
				</div>
				<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
					<p>{footer.copyright}</p>
					<div className="flex gap-6">
						{footer.legalLinks.map((link, index) => (
							<a key={index} className="hover:text-white" href={link.href}>
								{link.text}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};
