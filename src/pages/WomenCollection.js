import ProductsList from './ProductsList';
import useCollectionFetcher from "../entities/useCollectionFetcher";
import bgCategory from '../assets/Headers/women-header.jpg';
import Loading from '../components/Loading';
import CategoryCard from '../components/CategoryCard';
import { query, ref, getDatabase } from 'firebase/database'


const WomenCollection = () => {
    const myQuery = query(ref(getDatabase(), 'products/'));
    const { collection, loading } = useCollectionFetcher("women", myQuery);

    return (
        <>
            <CategoryCard category="Women" categoryBgImage={bgCategory} />
            {
                loading ? <Loading /> : <ProductsList category={"Women"} bgCategory={bgCategory} collection={collection} />
            }

        </>

    );
}

export default WomenCollection;