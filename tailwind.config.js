/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            white: '#FFFFFF',
            'text-gray': '#707070',
            'text-gold': '#D39D5B',
            'footer-back': '#30454C',
        },
        extend: {
            fontFamily: {
                titillium: ['Titillium Web', 'serif'],
                playfair: ['Playfair Display', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
