import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
    return (
        <div className="news d-flex items-center">
            <div className="news-wrapper">
                <h1>We always try to understand the expectations of the patients.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae esse amet necessitatibus expedita mollitia consectetur ut molestiae, ad architecto quae pariatur perspiciatis minus recusandae sunt nemo libero corporis, quidem iste libero corporis.</p>
                <Link to="/appointment">
                    <button className="appointment-btn-coral">Appointment</button>
                </Link>

            </div>
        </div>
    );
};

export default News;