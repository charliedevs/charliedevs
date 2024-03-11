import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            textColor: {
                primary: '#DEDAE3',
                secondary: '#A098AA',
            },
            colors: {
                purple: {
                    DEFAULT: '#20172C',
                },
                primary: {
                    DEFAULT: '#DEDAE3',
                },
                secondary: {
                    DEFAULT: '#A098AA',
                },
            },
        },
    },
    plugins: [],
}
export default config
