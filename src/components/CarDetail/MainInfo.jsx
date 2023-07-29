import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ProductImages from './ProductImages';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import './MainInfo.css';

export default function MainInfo() {
    return (
        <section className='MainInfo'>
            <a href="/">
                <Button variant="contained" size="small" sx={{ 
                        backgroundColor: '#000',
                        ':hover': {
                            backgroundColor: '#000',
                            opacity: '0.6'
                        },
                        textTransform: 'none'
                    }}
                >
                    {`Beranda`}
                </Button>
            </a>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '30px' }}>
                Xpander Ultimate 2018
            </Typography>
            <Typography id="updatedAt" variant="subtitle2" sx={{ fontSize: 'small', color:'gray', marginTop: '10px', display: 'inline-block' }}>
                Diperbarui pada: 28 July 2023
            </Typography>
            <Button id="btnCopyLink" variant="text" startIcon={<ContentCopyIcon />} color="black">Salin Tautan</Button>
            <Button id="btnWA" variant="contained" startIcon={<WhatsAppIcon />} color="success">WhatsApp</Button>
            <ProductImages />
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '10px' }} color='primary.dark'>
                Rp. 225.000.000
            </Typography>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={4} sm={4} lg={2}>
                    <Card sx={{ backgroundColor: '#f7f8fa' }}>
                        <CardContent>
                            <CalendarMonthIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Tahun Kendaraan
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                2018
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} lg={2}>
                    <Card sx={{ backgroundColor: '#f7f8fa' }}>
                        <CardContent>
                            <CalendarMonthIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Tahun Kendaraan
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                2018
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} lg={2}>
                    <Card sx={{ backgroundColor: '#f7f8fa' }}>
                        <CardContent>
                            <CalendarMonthIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Tahun Kendaraan
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                2018
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} lg={2}>
                    <Card sx={{ backgroundColor: '#f7f8fa' }}>
                        <CardContent>
                            <CalendarMonthIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Tahun Kendaraan
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                2018
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} lg={2}>
                    <Card sx={{ backgroundColor: '#f7f8fa' }}>
                        <CardContent>
                            <CalendarMonthIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Tahun Kendaraan
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                2018
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} lg={2}>
                    <Card sx={{ backgroundColor: '#f7f8fa' }}>
                        <CardContent>
                            <CalendarMonthIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Tahun Kendaraan
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                2018
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </section>
    );
}