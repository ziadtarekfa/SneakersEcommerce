import { CategoryCard, FilterBar, ProductCard } from './index';

import { useState } from 'react';

const ProductsList = ({ collection, category, bgCategory }) => {
    const [collectionState, setCollection] = useState(collection);
    return (
        <main>
            <CategoryCard category={category} categoryBgImage={bgCategory} />
            <FilterBar initialCollection={collection} collectionState={collectionState} setCollection={setCollection} />
            <div>
                <div className="default-products">
                    {

                        collectionState.map((childSnapshot) => {
                            return (
                                <ProductCard product={childSnapshot.val()} key={childSnapshot.key} id={childSnapshot.key} />
                            );
                        })

                    }

                </div>
            </div>
        </main>
    );
}

export default ProductsList;