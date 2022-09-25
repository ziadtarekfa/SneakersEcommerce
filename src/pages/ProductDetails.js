import '../pagesStyles/ProductDetails.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

const ProductDetails = () => {


    const { id } = useParams();

    const [product, setProduct] = useState("");



    function getProductById() {
        const db = getDatabase();
        const myRef = ref(db, `products/${id}`);

        onValue(myRef, (snapshot) => {
            const data = snapshot.val();
            setProduct(data);
        });
    }

    useEffect(() => {
        getProductById();
    }, []);




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
                    <p className='new-price'>{product.newPrice}</p>
                    <div className='discount-percentage-container'>
                        <p>{product.discount}</p>
                    </div>
                </div>

                <p style={{ 'color': '#76787F', 'textDecoration': 'line-through', 'fontWeight': 'bold' }} >{product.oldPrice}</p>
                <div className='add-to-cart-container'>
                    <div className='counter-container'>
                        <button >-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                    <button className='default-button'>Add to cart</button>
                </div>

            </div>
        </main>
    );
}

export default ProductDetails;