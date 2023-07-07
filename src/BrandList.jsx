import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './BrandList.css';

export default function BrandList() {
    return (
        <section className='BrandList'>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Cari Mobil Bekas Berdasarkan Merk
            </Typography>
            <Grid container spacing={2} mt={2}>
                <Grid item sm={4} md={1.5}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="110"
                                image="/icon/honda.png"
                                alt="cari berdasarkan merk honda"
                                sx={{ padding: '20px' }}
                            />
                            <hr/>
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold', opacity: '0.7', textAlign: 'center' }} component="div">
                                    Honda
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={4} md={1.5}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="110"
                                image="/icon/daihatsu.png"
                                alt="cari berdasarkan merk daihatsu"
                                sx={{ padding: '20px' }}
                            />
                            <hr/>
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold', opacity: '0.7', textAlign: 'center' }} component="div">
                                    Daihatsu
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={4} md={1.5}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="110"
                                image="/icon/toyota.png"
                                alt="cari berdasarkan merk toyota"
                                sx={{ padding: '20px' }}
                            />
                            <hr/>
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold', opacity: '0.7', textAlign: 'center' }} component="div">
                                    Toyota
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={4} md={1.5}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="110"
                                image="/icon/nissan.png"
                                alt="cari berdasarkan merk nissan"
                                sx={{ padding: '20px' }}
                            />
                            <hr/>
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold', opacity: '0.7', textAlign: 'center' }} component="div">
                                    Nissan
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={4} md={1.5}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="110"
                                image="/icon/dfsk.png"
                                alt="cari berdasarkan merk dfsk"
                                sx={{ padding: '20px' }}
                            />
                            <hr/>
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold', opacity: '0.7', textAlign: 'center' }} component="div">
                                    Dfsk
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={4} md={1.5}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="110"
                                image="/icon/mitsubishi.png"
                                alt="cari berdasarkan merk mitsubishi"
                                sx={{ padding: '20px' }}
                            />
                            <hr/>
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold', opacity: '0.7', textAlign: 'center' }} component="div">
                                    Mitsubishi
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={4} md={1.5}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="110"
                                image="/icon/suzuki.png"
                                alt="cari berdasarkan merk suzuki"
                                sx={{ padding: '20px' }}
                            />
                            <hr/>
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold', opacity: '0.7', textAlign: 'center' }} component="div">
                                    Suzuki
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={4} md={1.5}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="110"
                                image="/icon/wuling.png"
                                alt="cari berdasarkan merk wuling"
                                sx={{ padding: '20px' }}
                            />
                            <hr/>
                            <CardContent>
                                <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold', opacity: '0.7', textAlign: 'center' }} component="div">
                                    Wuling
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </section>
    );
}
