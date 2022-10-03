
import { onValue } from "firebase/database";

function getCollection(filter, query) {



    return new Promise((resolve) => {


        const arr = [];
        onValue(query, (snapshot) => {

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