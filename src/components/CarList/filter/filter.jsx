import { SlBrand, SlModel, SlPrice, SlYear, SlKilometer, SlTransmition, SlBodyType,
  SlColor, SlFuel, SlDriveWheelType } from '../../Inputs/Selects';
import Range from './../input-range/range';
import './filter.css';


export default () => (  
  <div className="filter__container">
    <div className="filter__row">
      <a href="/car-list">Atur Ulang</a>
    </div>
    <div className="filter__row">
    	<KeywordFilter />
    </div>
    <div className="filter__row">
      <BrandFilter />
    </div>
    <div className="filter__row">
      <ModelFilter />
    </div>
    {/* <div className="filter__row">
    	<RangeFilter /> //price
    </div> */}
    <div className="filter__row">
      <PriceFilter />
    </div>
    <div className="filter__row">
      <YearFilter />
    </div>
    <div className="filter__row">
      <KilometerFilter />
    </div>
    <div className="filter__row">
      <TransmitionFilter />
    </div>
    <div className="filter__row">
      <BodyTypeFilter />
    </div>
    <div className="filter__row">
      <ColorFilter />
    </div>
    <div className="filter__row">
      <FuelFilter />
    </div>
    <div className="filter__row">
      <DriveWheelTypeFilter />
    </div>
  </div>
);


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

const BrandFilter = () => (
  <div className="filter__item">
    <input id="brand" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="brand" className="label">
      Merek
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlBrand />
    </div>
  </div>
);

const ModelFilter = () => (
  <div className="filter__item">
    <input id="model" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="model" className="label">
      Model
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlModel />
    </div>
  </div>
);

const PriceFilter = () => (
  <div className="filter__item">
    <input id="price" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="price" className="label">
      Harga
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlPrice />
    </div>
  </div>
);

const YearFilter = () => (
  <div className="filter__item">
    <input id="year" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="year" className="label">
      Tahun
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlYear />
    </div>
  </div>
);

const KilometerFilter = () => (
  <div className="filter__item">
    <input id="kilometer" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="kilometer" className="label">
      Kilometer
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlKilometer />
    </div>
  </div>
);

const TransmitionFilter = () => (
  <div className="filter__item">
    <input id="transmition" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="transmition" className="label">
      Transmisi
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlTransmition />
    </div>
  </div>
);

const BodyTypeFilter = () => (
  <div className="filter__item">
    <input id="bodyType" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="bodyType" className="label">
      Tipe Bodi
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlBodyType />
    </div>
  </div>
);

const ColorFilter = () => (
  <div className="filter__item">
    <input id="color" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="color" className="label">
      Warna
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlColor />
    </div>
  </div>
);

const FuelFilter = () => (
  <div className="filter__item">
    <input id="fuel" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="fuel" className="label">
      Bahan Bakar
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlFuel />
    </div>
  </div>
);

const DriveWheelTypeFilter = () => (
  <div className="filter__item">
    <input id="driveWheelType" className="keybig" type="checkbox" defaultChecked />
    <label htmlFor="driveWheelType" className="label">
      Tipe Roda Penggerak
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    </label>
    <div className="container">
      <SlDriveWheelType />
    </div>
  </div>
);
