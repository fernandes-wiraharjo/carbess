import './filter.css';
import Range from './../input-range/range';

export default () => (
  <div className="filter__container">
    <div className="filter__row">
    	<KeywordFilter />
    </div>
    <div className="filter__row">
    	<RangeFilter />
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
