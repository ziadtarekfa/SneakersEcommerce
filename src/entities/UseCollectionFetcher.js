import { useEffect, useState } from 'react';
import { getCollection } from './CollectionRequest';

export default function useCollectionFetcher(filter, limit) {

    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getCollection(filter, limit).then((data) => {
            setCollection(data);
            setLoading(false);
        });

    }, [filter, limit]);

    return {
        collection,
        loading
    };

}

