import ProductsList from './ProductsList';
import useCollectionFetcher from "../entities/useCollectionFetcher";
import bgCategory from '../assets/Headers/about-header.jpg';
import Loading from '../components/Loading';

const AllCollections = () => {

    const { collection, loading } = useCollectionFetcher();

    return (

        <>
            {
                loading ? <Loading /> : <ProductsList category={"Products"} bgCategory={bgCategory} collection={collection} />
            }
        </>


    );
}

export default AllCollections;