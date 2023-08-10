import '../App.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { responsiveFonts } from '../Theme';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import NavBar from '../NavBar';
import ContentMain from './CarList/ContentMain';
import PopularSearches from '../PopularSearches';
import Footer from '../Footer';

function CarList() {
  // const toggleFilter = () => { 
  //   const divFilter = document.querySelector(".column__left");
  //   divFilter.style.display = 'none';
  // }

  return (   
    <div className='App'>
      <CssBaseline />
      <NavBar />
      <main>
        <Container maxWidth='lg'>
          <ThemeProvider theme={responsiveFonts}>
            <div id="header">
              <a href="/">
                <Button variant="contained" size="small" sx={{ 
                      backgroundColor: '#000',
                      ':hover': {
                          backgroundColor: '#000',
                          opacity: '0.6'
                      },
                      textTransform: 'none',
                      marginTop: '20px'
                  }}
                >
                  {`Beranda`}
                </Button>
              </a>
              <Button id="btnFilter" variant="contained" size="small" sx={{ 
                    backgroundColor: '#000',
                    ':hover': {
                        backgroundColor: '#000',
                        opacity: '0.6'
                    },
                    textTransform: 'none',
                    marginTop: '20px',
                    display: 'none'
                }}
                // onClick={toggleFilter}
              >
                {`Filter`}
              </Button>
            </div>
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
