// tailwind.config.js
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}', // Include all your source files
	],
	theme: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar')], // Include any required plugins
};
