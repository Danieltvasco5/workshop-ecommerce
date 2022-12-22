import React from 'react';
import '../styles/Header.css';
import {Navbar} from "./Navbar";

const Header = () => {
    return (
        <header className="header">
            <Navbar />
        </header>
    );
};

export default Header;