module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}', // Ensure all source files are scanned
		'./dist/**/*.{js,ts,jsx,tsx}', // Add dist if necessary (optional for SSR/production)
	],
	theme: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar')],
};
