module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slideDown: {
					from: { opacity: 0, transform: "translateY(-20px)" },
					to: { opacity: 1, transform: "translateY(0)" },
				},
			},
			animation: {
				slideDown: "slideDown 0.5s ease-out",
			},
		},
	},
	plugins: [],
};
