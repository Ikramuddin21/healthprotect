import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <header>
      {/* header top */}
      <div className="header-top d-flex items-center">
        <h5>
          <AiOutlinePhone className="header-top-icon" />
          <span>+8054 674 76570</span>
        </h5>
        <h5>
          <FiMail className="header-top-icon" />
          <span>user@example.com</span>
        </h5>
      </div>
      
      {/* navigation bar */}
      <div className="nav-container">
        <nav className="navbar d-flex items-center">
          <h2 className="logo"><Link to="/">healthprotect</Link></h2>
          <ul className="list-items d-flex items-center">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
          <button className="header-login-btn">Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;