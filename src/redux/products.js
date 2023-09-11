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
        sortCollection: (state, sortMode) => {

            if (sortMode.payload === 'Price,low-high') {
                state.reduxCollection.sort(function (a, b) {
                    if (a.val().newPrice > b.val().newPrice) return 1;
                    if (a.val().newPrice < b.val().newPrice) return -1;
                    return 0;
                });
            }
            else if (sortMode.payload === 'Price,high-low') {
                state.reduxCollection.sort(function (a, b) {
                    if (a.val().newPrice > b.val().newPrice) return 1;
                    if (a.val().newPrice < b.val().newPrice) return -1;
                    return 0;
                });
                state.reduxCollection.reverse();
            }
        }
    }

});

export default productsSlice.reducer;
export const { setReduxCollection, sortCollection } = productsSlice.actions;