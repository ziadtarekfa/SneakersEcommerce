import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onValue } from "firebase/database";
import { setReduxCollection } from '../redux/products';

export default function useCollectionFetcher(filter, query) {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {

        const arr = [];
        onValue(query, (snapshot) => {
            snapshot.forEach((childSnapshot) => {

                if (filter) {
                    if (childSnapshot.val().gender === filter || childSnapshot.val().gender === 'both') {
                        arr.push(childSnapshot.val());
                    }
                }
                else {
                    arr.push(childSnapshot.val());
                }

            });
            dispatch(setReduxCollection(arr))
            setLoading(false);
        });

    }, []);

    return loading;

}

