import useCollectionFetcher from "../entities/UseCollectionFetcher";
import ProductsList from './ProductsList';



const MenCollection = () => {

    const { collection, loading } = useCollectionFetcher("men");

    return (
        <>
            {
                loading ? <div>loading</div> : <ProductsList category={"Men"} collection={collection} />
            }

        </>

    );
}

export default MenCollection;