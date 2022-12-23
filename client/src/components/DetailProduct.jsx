import React from 'react';
import '../styles/DetailProduct.css';

import {Link} from "react-router-dom";

export const DetailProduct = () => {

    let data = JSON.parse(localStorage.getItem('detail'));
    const [conter, setConter] = React.useState(1);

    return (
        <div className="container-det">
            <div className="container-detail">
                <Link to="/">
                    <button>Volver</button>
                </Link>
                <div className="imgContainer">
                    <img className="imgPrincipal" src={data[0].img1} alt="img1"/>
                    <div className="imgMosaico">
                        <img className="img_mini" src={data[0].img2} alt="" />
                        <img className="img_mini" src={data[0].img3} alt="" />
                        <img className="img_mini" src={data[0].img4} alt="" />
                        <img className="img_mini" src={data[0].img5} alt="" />
                    </div>
                </div>
                <div className="contenedor">
                    <h3 className="empresa">Empresa de zapatillas</h3>
                    <h1 className="modelo">{`${data[0].empresa} ${data[0].modelo}`}</h1>
                    <p className="descripcion">{data[0].descripcion}</p>
                    <h2 className="precio"> ${data[0].precio} <span>
                    <h3 className="descu">{data[0].decuento }</h3>
                    </span></h2>
                    <div>
                        <p className="precioante">${data[0].precioant }</p>
                    </div>
                    <button onClick={() => (
                        conter > 0 ? setConter(conter - 1): null
                    ) }  className="restar">-</button>
                    <span>{conter}</span>
                    <button onClick={() => setConter(conter +1)} className="sumar">+</button>
                    <button className="agregar">agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}