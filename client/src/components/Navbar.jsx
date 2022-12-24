import React from 'react';
import '../styles/NavBar.css'
import logo from "../img/logo.svg";
import ProfileCart from "./ProfileCart";
import { TodoContext } from "../TodoContext";
import iconMenu from '../img/icon-menu.svg'

const opc = ['Collection', 'Men', 'Women', 'About', 'Contact']

export const Navbar = () => {

    const { data, setInfo, info } = React.useContext(TodoContext);
    const filterCategory = (opc) => {
        const result = data.filter(item => {
            return item.gender === opc
        })
        setInfo(result)
    }

    return (
        <nav className="navbar">
            <div className="div-menu-icon">
                <div className="icon-menu-nav">
                    <img className="icon-menu" src={iconMenu} alt="icono menu" />
                </div>
                <div className="container-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className='ul-navbar'>
                    {
                        opc.map(item => (
                            <li className="list-item" key={item}>
                                <span onClick={() => filterCategory(item)}>{item}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <ProfileCart />
        </nav>
    )
}
