

import { useNavigate } from 'react-router-dom';
import '../ComponentsStyles/ProductCard.css';

const ProductCard = ({ product, id }) => {

    let navigate = useNavigate();
    function handleProductCardClick() {
        navigate(`/products/${id}`);
    }
    return (
        <div className="product-card" onClick={handleProductCardClick}>
            <img src={product.image} alt='product' />
            <h6>{product.brand}</h6>
            <h2>{product.model}</h2>
            <div className='prices-container'>
                <p style={{ 'fontWeight': 'bold', }}>{product.oldPrice}</p>
                <p style={{ 'color': '#76787F', 'textDecoration': 'line-through' }}>{product.newPrice}</p>
                <div className='discount-percentage-container'>
                    <p>{product.discount}</p>
                </div>
            </div>

        </div>
    );
}

export default ProductCard;
