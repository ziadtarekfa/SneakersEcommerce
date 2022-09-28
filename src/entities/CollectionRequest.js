
import { getDatabase, onValue, ref, query, limitToFirst } from "firebase/database";

function getCollection(filter, limit) {



    return new Promise((resolve) => {

        const database = getDatabase();
        const arr = [];
        let myQuery;
        if (limit) {
            myQuery = query(ref(database, 'products/'), limitToFirst(limit));
        }
        else {
            myQuery = query(ref(database, 'products/'));
        }
        onValue(myQuery, (snapshot) => {

            snapshot.forEach((childSnapshot) => {

                if (filter) {
                    if (childSnapshot.val().gender === filter || childSnapshot.val().gender === 'both') {
                        arr.push(childSnapshot);

                    }
                }

                else {
                    arr.push(childSnapshot);
                }

            });

            resolve(arr);
        });

    });


}

export { getCollection };