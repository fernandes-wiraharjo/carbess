import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { SlBrand, SlModel, SlPriceStart, SlPriceEnd, SlYearStart, SlYearEnd, 
    SlKilometerStart, SlKilometerEnd, SlTransmission, SlBodyType, SlFuel, SlDriveWheelType} from '../Inputs/Selects';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import './GlobalSearch.css';
import { generatePrices, generateYears, generateKilometers } from '../Utils.js';
import { initFormDataFilter } from '../Constants';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: '#fff',
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
  
BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const prices = generatePrices(50);
const years = generateYears(2010);
const kilometers = generateKilometers(0);

export default function GlobalSearch() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const api_url = import.meta.env.VITE_API_URL;
    const [slBrand, setSlBrand] = useState([]);
    const [slModel, setSlModel] = useState([]);
    const [slTransmission, setSlTransmission] = useState([]);
    const [slBodyType, setSlBodyType] = useState([]);
    const [slFuel, setSlFuel] = useState([]);
    const [slDriveWheelType, setSlDriveWheelType] = useState([]);

    useEffect(() => {
        brands(), transmissions(), bodyTypes(), fuels(), driveWheelTypes()
    }, []);
    
    const brands = async () => {
        const response = await fetch(`${api_url}/brands/`);
        setSlBrand(await response.json());
    };
    const models = async (brandId) => {
        const response = await fetch(`${api_url}/models/brands/${brandId}`);
        setSlModel(await response.json());
    };
    const transmissions = async () => {
        const response = await fetch(`${api_url}/transmissions/`);
        setSlTransmission(await response.json());
    };
    const bodyTypes = async () => {
        const response = await fetch(`${api_url}/body-types/`);
        setSlBodyType(await response.json());
    };
    const fuels = async () => {
        const response = await fetch(`${api_url}/fuels/`);
        setSlFuel(await response.json());
    };
    const driveWheelTypes = async () => {
        const response = await fetch(`${api_url}/drive-wheel-types/`);
        setSlDriveWheelType(await response.json());
    };

    const [formData, setFormData] = useState(initFormDataFilter);
    const [open, setOpen] = useState(false); 

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;

        setFormData((currData) => {
            if (changedField == 'brand') {
                models(newValue);
                return {
                    ...currData,
                    [changedField]: newValue, model: ''
                }
            } else if (changedField == 'priceStart') {
                return {
                    ...currData,
                    [changedField]: newValue, priceEnd: newValue > currData.priceEnd ? '' : currData.priceEnd
                }
            } else if (changedField == 'yearStart') {
                return {
                    ...currData,
                    [changedField]: newValue, yearEnd: newValue > currData.yearEnd ? '' : currData.yearEnd
                }
            } else if (changedField == 'kilometerStart') {
                return {
                    ...currData,
                    [changedField]: newValue, kilometerEnd: newValue > currData.kilometerEnd ? '' : currData.kilometerEnd
                }
            }

            return {
                ...currData,
                [changedField]: newValue
            }
        });
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/car-list', { state: { formData } });
    };
    
    return (
        <section className='GlobalSearch'>
            <Box
                sx={{
                    width: '100%',
                    height: 40,
                    backgroundColor: 'primary.dark',
                    borderRadius: '5px 5px 0 0'
                }}            
            >
                <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold', padding: '10px' }}>
                    Cari Mobil
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    backgroundColor: '#f7f8fa',
                    borderRadius: '0 0 5px 5px',
                    padding: '15px'
                }}            
            >
                <Grid container spacing={2} mb={2.5}>
                    <Grid item xs={12} md={3}>
                        <SlBrand list={slBrand} val={formData.brand} handleChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <SlModel list={slModel} val={formData.model} handleChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={6} md={1.5}>
                        <SlPriceStart list={prices} val={formData.priceStart} handleChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={6} md={1.5}>
                        <SlPriceEnd list={prices}  priceStart={formData.priceStart} val={formData.priceEnd} handleChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button variant="contained" fullWidth onClick={handleSubmit}
                            sx={{ 
                                backgroundColor: '#fe8104',
                                ':hover': {
                                    backgroundColor: '#fe8104',
                                    opacity: '0.9'
                                },
                                textTransform: 'none'
                            }}>
                                Cari
                        </Button>
                    </Grid>
                </Grid>
                <Typography variant="subtitle2" color="primary" onClick={handleOpen}
                    sx={{  
                        textAlign: 'center', 
                        marginBottom: '5px',
                        cursor: 'pointer'
                    }}>
                    {`Pencarian lebih lanjut >>`}
                </Typography>
            </Box>
            <BootstrapDialog
                fullScreen={fullScreen}
                onClose={handleClose}
                aria-labelledby="global-search-dialog"
                open={open}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <BootstrapDialogTitle 
                    id="global-search-dialog"
                    onClose={handleClose} 
                    backgroundColor='primary.dark'
                    color='#fff'
                    variant="subtitle2"
                >
                    Pencarian lebih lanjut
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                            <SlBrand list={slBrand} val={formData.brand} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <SlModel list={slModel} val={formData.model} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={6}>
                            <SlPriceStart list={prices} val={formData.priceStart} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={6}>
                            <SlPriceEnd list={prices} priceStart={formData.priceStart} val={formData.priceEnd} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={6}>
                            <SlYearStart list={years} val={formData.yearStart} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={6}>
                            <SlYearEnd list={years} yearStart={formData.yearStart} val={formData.yearEnd} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={6}>
                            <SlKilometerStart list={kilometers} val={formData.kilometerStart} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={6}>
                            <SlKilometerEnd list={kilometers} kilometerStart={formData.kilometerStart} val={formData.kilometerEnd} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <SlTransmission list={slTransmission} val={formData.transmission} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <SlBodyType list={slBodyType} val={formData.bodyType} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={12}>
                            <SlFuel list={slFuel} val={formData.fuel} handleChange={(e) => handleChange(e)} />
                        </Grid>
                        <Grid item xs={12}>
                            <SlDriveWheelType list={slDriveWheelType} val={formData.driveWheelType} handleChange={(e) => handleChange(e)} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit}>
                        Cari
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </section>
    );
}
