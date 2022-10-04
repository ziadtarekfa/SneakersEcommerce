
import ItemCart from '../components/ItemCart';
import { useNavigate } from 'react-router-dom';
import { getDatabase, push, ref } from 'firebase/database';
import { auth } from '../config/firebaseConfig';
import '../pagesStyles/Checkout.css';


const Checkout = () => {

    const cart = JSON.parse(localStorage.getItem('cart'));
    let navigate = useNavigate();
    let totalPrice = 0;


    function handlePaymentBtn(e) {
        e.preventDefault();
        const userId = auth.currentUser.uid;
        push(ref(getDatabase(), `users/${userId}/orders`), {
            cart: cart,
            totalAmount: document.getElementById('total').innerText
        });
        navigate('/checkout/order-successful');
        localStorage.removeItem('cart');
    }

    return (
        <main className='checkout'>

            <form className='shipping-info' onSubmit={handlePaymentBtn}>
                <h3>Shipping information</h3>
                <input placeholder='Company' className='default-input'></input>
                <input placeholder='Address' className='default-input' required></input>
                <input placeholder='Apartment,suite,etc .(optional)' className='default-input'></input>
                <div className='input-container'>
                    <input placeholder='City' className='default-input' required></input>
                    <input placeholder='State/Province' className='default-input' required></input>
                </div>
                <div className='input-container'>
                    <input placeholder='Country' className='default-input' required></input>
                    <input placeholder='Postal code' className='default-input' required></input>
                </div>
                <button className='default-button'>Make Order</button>
            </form>

            <div className='order-summary'>
                <h3>Order summary</h3>
                <aside>
                    <div className='list-of-cart-items'>
                        {
                            cart.map((cartItem) => {
                                totalPrice = (cartItem.productPrice * cartItem.productQuantity) + totalPrice;
                                return (
                                    <ItemCart cartItem={cartItem} />
                                );
                            })
                        }
                    </div>
                    <hr style={{ 'width': '96%' }} />
                    <div className='bottom-container'>
                        <div>
                            <span>Subtotal</span>
                            <span>${totalPrice} </span>
                        </div>
                        <div>
                            <span>Shipping</span>
                            <span>$5.00</span>


                        </div>
                        <div>
                            <span>Taxes</span>
                            <span>$5.52</span>
                        </div>
                        <hr />
                        <div className='order-summary-total-container'>
                            <h3>Total</h3>
                            <span id='total'>${totalPrice + 5 + 5.52}</span>
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}

export default Checkout;