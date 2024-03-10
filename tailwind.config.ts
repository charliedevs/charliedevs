import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            textColor: {
                primary: '#DEDAE3',
                secondary: '#756B83',
            },
            colors: {
                purple: {
                    DEFAULT: '#20172C',
                },
                primary: {
                    DEFAULT: '#DEDAE3',
                },
                secondary: {
                    DEFAULT: '#756B83',
                },
            },
        },
    },
    plugins: [],
}
export default config
