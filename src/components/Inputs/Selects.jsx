import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function SlBrand() {
    const [brand, setBrand] = useState('');

    const handleChange = (event) => {
        setBrand(event.target.value);
    };

    return (
        <FormControl fullWidth size='small'>
            <InputLabel id="lblBrand">Merek</InputLabel>
            <Select
                labelId="lblBrand"
                id="slBrand"
                value={brand}
                label="Merek"
                onChange={handleChange}
            >
                <MenuItem value={1}>Honda</MenuItem>
                <MenuItem value={2}>Toyota</MenuItem>
                <MenuItem value={3}>Suzuki</MenuItem>
                <MenuItem value={4}>Mitsubishi</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlModel() {
    const [model, setModel] = useState('');

    const handleChange = (event) => {
        setModel(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblModel">Model</InputLabel>
            <Select
                labelId="lblModel"
                id="slModel"
                value={model}
                label="Model"
                onChange={handleChange}
            >
                <MenuItem value={1}>Xpander</MenuItem>
                <MenuItem value={2}>Crv</MenuItem>
                <MenuItem value={3}>Hrv</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlPriceStart() {
    const [price, setPrice] = useState('');

    const handleChange = (event) => {
        setPrice(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblPrice">Harga Awal</InputLabel>
            <Select
                labelId="lblPrice"
                id="slPrice"
                value={price}
                label="Harga Awal"
                onChange={handleChange}
            >
                <MenuItem value={25}>25 Juta</MenuItem>
                <MenuItem value={50}>50 Juta</MenuItem>
                <MenuItem value={100}>100 Juta</MenuItem>
                <MenuItem value={150}>150 Juta</MenuItem>
                <MenuItem value={200}>200 Juta</MenuItem>
                <MenuItem value={250}>250 Juta</MenuItem>
                <MenuItem value={300}>300 Juta</MenuItem>
                <MenuItem value={350}>350 Juta</MenuItem>
                <MenuItem value={400}>400 Juta</MenuItem>
                <MenuItem value={450}>450 Juta</MenuItem>
                <MenuItem value={500}>500 Juta</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlPriceEnd() {
    const [priceEnd, setPriceEnd] = useState('');

    const handleChange = (event) => {
        setPriceEnd(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblPriceEnd">Harga Akhir</InputLabel>
            <Select
                labelId="lblPriceEnd"
                id="slPriceEnd"
                value={priceEnd}
                label="Harga Akhir"
                onChange={handleChange}
            >
                <MenuItem value={25}>25 Juta</MenuItem>
                <MenuItem value={50}>50 Juta</MenuItem>
                <MenuItem value={100}>100 Juta</MenuItem>
                <MenuItem value={150}>150 Juta</MenuItem>
                <MenuItem value={200}>200 Juta</MenuItem>
                <MenuItem value={250}>250 Juta</MenuItem>
                <MenuItem value={300}>300 Juta</MenuItem>
                <MenuItem value={350}>350 Juta</MenuItem>
                <MenuItem value={400}>400 Juta</MenuItem>
                <MenuItem value={450}>450 Juta</MenuItem>
                <MenuItem value={500}>500 Juta</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlYear() {
    const [year, setYear] = useState('');

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblYear">Tahun</InputLabel>
            <Select
                labelId="lblYear"
                id="slYear"
                value={year}
                label="Tahun"
                onChange={handleChange}
            >
                <MenuItem value={1}>2015</MenuItem>
                <MenuItem value={2}>2016</MenuItem>
                <MenuItem value={3}>2017</MenuItem>
                <MenuItem value={4}>2018</MenuItem>
                <MenuItem value={5}>2019</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlKilometer() {
    const [kilometer, setKilometer] = useState('');

    const handleChange = (event) => {
        setKilometer(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblKilometer">Kilometer</InputLabel>
            <Select
                labelId="lblKilometer"
                id="slKilometer"
                value={kilometer}
                label="Kilometer"
                onChange={handleChange}
            >
                <MenuItem value={1}>5K-10K</MenuItem>
                <MenuItem value={2}>10K-15K</MenuItem>
                <MenuItem value={3}>15K-20K</MenuItem>
                <MenuItem value={4}>20K-25K</MenuItem>
                <MenuItem value={5}>25K-30K</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlTransmition() {
    const [transmition, setTransmition] = useState('');

    const handleChange = (event) => {
        setTransmition(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblTransmition">Transmisi</InputLabel>
            <Select
                labelId="lblTransmition"
                id="slTransmition"
                value={transmition}
                label="Transmisi"
                onChange={handleChange}
            >
                <MenuItem value={1}>Automatic</MenuItem>
                <MenuItem value={2}>Manual</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlBodyType() {
    const [bodyType, setBodyType] = useState('');

    const handleChange = (event) => {
        setBodyType(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblBodyType">Tipe Bodi</InputLabel>
            <Select
                labelId="lblBodyType"
                id="slBodyType"
                value={bodyType}
                label="Tipe Bodi"
                onChange={handleChange}
            >
                <MenuItem value={1}>Wagon</MenuItem>
                <MenuItem value={2}>SUV</MenuItem>
                <MenuItem value={2}>Hatchback</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlColor() {
    const [color, setColor] = useState('');

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblColor">Warna</InputLabel>
            <Select
                labelId="lblColor"
                id="slColor"
                value={color}
                label="Warna"
                onChange={handleChange}
            >
                <MenuItem value={1}>Hitam</MenuItem>
                <MenuItem value={2}>Putih</MenuItem>
                <MenuItem value={3}>Merah</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlFuel() {
    const [fuel, setFuel] = useState('');

    const handleChange = (event) => {
        setFuel(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblFuel">Bahan Bakar</InputLabel>
            <Select
                labelId="lblFuel"
                id="slFuel"
                value={fuel}
                label="Bahan Bakar"
                onChange={handleChange}
            >
                <MenuItem value={1}>Bensin</MenuItem>
                <MenuItem value={2}>Diesel</MenuItem>
                <MenuItem value={3}>Solar</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlDriveWheelType() {
    const [driverWheelType, setDriveWheelType] = useState('');

    const handleChange = (event) => {
        setDriveWheelType(event.target.value);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblDriveWheelType">Tipe Roda Penggerak</InputLabel>
            <Select
                labelId="lblDriveWheelType"
                id="slDriveWheelType"
                value={driverWheelType}
                label="Tipe Roda Penggerak"
                onChange={handleChange}
            >
                <MenuItem value={1}>FWD</MenuItem>
                <MenuItem value={2}>RWD</MenuItem>
                <MenuItem value={3}>AWD</MenuItem>
            </Select>
        </FormControl>
    );
}

export function SlSort() {
    const [sort, setSort] = useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 200 }} size="small">
            <InputLabel id="lblSort">Urut Berdasarkan</InputLabel>
            <Select
                labelId="lblSort"
                id="slSort"
                value={sort}
                label="Urut Berdasarkan"
                onChange={handleChange}
            >
                <MenuItem value={1}>Terbaru ke Terlama</MenuItem>
                <MenuItem value={2}>Terlama ke Terbaru</MenuItem>
                <MenuItem value={3}>Harga Rendah ke Tinggi</MenuItem>
                <MenuItem value={4}>Harga Tinggi ke Rendah</MenuItem>
            </Select>
        </FormControl>
    );
}
