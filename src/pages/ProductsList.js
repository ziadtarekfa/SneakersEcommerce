import ProductCard from '../components/ProductCard';

const ProductsList = ({ collection, className }) => {
    return (

        <div className={className || "default-products"}>
            {
                collection.map((childSnapshot) => {
                    return (
                        <ProductCard product={childSnapshot.val()} key={childSnapshot.key} id={childSnapshot.key} />
                    );
                })
            }
        </div>
    );
}

export default ProductsList;