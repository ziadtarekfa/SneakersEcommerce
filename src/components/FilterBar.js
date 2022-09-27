import '../ComponentsStyles/FilterBar.css';
const FilterBar = ({ initialCollection, setCollection, collectionState }) => {


    const colors = ["Color", "beige", "black", "blue", "brown", "gray", "green", "orange", "peach",
        "pink", "purple", "red", "turquoise", "white"];

    const brands = ["Brand", "Adidas", "Asics", "Bershka", "Jordan", "Nike", "Puma", "Reebok", "Vans"];



    function filterCollection() {
        const brandSelect = document.getElementById('select-brand');
        const colorSelect = document.getElementById('select-color');
        const selectedBrand = brandSelect.value;
        const selectedColor = colorSelect.value;

        let filteredCollection = [];

        if (selectedBrand.toLowerCase() === 'brand' && selectedColor.toLowerCase() === 'color') {
            filteredCollection = initialCollection;
            setCollection(initialCollection);
        }
        else {
            console.log(selectedColor);
            // loop
            initialCollection.forEach(childSnapshot => {

                const product = childSnapshot.val();
                if (selectedBrand.toLowerCase() !== 'brand') {

                    if (product.brand.toLowerCase() === selectedBrand.toLowerCase()) {

                        if (selectedColor.toLowerCase() !== 'color') {
                            for (let i = 0; i < product.colors.length; i++) {
                                if (product.colors[i] === selectedColor) {
                                    filteredCollection.push(childSnapshot);
                                    break;
                                }
                            }
                        }
                        else {
                            filteredCollection.push(childSnapshot);
                        }

                    }
                }
                else {
                    for (let i = 0; i < product.colors.length; i++) {
                        if (product.colors[i] === selectedColor.toLowerCase()) {
                            filteredCollection.push(childSnapshot);
                            break;
                        }
                    }
                }


            });
            // end loop
            setCollection(filteredCollection);
        }
    }

    // const brandSelect = document.getElementById('select-brand');
    // const brand = brandSelect.value;
    // let filteredCollection = [];

    // if (brand.toLowerCase() !== 'brand') {
    //     initialCollection.forEach(childSnapshot => {

    //         const product = childSnapshot.val();

    //         if (product.brand.toLowerCase() === brand.toLowerCase()) {
    //             filteredCollection.push(childSnapshot);
    //         }
    //     });
    //     setCollection(filteredCollection);
    // }
    // else {
    //     setCollection(initialCollection);
    // }

    // function filterAccordingToColor() {
    //     const colorSelect = document.getElementById('select-color');
    //     const selectedColor = colorSelect.value;
    //     let filteredCollection = [];
    //     if (selectedColor.toLowerCase() !== 'color') {
    //         initialCollection.forEach(childSnapshot => {

    //             const colorList = childSnapshot.val().colors;


    //             for (let i = 0; i < colorList.length; i++) {
    //                 if (colorList[i] === selectedColor) {
    //                     filteredCollection.push(childSnapshot);
    //                     break;
    //                 }
    //             }

    //         });
    //         setCollection(filteredCollection);
    //     }
    //     else {
    //         setCollection(initialCollection);
    //     }
    //   }


    return (
        <div className="filter-bar">
            <section className='filter-products-container'>

                <h1>Filter Products:</h1>
                <select id='select-color' onChange={filterCollection} >
                    {
                        colors.map((color) => {
                            return (
                                <option key={color}>{color}</option>
                            );
                        })
                    }

                </select>

                <select onChange={filterCollection} id='select-brand'>
                    {
                        brands.map((brand) => {
                            return (
                                <option key={brand}>{brand}</option>
                            );
                        })
                    }

                </select>
            </section>

            <section className='sort-products-container'>
                <h1>Sort Products:</h1>
                <select>
                    <option>Newest</option>
                    <option>Price,low-high</option>
                    <option>Price,high-low</option>
                </select>
            </section>
        </div>
    );
}

export default FilterBar;