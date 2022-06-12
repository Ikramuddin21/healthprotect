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
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description.split(" ").slice(0, 20).join(" ")}</p>
                <button className="see-more-btn">See More</button>
            </div>
        </div>
    );
};

export default Service;