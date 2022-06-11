import React from 'react';
import './Service.css';

const Service = (props) => {

    const { id, title, description, img } = props.service;

    return (
        <div className="service">
            <div className="service-img-area">
                <img src={img} alt={title} />
            </div>

            <div className="service-text-area">
                <h3>{title}</h3>
                <p>{description.split(" ").slice(0, 15).join(" ")}</p>
                <button>See More</button>
            </div>
        </div>
    );
};

export default Service;