import React from 'react';
// import AppNavbar from '../components/AppNavbar'; // Importa tu barra de navegación
import CarList from '../components/carList'; 
import GetCar from '../hooks/getCar';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Home() {
  const {cars} = GetCar();

  return (
    <div className="home-container">
      
      <div className="hero">
        <h1 className="hero-title">Bienvenido a Car Show</h1>
        <p className="hero-subtitle">La mejor selección de autos nuevos y usados</p>
      </div>
      <div className="car-list-container">
        <CarList cars={cars} />
        <Link to='/autos'>
          Ver mas
        </Link>
      </div>
    </div>
  );
}

