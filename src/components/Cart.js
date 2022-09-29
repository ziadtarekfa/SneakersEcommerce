import ItemCart from './ItemCart';
import '../ComponentsStyles/Cart.css';
import { app } from '../config/firebaseConfig';
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Cart = ({ showState, showCart }) => {

    let navigate = useNavigate();
    function handleCheckoutBtn() {
        const auth = getAuth(app);
        const user = auth.currentUser;
        if (user == null) {

            console.log("no user is signed in");
            navigate('/login');
        }
        else {
            console.log(`user is signed in and his email is ${user.email}`);
            navigate('/checkout');
        }
        showCart(false);

    }

    const cart = JSON.parse(localStorage.getItem('cart'));
    let totalPrice = 0;
    return (
        <>
            {
                showState ?
                    <div className='cart'>
                        <div className='cart-heading-container'>
                            <h3>Cart</h3>
                        </div>
                        <hr />
                        <div className='cart-items-container'>
                            {

                                cart.map(cartItem => {
                                    totalPrice = (cartItem.productPrice * cartItem.productQuantity) + totalPrice;
                                    return (
                                        <ItemCart cartItem={cartItem} />
                                    );
                                })
                            }
                        </div>
                        <hr />
                        <div>
                            <div className='total-container'>
                                <h4>Total</h4>
                                <p>{`$${totalPrice}`}</p>
                            </div>
                            <button className='default-button checkout-btn' onClick={handleCheckoutBtn}>Checkout</button>
                        </div>

                    </div> : null

            }
        </>


    );
}

export default Cart;