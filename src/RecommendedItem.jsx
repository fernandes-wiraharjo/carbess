import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './RecommendedItem.css';

export default function RecommendedItem() {
    return (
        <section className='RecommendedItem'>
            <div id="header">
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Direkomendasikan untuk Anda
                </Typography>
                <Button id="btnShowAllTop" variant="contained" size="small" sx={{ 
                    backgroundColor: '#000',
                    ':hover': {
                        backgroundColor: '#000',
                        opacity: '0.6'
                      },
                    textTransform: 'none'
                }}
                >{`Tampilkan Semua Mobil >>`}</Button>
            </div>
            <Grid container spacing={2} mt={2}>
                <Grid item xs={12} md={2.4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/images/recommended_items/1.jpg"
                                alt="recommended item 1"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }} component="div">
                                    Fortuner v 4x4 AT 2012
                                </Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Rp. 280.000.000
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
                <Grid item xs={12} md={2.4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/images/recommended_items/2.jpg"
                                alt="recommended item 2"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }} component="div">
                                    MAZDA 2 R 2016 Skyactive
                                </Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Rp. 185.000.000
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
                <Grid item xs={12} md={2.4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/images/recommended_items/3.jpg"
                                alt="recommended item 3"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }} component="div">
                                    Raize 1.0 Turbo Sport 2021
                                </Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Rp. 275.000.000
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
                <Grid item xs={12} md={2.4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/images/recommended_items/4.jpg"
                                alt="recommended item 4"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }} component="div">
                                    Honda Brio E Cvt 2019
                                </Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Rp. 170.000.000
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
                <Grid item xs={12} md={2.4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/images/recommended_items/5.jpg"
                                alt="recommended item 5"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }} component="div">
                                    Jazz rs 2011 white
                                </Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Rp. 138.000.000
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
            </Grid>
            <Button id='btnShowAllBottom' variant="contained" size="small" sx={{ 
                backgroundColor: '#000',
                ':hover': {
                    backgroundColor: '#000',
                    opacity: '0.6'
                    },
                textTransform: 'none'
            }}
            >{`Tampilkan Semua Mobil >>`}</Button>
        </section>
    );
}
