
// import img from '../assets/images/image-product-1.jpg';
// import itemCarte from './itemCart.js';
import ItemCart from './ItemCart';
import '../ComponentsStyles/Cart.css';

const Cart = ({ showState }) => {

    // console.log(`show State is ${showState}`);
    return (
        <>
            {
                showState ?
                    <div className='cart'>
                        <div>
                            <h3>Cart</h3>
                        </div>
                        <hr />
                        <div>
                            <ItemCart />
                            <ItemCart />
                            <ItemCart />
                        </div>
                        <hr />
                        <div>
                            <div className='total-container'>
                                <h4>Total</h4>
                                <p>$450.00</p>
                            </div>
                            <button className='default-button'>Checkout</button>
                        </div>

                    </div> : null

            }
        </>


    );
}

export default Cart;