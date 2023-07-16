import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import './GlobalSearch.css';

export default function GlobalSearch() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
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
                    <Grid item sm={12} md={3}>
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
                    <Grid item sm={12} md={3}>
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
                    <Grid item sm={12} md={3}>
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
                    <Grid item sm={12} md={3}>
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
                <Typography variant="subtitle2" color="primary"
                    sx={{  
                        textAlign: 'center', 
                        marginBottom: '5px',
                        cursor: 'pointer'
                    }}>
                    {`Pencarian lebih lanjut >>`}
                </Typography>
            </Box>
        </section>
    );
}
