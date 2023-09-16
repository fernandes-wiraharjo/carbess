import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './NewArrival.css';

export default function NewArrival() {
    const [car, setCar] = useState([]);

    useEffect(() => {
        cars()
    }, []);

    const cars = async () => {
        const response = await fetch('http://localhost:3000/cars/new-arrival');
        setCar(await response.json());
    };

    const formattedNumber = (value) => {
        return Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 }).format(value);
    };

    return (        
        <section className='NewArrival'>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                New Arrival
            </Typography>
            <Grid container spacing={2} mt={2}>
                {car.length > 0 ? 
                    car.map((data) => {
                        return (
                            <Grid item xs={12} sm={6} lg={3} key={data._id}>
                                <Card>
                                    <NavLink to="/car-detail">
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="250"
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
                                    </NavLink>
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
        </section>
    );
}