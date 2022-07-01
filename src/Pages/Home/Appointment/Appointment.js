import React from 'react';
import HeroRoute from '../../Shared/HeroRoute/HeroRoute';
import './Appointment.css';

const Appointment = () => {

    return (
        <>
            <HeroRoute />
            <div className="appointment">
                <h1>Book An <span>Appointment</span></h1>
                <form>
                    <div>
                        <select>
                            <option>Surgery</option>
                            <option>Dental</option>
                            <option>Allergy</option>
                        </select>
                        <select>
                            <option>Dr. Connie Britt</option>
                            <option>Dr. Jessie Norman</option>
                            <option>Dr. Tracey Richmond</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" placeholder="Your Name" required />
                        <input type="number" placeholder="Your Phone Number" required />
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email" required />
                        <input type="date" required />
                    </div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
            </div>
        </>
    );
};

export default Appointment;