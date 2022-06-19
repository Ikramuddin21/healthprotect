import React, { useEffect, useState } from 'react';
import './Gallery.css';

const Gallery = () => {

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setGallery(data.gallery))
    }, []);

    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-wrapper">
                {
                    gallery.map((photo, index) => <div className="gallery-frame" key={index}>
                        <div className="gallery-img-area">
                            <img src={require(`../../../images/gallery/${photo.img}`)} alt="" />
                        </div>
                        <div className="gallery-text-area">
                            <h1>{photo.title}</h1>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;