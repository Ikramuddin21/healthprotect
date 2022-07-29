import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import logo from '../../../images/logo5.png';
import './Header.css';
import useAuth from '../../../hooks/useAuth';
import emptyImage from '../../../images/empty-image.jpg';

const Header = () => {

  const { user, logout } = useAuth();

  const [fixedNav, setFixedNav] = useState(false);

  // handle fixed navigation bar
  const handleFixedNav = () => {
    if (window.scrollY > 350) {
      setFixedNav(true);
    }
    else {
      setFixedNav(false);
    }
  };

  window.addEventListener("scroll", handleFixedNav);

  return (
    <header>
      {/* header top */}
      <div className="header-top">
        <div className="d-flex items-center">
          <h5>
            <AiOutlinePhone className="header-top-icon" />
            <span>+8054 674 76570</span>
          </h5>
          <h5>
            <FiMail className="header-top-icon" />
            <span>user@example.com</span>
          </h5>
        </div>
      </div>

      {/* navigation bar */}
      <div className={`nav-container ${fixedNav ? "fixed-header" : ""}`}>
        <nav className="navbar d-flex items-center">
          <Link to="/"><img src={logo} width="68" alt="Logo" /></Link>
          <ul className="list-items d-flex items-center">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
          <div className="header-right d-flex items-center">
            {
              user.email && user.photoURL && <img className="user-photo" title={user.displayName} src={user.photoURL} alt="" />
            }
            {
              user.email && !user.photoURL && <img className="user-photo" title={user.displayName} src={emptyImage} alt="" />
            }
            {
              user.email ? <button className="header-btn" onClick={logout}>Logout</button> :
                <Link to="/login-register">
                  <button className="header-btn">Login</button>
                </Link>
            }
            <Link to="/appointment">
              <button className="header-btn">Appointment</button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;