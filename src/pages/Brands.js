
import BrandCard from '../components/BrandCard';
import CategoryCard from '../components/CategoryCard';
import bgCategory from '../assets/Headers/collections-header.jpg';
import { nike, adidas, puma, reebok, vans, jordan } from './index';

import '../pagesStyles/Brands.css';

const Collections = () => {
    return (
        <main>
            <CategoryCard category="Collections" categoryBgImage={bgCategory} />
            <div className='brands-grid'>
                <BrandCard brandLogo={nike} brandName="NIKE" />
                <BrandCard brandLogo={adidas} brandName="ADIDAS" />
                <BrandCard brandLogo={puma} brandName="PUMA" />
                <BrandCard brandLogo={reebok} brandName="REEBOK" />
                <BrandCard brandLogo={vans} brandName="VANS" />
                <BrandCard brandLogo={jordan} brandName="JORDAN" />
            </div>
        </main>
    );
}

export default Collections;