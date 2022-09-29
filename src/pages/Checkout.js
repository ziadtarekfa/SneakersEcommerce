import '../pagesStyles/Checkout.css';
import ItemCart from '../components/ItemCart';
const Checkout = () => {

    const cart = JSON.parse(localStorage.getItem('cart'));
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
                <div className='btn-container'>
                    <button className='default-button'>Proceed to Payment</button>
                </div>

                <h3>Payment Details</h3>
                <hr />
                <div className='payment-container'>

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
                            <span>$210.52</span>
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}

export default Checkout;