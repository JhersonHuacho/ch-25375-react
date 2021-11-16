import React from 'react';
import './NavBar.css';
import logo from '../../logo.svg';
import CardWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__content-logo">
          <img src={logo} className="navbar__logo" alt="logo" />
          <span className="navbar__title">PilasMarket</span>
        </div>

        <div className="menu-categoria">
          <a className="menu-categoria__link" href=".">Categorias</a>
        </div>
        <ul className="menu"> 
          <li className="menu__item">
            <a className="menu__link" href=".">Abarrotes</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href=".">Conservar</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href=".">Embutidos</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href=".">Lácteos</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href=".">Licores</a></li>
          <li className="menu__item">
            <a className="menu__link" href=".">Frutas</a></li>
          <li className="menu__item">
            <a className="menu__link" href=".">Verduras</a></li>
        </ul>
        <div className="login">
          <a className="login__link" href=".">Iniciar Sesión</a>
        </div>
        <CardWidget />
      </div>
    </nav>
  )
}
