import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SpeedIcon from '@mui/icons-material/Speed';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import { formattedNumber } from '../Utils.js';
import { SlSort } from '../Inputs/Selects';
import './ListItem.css';

export default function ListItem({queryData}) {
    const api_url = import.meta.env.VITE_API_URL;
    const [carCount, setCarCount] = useState(0);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getList(queryData)
    }, []);

    const getList = async (queryData) => {
        try {
            const response = await fetch(`${api_url}/cars/get-list`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(queryData),
            });
      
            if (response.ok) {
                // Handle success
                const rsp= await response.json();
                setCars(rsp.cars);
                setCarCount(rsp.count)
            } else {
                // Handle errors
                console.log(await response.json());
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className='MainContent'>
            <div id="header">
                <div id="lblTitle"><b>Cari Mobil Bekas Pontianak ({ formattedNumber(carCount) } unit)</b></div>
                <SlSort />
            </div>
            <Grid container spacing={2.5} mt={1} className='ListItem'>
                {cars.length > 0 ? 
                    cars.map((data) => {
                        return (
                            <Grid item xs={12} key={data._id}>
                                <Card>
                                    <Grid container p={2} spacing={1}>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    image={ data.images[0] ? data.images[0].image : '' }
                                                    alt={`image ${data.name}`}
                                                    sx={{ borderRadius: '5px' }}
                                                />
                                            </CardActionArea>
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={4}>
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                                        {data.name}
                                                    </Typography>
                                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                                        {
                                                            data.sellerNote 
                                                            ? <div dangerouslySetInnerHTML={{ __html: data.sellerNote.substring(0, 85) + '...' }} /> 
                                                            : 'Belum ada deskripsi'
                                                        }
                                                    </Typography>
                                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                        Rp. { formattedNumber(data.price) }
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={4}>
                                            <Grid container pt={2} spacing={1}>
                                                <Grid item xs={12} sm={6} lg={12}>
                                                    <div className="dvInfo">
                                                        <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                                        <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                                            { formattedNumber(data.kilometer) } KM
                                                        </Typography>
                                                        <br/>
                                                        <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                                        <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                                            { data.transmission.name }
                                                        </Typography>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} sm={6} lg={12}>
                                                    <CardActions>
                                                        <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                                            <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                                        </Button>
                                                    </CardActions>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
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
