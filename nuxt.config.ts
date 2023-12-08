export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api'
        },

        devServer: {
            port: 3001,
        },
        server: {
          port: 3001,
        },

        css: ['~/assets/scss/tailwind.scss'],
        modules: [
            '@nuxtjs/dotenv',
            'nuxt-purgecss',
            '@nuxtjs/tailwindcss'
        ],
        build: {
            extractCSS: true,
            postcss: {
                postcssOptions: {
                    plugins: {
                        tailwindcss: {
                            configPath: 'tailwind.config',
                            exposeConfig: false,
                            exposeLevel: 2,
                            config: {},
                            injectPosition: 'first',
                            viewer: true,
                        },
                        autoprefixer: {},
                        exposeConfig: true
                    },
                },
            },
            purgeCSS: {mode: 'postcss'}
        },
        
        buildModules: [
            '@nuxtjs/tailwindcss',
            '@nuxtjs/dotenv'
        ]

    }
})
