import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import './Header.css';


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

export default function CarListHeader() {    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const openFilter = () => setOpen(true);
    const closeFilter = () => setOpen(false);
    const resetFilter = () => setAge('');    

    return (
        <section className='CarListHeader'>
            <div id="header">
                <a href="/">
                <Button variant="contained" size="small" sx={{ 
                        backgroundColor: '#000',
                        ':hover': {
                            backgroundColor: '#000',
                            opacity: '0.6'
                        },
                        textTransform: 'none',
                        marginTop: '20px'
                    }}
                >
                    {`Beranda`}
                </Button>
                </a>
                <Button id="btnFilter" variant="contained" size="small" sx={{ 
                    backgroundColor: '#000',
                    ':hover': {
                        backgroundColor: '#000',
                        opacity: '0.6'
                    },
                    textTransform: 'none',
                    marginTop: '20px',
                    display: 'none'
                }}
                onClick={openFilter}
                >
                {`Filter`}
                </Button>
            </div>
            <BootstrapDialog
                fullScreen={fullScreen}
                onClose={closeFilter}
                aria-labelledby="global-search-dialog"
                open={open}
                fullWidth={true}
                maxWidth={'sm'}
            >
                <BootstrapDialogTitle 
                    id="global-search-dialog"
                    onClose={closeFilter} 
                    backgroundColor='primary.dark'
                    color='#fff'
                >
                    Filter
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField id="txtKeyword" label="Kata Kunci" variant="outlined" size="small" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="lblBrand">Merek</InputLabel>
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
                                <InputLabel id="lblModel">Model</InputLabel>
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
                                <InputLabel id="lblPrice">Harga</InputLabel>
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
                                <InputLabel id="lblYear">Tahun</InputLabel>
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
                                <InputLabel id="lblKilometer">Kilometer</InputLabel>
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
                                <InputLabel id="lblTransmition">Transmisi</InputLabel>
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
                                <InputLabel id="lblBodyType">Tipe Bodi</InputLabel>
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
                                <InputLabel id="lblColor">Warna</InputLabel>
                                <Select
                                    labelId="lblColor"
                                    id="slColor"
                                    value={age}
                                    label="Warna"
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
                                <InputLabel id="lblFuel">Bahan Bakar</InputLabel>
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
                                <InputLabel id="lblDriveWheelType">Tipe Roda Penggerak</InputLabel>
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
                    <Button onClick={resetFilter}>
                        Atur Ulang
                    </Button>
                    <Button autoFocus onClick={closeFilter}>
                        Cari
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </section>
    );
}
