import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { responsiveFonts } from '../components/Others/Theme';
import Container from '@mui/material/Container';
import NavBar from '../components/Others/NavBar';
import ContentMain from './CarList/ContentMain';
import PopularSearches from '../components/Others/PopularSearches';
import Footer from '../components/Others/Footer';
import CarListHeader from './CarList/Header';
import '../App.css';


function CarList() {
  return (   
    <div className='App'>
      <CssBaseline />
      <NavBar />
      <main>
        <Container maxWidth='lg'>
          <ThemeProvider theme={responsiveFonts}>
            <CarListHeader />
            <ContentMain />
            <PopularSearches />
          </ThemeProvider>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default CarList;
