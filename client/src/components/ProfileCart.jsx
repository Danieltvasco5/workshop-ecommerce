import React from 'react';
import '../styles/ProfileCart.css'
import cart from '../img/icon-cart.svg';
import procfile from '../img/image-avatar.png'
const ProfileCart = () => {
    return (
        <div className="container-profile">

            <p className="num-carrito">0</p>
            <img className="icon-cart" src={cart} alt="icon-cart" />
            <img className="user-profile" src={procfile} alt="icon-procfile" />
        </div>
    );
};

export default ProfileCart;