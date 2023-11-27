import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import CarDetail from "./components/CarDetail";
import CarList from "./components/CarList";
import ScrollToTop from "./components/Others/ScrollToTop";

function App() {
  return (   
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-detail/:id" element={<CarDetail />} />
          <Route path="/car-list" element={<CarList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ScrollToTop>
    </>
  )
}

export default App
