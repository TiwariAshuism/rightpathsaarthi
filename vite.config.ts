import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { normalizePath, loadEnv } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { defineConfig } from "vitest/config";
import tailwindcss from "@tailwindcss/vite";
import sendEmailHandler from "./api/send-email";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	// Load ALL env files (no prefix filter) and inject into process.env
	// so that the API handler can access them at runtime
	const env = loadEnv(mode, process.cwd(), "");
	Object.assign(process.env, env);

	return {
		plugins: [
			react(),
			tailwindcss(),
			TanStackRouterVite(),

			viteStaticCopy({
				targets: [
					{
						src: normalizePath(path.resolve("./src/assets/locales")),
						dest: normalizePath(path.resolve("./dist")),
					},
				],
			}),

			// ✅ Custom API middleware plugin for local development
			{
				name: "custom-api-middleware",
				configureServer(server) {
					server.middlewares.use(async (req, res, next) => {
						if (!req.url?.startsWith("/api/send-email")) {
							return next();
						}

						const chunks: Uint8Array[] = [];

						req.on("data", (chunk: Uint8Array) => {
							chunks.push(chunk);
						});

						req.on("end", async () => {
							try {
								const bodyStr = Buffer.concat(chunks).toString("utf-8");
								// Simulate Vercel's auto-parsed body
								(req as any).body = bodyStr ? JSON.parse(bodyStr) : {};

								// Shim Vercel/Express-style .status() and .json() onto Node's res
								(res as any).status = (code: number) => {
									res.statusCode = code;
									return res as any;
								};
								(res as any).json = (data: any) => {
									res.setHeader("Content-Type", "application/json");
									res.end(JSON.stringify(data));
								};

								await sendEmailHandler(req as any, res as any);
							} catch (error) {
								console.error("API error:", error);
								res.statusCode = 500;
								res.setHeader("Content-Type", "application/json");
								res.end(
									JSON.stringify({
										error: "Internal server error",
										message:
											error instanceof Error
												? error.message
												: "Unknown error",
									})
								);
							}
						});
					});
				},
			},
		],

		server: {
			host: true,
			strictPort: true,
		},

		test: {
			environment: "jsdom",
			setupFiles: ["./vitest.setup.ts"],
			css: true,
		},
	};
});