import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  const headingStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: "1.8rem",
    color: "#7d7d7d",
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
            <h3 style={headingStyle}>React Sneakers</h3>
            <p style={paragraphStyle}>The best sneakers store</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={25} height={25} src="img/cart.svg" alt="Cart" />
          <span style={priceStyle}>
            {totalPrice}
            <span style={currencyStyle}>EUR</span>
          </span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={25} height={25} src="img/heart.svg" alt="Favorites" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={25} height={25} src="img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
