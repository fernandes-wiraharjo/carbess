import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './NewArrival.css';

export default function NewArrival() {
    return (
        <section className='NewArrival'>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                New Arrival
            </Typography>
            <Grid container spacing={2} mt={2}>
                <Grid item sm={6} md={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/images/new_arrivals/1.jpg"
                                alt="new arrival item 1"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }} component="div">
                                    Xpander Ultimate 2018
                                </Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Rp. 225.000.000
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
                <Grid item sm={6} md={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/images/new_arrivals/2.jpg"
                                alt="new arrival item 2"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }} component="div">
                                    Innova G 2018
                                </Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Rp. 290.000.000
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
                <Grid item sm={6} md={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/images/new_arrivals/3.jpg"
                                alt="new arrival item 3"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }} component="div">
                                    Camry 2011 V
                                </Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Rp. 165.000.000
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
                <Grid item sm={6} md={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/images/new_arrivals/4.jpg"
                                alt="new arrival item 4"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }} component="div">
                                    HRV E CVT 2015
                                </Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                    Rp. 235.000.000
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
        </section>
    );
}
