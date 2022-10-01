
import heroSneaker from '../assets/images/hero-sneaker.png';
import BenefitCard from '../components/BenefitCard';
import ProductCard from '../components/ProductCard';

import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, query, limitToFirst } from "firebase/database";

import { truck, handHoldingDollar, star } from './index'
import '../pagesStyles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const benefitsParagraphs = [
        "Get your shoes as quickly as possible. Keep track to your deliveries and enjoy our fast shippping right at your door step.",
        "The sneakers available are just within the reach of your pocket. No hidden cost. No addtional fee required other than what’s stated.",
        "From your favorite brand to the latest trends, we sell sneakers only of the finest and durable materials you’d ever find."
    ];


    useEffect(() => {
        getCollection();
    }, []);

    const [collection, setCollection] = useState([]);

    function getCollection() {
        const database = getDatabase();
        const arr = [];
        const firstFourProducts = query(ref(database, 'products/'), limitToFirst(4));

        onValue(firstFourProducts, (snapshot) => {

            snapshot.forEach((childSnapshot) => {
                arr.push(childSnapshot);
            });

            setCollection(arr);
        });
    }

    return (
        <main>
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
                    <BenefitCard image={truck} alternateText="truck icon" heading="Fast Delivery" paragraph={benefitsParagraphs[0]} />
                    <BenefitCard image={handHoldingDollar} alternateText="hand holding dollar icon" heading="Affordable Goods" paragraph={benefitsParagraphs[1]} />
                    <BenefitCard image={star} alternateText="star icon" heading="Best Quality" paragraph={benefitsParagraphs[2]} />
                </div>
            </div>

            <section className="products-section">
                <h1>Products</h1>
                <div className="products-content">
                    {
                        collection.map((product) => {

                            return (
                                <ProductCard product={product.val()} id={product.key} key={product.key} />
                            );
                        })
                        // loading ? <div>Loading</div> : <ProductsList collection={collection} />
                    }
                </div>

                <Link to='/products'>
                    <button>Explore More</button>
                </Link>


            </section>

        </main>
    );
}

export default Home;