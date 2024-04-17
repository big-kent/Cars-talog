import { createTheme, responsiveFontSizes } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        h1: {
            fontSize: '4rem',
            '@media (max-width: 762px)': {
                fontSize: '2rem'
            }
        },
        h2: {
            fontSize: '3rem',
            '@media (max-width: 762px)': {
                fontSize: '1.5rem'
            }
        },
        h3: {
            fontSize: '2.34rem',
            '@media (max-width: 762px)': {
                fontSize: '1.17rem'
            }
        },
        h4: {
            fontSize: '2rem',
            '@media (max-width: 762px)': {
                fontSize: '1rem'
            }
        },
        h5: {
            fontSize: '1.66rem',
            '@media (max-width: 762px)': {
                fontSize: '0.83em'
            }
        },
        h6: {
            fontSize: '1.34rem',
            '@media (max-width: 762px)': {
                fontSize: '0.67rem'
            }
        },
        p: {
            fontSize: '1rem',
            '@media (max-width: 762px)': {
                fontSize: '0.8rem'
            }
        },
    },
});

export default theme;