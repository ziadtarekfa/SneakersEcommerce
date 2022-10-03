import ProductsList from './ProductsList';
import useCollectionFetcher from "../entities/useCollectionFetcher";
import bgCategory from '../assets/Headers/about-header.jpg';
import Loading from '../components/Loading';
import CategoryCard from '../components/CategoryCard';
import { query, ref, getDatabase } from 'firebase/database'
const AllCollections = () => {

    const myQuery = query(ref(getDatabase(), 'products/'));
    const { collection, loading } = useCollectionFetcher(null, myQuery);

    return (
        <>
            <CategoryCard category="Products" categoryBgImage={bgCategory} />
            {
                loading ? <Loading /> : <ProductsList category={"Products"} bgCategory={bgCategory} collection={collection} />
            }
        </>


    );
}

export default AllCollections;