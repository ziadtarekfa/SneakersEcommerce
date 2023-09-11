import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const ProductsList = ({ classname }) => {

    const { reduxCollection } = useSelector((state) => state.products);
    console.log(reduxCollection);

    return (

        <div className={classname || "default-products"}>
            {
                reduxCollection.length > 0 ?
                    reduxCollection.map((product) => {
                        return (
                            <ProductCard product={product} key={product.id} id={product.id} />
                        );
                    })

                    : <div className='no-products-found'>No products found</div>
            }
        </div>
    );
}

export default ProductsList;