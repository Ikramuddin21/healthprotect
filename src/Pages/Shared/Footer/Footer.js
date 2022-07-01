import React from 'react';
import logo from '../../../images/logo5.png';
import { FiMail } from 'react-icons/fi';
import { FaRegFlag, FaFacebook } from 'react-icons/fa';
import { AiOutlineClockCircle, AiOutlineCloseSquare, AiFillTwitterCircle, AiFillGoogleCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper d-flex">
                <div className="footer-left">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a repudiandae nobis sapiente ab magnam sequi ut praesentium ipsam recusandae.</p>
                    <div className="footer-left-location">
                        <p><FiMail className="footer-icon" />
                            <span>user@example.com</span>
                        </p>
                        <p><FaRegFlag className="footer-icon" />
                            <span>101 New York, USA</span>
                        </p>
                    </div>
                </div>

                <div className="footer-nav">
                    <h3>Departments</h3>
                    <ul>
                        <li><Link to="/">Dental</Link></li>
                        <li><Link to="/">Optician</Link></li>
                        <li><Link to="/">Pediatrics</Link></li>
                        <li><Link to="/">Surgery</Link></li>
                        <li><Link to="/">Family Medicine</Link></li>
                        <li><Link to="/">Dermatology</Link></li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h3>Opening Hours</h3>
                    <div>
                        <p>
                            <AiOutlineClockCircle className="footer-icon footer-right-highlight" />
                            <span>Saturday - Thursday</span>
                            <span className="footer-right-time">08:00am - 10:00pm</span>
                        </p>
                        <p>
                            <AiOutlineCloseSquare className="footer-icon footer-right-highlight" />
                            <span>Friday Closed</span>
                        </p>
                    </div>

                    <div className="social-media">
                        <Link to="#"><FaFacebook /></Link>
                        <Link to="#"><AiFillTwitterCircle /></Link>
                        <Link to="#"><IoLogoWhatsapp /></Link>
                        <Link to="#"><AiFillGoogleCircle /></Link>
                    </div>
                </div>
            </div>

            <div className="copyright-area d-flex items-center">
                <p><small>Copyright &copy; Ikram Uddin - 2022</small></p>
            </div>
        </footer>
    );
};

export default Footer;