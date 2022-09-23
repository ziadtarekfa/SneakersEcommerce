import { CategoryCard, FilterBar, ProductCard } from './index';

import hello from '../assets/Headers/collections-header.jpg';


const MenCollection = () => {
    return (
        <main>

            <CategoryCard category="Products" categoryBgImage={hello} />
            <FilterBar />
            <div className="default-products">
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

        </main>

    );
}

export default MenCollection;