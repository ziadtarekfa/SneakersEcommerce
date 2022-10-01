import useCollectionFetcher from "../entities/useCollectionFetcher";
import ProductsList from './ProductsList';
import bgCategory from '../assets/Headers/men-header.jpg';
import Loading from "../components/Loading";



const MenCollection = () => {

    const { collection, loading } = useCollectionFetcher("men");

    return (
        <>
            {
                loading ? <Loading /> : <ProductsList category={"Men"} bgCategory={bgCategory} collection={collection} />

            }

        </>

    );
}

export default MenCollection;