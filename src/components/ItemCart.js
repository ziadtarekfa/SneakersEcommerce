import '../ComponentsStyles/itemCart.css';
import img from '../assets/images/image-product-1.jpg';
import { BsTrash } from 'react-icons/bs';

const ItemCart = () => {
    const id = 1;
    return (
        <div className="cart-item">

            <div className="cart-item-image">
                <img src={img} alt="hello" />
            </div>
            <div className="cart-item-content">
                <div>
                    <a href={`/products/${id}`}>Smash Leather Perf Sneakers</a>
                    <BsTrash />
                    {/* #76787f */}

                </div>
                <div>
                    <span>30x1</span>
                    <p>$30</p>
                </div>
            </div>


        </div>
    );
}

export default ItemCart;