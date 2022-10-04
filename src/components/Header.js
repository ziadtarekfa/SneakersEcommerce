
import logo from '../assets/icons/logo.svg';
import cart from '../assets/icons/icon-cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../config/firebaseConfig';
import { signOut } from 'firebase/auth';
import Cart from './Cart';
import Notification from './Notification';

import '../ComponentsStyles/Header.css';

const Header = () => {
    let navigate = useNavigate();
    const [show, showCart] = useState(false);
    const [isSigned, setLogin] = useState();


    const user = auth.currentUser;
    useEffect(() => {
        if (user == null) {
            setLogin("Login");
        }
        else {
            setLogin("Logout");
        }
    }, [user])


    function handleCartClick() {
        showCart(!show);
    }

    function handleSignClick() {
        if (user == null) {
            navigate('/login');
        }
        else {
            signOut(auth).then(() => {
                setLogin("Login");
            }).catch((error) => {
                console.log(error);
            });
        }
    }



    return (
        <>
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
                    <Notification />
                    <img id='cart' src={cart} alt="cart icon" onClick={handleCartClick} />
                    <button className="default-button header-button" onClick={handleSignClick}>{isSigned}</button>

                </div>


            </header>

            <hr className='header-hr' />
            <Cart show={show} showCart={showCart} />

        </>

    );
}

export default Header;