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
						<div className="flex items-center gap-3">
							<img
								src="/images/RightPathSaarthi-icon.png"
								alt="RightPath Saarthi Logo"
								className="h-10 w-auto"
							/>
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
						<h4 className="font-bold text-lg">{footer.contactDetails.title}</h4>
						<div className="flex flex-col gap-3">
							{footer.contactDetails.items.map((item, index) => (
								<div key={index} className="flex items-start gap-3">
									<span className="material-symbols-outlined text-primary text-xl mt-0.5">
										{item.icon}
									</span>
									<div className="flex flex-col gap-1">
										<span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
											{item.label}
										</span>
										<span className="text-white text-sm">{item.value}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-3">
						<img
							src="/images/RightPathSaarthi-icon.png"
							alt="RightPath Saarthi Logo"
							className="h-10 w-auto"
						/>
						<p className="text-xs text-slate-500">{footer.copyright}</p>
					</div>
					<div className="flex gap-6 text-xs text-slate-500">
						{footer.legalLinks.map((link, index) => (
							<a
								key={index}
								className="hover:text-white transition-colors"
								href={link.href}
							>
								{link.text}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};
