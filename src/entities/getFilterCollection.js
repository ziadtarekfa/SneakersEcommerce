import sortCollection from "./sortCollection";
import { onValue } from "firebase/database";

export default function getFilterCollection(query, criteria) {

    const { selectedColor, selectedBrand, selectedSortMode, gender } = criteria;
    return new Promise((resolve) => {
        const arr = [];

        onValue(query, (snapshot) => {

            snapshot.forEach((childSnapshot) => {

                const product = childSnapshot.val();

                if (product.gender === gender || product.gender === 'both' || gender === 'all') {
                    if (product.brand === selectedBrand || selectedBrand === 'BRAND') {

                        if (selectedColor !== 'color') {
                            for (let i = 0; i < product.colors.length; i++) {
                                if (product.colors[i] === selectedColor) {
                                    arr.push(product);
                                    break;
                                }
                            }
                        }
                        else {
                            arr.push(product);
                        }

                    }
                }

            });

            sortCollection(selectedSortMode, arr);
            resolve(arr);

        });
    })
} 