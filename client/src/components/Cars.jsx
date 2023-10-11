import React, { useState } from 'react';
import GetCar from '../hooks/getCar';
import CarList from '../components/carList';

export default function Cars() {
    const { cars } = GetCar();
  const [filter, setFilter] = useState('all'); // Estado para el filtro de Nuevo/Usado
  const [priceFilter, setPriceFilter] = useState('all'); // Estado para el filtro de Precio

  // Función para aplicar el filtro de Nuevo/Usado
  const applyFilter = (type) => {
    setFilter(type);
  };

  // Función para aplicar el filtro de Precio
  const applyPriceFilter = (price) => {
    setPriceFilter(price);
  };

  // Filtrar los autos según el filtro seleccionado
  const filteredCars = cars.filter((car) => {
    if (filter === 'all' || car.condition === filter) {
      if (priceFilter === 'all' || car.priceCategory === priceFilter) {
        return true;
      }
    }
    return false;
  });
  return (
    <div>
        <div className="home-container">

<header className="home-header">
  <h1 className="home-title">Car Show</h1>
  <div className="filter-buttons">
    {/* Botones de filtro de Nuevo/Usado */}
    <button
      className={`filter-button ${filter === 'all' ? 'active' : ''}`}
      onClick={() => applyFilter('all')}
    >
      Todos
    </button>
    <button
      className={`filter-button ${filter === 'new' ? 'active' : ''}`}
      onClick={() => applyFilter('new')}
    >
      Nuevos
    </button>
    <button
      className={`filter-button ${filter === 'used' ? 'active' : ''}`}
      onClick={() => applyFilter('used')}
    >
      Usados
    </button>
  </div>
  <div className="filter-dropdown">
    {/* Dropdown de filtro de Precio */}
    <label htmlFor="priceFilter">Precio:</label>
    <select
      id="priceFilter"
      value={priceFilter}
      onChange={(e) => applyPriceFilter(e.target.value)}
    >
      <option value="all">Todos</option>
      <option value="economy">Económico</option>
      <option value="midrange">Medio</option>
      <option value="luxury">Lujo</option>
    </select>
  </div>
</header>
<div className="car-list-container">
  <CarList cars={filteredCars} />
</div>
</div>

    </div>
  )
}
