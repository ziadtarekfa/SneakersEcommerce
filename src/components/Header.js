import '../styles/Header.css';
import logo from '../assets/icons/logo.svg';
import cart from '../assets/icons/icon-cart.svg';
import React from 'react';

const Header = () => {
    return (
        <React.Fragment>
            <header className="Header">
                <nav>
                    <img id='logo' className='hover-cursor' src={logo} alt="logo" />
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>All</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div>
                    <img id='cart' className='hover-cursor' src={cart} alt="cart icon" />
                    <button className='hover-cursor'>Login</button>
                </div>
            </header>
            <hr></hr>
        </React.Fragment>
    );
}

export default Header;