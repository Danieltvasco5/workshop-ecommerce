import React from 'react';
import '../styles/NavBar.css'
import logo from "../img/logo.svg";
import ProfileCart from "./ProfileCart";
import {Link} from "react-router-dom";
import {TodoContext} from "../TodoContext";

const opc = ['Collection', 'Men', 'Women', 'About', 'Contact']

export const Navbar = () => {

    const {data, setInfo, info} = React.useContext(TodoContext);
    const filterCategory = (opc) => {
        const result = data.filter(item => {
            return item.gender === opc
        })
        setInfo(result)
    }

    return (
        <nav className="navbar">
            <div className="container-logo">
                <img src={logo} alt="Logo " />
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
            <ProfileCart />
        </nav>
    )
}
