import imgProduct from '../img/image-product-1-thumbnail.jpg'

import '../styles/Card.css';
import React from "react";

export default function Card({image, empresa, precio, modelo}) {
    return (
        <React.Fragment>
            <div className="div-product">
                <div className="div-img">
                    <img className="img-product" src={image} alt="" />
                </div>
                <div className="div-description">
                    <h4>{`${empresa} ${modelo}`}</h4>
                    <p>$ <span>{precio}</span></p>
                    <button className="btn-detail">See Detail</button>
                </div>
            </div>
        </React.Fragment>
    )
}