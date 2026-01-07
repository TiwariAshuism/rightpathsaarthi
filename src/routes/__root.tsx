import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { NotFound } from "../pages/NotFound";
import { AdmissionHelplineFAB } from "../components/layout/AdmissionHelplineFAB";
import { BackToTop } from "../components/layout/BackToTop";
import { CustomCursor } from "../components/layout/CustomCursor";
import { useEffect } from "react";

export const Route = createRootRoute({
	component: () => {
		const location = useLocation();

		useEffect(() => {
			// Apply custom cursor class to body on larger screens
			if (window.innerWidth >= 1024) {
				document.body.classList.add("custom-cursor-active");
			}
		}, []);

		// Scroll to top on route change
		useEffect(() => {
			window.scrollTo({ top: 0, left: 0, behavior: "instant" });
		}, [location.pathname]);

		return (
			<>
				<div key={window.location.pathname} className="animate-page-enter">
					<Outlet />
				</div>
				<AdmissionHelplineFAB />
				<BackToTop />
				<CustomCursor />
			</>
		);
	},
	notFoundComponent: NotFound,
});
