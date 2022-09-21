import CategoryCard from "../components/CategoryCard";
import FilterBar from "../components/FilterBar";
import ProductCard from '../components/ProductCard';

import '../pagesStyles/MenCollection.css';

const MenCollection = () => {
    return (
        <div>

            <CategoryCard category="Products" />
            <FilterBar />
            <div className="products">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>

    );
}

export default MenCollection;