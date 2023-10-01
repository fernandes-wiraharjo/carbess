import { useState, useEffect } from 'react';
import { SlBrand, SlModel, SlPriceStart, SlPriceEnd, SlYearStart, SlYearEnd, SlKilometerStart, SlKilometerEnd,
  SlTransmission, SlBodyType, SlColor, SlFuel, SlDriveWheelType } from '../../Inputs/Selects';
import Range from './../input-range/range';
import './filter.css';
import { initFormDataFilter } from '../../Constants';
import { generatePrices, generateYears, generateKilometers } from '../../Utils.js';


const prices = generatePrices(50);
const years = generateYears(2010);
const kilometers = generateKilometers(0);

export default function Filter({data}) {
  const api_url = import.meta.env.VITE_API_URL;
  const [slBrand, setSlBrand] = useState([]);
  const [slModel, setSlModel] = useState([]);
  const [slTransmission, setSlTransmission] = useState([]);
  const [slBodyType, setSlBodyType] = useState([]);
  const [slFuel, setSlFuel] = useState([]);
  const [slDriveWheelType, setSlDriveWheelType] = useState([]);
  const [slColor, setSlColor] = useState([]);

  useEffect(() => {
    brands(), models(data.brand), transmissions(), bodyTypes(), fuels(), driveWheelTypes(), colors()
  }, []);
  
  const brands = async () => {
    const response = await fetch(`${api_url}/brands/`);
    setSlBrand(await response.json());
  };
  const models = async (brandId) => {
      if (brandId !== '') {
        const response = await fetch(`${api_url}/models/brands/${brandId}`);
        setSlModel(await response.json());
      }
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
  const colors = async () => {
    const response = await fetch(`${api_url}/colors/`);
    setSlColor(await response.json());
  };

  const [formData, setFormData] = useState({transmission: data.transmission, bodyType: data.bodyType, fuel: data.fuel, 
    driveWheelType: data.driveWheelType, brand: data.brand, model: data.model, priceStart: data.priceStart, priceEnd: data.priceEnd, 
    yearStart: data.yearStart, yearEnd: data.yearEnd, kilometerStart: data.kilometerStart, kilometerEnd: data.kilometerEnd, color: data.color
  });

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

  const handleReset = () => {
    setFormData(initFormDataFilter);
    setSlModel([]);
  };

  return (
    <div className="filter__container">
      <div className="filter__row">
        <a style={{ cursor: 'pointer' }} onClick={handleReset}>Atur Ulang</a>
      </div>
      <div className="filter__row">
        <KeywordFilter />
      </div>
      <div className="filter__row">
        <BrandFilter list={slBrand} val={formData.brand} handleChange={(e) => handleChange(e)} />
      </div>
      <div className="filter__row">
        <ModelFilter list={slModel} val={formData.model} handleChange={(e) => handleChange(e)} />
      </div>
      {/* <div className="filter__row">
        <RangeFilter /> //price
      </div> */}
      <div className="filter__row">
        <PriceFilter list={prices} priceStart={formData.priceStart} priceEnd={formData.priceEnd} 
          handleChangePriceStart={(e) => handleChange(e)} handleChangePriceEnd={(e) => handleChange(e)}
        />
      </div>
      <div className="filter__row">
        <YearFilter list={years} yearStart={formData.yearStart} yearEnd={formData.yearEnd} 
          handleChangeYearStart={(e) => handleChange(e)} handleChangeYearEnd={(e) => handleChange(e)}
        />
      </div>
      <div className="filter__row">
        <KilometerFilter list={kilometers} kilometerStart={formData.kilometerStart} kilometerEnd={formData.kilometerEnd} 
          handleChangeKilometerStart={(e) => handleChange(e)} handleChangeKilometerEnd={(e) => handleChange(e)}
        />
      </div>
      <div className="filter__row">
        <TransmissionFilter list={slTransmission} val={formData.transmission} handleChange={(e) => handleChange(e)} />
      </div>
      <div className="filter__row">
        <BodyTypeFilter list={slBodyType} val={formData.bodyType} handleChange={(e) => handleChange(e)} />
      </div>
      <div className="filter__row">
        <ColorFilter list={slColor} val={formData.color} handleChange={(e) => handleChange(e)} />
      </div>
      <div className="filter__row">
        <FuelFilter list={slFuel} val={formData.fuel} handleChange={(e) => handleChange(e)} />
      </div>
      <div className="filter__row">
        <DriveWheelTypeFilter list={slDriveWheelType} val={formData.driveWheelType} handleChange={(e) => handleChange(e)} />
      </div>
    </div>
  )
};


const KeywordFilter = () => (
  <div className="filter__item">
    <input id="keyword" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="keyword" className="label">
      Kata Kunci
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container"><input type="text" className="keyword__search" placeholder="contoh: Honda" /></div>
  </div>
);

const RangeFilter = () => (
  <div className="filter__item">
    <input id="price" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="price" className="label">
      Harga (Juta)
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container price__container">
      <Range />
    </div>
   </div>
);

const BrandFilter = ({list, val, handleChange}) => (
  <div className="filter__item">
    <input id="brand" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="brand" className="label">
      Merek
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlBrand list={list} val={val} handleChange={(e) => handleChange(e)} />
    </div>
  </div>
);

const ModelFilter = ({list, val, handleChange}) => (
  <div className="filter__item">
    <input id="model" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="model" className="label">
      Model
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlModel list={list} val={val} handleChange={(e) => handleChange(e)} />
    </div>
  </div>
);

const PriceFilter = ({list, priceStart, priceEnd, handleChangePriceStart, handleChangePriceEnd}) => (
  <div className="filter__item">
    <input id="price" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="price" className="label">
      Harga
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlPriceStart list={list} val={priceStart} handleChange={(e) => handleChangePriceStart(e)} />
    </div>
    <div className="container">
      <SlPriceEnd list={list} priceStart={priceStart} val={priceEnd} handleChange={(e) => handleChangePriceEnd(e)} />
    </div>
  </div>
);

const YearFilter = ({list, yearStart, yearEnd, handleChangeYearStart, handleChangeYearEnd}) => (
  <div className="filter__item">
    <input id="year" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="year" className="label">
      Tahun
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlYearStart list={list} val={yearStart} handleChange={(e) => handleChangeYearStart(e)} />
    </div>
    <div className="container">
      <SlYearEnd list={list} yearStart={yearStart} val={yearEnd} handleChange={(e) => handleChangeYearEnd(e)} />
    </div>
  </div>
);

const KilometerFilter = ({list, kilometerStart, kilometerEnd, handleChangeKilometerStart, handleChangeKilometerEnd}) => (
  <div className="filter__item">
    <input id="kilometer" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="kilometer" className="label">
      Kilometer
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlKilometerStart list={list} val={kilometerStart} handleChange={(e) => handleChangeKilometerStart(e)} />
    </div>
    <div className="container">
      <SlKilometerEnd list={list} kilometerStart={kilometerStart} val={kilometerEnd} handleChange={(e) => handleChangeKilometerEnd(e)} />
    </div>
  </div>
);

const TransmissionFilter = ({list, val, handleChange}) => (
  <div className="filter__item">
    <input id="transmition" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="transmition" className="label">
      Transmisi
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlTransmission list={list} val={val} handleChange={(e) => handleChange(e)} />
    </div>
  </div>
);

const BodyTypeFilter = ({list, val, handleChange}) => (
  <div className="filter__item">
    <input id="bodyType" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="bodyType" className="label">
      Tipe Bodi
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlBodyType list={list} val={val} handleChange={(e) => handleChange(e)} />
    </div>
  </div>
);

const ColorFilter = ({list, val, handleChange}) => (
  <div className="filter__item">
    <input id="color" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="color" className="label">
      Warna
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlColor list={list} val={val} handleChange={(e) => handleChange(e)} />
    </div>
  </div>
);

const FuelFilter = ({list, val, handleChange}) => (
  <div className="filter__item">
    <input id="fuel" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="fuel" className="label">
      Bahan Bakar
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlFuel list={list} val={val} handleChange={(e) => handleChange(e)} />
    </div>
  </div>
);

const DriveWheelTypeFilter = ({list, val, handleChange}) => (
  <div className="filter__item">
    <input id="driveWheelType" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="driveWheelType" className="label">
      Tipe Roda Penggerak
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlDriveWheelType list={list} val={val} handleChange={(e) => handleChange(e)} />
    </div>
  </div>
);
