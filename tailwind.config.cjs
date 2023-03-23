module.exports = {
    daisyui: {
        themes: [
            {
                mytheme: {

                    "primary": "rgb(79, 70, 229)",

                    "secondary": "#0054bc",

                    "accent": "#aa0a0f",

                    "neutral": "#fff",

                    "base-100": "#F8F6F9",

                    "info": "#357FD4",

                    "success": "#157061",

                    "warning": "#FBC756",

                    "error": "#F40B1B",
                },
            },
        ],
    },
    content: ["./src/**/*.{html,js,ts,svelte}"],
    plugins: [
        require("daisyui")
    ],
}