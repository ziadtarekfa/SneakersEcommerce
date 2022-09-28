import '../ComponentsStyles/FilterBar.css';

const FilterBar = ({ initialCollection, collectionState, setCollection }) => {


    const colors = ["Color", "beige", "black", "blue", "brown", "gray", "green", "orange", "peach",
        "pink", "purple", "red", "turquoise", "white"];

    const brands = ["Brand", "Adidas", "Asics", "Bershka", "Jordan", "Nike", "Puma", "Reebok", "Vans"];


    let filteredCollection;

    function filterCollection() {
        const brandSelect = document.getElementById('select-brand');
        const colorSelect = document.getElementById('select-color');
        const selectedBrand = brandSelect.value.toLowerCase();
        const selectedColor = colorSelect.value.toLowerCase();
        const sortMode = document.getElementById('sort-select').value;

        filteredCollection = [];

        if (selectedBrand === 'brand' && selectedColor === 'color') {
            // no change 
            filteredCollection = initialCollection;
        }
        else if (selectedBrand === 'brand' && selectedColor !== 'color') {
            // filter based on color ONLY
            initialCollection.forEach(childSnapshot => {
                filterWithColor(selectedColor, childSnapshot);
            });
        }
        else if (selectedBrand !== 'brand' && selectedColor === 'color') {
            //filter based on brand ONLY
            filterWithBrand(selectedBrand);
        }
        else {
            //filter based on color AND brand
            initialCollection.forEach(childSnapshot => {
                if (childSnapshot.val().brand.toLowerCase() === selectedBrand) {
                    filterWithColor(selectedColor, childSnapshot);
                }
            });
        }

        if (sortMode === 'Price,low-high') {
            const sortedList = [...collectionState]; //snapshot
            sortedList.sort(function (a, b) {
                if (a.val().newPrice > b.val().newPrice) return 1;
                if (a.val().newPrice < b.val().newPrice) return -1;
                return 0;
            });
            console.log(sortedList);
            setCollection(sortedList);
        }
        else if (sortMode === 'Price,high-low') {
            const sortedList = [...collectionState];
            sortedList.sort(function (a, b) {
                if (a.val().newPrice > b.val().newPrice) return 1;
                if (a.val().newPrice < b.val().newPrice) return -1;
                return 0;
            });
            setCollection(sortedList.reverse());
        }
        else if (sortMode === 'Newest') {
            setCollection(filteredCollection);
        }

    }

    function filterWithColor(selectedColor, childSnapshot) {

        const product = childSnapshot.val();
        for (let i = 0; i < product.colors.length; i++) {
            if (product.colors[i] === selectedColor) {
                filteredCollection.push(childSnapshot);
                break;
            }
        }
    }

    function filterWithBrand(selectedBrand) {

        initialCollection.forEach(childSnapshot => {
            const product = childSnapshot.val();
            if (product.brand.toLowerCase() === selectedBrand) {
                filteredCollection.push(childSnapshot);
            }
        });
    }

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
                <select id='sort-select' onChange={filterCollection}>
                    <option>Newest</option>
                    <option>Price,low-high</option>
                    <option>Price,high-low</option>
                </select>
            </section>
        </div>
    );
}

export default FilterBar;