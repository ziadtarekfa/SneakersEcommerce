import { CategoryCard, FilterBar, ProductCard } from './index';


const MenCollection = () => {
    return (
        <main>
            <CategoryCard category="Men" />
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