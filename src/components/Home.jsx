import '../App.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { responsiveFonts } from './Others/Theme';
import Container from '@mui/material/Container';
import NavBar from './Others/NavBar';
import GlobalSearch from './Home/GlobalSearch';
import NewArrival from './Home/NewArrival';
import ReactCarousel from './Home/ReactCarousel';
import RecommendedItem from './Home/RecommendedItem';
import StepToBuyBanner from './Home/StepToBuyBanner';
import BrandList from './Home/BrandList';
import PopularSearches from './Others/PopularSearches';
import Footer from './Others/Footer';

function Home() {
  return (   
    <div className='App'>
      <CssBaseline />
      <NavBar />
      <main>
        <ReactCarousel />
        <Container maxWidth='lg'>
          <ThemeProvider theme={responsiveFonts}>
            <GlobalSearch />
            <NewArrival />
            <RecommendedItem />
            <StepToBuyBanner />
            <BrandList />
            <PopularSearches />
          </ThemeProvider>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
