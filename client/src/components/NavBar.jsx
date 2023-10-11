import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para gestionar las rutas
import '../styles/NavBar.css'
function AppNavbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">CarShow</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/autos">Autos</Link></li>
        <li><Link to="/financiamiento">Financiamiento</Link></li>
        <li className="dropdown">
          <a href="/">Mi Cuenta</a>
          <ul className="dropdown-content">
            <li><Link to="/perfil">Perfil</Link></li>
            <li><Link to="/ordenes">Órdenes</Link></li>
            <li><Link to="/configuracion">Configuración</Link></li>
            <li><Link to="/cerrar-sesion">Cerrar Sesión</Link></li>
          </ul>
        </li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </nav>
  );
}

export default AppNavbar;
