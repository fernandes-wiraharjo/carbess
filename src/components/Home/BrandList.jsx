import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './BrandList.css';

export default function BrandList() {
    const [brand, setBrand] = useState([]);

    useEffect(() => {
        brands()
    }, []);

    const brands = async () => {
        const api_url = import.meta.env.VITE_API_URL;
        const response = await fetch(`${api_url}/brands/home-list`);
        setBrand(await response.json());
    };

    const navigate = useNavigate();

    return (
        <section className='BrandList'>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Cari Mobil Bekas Berdasarkan Merk
            </Typography>
            <Grid container spacing={2} mt={2}>
                {brand.length > 0 ? 
                    brand.map((data) => {
                        const formData = { brand: data._id };
                        return (
                            <Grid item xs={4} md={1.5} lg={1.5} key={data._id}>
                                <Card>
                                    <CardActionArea onClick={() => navigate('/car-list', { state: { formData } })}>
                                        <CardMedia
                                            component="img"
                                            height="110"
                                            image={ data.logo }
                                            alt={`cari berdasarkan merk ${data.name}`}
                                            sx={{ padding: '20px' }}
                                        />
                                        <hr/>
                                        <CardContent>
                                            <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold', opacity: '0.7', textAlign: 'center' }} component="div">
                                                { data.name }
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
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
