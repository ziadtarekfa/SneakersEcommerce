
import logo from '../assets/icons/logo.svg';
import cart from '../assets/icons/icon-cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../ComponentsStyles/Header.css';
import React from 'react';
import Cart from './Cart';

const Header = () => {
    let navigate = useNavigate();
    const [show, showCart] = useState(false);
    function handleClick() {
        navigate("/login");
    }
    function handleCartClick() {
        showCart(!show);
    }

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
                    <img id='cart' src={cart} alt="cart icon" onClick={handleCartClick} />
                    <button onClick={handleClick} className="default-button header-button" >Login</button>
                </div>


            </header>

            <hr className='header-hr' />
            <Cart showState={show} />

        </React.Fragment>
    );
}

export default Header;