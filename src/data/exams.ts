import exams from "./exams.json";

export type Exam = (typeof exams)[number];

export const allExams: Array<Exam> = exams;

const engineeringExamOrder = [
	"jee-main",
	"wbjee",
	"iemjee",
	"comedk",
	"srmjeee",
	"viteee",
	"mht-cet",
];

export const examRank = (slug: string): number => {
	const index = engineeringExamOrder.indexOf(slug);
	return index === -1 ? engineeringExamOrder.length : index;
};

export const examNumber = (slug: string): number | null => {
	const index = engineeringExamOrder.indexOf(slug);
	return index === -1 ? null : index + 1;
};
