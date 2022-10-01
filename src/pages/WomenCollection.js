import ProductsList from './ProductsList';
import useCollectionFetcher from "../entities/useCollectionFetcher";
import bgCategory from '../assets/Headers/women-header.jpg';
import Loading from '../components/Loading';
const WomenCollection = () => {

    const { collection, loading } = useCollectionFetcher("women");
    return (
        <>
            {
                loading ? <Loading /> : <ProductsList category={"Women"} bgCategory={bgCategory} collection={collection} />
            }

        </>

    );
}

export default WomenCollection;