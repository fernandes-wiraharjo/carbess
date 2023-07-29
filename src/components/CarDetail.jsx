import '../App.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { responsiveFonts } from '../Theme';
import Container from '@mui/material/Container';
import NavBar from '../NavBar';
import MainInfo from './CarDetail/MainInfo';
import PopularSearches from '../PopularSearches';
import Footer from '../Footer';

function CarDetail() {
  return (   
    <div className='App'>
      <CssBaseline />
      <NavBar />
      <main>
        <Container maxWidth='lg'>
          <ThemeProvider theme={responsiveFonts}>
            <MainInfo />
            <PopularSearches />
          </ThemeProvider>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default CarDetail;
