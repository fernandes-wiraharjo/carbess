import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './RecommendedItem.css';

export default function RecommendedItem() {
    const [car, setCar] = useState([]);

    useEffect(() => {
        cars()
    }, []);

    const cars = async () => {
        const api_url = import.meta.env.VITE_API_URL;
        const response = await fetch(`${api_url}/cars/recommended-item`);
        setCar(await response.json());
    };

    const formattedNumber = (value) => {
        return Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 }).format(value);
    };

    return (
        <section className='RecommendedItem'>
            <div id="header">
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Direkomendasikan untuk Anda
                </Typography>
                <a href="/car-list">
                    <Button id="btnShowAllTop" variant="contained" size="small" sx={{ 
                        backgroundColor: '#000',
                        ':hover': {
                            backgroundColor: '#000',
                            opacity: '0.6'
                        },
                        textTransform: 'none'
                    }}
                    >
                        {`Tampilkan Semua Mobil >>`}
                    </Button>
                </a>
            </div>
            <Grid container spacing={2} mt={2}>
                {car.length > 0 ? 
                    car.map((data) => {
                        return (
                            <Grid item xs={12} sm={6} lg={2.4} key={data._id}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={ data.images[0] ? data.images[0].image : '' }
                                            alt={`image ${data.name}`}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }} component="div">
                                                { data.name }
                                            </Typography>
                                            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                                Rp. { formattedNumber(data.price) }
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
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
            <a href="/car-list">
                <Button id='btnShowAllBottom' variant="contained" size="small" sx={{ 
                    backgroundColor: '#000',
                    ':hover': {
                        backgroundColor: '#000',
                        opacity: '0.6'
                        },
                    textTransform: 'none'
                }}
                >{`Tampilkan Semua Mobil >>`}</Button>
            </a>
        </section>
    );
}
