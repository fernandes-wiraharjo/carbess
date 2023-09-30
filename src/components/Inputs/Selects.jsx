import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

export function SlBrand({list, val, handleChange}) {
    return (
        <FormControl fullWidth size='small'>
            <InputLabel id="lblBrand">
                <Typography variant="subtitle2">Merek</Typography>
            </InputLabel>
            <Select
                labelId="lblBrand"
                id="brandId"
                value={val}
                label="Merek"
                onChange={handleChange}
                name="brand"
            >
                {list.map((data) => {
                    return (
                        <MenuItem key={data._id} value={data._id}>
                            <Typography variant="subtitle2">{ data.name }</Typography>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

export function SlModel({list, val, handleChange}) {
    let disabled = false;
    if (list.length === 0) disabled = true;

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblModel">
                <Typography variant="subtitle2">Model</Typography>
            </InputLabel>
            <Select
                labelId="lblModel"
                id="slModel"
                value={val}
                label="Model"
                onChange={handleChange}
                disabled={disabled}
                name="model"
            >
                {list.map((data) => {
                    return (
                        <MenuItem key={data._id} value={data._id}>
                            <Typography variant="subtitle2">{ data.name }</Typography>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

export function SlPriceStart({list, val, handleChange}) {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblPrice">
                <Typography variant="subtitle2">Min Harga</Typography>
            </InputLabel>
            <Select
                labelId="lblPrice"
                id="slPrice"
                value={val}
                label="Min Harga"
                onChange={handleChange}
                name="priceStart"
            >
                {list.map((data) => {
                    return (
                        <MenuItem key={data.id} value={data.id}>
                            <Typography variant="subtitle2">{ data.name }</Typography>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

export function SlPriceEnd({list, priceStart, val, handleChange}) {
    let disabled = false;
    if (priceStart === '') disabled = true;

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblPriceEnd">
                <Typography variant="subtitle2">Maks Harga</Typography>
            </InputLabel>
            <Select
                labelId="lblPriceEnd"
                id="slPriceEnd"
                value={val}
                label="Maks Harga"
                onChange={handleChange}
                disabled={disabled}
                name="priceEnd"
            >
                {list.map((data) => {
                    if (data.id >= priceStart) {
                        return (
                            <MenuItem key={data.id} value={data.id}>
                                <Typography variant="subtitle2">{ data.name }</Typography>
                            </MenuItem>
                        )
                    }
                })}
            </Select>
        </FormControl>
    );
}

export function SlYearStart({list, val, handleChange}) {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblYear">
                <Typography variant="subtitle2">Min Tahun</Typography>
            </InputLabel>
            <Select
                labelId="lblYear"
                id="slYear"
                value={val}
                label="Min Tahun"
                onChange={handleChange}
                name="yearStart"
            >
                {list.map((data) => {
                    return (
                        <MenuItem key={data.id} value={data.id}>
                            <Typography variant="subtitle2">{ data.name }</Typography>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

export function SlYearEnd({list, yearStart, val, handleChange}) {
    let disabled = false;
    if (yearStart === '') disabled = true;

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblYear">
                <Typography variant="subtitle2">Maks Tahun</Typography>
            </InputLabel>
            <Select
                labelId="lblYear"
                id="slYear"
                value={val}
                label="Maks Tahun"
                onChange={handleChange}
                disabled={disabled}
                name="yearEnd"
            >
                {list.map((data) => {
                    if (data.id >= yearStart) {
                        return (
                            <MenuItem key={data.id} value={data.id}>
                                <Typography variant="subtitle2">{ data.name }</Typography>
                            </MenuItem>
                        )
                    }
                })}
            </Select>
        </FormControl>
    );
}

export function SlKilometerStart({list, val, handleChange}) {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblKilometer">
                <Typography variant="subtitle2">Min Kilometer</Typography>
            </InputLabel>
            <Select
                labelId="lblKilometer"
                id="slKilometer"
                value={val}
                label="Min Kilometer"
                onChange={handleChange}
                name="kilometerStart"
            >
                {list.map((data) => {
                    return (
                        <MenuItem key={data.id} value={data.id}>
                            <Typography variant="subtitle2">{ data.name }</Typography>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

export function SlKilometerEnd({list, kilometerStart, val, handleChange}) {
    let disabled = false;
    if (kilometerStart === '') disabled = true;

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblKilometer">
                <Typography variant="subtitle2">Maks Kilometer</Typography>
            </InputLabel>
            <Select
                labelId="lblKilometer"
                id="slKilometer"
                value={val}
                label="Maks Kilometer"
                onChange={handleChange}
                disabled={disabled}
                name="kilometerEnd"
            >
                {list.map((data) => {
                    if (data.id >= kilometerStart) {
                        return (
                            <MenuItem key={data.id} value={data.id}>
                                <Typography variant="subtitle2">{ data.name }</Typography>
                            </MenuItem>
                        )
                    }
                })}
            </Select>
        </FormControl>
    );
}

export function SlTransmission({list, val, handleChange}) {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblTransmition">
                <Typography variant="subtitle2">Transmisi</Typography>
            </InputLabel>
            <Select
                labelId="lblTransmition"
                id="slTransmition"
                value={val}
                label="Transmisi"
                onChange={handleChange}
                name="transmission"
            >
                {list.map((data) => {
                    return (
                        <MenuItem key={data._id} value={data._id}>
                            <Typography variant="subtitle2">{ data.name }</Typography>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

export function SlBodyType({list, val, handleChange}) {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblBodyType">
                <Typography variant="subtitle2">Tipe Bodi</Typography>
            </InputLabel>
            <Select
                labelId="lblBodyType"
                id="slBodyType"
                value={val}
                label="Tipe Bodi"
                onChange={handleChange}
                name="bodyType"
            >
                {list.map((data) => {
                    return (
                        <MenuItem key={data._id} value={data._id}>
                            <Typography variant="subtitle2">{ data.name }</Typography>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

export function SlColor({list, val, handleChange}) {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblColor">
                <Typography variant="subtitle2">Warna</Typography>
            </InputLabel>
            <Select
                labelId="lblColor"
                id="slColor"
                value={val}
                label="Warna"
                onChange={handleChange}
                name="color"
            >
                {list.map((data) => {
                    return (
                        <MenuItem key={data._id} value={data._id}>
                            <Typography variant="subtitle2">{ data.name }</Typography>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

export function SlFuel({list, val, handleChange}) {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblFuel">
                <Typography variant="subtitle2">Bahan Bakar</Typography>
            </InputLabel>
            <Select
                labelId="lblFuel"
                id="slFuel"
                value={val}
                label="Bahan Bakar"
                onChange={handleChange}
                name="fuel"
            >
                {list.map((data) => {
                    return (
                        <MenuItem key={data._id} value={data._id}>
                            <Typography variant="subtitle2">{ data.name }</Typography>
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
}

export function SlDriveWheelType({list, val, handleChange}) {
    return (
        <FormControl fullWidth size="small">
            <InputLabel id="lblDriveWheelType">
                <Typography variant="subtitle2">Tipe Roda Penggerak</Typography>
            </InputLabel>
            <Select
                labelId="lblDriveWheelType"
                id="slDriveWheelType"
                value={val}
                label="Tipe Roda Penggerak"
                onChange={handleChange}
                name="driveWheelType"
            >
                {list.map((data) => {
                    return (
                        <MenuItem key={data._id} value={data._id}>
                            <Typography variant="subtitle2">{ data.name }</Typography>
                        </MenuItem>
                    )
                })}
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
            <InputLabel id="lblSort">
                <Typography variant="subtitle2">Urut Berdasarkan</Typography>
            </InputLabel>
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
