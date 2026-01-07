import type { FunctionComponent } from "../../common/types";
import contactData from "../../data/contact.json";

export const FAQTeaser = (): FunctionComponent => {
	const { faqTeaser } = contactData;

	return (
		<div className="bg-primary/5 dark:bg-[#151f29] py-12 px-4 md:px-40">
			<div className="max-w-[960px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
				<div className="flex items-center gap-4">
					<div className="size-12 rounded-full bg-white dark:bg-[#1a2632] flex items-center justify-center text-primary shadow-sm">
						<span className="material-symbols-outlined">help</span>
					</div>
					<div>
						<h4 className="text-[#111418] dark:text-white text-lg font-bold">
							{faqTeaser.title}
						</h4>
						<p className="text-[#617589] dark:text-[#9ca3af] text-sm">
							{faqTeaser.description}
						</p>
					</div>
				</div>
				<a
					className="text-primary font-bold hover:underline flex items-center gap-1"
					href="#"
				>
					{faqTeaser.linkText}{" "}
					<span className="material-symbols-outlined text-sm">
						arrow_forward
					</span>
				</a>
			</div>
		</div>
	);
};
