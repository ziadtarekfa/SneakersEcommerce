import ItemCart from './ItemCart';
import { auth } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';

import '../ComponentsStyles/Cart.css';

const Cart = ({ show, showCart }) => {

    let navigate = useNavigate();
    function handleCheckoutBtn() {
        const user = auth.currentUser;
        if (user == null) {
            navigate('/login');
        }
        else {
            navigate('/checkout');
        }
        showCart(false);
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || null;
    let totalPrice = 0;
    return (
        <>
            {
                show ?
                    <div className='cart'>
                        <div className='cart-heading-container'>
                            <h3>Cart</h3>
                        </div>
                        <hr />
                        {
                            cart ?
                                <>
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
                                </>
                                : <div style={{ 'display': 'flex', 'justifyContent': 'center', 'marginTop': '80px', 'fontWeight': 'bold', 'color': '#7E8087' }}>Your Cart is empty</div>
                        }

                    </div> : null

            }
        </>


    );
}

export default Cart;