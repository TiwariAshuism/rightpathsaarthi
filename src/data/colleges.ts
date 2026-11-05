import colleges from "./colleges.json";

export type College = (typeof colleges)[number];

export const allColleges: Array<College> = colleges;

const inr = (value: number): string => `₹${value.toLocaleString("en-IN")}`;

export const feeRange = (college: College): string => {
	const amounts = college.programs
		.map((program) => Number(program.totalFee.replace(/[^\d]/g, "")))
		.filter((amount) => amount > 0);

	if (amounts.length === 0) {
		return "Ask for the fee";
	}

	const lowest = Math.min(...amounts);
	const highest = Math.max(...amounts);
	return lowest === highest ? inr(lowest) : `${inr(lowest)} – ${inr(highest)}`;
};

export const directLabel = (college: College): string => {
	if (college.programs.length === 0) {
		return college.directAdmission ? "Yes" : "No";
	}

	const flags = new Set(
		college.programs.map((program) => program.directAdmission)
	);
	if (flags.size === 1) {
		return flags.has(true) ? "Yes" : "No";
	}

	return "Some courses";
};
