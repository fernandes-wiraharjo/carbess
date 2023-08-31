import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { responsiveFonts } from '../Others/Theme';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Note.css';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`car-detail-tabpanel-${index}`}
        aria-labelledby={`car-detail-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `car-detail-tab-${index}`,
        'aria-controls': `car-detail-tabpanel-${index}`,
    };
}

export default function Note() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className="Note">
            <Container maxWidth='lg'>
                <ThemeProvider theme={responsiveFonts}>
                    <Box sx={{ width: '100%', backgroundColor: '#fff', borderRadius: '5px' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs 
                                value={value} 
                                onChange={handleChange} 
                                aria-label="car detail tabs"
                                variant='fullWidth'                                
                            >
                                <Tab label="CATATAN PENJUAL" {...a11yProps(0)} sx={{ fontWeight: 'bold' }} />
                                <Tab label="SPESIFIKASI" {...a11yProps(1)} sx={{ fontWeight: 'bold' }} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            Tawaran Terbaik dari Carmudi.co.id <br/><br/>

                            READY DAN SIAP KIRIM <br/><br/>

                            ❤️𝗔𝗽𝗮𝗽𝘂𝗻 𝗠𝗼𝗯𝗶𝗹𝗻𝘆𝗮 𝗠 𝗖𝗮𝗿 𝗦𝗼𝗹𝘂𝘁𝗶𝗼𝗻 𝗦𝗼𝗹𝘂𝘀𝗶𝗻𝘆𝗮!🧏 <br/><br/>

                            Upgrade ke mobil impian, sekarang bukan cuman angan looh! <br/>
                            Apalagi kalau Anda adalah bisnis owner / pekerja keras yg tidak ada waktu buat urusin sana sini yang akhirnya hanya buang buang waktu, karena kami sangat yakin buat Anda waktu adalah segalanya bukan uang untuk segalanya. Karena kalau uang adalah segalanya tapi waktu Anda terbuang percuma hanya karena urusan remeh temeh, maka dipastikan kesempatan / peluang Anda untuk menghasilkan yang lebih besar ( CUAN ) bisa saja sekejap hilang. Karena dimana era sekarang ini kecepatan & ketepatan waktu adalah segalanya. <br/><br/>

                            So, Kamu bisa dapatkan mobil impian dengan kualitas idaman & Tepat Guna bersama team yg sangat berpengalaman & juga berkompeten di bidangnya untuk menghasilkan Solusi Tepat tentang mobil Impian yang ingin Anda miliki tanpa harus buang buang waktu. <br/>
                            Dan semua hanya ada di M Car Solution! <br/><br/>

                            ❤️𝙀𝙣𝙟𝙤𝙮 𝙔𝙤𝙪𝙧 𝘿𝙖𝙮, 𝙎𝙩𝙖𝙮 𝙎𝙖𝙛𝙚 & 𝙃𝙚𝙖𝙡𝙩𝙝𝙮🧏 <br/><br/>

                            Yuk, hubungi kami sekarang! <br/>
                            IG : @mcarsolution <br/>
                            📲 +628-1311011749 <br/>
                            📲 +628-568768586 <br/>
                            🌐 www.mcar-solution.com
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Typography variant="subtitle2" className='specTitle'>TRANSMISI</Typography>
                            <Grid container spacing={2} mt={0} color='#576a7f'>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Transmisi</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>Automatic</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Jumlah Gir</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>6</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Typography variant="subtitle2" className='specTitleMT'>GENERAL</Typography>
                            <Grid container spacing={2} mt={0} color='#576a7f'>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Pintu</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>5</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Kapasitas Kursi</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>7</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Dirakit</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>Complete Built Up (CBU)</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                            </Grid>

                            <Typography variant="subtitle2" className='specTitleMT'>SPESIFIKASI MESIN</Typography>
                            <Grid container spacing={2} mt={0} color='#576a7f'>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Engine CC</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>1496</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Baut (mm)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>74.5</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Struk (mm)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>85.8</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Rasio Kompresi</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>13</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Tenaga Puncak (hp)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>108</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Tenaga Putaran Puncak (Nm)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>144</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Injeksi Langsung</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>Direct Injection</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Aspirasi</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>Aspirated</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Tipe Bahan Bakar</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>Pertamax</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                            </Grid>

                            <Typography variant="subtitle2" className='specTitleMT'>KINERJA & EKONOMI</Typography>
                            <Grid container spacing={2} mt={0} color='#576a7f'>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Konsumsi Bahan Bakar (L/100km)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>5.1</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Emisi CO2</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>119</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">0-100 km/jam (detik)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>10</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Kecepatan Tertinggi (km/jam)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>184</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                            </Grid>

                            <Typography variant="subtitle2" className='specTitleMT'>SETIR</Typography>
                            <Grid container spacing={2} mt={0} color='#576a7f'>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Radius Putar</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>9.8</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                            </Grid>

                            <Typography variant="subtitle2" className='specTitleMT'>DIMENSI & BERAT</Typography>
                            <Grid container spacing={2} mt={0} color='#576a7f' className='specLastGrid'>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Panjang (mm)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>4340</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Lebar (mm)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>1695</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Tinggi (mm)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>1479</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Jarak Roda (mm)</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>2570</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Thread Depan</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>1495</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Thread Belakang</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>1485</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                    </Box>
                </ThemeProvider>
            </Container>
        </section>
    );
}
