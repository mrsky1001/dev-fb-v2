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
        extend: {},
    },

    plugins: [
        require('flowbite/plugin')
    ],
    darkMode: 'class',
}