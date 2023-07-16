import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h1: { fontSize: '5rem' },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1280,
            '2xl': 1536,
            '3xl': 1920,
            '4xl': 2560,
            '5xl': 3200,
        },
    },
    palette: {
        black: {
            main: '#000',
            color: '#fff'
        }
    }
});

const responsiveFonts = responsiveFontSizes(theme, { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], factor: 5 });

export { responsiveFonts };
