import '../pagesStyles/ProductDetails.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

const ProductDetails = () => {


    const { id } = useParams();
    useEffect(() => {
        getProductById();
    }, []);

    const [product, setProduct] = useState("");

    const [counter, setCounter] = useState(0);

    function handleMinusBtn() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }
    function handlePlusBtn() {
        setCounter(counter + 1);
    }





    function getProductById() {
        const db = getDatabase();
        const myRef = ref(db, `products/${id}`);

        onValue(myRef, (snapshot) => {
            const data = snapshot.val();
            setProduct(data);
        });
    }



    return (
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
                    <button className='default-button'>Add to cart</button>
                </div>

            </div>
        </main >
    );
}

export default ProductDetails;