
import logo from '../assets/icons/logo.svg';
import cart from '../assets/icons/icon-cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import '../ComponentsStyles/Header.css';
import React from 'react';
import Cart from './Cart';
import Notification from './Notification';
import app from '../config/firebaseConfig';

const Header = () => {
    let navigate = useNavigate();
    const [show, showCart] = useState(false);
    const [isSigned, setLogin] = useState();

    // const [handleClick, setHandleClick] = useState();

    const auth = getAuth(app);
    const user = auth.currentUser;
    useEffect(() => {
        if (user == null) {
            setLogin("Login");
            console.log("UseEffect NULL");
        }
        else {
            setLogin("Logout");
            console.log(`UseEffect ${user.uid}`);
        }
    }, [user])

    function handleClick() {
        if (user == null) {
            navigate('/login');
        }
        else {
            signOut(auth).then(() => {
                // Sign-out successful.
                console.log("Successful sign out");
                setLogin("Login");
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
        }
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
                            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'width': '100%' }}>
                                <Link to={"/collections"}>Collections</Link>
                                {/* <div style={{ 'color': '#000', 'width': '10px', 'height': '10px' }}></div> */}
                            </div>

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
                    <Notification />
                    <img id='cart' src={cart} alt="cart icon" onClick={handleCartClick} />

                    <button className="default-button header-button" onClick={handleClick}>{isSigned}</button>

                </div>


            </header>

            <hr className='header-hr' />
            <Cart showState={show} showCart={showCart} />

        </React.Fragment>
    );
}

export default Header;