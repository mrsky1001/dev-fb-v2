const colors = require('tailwindcss/colors')

module.exports = {
    // daisyui: {
    //     themes: [
    //         {
    //             homeTheme: {
    //
    //                 "primary": "rgb(79, 70, 229)",
    //
    //                 "secondary": "#0054bc",
    //
    //                 "accent": "#ca36cc",
    //
    //                 "neutral": "#fff",
    //
    //                 "base-100": "#F8F6F9",
    //
    //                 "info": "#357FD4",
    //
    //                 "success": "#157061",
    //
    //                 "warning": "#FBC756",
    //
    //                 "error": "#F40B1B",
    //             },
    //         },
    //     ],
    // },
    // plugins: [
    //     require("daisyui")
    // ],
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],

    theme: {

        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },

        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            colors: {
                gray: colors.gray,
                blue: '#ca36cc',
                red: colors.rose,
                pink: colors.fuchsia,
                primary: "rgb(79, 70, 229)",
                secondary: "#0054bc",
                accent: "#ca36cc",
                neutral: "#fff",
                "base-100": "#F8F6F9",
                info: "#357FD4",
                success: "#157061",
                warning: "#FBC756",
                error: "#F40B1B",
            },
        }

    },

    plugins: [
        require('flowbite/plugin')
    ],
    darkMode: 'class',
}