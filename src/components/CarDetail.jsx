import '../App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { responsiveFonts } from '../components/Others/Theme';
import Container from '@mui/material/Container';
import NavBar from '../components/Others/NavBar';
import MainInfo from './CarDetail/MainInfo';
import Note from './CarDetail/Note';
import SimilarProducts from './CarDetail/SimilarProducts';
import PopularSearches from '../components/Others/PopularSearches';
import Footer from '../components/Others/Footer';

function CarDetail() {
  const { id, idModel } = useParams();
  const api_url = import.meta.env.VITE_API_URL;
  const [carInfo, setCarInfo] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    getCarInfo(id), getSimilarProducts(id, idModel)
  }, []);

  const getCarInfo = async (id) => {
    try {
      const response = await fetch(`${api_url}/cars/get-by-id/${id}`, {
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(queryData),
      });

      if (response.ok) {
        // Handle success
        const rsp= await response.json();
        setCarInfo(rsp.carInfo);
        // console.log(rsp.carInfo)
      } else {
        // Handle errors
        console.log(await response.json());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getSimilarProducts = async (id, idModel) => {
    try {
      const response = await fetch(`${api_url}/cars/get-similar-products/${id}/${idModel}`, {
        method: 'GET',
      });

      if (response.ok) {
        // Handle success
        const rsp= await response.json();
        setSimilarProducts(rsp);
      } else {
        // Handle errors
        console.log(await response.json());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (   
    <div className='App'>
      <CssBaseline />
      <NavBar />
      <main>
        <Container maxWidth='lg'>
          <ThemeProvider theme={responsiveFonts}>
            <MainInfo data={carInfo} />
          </ThemeProvider>
        </Container>
          <Note data={carInfo} />
        <Container maxWidth='lg'>
          <ThemeProvider theme={responsiveFonts}>
            <SimilarProducts cars={similarProducts} />
            <PopularSearches />
          </ThemeProvider>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default CarDetail;
