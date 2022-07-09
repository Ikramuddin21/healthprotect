import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeroRoute.css';

const HeroRoute = ({heading}) => {
    const {pathname} = useLocation();

    return (
        <div className="heroRoute">
            <div className="heroRoute-wrapper">
                <div>
                    <h1>{heading ? heading : pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2)}</h1>
                    <h3>
                        <Link to="/">Home</Link>
                        <span>{pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2)}</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default HeroRoute;