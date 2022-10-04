import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        reduxCollection: []
    },
    reducers: {

        setReduxCollection: (state, collection) => {
            state.reduxCollection = collection.payload;
        },
        addProduct: (state, product) => {
            state.reduxCollection.push(product.payload);
        }
        // getReduxCollection: (state, filter, query) => {
        //     console.log(`childsnapshot = hello`);
        //     onValue(query, (snapshot) => {
        //         console.log(`childsnapshot = ${snapshot}`);

        //         snapshot.forEach((childSnapshot) => {
        //             console.log(`childsnapshot = ${childSnapshot}`);

        //             if (filter) {
        //                 if (childSnapshot.val().gender === filter || childSnapshot.val().gender === 'both') {
        //                     state.reduxCollection.push(childSnapshot.val());

        //                 }
        //             }
        //             else {
        //                 state.reduxCollection.push(childSnapshot.val());
        //             }

        //         });

        //     });


        // }

    }

});

export default productsSlice.reducer;
export const { setReduxCollection, addProduct } = productsSlice.actions;