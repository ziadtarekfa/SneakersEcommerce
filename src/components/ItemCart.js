import '../ComponentsStyles/itemCart.css';
import { BsTrash } from 'react-icons/bs';

const ItemCart = ({ cartItem }) => {


    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={cartItem.productImage} alt="productImage" />
            </div>
            <div className="cart-item-content">
                <div>
                    <p>{cartItem.productModel}</p>
                    <BsTrash />
                </div>
                <div>
                    <span className='total-text'>{`${cartItem.productPrice}x${cartItem.productQuantity}`}</span>
                    <span className='total'>{`$${cartItem.productPrice * cartItem.productQuantity}`}</span>
                </div>
            </div>


        </div>
    );
}

export default ItemCart;