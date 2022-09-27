import { CategoryCard, FilterBar, ProductCard } from './index';

import { useState } from 'react';

const ProductsList = ({ collection, category }) => {
    const [collectionState, setCollection] = useState(collection);
    return (
        <main>
            <CategoryCard category={category} />
            <FilterBar initialCollection={collection} setCollection={setCollection} />
            <div className="default-products">
                {

                    collectionState && collectionState.map((product) => {
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