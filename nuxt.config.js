export default {
	target: 'static',
	ssr: false,

	head: {
		title: 'Burooj Air - Industrial and Commercial Drone Solutions in Saudi Arabia',
		htmlAttrs: { lang: 'en' },
		link: [{ rel: 'canonical', href: 'https://www.buroojair.com/' }],
		meta: [
			{ charset: 'utf-8' },
			{ name: 'keywords', content: 'drone, industrial, commercial, Saudi Arabia' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Burooj Air is the first Saudi company licensed for drone cleaning services, offering innovative and eco-friendly solutions for high-rise facade cleaning and more.' },
			{ hid: 'keywords', name: 'keywords', content: 'Drone cleaning, Drone facade cleaning, High-rise drone cleaning, Building cleaning drones, Window cleaning drones, Aerial cleaning services, Facade cleaning Saudi Arabia, Drone services Saudi Arabia, Licensed drone operators, Innovative cleaning technology, Professional drone cleaning, Eco-friendly cleaning drones, Sustainable drone cleaning, Burooj Air services, Contactless building cleaning, Advanced drone solutions, Exterior cleaning drones, High-tech cleaning methods, Saudi drone cleaning company, First licensed drone cleaning Saudi Arabia' },
			{ hid: 'og:title', property: 'og:title', content: 'Burooj Air' },
			{ hid: 'og:description', property: 'og:description', content: 'Burooj Air is the first Saudi company licensed for drone cleaning services, offering innovative and eco-friendly solutions for high-rise facade cleaning and more.' },
			{ hid: 'og:image', property: 'og:image', content: 'https://buroojair.com/images/BuroojAir.png' },
			{ hid: 'og:url', property: 'og:url', content: 'https://www.buroojair.com/' },
			{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
			{ hid: 'twitter:title', name: 'twitter:title', content: 'Burooj Air' },
			{ hid: 'twitter:description', name: 'twitter:description', content: 'Burooj Air is the first Saudi company licensed for drone cleaning services, offering innovative and eco-friendly solutions for high-rise facade cleaning and more.' },
			{ hid: 'twitter:image', name: 'twitter:image', content: 'https://buroojair.com/images/BuroojAir.png' },

			{ name: 'format-detection', content: 'telephone=no' },
		],
	},

	css: ['@/assets/scss/main.scss', 'animate.css/animate.min.css'],

	plugins: [
		{ src: '@/plugins/light-gallery.client.js', ssr: false },
		{ src: '~/plugins/chart.js', mode: 'client' },
	],

	components: {
		dirs: ['@/components'],
	},

	modules: ['@nuxtjs/style-resources', '@nuxtjs/i18n'],

	build: {
		extractCSS: true,

		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},

		hardSource: false,
		splitChunks: {
			layouts: true,
			pages: true,
			commons: true,
		},
	},

	i18n: {
		strategy: 'no_prefix',

		locales: [
			{
				code: 'en',
				iso: 'en-US',
				file: 'en-US.js',
				dir: 'ltr',
				name: 'English',
			},
			// {
			// 	code: 'ar',
			// 	iso: 'ar-SA',
			// 	file: 'ar-SA.js',
			// 	dir: 'rtl',
			// 	name: 'Arabic',
			// },
		],
		lazy: true,
		langDir: 'i18n/',
		defaultLocale: 'en',
		baseUrl: 'https://buroojair.com' || 'http://localhost:3000',

		vueI18n: {
			fallbackLocale: 'en',
		},
	},
}
