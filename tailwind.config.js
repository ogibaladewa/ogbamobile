const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        keyframes: {
            slideLeft: {
              '0%': { transform: 'translate(200px, 0px)' },
              '100%': { transform: 'translate(0px, 0px)' },
            },
            slideRight: {
              '0%': { transform: 'translate(-200px, 0px)' },
              '100%': { transform: 'translate(0px, 0px)' },
            },
            slideBottom: {
              '0%': { transform: 'translate(0px, -100px)' },
              '100%': { transform: 'translate(0px, 0px)' },
            },
            buttonRise: {
              '0%': { transform: 'scale(1, 1)' },
              '50%': { transform: 'scale(1.2, 1.2)' },
              '100%': { transform: 'scale(1, 1)' },
            },
        },
        animation: {
            slideLeft: 'slideLeft 2.5s ease-out 1',
            slideRight: 'slideRight 2.5s ease-out 1',
            slideBottom: 'slideBottom 2s ease-out 1',
            buttonRise: 'buttonRise 1.5s 3s ease-out 3',
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
