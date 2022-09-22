
import { CategoryCard, FilterBar, ProductCard } from './index';

import '../pagesStyles/MenCollection.css';

const MenCollection = () => {
    return (
        <div>

            <CategoryCard category="Women" />
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