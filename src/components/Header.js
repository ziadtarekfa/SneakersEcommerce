import '../ComponentsStyles/Header.css';
import logo from '../assets/icons/logo.svg';
import cart from '../assets/icons/icon-cart.svg';
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <React.Fragment>
            <header className="Header">
                <nav>
                    <Link to={"/"}>
                        <img id='logo' src={logo} alt="logo" />
                    </Link>
                    <ul>
                        <li>
                            <Link to={"/collections"}>Collections</Link>

                        </li>
                        <li>
                            <Link to={"/products/men"}>Men</Link>
                        </li>
                        <li>
                            <Link to={"/products/women"}>Women</Link>
                        </li>
                        <li>
                            <Link to={"/products"}>All</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <img id='cart' src={cart} alt="cart icon" />
                    <button>Login</button>
                </div>
            </header>
            <hr className='header-hr' />
        </React.Fragment>
    );
}

export default Header;