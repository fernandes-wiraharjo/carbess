import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { SlBrand, SlModel, SlPrice } from '../Inputs/Selects';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

export default function GlobalSearch() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
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
                        <SlBrand />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <SlModel />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <SlPrice />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button variant="contained" fullWidth
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
                >
                    <Typography variant="subtitle2">Pencarian lebih lanjut</Typography>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="lblBrand"><Typography variant="subtitle2">Merek</Typography></InputLabel>
                                <Select
                                    labelId="lblBrand"
                                    id="slBrand"
                                    value={age}
                                    label="Merek"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="lblModel"><Typography variant="subtitle2">Model</Typography></InputLabel>
                                <Select
                                    labelId="lblModel"
                                    id="slModel"
                                    value={age}
                                    label="Model"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="lblPrice"><Typography variant="subtitle2">Harga</Typography></InputLabel>
                                <Select
                                    labelId="lblPrice"
                                    id="slPrice"
                                    value={age}
                                    label="Harga"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="lblYear"><Typography variant="subtitle2">Tahun</Typography></InputLabel>
                                <Select
                                    labelId="lblYear"
                                    id="slYear"
                                    value={age}
                                    label="Tahun"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="lblKilometer"><Typography variant="subtitle2">Kilometer</Typography></InputLabel>
                                <Select
                                    labelId="lblKilometer"
                                    id="slKilometer"
                                    value={age}
                                    label="Kilometer"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="lblTransmition"><Typography variant="subtitle2">Transmisi</Typography></InputLabel>
                                <Select
                                    labelId="lblTransmition"
                                    id="slTransmition"
                                    value={age}
                                    label="Transmisi"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="lblBodyType"><Typography variant="subtitle2">Tipe Bodi</Typography></InputLabel>
                                <Select
                                    labelId="lblBodyType"
                                    id="slBodyType"
                                    value={age}
                                    label="Tipe Bodi"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="lblFuel"><Typography variant="subtitle2">Bahan Bakar</Typography></InputLabel>
                                <Select
                                    labelId="lblFuel"
                                    id="slFuel"
                                    value={age}
                                    label="Bahan Bakar"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="lblDriveWheelType"><Typography variant="subtitle2">Tipe Roda Penggerak</Typography></InputLabel>
                                <Select
                                    labelId="lblDriveWheelType"
                                    id="slDriveWheelType"
                                    value={age}
                                    label="Tipe Roda Penggerak"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cari
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </section>
    );
}
