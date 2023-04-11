const colors = require('tailwindcss/colors')

module.exports = {
    // daisyui: {
    //     themes: [
    //         {
    //             homeTheme: {
    //
    //                 'primary': 'rgb(79, 70, 229)',
    //
    //                 'secondary': '#0054bc',
    //
    //                 'accent': '#ca36cc',
    //
    //                 'neutral': '#fff',
    //
    //                 'base-100': '#F8F6F9',
    //
    //                 'info': '#357FD4',
    //
    //                 'success': '#157061',
    //
    //                 'warning': '#FBC756',
    //
    //                 'error': '#F40B1B',
    //             },
    //         },
    //     ],
    // },
    // plugins: [
    //     require('daisyui')
    // ],
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    ],

    theme: {

        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
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
                red: colors.rose,
                pink: colors.fuchsia,
                primary: 'rgb(79, 70, 229)',
                secondary: '#0054bc',
                'icon-accent': {
                    50: '#FAEBFA',
                    100: '#F4D6F5',
                    200: '#E9AEEA',
                    300: '#DF85E0',
                    400: '#D45CD6',
                    500: '#CA36CC',
                    600: '#A129A3',
                    700: '#791F7A',
                    800: '#501551',
                    900: '#280A29',
                    950: '#140514',
                    DEFAULT: '#ca36cc'
                },
                accent: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    DEFAULT: '#1d4ed8'
                },
                info: '#357FD4',
                success: '#157061',
                warning: '#FBC756',
                error: '#F40B1B',
            },
        }

    },

    plugins: [
        require('flowbite/plugin')
    ],
    darkMode: 'class',
}