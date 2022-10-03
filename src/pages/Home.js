
import heroSneaker from '../assets/images/hero-sneaker.png';
import BenefitCard from '../components/BenefitCard';
import ProductCard from '../components/ProductCard';
import { truck, handHoldingDollar, star } from './index'

import { getDatabase, ref, query, limitToFirst } from "firebase/database";

import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import useCollectionFetcher from '../entities/useCollectionFetcher';

import '../pagesStyles/Home.css';


const Home = () => {


    const benefitsParagraphs = [
        "Get your shoes as quickly as possible. Keep track to your deliveries and enjoy our fast shippping right at your door step.",
        "The sneakers available are just within the reach of your pocket. No hidden cost. No addtional fee required other than what’s stated.",
        "From your favorite brand to the latest trends, we sell sneakers only of the finest and durable materials you’d ever find."
    ];
    const myQuery = query(ref(getDatabase(), 'products/'), limitToFirst(4));


    const { collection, loading } = useCollectionFetcher(null, myQuery);


    return (
        <main className='home'>
            <div className="intro-container">
                <section className="intro-content-container">
                    <h1>Discover Your Dream Sneakers</h1>
                    <p>With a wide range of quality and affordable sneakers to choose from, browse through our collections for that sneakers you’ve always wanted.</p>
                    <Link to='/products'>
                        <button className='default-button'>Explore Products</button>
                    </Link>
                </section>
                <section className="hero-sneaker-container">
                    <img src={heroSneaker} alt="heroSneaker" />
                </section>
            </div>

            <div className="benefits-container">
                <div className="benefits-heading">
                    <hr />
                    <h2>Benefits</h2>
                </div>
                <div className="benefits-content">
                    <BenefitCard image={truck} heading="Fast Delivery" paragraph={benefitsParagraphs[0]} />
                    <BenefitCard image={handHoldingDollar} heading="Affordable Goods" paragraph={benefitsParagraphs[1]} />
                    <BenefitCard image={star} heading="Best Quality" paragraph={benefitsParagraphs[2]} />
                </div>
            </div>

            <section className="products-section">
                <h1>Products</h1>
                <div className="products-content">
                    {
                        loading ? <Loading />
                            :
                            collection.map((product) => {

                                return (
                                    <ProductCard product={product.val()} id={product.key} key={product.key} />
                                );
                            })
                    }
                </div>

                <div className='btn-bottom-container'>
                    <Link to='/products'>
                        <button>Explore More</button>
                    </Link>
                </div>

            </section>

        </main>
    );
}

export default Home;