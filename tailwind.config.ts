import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            purple: {
                DEFAULT: '#20172C',
            },
        },
        extend: {
            textColor: {
                primary: '#DEDAE3',
                secondary: '#756B83',
            },
        },
    },
    plugins: [],
}
export default config
