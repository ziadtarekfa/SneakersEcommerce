import ProductsList from './ProductsList';
import useCollectionFetcher from "../entities/UseCollectionFetcher";
const WomenCollection = () => {

    const { collection, loading } = useCollectionFetcher("women");
    return (
        <>
            {
                loading ? <div>loading</div> : <ProductsList category={"Women"} collection={collection} />
            }

        </>

    );
}

export default WomenCollection;