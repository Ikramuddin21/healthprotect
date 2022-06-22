import React from 'react';
import logo from '../../../images/logo5.png';
import { FiMail } from 'react-icons/fi';
import { FaRegFlag } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="">
                <img src={logo} alt="Logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a repudiandae nobis sapiente ab magnam sequi ut praesentium ipsam recusandae.</p>
                <div>
                    <FiMail /> <span>user@example.com</span>
                    <FaRegFlag /> <span>101 New York, USA</span>
                </div>
            </div>
            <div></div>
            <div></div>
        </footer>
    );
};

export default Footer;