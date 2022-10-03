import useCollectionFetcher from "../entities/useCollectionFetcher";
import ProductsList from './ProductsList';
import bgCategory from '../assets/Headers/men-header.jpg';
import Loading from "../components/Loading";
import CategoryCard from '../components/CategoryCard';
import { query, ref, getDatabase } from 'firebase/database'


const MenCollection = () => {

    const myQuery = query(ref(getDatabase(), 'products/'));
    const { collection, loading } = useCollectionFetcher("men", myQuery);

    return (
        <>
            <CategoryCard category="Men" categoryBgImage={bgCategory} />
            {
                loading ? <Loading /> : <ProductsList category={"Men"} bgCategory={bgCategory} collection={collection} />

            }

        </>

    );
}

export default MenCollection;