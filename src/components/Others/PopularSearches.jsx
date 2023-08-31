import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './PopularSearches.css';

export default function PopularSearches() {
    return (
        <section className='PopularSearches'>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '25px' }}>
                Pencarian Terpopuler
            </Typography>
            <div id="webGrid">
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Merek Mobil Bekas / Seken Populer
                </Typography>
                <Grid container spacing={0.5} mt={0.2} mb={2.5}>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Toyota</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Honda</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Suzuki</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Mitsubishi</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Daihatsu</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Nissan</a>
                    </Grid>
                </Grid>

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Model Mobil Bekas / Seken Populer
                </Typography>
                <Grid container spacing={0.5} mt={0.2} mb={2.5}>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Honda Accord</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Honda BRV</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Honda Brio</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Honda City</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Honda Civic</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Jual Mobil Bekas Honda CR-V</a>
                    </Grid>
                </Grid>

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Jenis Mobil Bekas / Seken Populer
                </Typography>
                <Grid container spacing={0.5} mt={0.2} mb={2.5}>
                    <Grid item md={4}>
                        <a href="#">Mobil Bekas Sedan</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Mobil Bekas Trucks</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Mobil Bekas MPV</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Mobil Bekas Coupe</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Mobil Bekas Pick Up</a>
                    </Grid>
                    <Grid item md={4}>
                        <a href="#">Mobil Bekas SUV</a>
                    </Grid>
                </Grid>
            </div>
            <div id="mobileGrid">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            Merek Mobil Bekas / Seken Populer
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={0.5}>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Toyota</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Honda</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Suzuki</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Mitsubishi</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Daihatsu</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Nissan</a>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            Model Mobil Bekas / Seken Populer
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={0.5}>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Honda Accord</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Honda BRV</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Honda Brio</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Honda City</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Honda Civic</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Jual Mobil Bekas Honda CR-V</a>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            Jenis Mobil Bekas / Seken Populer
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={0.5}>
                            <Grid item xs={12}>
                                <a href="#">Mobil Bekas Sedan</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Mobil Bekas Trucks</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Mobil Bekas MPV</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Mobil Bekas Coupe</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Mobil Bekas Pick Up</a>
                            </Grid>
                            <Grid item xs={12}>
                                <a href="#">Mobil Bekas SUV</a>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    );
}
