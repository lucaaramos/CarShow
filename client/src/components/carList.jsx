import React from 'react';
import '../styles/CarList.css'; 

export default function CarList({ cars }) {
  return (
    <div className="car-list-container">
      <ul className="car-list">
        {cars.map((car) => (
          <li key={car.id} className="car-item">
            <div className="car-info">
              <h2>{car.brand}</h2>
              <p>{car.model}</p>
            </div>
            <img className="car-image" src={car.image} alt={car.brand}/>
            <button onClick={() => alert('Borrar')} className="delete-button">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

