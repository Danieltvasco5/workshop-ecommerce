import React from 'react';
import '../styles/NavBar.css'
import logo from "../img/logo.svg";
import ProfileCart from "./ProfileCart";
import {Link} from "react-router-dom";

// const opc = ['Collection', 'Men', 'Women', 'About', 'Contact']
const opc = [
    {to: '/', text: 'Collection'},
    {to: '/', text: 'Men'},
    {to: '/', text: 'Women'},
    {to: '/about', text: 'About'},
    {to: '/contact', text: 'Contact'}
]
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-logo">
                <img src={logo} alt="Logo " />
            </div>
            <ul className='ul-navbar'>
                {
                    opc.map(item => (
                        <li className="list-item" key={item.text}>
                            <Link to={item.to}>{item.text}</Link>
                        </li>
                    ))
                }
            </ul>
            <ProfileCart />
        </nav>
    )
}
