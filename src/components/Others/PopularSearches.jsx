import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './PopularSearches.css';

export default function PopularSearches() {
    const api_url = import.meta.env.VITE_API_URL;
    const [brand, setBrand] = useState([]);
    const [model, setModel] = useState([]);
    const [bodyType, setBodyType] = useState([]);

    useEffect(() => {
        brands()
        models()
        bodyTypes()
    }, []);

    const brands = async () => {
        const response = await fetch(`${api_url}/brands/get-popular`);
        setBrand(await response.json());
    };

    const models = async () => {
        const response = await fetch(`${api_url}/models/get-popular`);
        setModel(await response.json());
    };

    const bodyTypes = async () => {
        const response = await fetch(`${api_url}/body-types/get-popular`);
        setBodyType(await response.json());
    };

    const navigate = useNavigate();

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
                    {brand.length > 0 ? 
                        brand.map((data) => {
                            const formData = { brand: data._id };
                            return (
                                <Grid item md={4} key={data._id} onClick={() => navigate('/car-list', { state: { formData } })}>
                                    <a href="">Jual Mobil Bekas { data.name }</a>
                                </Grid>
                            )
                        }) : ''
                    }
                </Grid>

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Model Mobil Bekas / Seken Populer
                </Typography>
                <Grid container spacing={0.5} mt={0.2} mb={2.5}>
                    {model.length > 0 ? 
                        model.map((data) => {
                            const formData = { brand: data.brand, model: data._id };
                            return (
                                <Grid item md={4} key={data._id} onClick={() => navigate('/car-list', { state: { formData } })}>
                                    <a href="">Jual Mobil Bekas { data.name }</a>
                                </Grid>
                            )
                        }) : ''
                    }
                </Grid>

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Jenis Mobil Bekas / Seken Populer
                </Typography>
                <Grid container spacing={0.5} mt={0.2} mb={2.5}>
                    {bodyType.length > 0 ? 
                        bodyType.map((data) => {
                            const formData = { brand: '', bodyType: data._id };
                            return (
                                <Grid item md={4} key={data._id} onClick={() => navigate('/car-list', { state: { formData } })}>
                                    <a href="">Mobil Bekas { data.name }</a>
                                </Grid>
                            )
                        }) : ''
                    }
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
                            {brand.length > 0 ? 
                                brand.map((data) => {
                                    const formData = { brand: data._id };
                                    return (
                                        <Grid item xs={12} key={data._id} onClick={() => navigate('/car-list', { state: { formData } })}>
                                            <a href="">Jual Mobil Bekas { data.name }</a>
                                        </Grid>
                                    )
                                }) : ''
                            }
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
                            {model.length > 0 ? 
                                model.map((data) => {
                                    const formData = { brand: data.brand, model: data._id };
                                    return (
                                        <Grid item xs={12} key={data._id} onClick={() => navigate('/car-list', { state: { formData } })}>
                                            <a href="">Jual Mobil Bekas { data.name }</a>
                                        </Grid>
                                    )
                                }) : ''
                            }
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
                            {bodyType.length > 0 ? 
                                bodyType.map((data) => {
                                    const formData = { brand: '', bodyType: data._id };
                                    return (
                                        <Grid item xs={12} key={data._id} onClick={() => navigate('/car-list', { state: { formData } })}>
                                            <a href="">Mobil Bekas { data.name }</a>
                                        </Grid>
                                    )
                                }) : ''
                            }
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    );
}
