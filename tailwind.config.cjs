/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		screens: {
			'2xl': { max: '1535px' },
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '639px' },

			minsm: { min: '640px' },
			minmd: { min: '768px' },
			minlg: { min: '1024px' },
			minxl: { min: '1280px' },
			min2xl: { min: '1536px' }
		},
		extend: {
			colors: {
				orange: '#F8A571',
				'jordy-blue': '#8EB1F4',
				'blue-lagoon': '#6FEBFC',
				illusion: '#FF9DCE',
				'deep-peach': '#FFC7A4',
				'dark-shade': {
					500: '#1B1B1B',
					400: '#2B2B2B',
					300: '#333333',
					200: '#666666',
					100: '#999999'
				},
				white: '#ffffff'
			}
		},
		fontFamily: {
			sans: ['Proxima-Nova', 'sans-serif'],
			'proxima-cn': 'Proxima-Nova-Cn'
		}
	},
	variants: {
		extend: {
			fontSmoothing: ['hover', 'focus'],
			fontSize: ['hover', 'focus'],
			fontStyle: ['hover', 'focus'],
			fontWeight: ['hover', 'focus'],
			animation: ['hover', 'focus']
		}
	},
	plugins: []
};
