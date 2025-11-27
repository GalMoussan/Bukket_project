/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				"bukket-bg": "#02040a", // Deeper black
				"bukket-surface": "#0a0f1c", // Rich dark blue-grey
				"bukket-soft": "#131b2e",
				"bukket-primary": "#3B82F6",
				"bukket-primary-glow": "#60A5FA",
				"bukket-accent": "#F97316",
				"bukket-text": "#F9FAFB",
				"bukket-text-muted": "#94A3B8",
				"bukket-border-subtle": "rgba(148, 163, 184, 0.1)",
				"bukket-border-highlight": "rgba(59, 130, 246, 0.3)",
			},
			boxShadow: {
				"bukket-glow": "0 0 40px -10px rgba(59, 130, 246, 0.3)",
				"bukket-card": "0 8px 30px rgba(0, 0, 0, 0.5)",
			},
			borderRadius: {
				"bukket-xl": "24px",
				"bukket-lg": "16px",
				"bukket-md": "12px",
				"bukket-pill": "999px",
			},
			fontFamily: {
				sans: ["Outfit", "system-ui", "sans-serif"],
			},
			animation: {
				"float-slow": "float 6s ease-in-out infinite",
				"pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-20px)" },
				},
			},
		},
	},
	plugins: [],
};
