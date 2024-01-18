// import React from 'react';
import "./Header.css";
import logo from "../../resources/assets/shared/desktop/logo.svg";
import cart from "../../resources/assets/shared/desktop/icon-cart.svg";
import "../pages/Header.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



const Header = ({showHandle}) => {
  return (
    <header className='headerContainer'>
      <div className='header'>
      <img className="logo" src={logo} alt="logo"/>
      <nav>
        <ul className="navList">
            <li><Link to="/">HOME</Link></li>
            <li><Link to={`/headphones`}>HEADPHONES</Link></li>
            <li><Link to={`/speakers`}>SPEAKERS</Link></li>
            <li><Link to={`/earphones`}>EARPHONES</Link></li>
        </ul>
      </nav>
      <img onClick={showHandle} className="cart" src={cart} alt="cart"/>
      </div>
      <div className="line"></div>
    </header>
  )
}

Header.propTypes={
  showHandle: PropTypes.function
}
export default Header