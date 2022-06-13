import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './ClientsReview.css';

const ClientsReview = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setReview(data.clientsReview))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000
    };

    return (
        <div className="review">
            <h2>Testimonials</h2>
            <Slider {...settings}>
                {
                    review.map(singleReview => <div className="review-wrapper" key={singleReview.id}>
                        <div className="review-img-area">
                            <img src={singleReview.img} alt="" />
                        </div>
                        <div className="review-text-area">
                            <h4 className="review-title">{singleReview.name}</h4>
                            <blockquote>{singleReview.description}</blockquote>
                        </div>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default ClientsReview;