import { createFileRoute } from "@tanstack/react-router";
import { CollegeDetail } from "../pages/CollegeDetail";

export const Route = createFileRoute("/colleges/$slug")({
	component: CollegeDetail,
});
