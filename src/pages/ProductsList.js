import { FilterBar, ProductCard } from './index';

import { useState } from 'react';

const ProductsList = ({ collection }) => {
    const [collectionState, setCollection] = useState(collection);
    return (
        <main>

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