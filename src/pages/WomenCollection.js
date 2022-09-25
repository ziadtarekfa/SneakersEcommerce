
import { CategoryCard, FilterBar, ProductCard } from './index';
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from 'react';


const WomenCollection = () => {

    useEffect(() => {
        getWomenCollection();
    }, []);
    const [collection, setCollection] = useState([]);

    function getWomenCollection() {
        const database = getDatabase();
        const arr = [];
        onValue(ref(database, 'products/'), (snapshot) => {

            snapshot.forEach((childSnapshot) => {

                if (childSnapshot.val().gender === 'women' || childSnapshot.val().gender === 'both') {
                    arr.push(childSnapshot);
                }

            });

            setCollection(arr);
        });
    }

    return (
        <main>

            <CategoryCard category="Women" />
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

export default WomenCollection;