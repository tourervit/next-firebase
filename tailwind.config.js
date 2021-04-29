const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				appearing: "appearing .4s linear",
			},
			colors: {
				pink: {
					950: "#40152f",
				},
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
			screens: {
				xs: "475px",
				...defaultTheme.screens,
				"3xl": "1600px",
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
