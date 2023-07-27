import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import CarDetail from "./components/CarDetail";
import CarList from "./components/CarList";

function App() {
  return (   
    <>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-detail" element={<CarDetail />} />
        <Route path="/car-list" element={<CarList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
