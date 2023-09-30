import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();

  if (location.state === null) {
    window.location.replace("/");
  }

  const formData = location.state.formData;
  const selectData = location.state;

  return (   
    <div className='App'>
      <CssBaseline />
      <NavBar />
      <main>
        <Container maxWidth='lg'>
          <ThemeProvider theme={responsiveFonts}>
            <CarListHeader />
            <ContentMain data={formData} selectData={selectData} />
            <PopularSearches />
          </ThemeProvider>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default CarList;
