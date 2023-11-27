import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SpeedIcon from '@mui/icons-material/Speed';
import BrushIcon from '@mui/icons-material/Brush';
import IronIcon from '@mui/icons-material/Iron';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ProductImages from './ProductImages';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import './MainInfo.css';
import { formattedNumber } from '../Utils.js';

export default function MainInfo({data}) {
    const dateObject = new Date(data.created_at);

    const formattedDate = dateObject.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    if (!data || !Array.isArray(data.images)) {
        // console.error("Invalid data structure:", data);
        return null; // or display a placeholder or loading message
    }
    
    const images = data.images.map((item) => ({
        original: item.image,
        thumbnail: item.image,
    }));
    
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
                {data.name}
            </Typography>
            <Typography id="updatedAt" variant="subtitle2" sx={{ fontSize: 'small', color:'gray', marginTop: '10px', display: 'inline-block' }}>
                Diperbarui pada: {formattedDate}
            </Typography>
            <Button id="btnCopyLink" variant="text" startIcon={<ContentCopyIcon />} color="black">Salin Tautan</Button>
            <Button id="btnWA" variant="contained" startIcon={<WhatsAppIcon />} color="success">WhatsApp</Button>
            <ProductImages images={images} />
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '10px' }} color='primary.dark'>
                Rp. { formattedNumber(data.price) }
            </Typography>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={4} sm={4} md={2} lg={2} className='specGrid'>
                    <Card sx={{ backgroundColor: '#f7f8fa' }} className='specCard'>
                        <CardContent>
                            <CalendarMonthIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Tahun
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                {data.year}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={2} className='specGrid'>
                    <Card sx={{ backgroundColor: '#f7f8fa' }} className='specCard'>
                        <CardContent>
                            <SpeedIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Kilometer
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                {formattedNumber(data.kilometer)} km
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={2} className='specGrid'>
                    <Card sx={{ backgroundColor: '#f7f8fa' }} className='specCard'>
                        <CardContent>
                            <BrushIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Warna
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                {data.color.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={2} className='specGrid'>
                    <Card sx={{ backgroundColor: '#f7f8fa' }} className='specCard'>
                        <CardContent>
                            <IronIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Mesin
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                {data.machineCC ? data.machineCC + " cc" : "-"}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={2} className='specGrid'>
                    <Card sx={{ backgroundColor: '#f7f8fa' }} className='specCard'>
                        <CardContent>
                            <PermDataSettingIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Transmisi
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                {data.transmission.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={2} className='specGrid'>
                    <Card sx={{ backgroundColor: '#f7f8fa' }} className='specCard'>
                        <CardContent>
                            <EventSeatIcon sx={{ color: "#576a7f", fontSize: 'large' }} />
                            <Typography gutterBottom variant="body2" color="#8a9bad" component="div">
                                Penumpang
                            </Typography>
                            <Typography variant="body2" color="#576a7f" sx={{ fontWeight: 'bold', marginBottom: '-10px' }}>
                                {data.passenger || "-"}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </section>
    );
}
