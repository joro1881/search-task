// tailwind.config.js
module.exports = {
    theme: {
        fontFamily: {
            'sans': ['"Roboto"', 'sans-serif'],
            'serif': ['"Roboto"', 'sans-serif'],
            'display': ['"Roboto"', 'sans-serif'],
            'body': ['"Roboto"', 'sans-serif'],
        },
        screens: {
            'sm': '750px',
            'md': '970px',
            'lg': '1170px',
            'xlg': '1600px',
        },
        extend: {
            fontSize: {
                'tiny': '0.6rem',
                '2xs': '0.625rem',
                'inherit': 'inherit'
            },
            width: {
                '60px': '60px',
                '150px': '150px',
                '14': '3.5rem',
                '52': '13rem',
                '66' : '17rem',
                '96' : '20rem'
            },
            maxWidth: {
                '8' : '8rem',
                '16': '16rem',
                '73': '73rem',
            },
            height: {
                '7': '1.75rem',
                '60px': '60px',
                '14': '3.5rem',
                '22': '5.5rem',
                '72': '18.75rem',
            },
            minHeight: {
                '28': '28rem',
            },
            colors: {
                'green': '#4dbfa2',
                'green-100': '#41b497',
                'green-200': '#82daca',
                'bg-gray' : '#ddd',
                'pink': '#eb6379',
                'red-300' : '#a94442',
                'dark-30': 'rgba(0,0,0,0.3)',
                'gray-100': '#353942',
                'gray-200': '#f9fafc',
                'gray-300': '#eaedf1',
                'gray-400': '#292c33',
                'blue': '#7abce7',
                gray: {
                    '100': '#f5f5f5',
                    '200': '#eeeeee',
                    '300': '#e0e0e0',
                    '400': '#bdbdbd',
                    '500': '#999999',
                    '600': '#757575',
                    '700': '#616161',
                    '800': '#424242',
                    '900': '#212121',
                },
            },
        },
        variants: {},
        plugins: [],
    },
};
