import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const ProductsList = ({ className }) => {

    const { reduxCollection } = useSelector((state) => state.products);
    return (

        <div className={className || "default-products"}>
            {
                reduxCollection.map((product) => {
                    return (
                        <ProductCard product={product} key={product.id} id={product.id} />
                    );
                })
            }
        </div>
    );
}

export default ProductsList;