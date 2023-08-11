import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { responsiveFonts } from '../Theme';
import Container from '@mui/material/Container';
import NavBar from '../NavBar';
import ContentMain from './CarList/ContentMain';
import PopularSearches from '../PopularSearches';
import Footer from '../Footer';
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
