import { CategoryCard, FilterBar, ProductCard } from './index';

import { getDatabase, onValue, ref, query, limitToFirst } from "firebase/database";
import { useEffect, useState } from 'react';



const MenCollection = () => {

    useEffect(() => {
        getMenCollection();
    }, []);
    const [collection, setCollection] = useState([]);

    function getMenCollection() {
        const database = getDatabase();
        const arr = [];
        onValue(ref(database, 'products/'), (snapshot) => {

            snapshot.forEach((childSnapshot) => {

                if (childSnapshot.val().gender === 'men' || childSnapshot.val().gender === 'both') {
                    arr.push(childSnapshot);
                }

            });

            setCollection(arr);
        });
    }

    return (
        <main>
            <CategoryCard category="Men" />
            <FilterBar />
            <div className="default-products">
                {
                    collection.map((product) => {
                        return (
                            <ProductCard product={product.val()} key={product.key} id={product.key} />
                        );
                    })


                }
            </div>
        </main>

    );
}

export default MenCollection;