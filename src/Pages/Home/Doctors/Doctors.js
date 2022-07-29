import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeroRoute from '../../Shared/HeroRoute/HeroRoute';
import News from '../News/News';
import './Doctors.css';

const Doctors = () => {

    const {pathname} = useLocation();

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setDoctors(data.doctors))
    }, []);

    return (
        <>
        {pathname === "/doctors" && <HeroRoute />}
            <div className="doctors">
                <div className="doctors-wrapper">
                    <h2>Professional Medical Team</h2>
                    <div>
                        {
                            doctors.map(doctor => <div className="doctor" key={doctor.id}>
                                <img src={require(`../../../images/doctors/${doctor.img}`)} alt="" />
                                <div className="doctor-text-area">
                                    <h3>{doctor.name}</h3>
                                    <p>{doctor.title}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            {pathname === "/doctors" && <News />}
        </>
    );
};

export default Doctors;