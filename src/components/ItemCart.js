import '../ComponentsStyles/itemCart.css';
import { BsTrash } from 'react-icons/bs';

const ItemCart = ({ cartItem }) => {

    function deleteProductFromCart() {
        localStorage.removeItem('cart');
    }
    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={cartItem.productImage} alt="productImage" />
            </div>
            <div className="cart-item-content">
                <div>
                    <p>{cartItem.productModel}</p>
                    <BsTrash onClick={deleteProductFromCart} />
                </div>
                <div>
                    <span>{`${cartItem.productPrice}x${cartItem.productQuantity}`}</span>
                    <p>{`$${cartItem.productPrice * cartItem.productQuantity}`}</p>
                </div>
            </div>


        </div>
    );
}

export default ItemCart;