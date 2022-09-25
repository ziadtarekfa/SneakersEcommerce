import { useEffect, useState } from 'react';
import { getCollection } from '../entities/CollectionRequest';

export default function useCollectionFetcher(filter) {

    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getCollection(filter).then((data) => {
            setCollection(data);
            setLoading(false);
        });

    }, [filter]);

    return {
        collection,
        loading
    };

}

