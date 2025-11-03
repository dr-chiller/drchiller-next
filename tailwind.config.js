/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: ['prose', 'prose-lg', 'prose-xl', 'dark:prose-invert'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
