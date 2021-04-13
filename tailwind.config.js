const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				xs: "475px",
				...defaultTheme.screens,
				"3xl": "1600px",
			},
			fontFamily: {
				sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				appearing: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			animation: {
				appearing: "appearing .4s linear",
			},
		},
	},
	variants: {
		extend: {
			padding: ["active"],
		},
	},
	plugins: [],
};
