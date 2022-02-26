import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} className='logo' alt="" />
            <nav>
                <a href="">Shop</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;