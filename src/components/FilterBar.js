import '../ComponentsStyles/FilterBar.css';

import { useDispatch } from 'react-redux';
import { setReduxCollection } from '../redux/products';
import getFilterCollection from '../entities/getFilterCollection';
import { query, ref, getDatabase } from 'firebase/database';




const FilterBar = ({ gender }) => {

    const colors = ["Color", "black", "blue", "brown", "gray", "green", "orange",
        "pink", "purple", "red", "turquoise", "white"];

    const brands = ["Brand", "Adidas", "Asics", "Bershka", "Jordan", "Nike", "Puma", "Reebok", "Vans"];
    const dispatch = useDispatch();


    function onChangeFilter() {
        const criteria = {
            selectedColor: document.getElementById('select-color').value.toLowerCase(),
            selectedBrand: document.getElementById('select-brand').value.toUpperCase(),
            selectedSortMode: document.getElementById("sort-select").value,
            gender: gender
        }
        const myQuery = query(ref(getDatabase(), 'products/'));
        getFilterCollection(myQuery, criteria).then((data) => {
            dispatch(setReduxCollection(data));
        });
    }



    return (
        <div className="filter-bar">
            <section className='filter-products-container'>

                <h1>Filter Products:</h1>
                <select id='select-color' onChange={onChangeFilter} >
                    {
                        colors.map((color) => {
                            return (
                                <option key={color}>{color}</option>
                            );
                        })
                    }

                </select>

                <select id='select-brand' onChange={onChangeFilter} >
                    {
                        brands.map((brand) => {
                            return (
                                <option key={brand}>{brand}</option>
                            );
                        })
                    }

                </select>
            </section>


            <section className='sort-products-container' >
                <h1>Sort Products:</h1>
                <select id='sort-select' onChange={onChangeFilter} >
                    <option >Newest</option>
                    <option>Price,low-high</option>
                    <option>Price,high-low</option>
                </select>
            </section>
        </div>
    );
}

export default FilterBar;