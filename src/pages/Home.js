import Header from "../components/Header";
import heroSneaker from '../assets/images/hero-sneaker.png';

import '../pagesStyles/Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="intro-container">
                <section className="intro-content-container">
                    <h1>Discover Your Dream Sneakers</h1>
                    <p>With a wide range of quality and affordable sneakers to choose from, browse through our collections for that sneakers you’ve always wanted.</p>
                    <button>Explore Products</button>
                </section>
                <section className="hero-sneaker-container">
                    <img src={heroSneaker} alt="heroSneaker" />
                </section>
            </div>

        </div>
    );
}

export default Home;