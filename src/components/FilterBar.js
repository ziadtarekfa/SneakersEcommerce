import '../ComponentsStyles/FilterBar.css';
const FilterBar = ({ initialCollection, setCollection, }) => {


    const colors = ["Color", "beige", "black", "blue", "brown", "gray", "green", "orange", "peach",
        "pink", "purple", "red", "turquoise", "white"];

    const brands = ["Brand", "Adidas", "Asics", "Bershka", "Jordan", "Nike", "Puma", "Reebok", "Vans"];


    function filterAccordingToBrand() {
        const brandSelect = document.getElementById('select-brand');
        const brand = brandSelect.value;
        let filteredCollection = [];

        if (brand.toLowerCase() !== 'brand') {
            initialCollection.forEach(childSnapshot => {

                const product = childSnapshot.val();

                if (product.brand.toLowerCase() === brand.toLowerCase()) {
                    filteredCollection.push(childSnapshot);
                }
            });
            setCollection(filteredCollection);
        }
        else {
            setCollection(initialCollection);
        }
    }


    return (
        <div className="filter-bar">
            <section className='filter-products-container'>

                <h1>Filter Products:</h1>
                <select>
                    {
                        colors.map((color) => {
                            return (
                                <option key={color}>{color}</option>
                            );
                        })
                    }

                </select>

                <select onChange={filterAccordingToBrand} id='select-brand'>
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