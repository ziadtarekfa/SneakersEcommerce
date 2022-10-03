import { useState } from 'react';
import Loading from '../components/Loading';
import { useProductByIdFetcher } from '../entities/useProductByIdFetcher';

import '../pagesStyles/ProductDetails.css';

const ProductDetails = () => {


    const { product, loading } = useProductByIdFetcher();


    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
        cart = [];
    }


    const [counter, setCounter] = useState(1);

    function handleMinusBtn() {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
    function handlePlusBtn() {
        setCounter(counter + 1);
    }
    function addToCart() {
        const cartItem = {
            productImage: product.image,
            productModel: product.model,
            productPrice: product.newPrice,
            productQuantity: counter
        }

        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));
    }



    return (
        <>
            {
                loading ? <Loading /> :

                    <main className="product-details">
                        <div>
                            <img src={product.image} alt='productImage' />
                        </div>
                        <div className='product-details-content'>

                            <h2>{product.brand}</h2>
                            <h1>{product.model}</h1>
                            <p>{product.description}</p>

                            <div className='new-price-container'>
                                <span className='new-price'>{`$${product.newPrice}`}</span>
                                <div className='discount-percentage-container'>
                                    <span>{`${product.discount}%`}</span>
                                </div>
                            </div>

                            <span className='old-price'>{`$${product.oldPrice}`}</span>
                            <div className='add-to-cart-container'>
                                <div className='counter-container'>
                                    <button onClick={handleMinusBtn}>-</button>
                                    <span>{counter}</span>
                                    <button onClick={handlePlusBtn}>+</button>
                                </div>
                                <button className='default-button' onClick={addToCart}>Add to cart</button>
                            </div>

                        </div>
                    </main >
            }
        </>
    );
}

export default ProductDetails;