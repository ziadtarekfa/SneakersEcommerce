import { CategoryCard, FilterBar, ProductCard } from './index';

import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from "firebase/database";
import hello from '../assets/Headers/collections-header.jpg';


const AllCollections = () => {

    useEffect(() => {
        getCollection();
    }, []);

    const [collection, setCollection] = useState([]);

    function getCollection() {
        const database = getDatabase();
        const arr = [];
        onValue(ref(database, 'products/'), (snapshot) => {

            snapshot.forEach((childSnapshot) => {
                arr.push(childSnapshot);
            });

            setCollection(arr);
        });
    }

    return (
        <main>

            <CategoryCard category="Products" categoryBgImage={hello} />
            <FilterBar />
            <div className="default-products">
                {
                    collection.map((product) => {

                        return (
                            <ProductCard product={product.val()} id={product.key} key={product.key} />
                        );
                    })
                }
            </div>

        </main>

    );
}

export default AllCollections;