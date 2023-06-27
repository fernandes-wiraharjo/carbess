import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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
                                <Typography variant="body2" color="text.secondary">
                                    Rp. 225.000.000
                                </Typography>
                            </CardContent>
                        </CardActionArea>
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
                                <Typography variant="body2" color="text.secondary">
                                    Rp. 290.000.000 (nego)
                                </Typography>
                            </CardContent>
                        </CardActionArea>
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
                                <Typography variant="body2" color="text.secondary">
                                    Rp. 165.000.000
                                </Typography>
                            </CardContent>
                        </CardActionArea>
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
                                <Typography variant="body2" color="text.secondary">
                                    Rp. 235.000.000
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </section>
    );
}
