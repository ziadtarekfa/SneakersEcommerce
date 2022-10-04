import ProductsList from './ProductsList';
import useCollectionFetcher from "../entities/useCollectionFetcher";
import bgCategory from '../assets/Headers/about-header.jpg';
import Loading from '../components/Loading';
import CategoryCard from '../components/CategoryCard';
import FilterBar from '../components/FilterBar';
import { query, ref, getDatabase } from 'firebase/database'
const AllCollections = () => {

    const myQuery = query(ref(getDatabase(), 'products/'));
    const loading = useCollectionFetcher(null, myQuery);

    return (
        <>
            <CategoryCard category="Products" categoryBgImage={bgCategory} />
            <FilterBar />
            {
                loading ? <Loading /> : <ProductsList />
            }

        </>

    );
}

export default AllCollections;