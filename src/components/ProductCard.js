import ProductImage from '../assets/images/image-product-1.jpg';
import '../ComponentsStyles/ProductCard.css';

const ProductCard = () => {
    return (
        <div className="product-card">

            <img src={ProductImage} alt='product' />
            <h6>GIVENCHY</h6>
            <h2>Urban Street Leather Sneakers</h2>
            <div className='prices-container'>
                <p style={{ 'fontWeight': 'bold', }}>$450</p>
                <p style={{ 'color': '#76787F', 'textDecoration': 'line-through' }}>$650</p>
                <div className='discount-percentage-container'>
                    <p>30%</p>
                </div>
            </div>

        </div>
    );
}

export default ProductCard;