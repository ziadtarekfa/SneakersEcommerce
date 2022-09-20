import '../styles/FilterBar.css';
const FilterBar = () => {
    return (
        <div className="filter-bar">
            <section className='filter-products-container'>

                <h1>Filter Products:</h1>
                <select>
                    <option>Color</option>
                    <option>beige</option>
                    <option>black</option>
                    <option>blue</option>
                    <option>brown</option>
                    <option>gray</option>
                    <option>green</option>
                    <option>orange</option>
                    <option>peach</option>
                    <option>pink</option>
                    <option>purple</option>
                    <option>red</option>
                    <option>turquoise</option>
                    <option>white</option>
                </select>
                <select>
                    <option>Brand</option>
                    <option>Adidas</option>
                    <option>Asics</option>
                    <option>Bershka</option>
                    <option>Jordan</option>
                    <option>Nike</option>
                    <option>Puma</option>
                    <option>Reebok</option>
                    <option>Vans</option>
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