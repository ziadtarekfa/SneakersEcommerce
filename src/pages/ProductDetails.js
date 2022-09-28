import '../pagesStyles/ProductDetails.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

const ProductDetails = () => {

    const [loading, isLoading] = useState(true);
    function getProductById() {
        const db = getDatabase();
        const myRef = ref(db, `products/${id}`);

        onValue(myRef, (snapshot) => {
            const data = snapshot.val();
            setProduct(data);
            isLoading(false);
        });
    }

    const { id } = useParams();
    useEffect(() => {
        getProductById();
    }, []);

    // useEffect(() => {

    // });



    const [product, setProduct] = useState("");

    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
        cart = [];
    }


    const [counter, setCounter] = useState(0);

    function handleMinusBtn() {
        if (counter > 0) {
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
                loading ? <div>loading</div> :

                    <main className="product-details">
                        <div>
                            <img src={product.image} alt='productImage' />
                        </div>
                        <div className='product-details-content'>

                            <h2>{product.brand}</h2>
                            <h1>{product.model}</h1>
                            <p className='description'>{product.description}</p>

                            <div className='new-price-container'>
                                <p className='new-price'>{`$${product.newPrice}`}</p>
                                <div className='discount-percentage-container'>
                                    <p>{`${product.discount}%`}</p>
                                </div>
                            </div>

                            <p style={{ 'color': '#76787F', 'textDecoration': 'line-through', 'fontWeight': 'bold' }} >{`$${product.oldPrice}`}</p>
                            <div className='add-to-cart-container'>
                                <div className='counter-container'>
                                    <button onClick={handleMinusBtn}>-</button>
                                    <p >{counter}</p>
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