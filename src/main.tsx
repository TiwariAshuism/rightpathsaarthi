// import { createRouter } from "@tanstack/react-router";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import { routeTree } from "./routeTree.gen.ts";
// import "./styles/tailwind.css";
// import "./common/i18n";
// import { HelmetProvider } from "react-helmet-async";
// import Loader from "./components/layout/Loader";

// const router = createRouter({ routeTree });

// export type TanstackRouter = typeof router;

// declare module "@tanstack/react-router" {
// 	interface Register {
// 		// This infers the type of our router and registers it across your entire project
// 		router: TanstackRouter;
// 	}
// }

// const rootElement = document.querySelector("#root") as Element;
// if (!rootElement.innerHTML) {
// 	const root = ReactDOM.createRoot(rootElement);
// 	root.render(
// 		<React.StrictMode>
// 			<HelmetProvider>
// 				<React.Suspense fallback={<Loader />}>
// 					<App router={router} />
// 				</React.Suspense>
// 			</HelmetProvider>

// 		</React.StrictMode>
// 	);
// }

import { createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { routeTree } from "./routeTree.gen.ts";
import "./styles/tailwind.css";
import "./common/i18n";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./components/layout/Loader";

const router = createRouter({ routeTree });

export type TanstackRouter = typeof router;

declare module "@tanstack/react-router" {
	interface Register {
		// This infers the type of our router and registers it across your entire project
		router: TanstackRouter;
	}
}

const rootElement = document.querySelector("#root") as Element;

const Main = () => {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 0);
		return () => clearTimeout(timer);
	}, []);

	if (loading) return <Loader />;

	return (
		<React.Suspense fallback={<Loader />}>
			<App router={router} />
		</React.Suspense>
	);
};

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<HelmetProvider>
				<Main />
			</HelmetProvider>
		</React.StrictMode>
	);
}
