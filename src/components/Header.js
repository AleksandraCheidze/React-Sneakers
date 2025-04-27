import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  const headingStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: "1.8rem",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontStyle: "italic",
    fontSize: "1rem",
    color: "#4a4a4a",
    lineHeight: 1.6,
    margin: 0,
  };

  const priceStyle = {
    fontWeight: 600,
    color: "#333", // Более темный цвет
    fontSize: "1rem",
    marginLeft: "5px", // Отступ для валюты
  };

  const currencyStyle = {
    fontSize: "0.9rem",
    fontWeight: 400,
    color: "#555", // Более светлый цвет для валюты
    marginLeft: "3px", // Легкий отступ
  };

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={100} height={100} src="img/logo.png" alt="Logotype" />
          <div>
            <h3 style={headingStyle} className="animated-title">
              <span className="letter-animate">R</span>
              <span className="letter-animate">e</span>
              <span className="letter-animate">a</span>
              <span className="letter-animate">c</span>
              <span className="letter-animate">t</span>
              <span className="letter-animate">&nbsp;</span>
              <span className="letter-animate">S</span>
              <span className="letter-animate">n</span>
              <span className="letter-animate">e</span>
              <span className="letter-animate">a</span>
              <span className="letter-animate">k</span>
              <span className="letter-animate">e</span>
              <span className="letter-animate">r</span>
              <span className="letter-animate">s</span>
            </h3>
            <p style={paragraphStyle}>The best sneakers store</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p nav-item">
          <div className="icon-container">
            <img width={25} height={25} src="img/cart.svg" alt="Cart" className="animated-icon" />
          </div>
          <span style={priceStyle}>
            {totalPrice}
            <span style={currencyStyle}>EUR</span>
          </span>
        </li>
        <li className="mr-20 cu-p nav-item">
          <Link to="/favorites">
            <div className="icon-container">
              <img width={25} height={25} src="img/heart.svg" alt="Favorites" className="animated-icon heart-icon" />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/orders">
            <div className="icon-container">
              <img width={25} height={25} src="img/user.svg" alt="User" className="animated-icon" />
            </div>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
