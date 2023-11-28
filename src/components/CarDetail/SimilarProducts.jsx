import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './SimilarProducts.css';
import { formattedNumber } from '../Utils.js';

export default function SimilarProducts({cars}) {
    const handleWhatsAppClick = (carDetailLink) => {
        const phoneNumber = '6285921592597';
        const message = encodeURIComponent("Saya tertarik dengan mobil ini, saya ingin melihat secara langsung kondisi mobil Anda.");
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}%0A${encodeURIComponent(window.location.origin + carDetailLink)}`;
        window.open(whatsappUrl, '_blank');
    };
    
    return (
        <section className='SimilarProducts'>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Produk Serupa
            </Typography>
            <Grid container spacing={2} mt={2}>
                {cars.length > 0 ? 
                    cars.map((data) => {
                        const carDetailLink = `/car-detail/${data._id}/${data.model}`;
                        return (
                            <Grid item xs={12} sm={6} lg={3} key={data._id}>
                                <Card>
                                    <NavLink to={carDetailLink}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={ data.images[0] ? data.images[0].image : '' }
                                                alt={`image ${data.name}`}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h7" color="primary.dark" sx={{ fontWeight: 'bold' }} component="div">
                                                    { data.name }
                                                </Typography>
                                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                    Rp. { formattedNumber(data.price) }
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </NavLink>
                                    <CardActions>
                                        <Button 
                                            aria-label="whatsapp" 
                                            variant="outlined" 
                                            sx={{ width: '100%' }} 
                                            color="success" 
                                            size="medium"
                                            onClick={() => handleWhatsAppClick(carDetailLink)}
                                        >
                                            <WhatsAppIcon />
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }) :
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Typography variant="h7" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                            NO DATA AVAILABLE
                        </Typography>
                    </Grid>
                }
            </Grid>
        </section>
    );
}
