
import BrandCard from '../components/BrandCard';
import CategoryCard from '../components/CategoryCard';

// import nike from '../assets/collections/nike-logo.svg';
// import adidas from '../assets/collections/adidas-logo.svg';
// import puma from '../assets/collections/puma-logo.svg';
// import reebok from '../assets/collections/reebok-logo.svg';
// import vans from '../assets/collections/vans-logo.svg';
// import jordan from '../assets/collections/jordan-logo.svg';
import { nike, adidas, puma, reebok, vans, jordan } from '../pages/index';

import '../pagesStyles/Collections.css';

const Collections = () => {
    return (
        <div className='collections'>
            <CategoryCard category="Collections" />
            <div className='collections-grid'>
                <BrandCard brandLogo={nike} brandName="NIKE" />
                <BrandCard brandLogo={adidas} brandName="ADIDAS" />
                <BrandCard brandLogo={puma} brandName="PUMA" />
                <BrandCard brandLogo={reebok} brandName="REEBOK" />
                <BrandCard brandLogo={vans} brandName="VANS" />
                <BrandCard brandLogo={jordan} brandName="JORDAN" />

            </div>
        </div>
    );
}

export default Collections;