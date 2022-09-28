import { CategoryCard, FilterBar, ProductCard } from './index';

import { useState } from 'react';

const ProductsList = ({ collection, category }) => {
    const [collectionState, setCollection] = useState(collection);
    return (
        <main>
            <CategoryCard category={category} />
            <FilterBar initialCollection={collection} collectionState={collectionState} setCollection={setCollection} />
            <div className="default-products">
                {



                    collectionState.map((childSnapshot) => {
                        return (
                            <ProductCard product={childSnapshot.val()} key={childSnapshot.key} id={childSnapshot.key} />
                        );
                    })
                }
            </div>
        </main>
    );
}

export default ProductsList;