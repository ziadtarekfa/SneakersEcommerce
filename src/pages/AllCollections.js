import ProductsList from './ProductsList';
import useCollectionFetcher from "../entities/UseCollectionFetcher";

import { Fragment } from 'react';


const AllCollections = () => {

    const { collection, loading } = useCollectionFetcher();

    return (

        <Fragment>
            {
                loading ? <div>Loading</div> : <ProductsList category={"Products"} collection={collection} />

            }
        </Fragment>

    );
}

export default AllCollections;