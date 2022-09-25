import { CategoryCard, FilterBar, ProductCard } from './index';

const ProductsList = ({ collection, category }) => {
    return (
        <main>
            <CategoryCard category={category} />
            <FilterBar />
            <div className="default-products">
                {

                    collection && collection.map((product) => {
                        return (
                            <ProductCard product={product.val()} key={product.key} id={product.key} />
                        );
                    })
                }
            </div>
        </main>
    );
}

export default ProductsList;