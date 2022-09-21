import Footer from '../components/Footer';
import Header from '../components/Header';
import BrandCard from '../components/BrandCard';
import CategoryCard from '../components/CategoryCard';

import nike from '../assets/collections/nike-logo.svg';
import adidas from '../assets/collections/adidas-logo.svg';
import puma from '../assets/collections/puma-logo.svg';
import reebok from '../assets/collections/reebok-logo.svg';
import vans from '../assets/collections/vans-logo.svg';
import jordan from '../assets/collections/jordan-logo.svg';

import '../pagesStyles/Collections.css';

const Collections = () => {
    return (
        <div className='collections'>
            <Header />
            <CategoryCard category="Collections" />
            <div className='collections-grid'>
                <BrandCard brandLogo={nike} brandName="NIKE" />
                <BrandCard brandLogo={adidas} brandName="ADIDAS" />
                <BrandCard brandLogo={puma} brandName="PUMA" />
                <BrandCard brandLogo={reebok} brandName="REEBOK" />
                <BrandCard brandLogo={vans} brandName="VANS" />
                <BrandCard brandLogo={jordan} brandName="JORDAN" />

            </div>
            <Footer />
        </div>
    );
}

export default Collections;