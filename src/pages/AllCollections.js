import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

import '../pagesStyles/MenCollection.css';

const MenCollection = () => {
    return (
        <div>
            <Header />
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
            <Footer />
        </div>

    );
}

export default MenCollection;