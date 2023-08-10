import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SpeedIcon from '@mui/icons-material/Speed';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import './ListItem.css';

export default function ListItem() {
    return (
        <Grid container spacing={2.5} mt={1} className='ListItem'>
            <Grid item xs={12}>
                <Card>
                    <Grid container p={2} spacing={2}>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://res.cloudinary.com/de7hcol74/image/upload/v1691211190/carbess/1_vjrd86.jpg"
                                    alt="car list 1"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                        Fortuner v 4x4 AT 2012
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                        Ready Stock Isuzu Traga FD All Type. Tahun 2023 Euro 4. 100% Mobil Baru. Full Garansi ...
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Rp. 280.000.000
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    20-25K KM
                                </Typography>
                                <br/>
                                <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    Automatic
                                </Typography>
                            </p>
                            <CardActions>
                                <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                    <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Grid container p={2} spacing={2}>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://res.cloudinary.com/de7hcol74/image/upload/v1691211190/carbess/1_vjrd86.jpg"
                                    alt="car list 1"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                        Fortuner v 4x4 AT 2012
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                        Ready Stock Isuzu Traga FD All Type. Tahun 2023 Euro 4. 100% Mobil Baru. Full Garansi ...
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Rp. 280.000.000
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    20-25K KM
                                </Typography>
                                <br/>
                                <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    Automatic
                                </Typography>
                            </p>
                            <CardActions>
                                <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                    <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Grid container p={2} spacing={2}>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://res.cloudinary.com/de7hcol74/image/upload/v1691211190/carbess/1_vjrd86.jpg"
                                    alt="car list 1"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                        Fortuner v 4x4 AT 2012
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                        Ready Stock Isuzu Traga FD All Type. Tahun 2023 Euro 4. 100% Mobil Baru. Full Garansi ...
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Rp. 280.000.000
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    20-25K KM
                                </Typography>
                                <br/>
                                <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    Automatic
                                </Typography>
                            </p>
                            <CardActions>
                                <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                    <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Grid container p={2} spacing={2}>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://res.cloudinary.com/de7hcol74/image/upload/v1691211190/carbess/1_vjrd86.jpg"
                                    alt="car list 1"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                        Fortuner v 4x4 AT 2012
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                        Ready Stock Isuzu Traga FD All Type. Tahun 2023 Euro 4. 100% Mobil Baru. Full Garansi ...
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Rp. 280.000.000
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    20-25K KM
                                </Typography>
                                <br/>
                                <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    Automatic
                                </Typography>
                            </p>
                            <CardActions>
                                <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                    <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Grid container p={2} spacing={2}>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://res.cloudinary.com/de7hcol74/image/upload/v1691211190/carbess/1_vjrd86.jpg"
                                    alt="car list 1"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                        Fortuner v 4x4 AT 2012
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                        Ready Stock Isuzu Traga FD All Type. Tahun 2023 Euro 4. 100% Mobil Baru. Full Garansi ...
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Rp. 280.000.000
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    20-25K KM
                                </Typography>
                                <br/>
                                <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    Automatic
                                </Typography>
                            </p>
                            <CardActions>
                                <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                    <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Grid container p={2} spacing={2}>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://res.cloudinary.com/de7hcol74/image/upload/v1691211190/carbess/1_vjrd86.jpg"
                                    alt="car list 1"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                        Fortuner v 4x4 AT 2012
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                        Ready Stock Isuzu Traga FD All Type. Tahun 2023 Euro 4. 100% Mobil Baru. Full Garansi ...
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Rp. 280.000.000
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    20-25K KM
                                </Typography>
                                <br/>
                                <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    Automatic
                                </Typography>
                            </p>
                            <CardActions>
                                <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                    <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Grid container p={2} spacing={2}>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://res.cloudinary.com/de7hcol74/image/upload/v1691211190/carbess/1_vjrd86.jpg"
                                    alt="car list 1"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                        Fortuner v 4x4 AT 2012
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                        Ready Stock Isuzu Traga FD All Type. Tahun 2023 Euro 4. 100% Mobil Baru. Full Garansi ...
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Rp. 280.000.000
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    20-25K KM
                                </Typography>
                                <br/>
                                <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    Automatic
                                </Typography>
                            </p>
                            <CardActions>
                                <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                    <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Grid container p={2} spacing={2}>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://res.cloudinary.com/de7hcol74/image/upload/v1691211190/carbess/1_vjrd86.jpg"
                                    alt="car list 1"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                        Fortuner v 4x4 AT 2012
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                        Ready Stock Isuzu Traga FD All Type. Tahun 2023 Euro 4. 100% Mobil Baru. Full Garansi ...
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Rp. 280.000.000
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    20-25K KM
                                </Typography>
                                <br/>
                                <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    Automatic
                                </Typography>
                            </p>
                            <CardActions>
                                <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                    <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Grid container p={2} spacing={2}>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://res.cloudinary.com/de7hcol74/image/upload/v1691211190/carbess/1_vjrd86.jpg"
                                    alt="car list 1"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                        Fortuner v 4x4 AT 2012
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                        Ready Stock Isuzu Traga FD All Type. Tahun 2023 Euro 4. 100% Mobil Baru. Full Garansi ...
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Rp. 280.000.000
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    20-25K KM
                                </Typography>
                                <br/>
                                <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    Automatic
                                </Typography>
                            </p>
                            <CardActions>
                                <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                    <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Grid container p={2} spacing={2}>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://res.cloudinary.com/de7hcol74/image/upload/v1691211190/carbess/1_vjrd86.jpg"
                                    alt="car list 1"
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom color="primary" sx={{ fontWeight: 'bold', fontSize: '16px' }} component="div">
                                        Fortuner v 4x4 AT 2012
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '12px', color: '#999' }}>
                                        Ready Stock Isuzu Traga FD All Type. Tahun 2023 Euro 4. 100% Mobil Baru. Full Garansi ...
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        Rp. 280.000.000
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={4}>
                            <p>
                                <SpeedIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    20-25K KM
                                </Typography>
                                <br/>
                                <PermDataSettingIcon sx={{ color: "#687d94", fontSize: 'large', margin: '0 5px -4px 10px' }} />
                                <Typography gutterBottom color="#687d94" component="span" sx={{ fontSize: '12px' }}>
                                    Automatic
                                </Typography>
                            </p>
                            <CardActions>
                                <Button aria-label="whatsapp" variant="outlined" sx={{ width: '100%' }} color="success" size="medium">
                                    <WhatsAppIcon sx={{ marginRight: '5px' }} /> WhatsApp
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
}
