import ProductsList from './ProductsList';
import useCollectionFetcher from "../entities/useCollectionFetcher";

const AllCollections = () => {

    const { collection, loading } = useCollectionFetcher();

    return (

        <>
            {
                loading ? <div>Loading</div> : <ProductsList category={"Products"} collection={collection} />
            }
        </>


    );
}

export default AllCollections;