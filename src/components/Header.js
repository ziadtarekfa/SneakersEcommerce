
import logo from '../assets/icons/logo.svg';
import cart from '../assets/icons/icon-cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../config/firebaseConfig';
import { signOut } from 'firebase/auth';
import Cart from './Cart';
import Notification from './Notification';

import '../ComponentsStyles/Header.css';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
    const navigate = useNavigate();
    const [isCartOpen, setCartOpen] = useState(false);
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
        setCartOpen(!isCartOpen);
    }

    function handleSignClick() {
        if (user == null) {
            navigate('/login');
        }
        else {
            signOut(auth).then(() => {
                setLogin("Login");
                toast.success("You signed out successfully", {
                    position: 'top-right'
                });
            }).catch((error) => {
                toast.error(error.message, {
                    position: 'top-right'
                });
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
            <Cart isCart={isCartOpen} setCartOpen={setCartOpen} />
            <ToastContainer />

        </>

    );
}

export default Header;