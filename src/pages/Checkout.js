import '../pagesStyles/Checkout.css';
import ItemCart from '../components/ItemCart';
import countriesData from '../config/countries.json';
import { getDatabase, push, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { app } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {

    const cart = JSON.parse(localStorage.getItem('cart'));
    // const countries = JSON.parse(countriesData);
    // console.log(countries);

    let navigate = useNavigate();

    function handlePaymentBtn() {
        const userId = getAuth(app).currentUser.uid;
        const db = getDatabase();
        push(ref(db, `users/${userId}/orders`), {
            cart: cart,
            totalAmount: document.getElementById('total').innerText
        });
        navigate('/checkout/paymentSuccessful');
        localStorage.removeItem('cart');

    }
    return (
        <main className='checkout'>
            <div className='shipping-info'>
                <h3>Shipping information</h3>
                <input placeholder='Company' className='default-input'></input>
                <input placeholder='Address' className='default-input'></input>
                <input placeholder='Apartment,suite,etc .(optional)' className='default-input'></input>
                <div className='containerr'>
                    <input placeholder='City' className='default-input'></input>
                    <input placeholder='State/Province' className='default-input'></input>
                </div>
                <div className='containerr'>
                    <input placeholder='Country' className='default-input'></input>
                    <input placeholder='Postal code' className='default-input'></input>
                </div>
                {/* <div className='btn-container'>
                    <button className='default-button'>Proceed to Payment</button>
                </div> */}

                <h3 style={{ 'marginTop': '50px' }}>Payment Details</h3>
                <hr />
                <div className='payment-container'>
                    <div>
                        {/* <label for='credit-card-number' >Card Number</label> */}
                        <input id='credit-card-number' placeholder='1234 1234 1234 1234'></input>
                        {/* <label for='expiry-date'>Expiration</label> */}
                        <input id='expiry-date' placeholder='MM / YY'></input>
                        {/* <label for='cvc'>CVC</label> */}
                        <input id="cvc" placeholder='CVC'></input>
                    </div>
                    <select>
                        <option>Egypt</option>
                        <option>Egypt</option>
                        <option>Egypt</option>
                        <option>Egypt</option>
                        <option>Egypt</option>
                    </select>
                    <button onClick={handlePaymentBtn}>Pay Now</button>
                </div>


            </div>
            <div className='order-summary'>
                <h3>Order summary</h3>
                <aside>
                    <div className='list-of-cart-items'>
                        {
                            cart.map((cartItem) => {
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
                            <span>$200.00   </span>
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
                            <span id='total'>$210.52</span>
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}

export default Checkout;