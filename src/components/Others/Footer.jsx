import { ThemeProvider } from '@mui/material/styles';
import { responsiveFonts } from './Theme';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='Footer'>
            <Container maxWidth='lg'>
                <ThemeProvider theme={responsiveFonts}>
                    <Grid container spacing={0.5} mt={0.2} mb={2.5}>
                        <Grid item sm={12} md={4}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>HUBUNGI KAMI</Typography>
                            <p>
                                <a href='https://wa.me/6285921592597' target='blank'><WhatsAppIcon color='success' sx={{ marginRight: '10px' }} /></a>
                                <a href='https://www.instagram.com/carbess_id' target='blank'><InstagramIcon color='secondary' sx={{ marginRight: '10px' }} /></a>
                                <a href='https://www.facebook.com/Carbess.id' target='blank'><FacebookIcon color='primary' /></a>
                            </p>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <div id="footerAboutUs">
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>TENTANG KAMI</Typography>
                                <Typography variant="body2" className='footerContent'>
                                    Jual beli mobil bekas berkualitas di Pontianak                                    
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <div id="footerDevBy">
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>DEVELOPED BY</Typography>
                                <a href='https://fw-wq9n.onrender.com/' target='blank'>
                                    <Typography variant="body2" className="footerContent">
                                        Fernandes Wiraharjo
                                    </Typography>
                                </a>
                            </div>
                        </Grid>
                    </Grid>

                    <hr />

                    <Typography variant="body2" sx={{ marginTop: '50px' }}>
                        <a href='/'>© CARBESS.ID</a> {new Date(). getFullYear()}
                    </Typography>
                </ThemeProvider>
            </Container>
        </footer>
    );
}
