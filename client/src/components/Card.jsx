import '../styles/Card.css';
import React from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../TodoContext";

export default function Card({ image, empresa, precio, modelo, id }) {

    const { data } = React.useContext(TodoContext);

    const handleDetail = (id) => {
        const detailCard = data.filter(item => item.id === id);
        localStorage.setItem('detail', JSON.stringify(detailCard));
    }
    return (
        <React.Fragment>
            <div className="div-product">
                <div className="div-img">
                    <img className="img-product" src={image} alt="" />
                </div>
                <div className="div-description">
                    <h4>{`${empresa} ${modelo}`}</h4>
                    <p>$ <span>{precio}</span></p>
                    <Link className="contenedor-btn" to="/detail">
                        <button onClick={() => handleDetail(id)} className="btn-detail">See Detail</button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}