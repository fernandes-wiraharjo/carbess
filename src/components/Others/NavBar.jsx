import * as React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import carbessLogo from '/icon/carbess.png';
import './Navbar.css';

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 7, zIndex: 1 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function appBarLabel(label) {
  return (
    <Toolbar className='Navbar'>
      <div>
        <a href="/"><img src={carbessLogo} alt="Carbess logo" /></a>
      </div>
      <Button color='inherit' onClick={routeChange} sx={{ textTransform: 'none' }}>{label}</Button>
    </Toolbar>
  );
};

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
  },
});

export default function NavBar(props) {
  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `/car-list`; 
  //   navigate(path);
  // }
   // Get the current location object
   const location = useLocation();

   // Access the pathname of the current route
   const currentPath = location.pathname;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar color='primary'>
          <Toolbar className='Navbar'>
            <div>
              <a href="/"><img src={carbessLogo} alt="Carbess logo" /></a>
            </div>
            {/* <Button color='inherit' onClick={routeChange} sx={{ textTransform: 'none' }}>Lihat Semua Mobil</Button> */}
            {currentPath == '/car-list' ? 
              (<a href="/"><Button sx={{ textTransform: 'none', color: '#fff' }}>Beranda</Button></a>) 
              : (<a href="/car-list"><Button sx={{ textTransform: 'none', color: '#fff' }}>Lihat Semua Mobil</Button></a>)
            }
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </Box>
  );
}
