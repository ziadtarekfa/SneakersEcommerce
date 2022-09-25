
import { getDatabase, onValue, ref } from "firebase/database";

function getCollection(filter) {



    return new Promise((resolve) => {

        const database = getDatabase();
        const arr = [];
        onValue(ref(database, 'products/'), (snapshot) => {

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