/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            white: '#FFFFFF',
            'text-gray': '#707070',
            'text-gold': '#D39D5B',
            'border-gold': '#AD7A51',
            'footer-back': '#30454C',
            btn: '#30454C',
            'btn-hover': '#1E2B2F',
        },
        extend: {
            fontFamily: {
                titillium: ['Titillium Web', 'serif'],
                playfair: ['Playfair Display', 'sans-serif'],
            },
            borderWidth: {
                12: '11px',
                16: '16px',
            },
            fontSize: {
                custom: '45px',
            },
            height: {
                customHeight: '196px',
            },
        },
    },
    plugins: [],
}
