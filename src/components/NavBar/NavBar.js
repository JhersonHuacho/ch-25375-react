import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../logo.svg';
import CardWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__content-logo">
          <img src={logo} className="navbar__logo" alt="logo" />
          <Link to="/">
            <span className="navbar__title">PilasMarket</span>
          </Link>
        </div>

        <div className="menu-categoria">
          <Link className="menu-categoria__link" to="/">Categorias</Link>
        </div>
        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__link" to="/category/1">jewelery</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/category/2">electronics</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/category/3">women's clothing</Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/category/4">men's clothing</Link>
          </li>
          {/* <li className="menu__item">
            <a className="menu__link" href=".">Licores</a></li>
          <li className="menu__item">
            <a className="menu__link" href=".">Frutas</a></li>
          <li className="menu__item">
            <a className="menu__link" href=".">Verduras</a></li> */}
        </ul>
        <div className="login">
          <a className="login__link" href=".">Iniciar Sesión</a>
        </div>
        <CardWidget />
      </div>
    </nav>
  )
}
