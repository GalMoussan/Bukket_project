/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				"bukket-bg": "#050816",
				"bukket-surface": "#0b1220",
				"bukket-soft": "#111827",
				"bukket-primary": "#3B82F6",
				"bukket-primary-soft": "#60A5FA",
				"bukket-accent": "#F97316",
				"bukket-text": "#F9FAFB",
				"bukket-text-soft": "#9CA3AF",
				"bukket-border-subtle": "rgba(148, 163, 184, 0.25)",
			},
			boxShadow: {
				"bukket-soft": "0 18px 45px rgba(0, 0, 0, 0.45)",
			},
			borderRadius: {
				"bukket-lg": "18px",
				"bukket-md": "12px",
				"bukket-pill": "999px",
			},
			fontFamily: {
				sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
