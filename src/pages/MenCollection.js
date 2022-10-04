import useCollectionFetcher from "../entities/useCollectionFetcher";
import ProductsList from './ProductsList';
import bgCategory from '../assets/Headers/men-header.jpg';
import Loading from "../components/Loading";
import CategoryCard from '../components/CategoryCard';
import FilterBar from '../components/FilterBar';
import { query, ref, getDatabase } from 'firebase/database'

const MenCollection = () => {

    const myQuery = query(ref(getDatabase(), 'products/'));
    const loading = useCollectionFetcher("men", myQuery);

    return (
        <>
            <CategoryCard category="Men" categoryBgImage={bgCategory} />
            <FilterBar />
            {
                loading ? <Loading /> : <ProductsList />
            }

        </>

    );
}

export default MenCollection;