import { CategoryCard, FilterBar, ProductCard } from './index';

import hello from '../assets/Headers/collections-header.jpg';

import '../pagesStyles/MenCollection.css';

const MenCollection = () => {
    return (
        <div>

            <CategoryCard category="Products" categoryBgImage={hello} />
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