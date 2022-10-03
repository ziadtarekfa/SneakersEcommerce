
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

export const useProductByIdFetcher = () => {

    const { id } = useParams();
    const [loading, isLoading] = useState(true);
    const [product, setProduct] = useState();


    useEffect(() => {
        const myRef = ref(getDatabase(), `products/${id}`);
        onValue(myRef, (snapshot) => {
            const data = snapshot.val();
            setProduct(data);
            isLoading(false);
        });
    }, [])

    return {
        product,
        loading
    }
}

