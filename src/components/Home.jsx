import '../App.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { responsiveFonts } from '../Theme';
import Container from '@mui/material/Container';
import NavBar from '../NavBar';
import GlobalSearch from '../GlobalSearch';
import NewArrival from '../NewArrival';
import ReactCarousel from '../ReactCarousel';
import RecommendedItem from '../RecommendedItem';
import StepToBuyBanner from '../StepToBuyBanner';
import BrandList from '../BrandList';
import PopularSearches from '../PopularSearches';
import Footer from '../Footer';

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