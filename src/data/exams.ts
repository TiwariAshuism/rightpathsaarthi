import exams from "./exams.json";

export type Exam = (typeof exams)[number];

export const allExams: Array<Exam> = exams;
