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
            <Typography component="div">{children}</Typography>
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

export default function Note({data}) {
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
                            <div dangerouslySetInnerHTML={{ __html: data.sellerNote || "-" }} />
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
                                            <Typography variant="body2" className='specContent'>{data.transmission && data.transmission.name ? data.transmission.name : '-'}</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                {/* <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Jumlah Gir</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>6</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid> */}
                            </Grid>

                            <Typography variant="subtitle2" className='specTitleMT'>GENERAL</Typography>
                            <Grid container spacing={2} mt={0} color='#576a7f'>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Pintu</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>{data.door || "-"}</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Kapasitas Kursi</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>{data.passenger || "-"}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Tipe Bodi</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>{data.bodyType && data.bodyType.name ? data.bodyType.name : '-'}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Tipe Roda Penggerak</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>{data.driveWheelType && data.driveWheelType.name ? data.driveWheelType.name : '-'}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Dirakit</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>Complete Built Up (CBU)</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid> */}
                            </Grid>

                            <Typography variant="subtitle2" className='specTitleMT'>SPESIFIKASI MESIN</Typography>
                            <Grid container spacing={2} mt={0} color='#576a7f'>
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Engine CC</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>{data.machineCC ? data.machineCC + " cc" : "-"}</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                                {/* <Grid item xs={12} md={6}>
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
                                </Grid> */}
                                <Grid item xs={12} md={6}>
                                    <Grid container className='specBorderBottom'>
                                        <Grid item xs={6}>
                                            <Typography variant="body2">Tipe Bahan Bakar</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className='specContent'>{data.fuel && data.fuel.name ? data.fuel.name : '-'}</Typography>
                                        </Grid>
                                    </Grid>                                    
                                </Grid>
                            </Grid>

                            {/* <Typography variant="subtitle2" className='specTitleMT'>KINERJA & EKONOMI</Typography>
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
                            </Grid> */}

                            {/* <Typography variant="subtitle2" className='specTitleMT'>SETIR</Typography>
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
                            </Grid> */}

                            {/* <Typography variant="subtitle2" className='specTitleMT'>DIMENSI & BERAT</Typography>
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
                            </Grid> */}
                        </CustomTabPanel>
                    </Box>
                </ThemeProvider>
            </Container>
        </section>
    );
}
