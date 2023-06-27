import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import carbessLogo from '/icon/carbess-000.png';
import './Navbar.css';

function appBarLabel(label) {
  return (
    <Toolbar>
      <img src={carbessLogo} className='logo' alt="Carbess logo" />
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
  },
});

export default function NavBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color='primary'>
          {appBarLabel('Jual Mobil Bekas Pontianak')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
