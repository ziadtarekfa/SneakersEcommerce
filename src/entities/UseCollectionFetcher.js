import { useEffect, useState } from 'react';
import { getCollection } from './CollectionRequest';

export default function useCollectionFetcher(filter, query) {

    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getCollection(filter, query).then((data) => {
            setCollection(data);
            setLoading(false);
        });

    }, []);

    return {
        collection,
        loading
    };

}

