import '../ComponentsStyles/FilterBar.css';
const FilterBar = () => {

    const colors = ["Color", "beige", "black", "blue", "brown", "gray", "green", "orange", "peach",
        "pink", "purple", "red", "turquoise", "white"];

    const brands = ["Brand", "Adidas", "Asics", "Bershka", "Jordan", "Nike", "Puma", "Reebok", "Vans"];

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

                <select>
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