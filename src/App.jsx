import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import NavBar from './NavBar';
import NewArrival from './NewArrival';
import ReactCarousel from './ReactCarousel';
import RecommendedItem from './RecommendedItem';
import StepToBuyBanner from './StepToBuyBanner';

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

function App() {
  return (   
    <> 
      <CssBaseline />
      <NavBar />
      <ReactCarousel />
      <Container maxWidth='lg'>
        <ThemeProvider theme={responsiveFontSizes(theme, { breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], factor: 5 })}>
          <NewArrival />
          <RecommendedItem />
          <StepToBuyBanner />
        </ThemeProvider>
      </Container>
    </>
  )
}

export default App