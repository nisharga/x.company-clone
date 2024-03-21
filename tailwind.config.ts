import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1380px'
            }
        },
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                white: '#ffffff',
                primary: {
                    50: '#F2EFFE',
                    100: '#D8CEFC',
                    200: '#CBBDFB',
                    300: '#BFADFA',
                    400: '#B29CF9',
                    500: '#A58CF8',
                    600: '#987BF7',
                    700: '#8B6BF6',
                    800: '#7E5AF5',
                    900: '#7151dd'
                },
                gray: {
                    50: '#E8E8E9',
                    100: '#D0D1D4',
                    200: '#B9BABE',
                    300: '#A1A3A8',
                    400: '#8A8C93',
                    500: '#73747D',
                    600: '#5B5D67',
                    700: '#444651',
                    800: '#2C2F3C',
                    900: '#151826'
                },
                orchid: {
                    50: '#FFF9DF',
                    100: '#FFF3BF',
                    200: '#FFE99E',
                    300: '#FFE07E',
                    400: '#FFD65D',
                    500: '#FFCC3D', //base: #FFB300
                    600: '#E6A300',
                    700: '#CC8C00',
                    800: '#B27300',
                    900: '#996200'
                },
                success: '#3CB371',
                error: '#ff4444',
                warning: '#ffbb33',
                info: '#33b5e5'
            },
            fontFamily: {
                nunito: ['var(--font-nunito-sans)'],
                rubik: ['var(--font-rubik-sans)']
            },
            boxShadow: {
                base: '0px 24px 60px 0px rgba(21, 24, 38, 0.15)'
            }
        }
    },
    plugins: [require('autoprefixer')]
};
export default config;
