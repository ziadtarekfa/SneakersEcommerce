
import BrandCard from '../components/BrandCard';
import CategoryCard from '../components/CategoryCard';
import bgCategory from '../assets/Headers/collections-header.jpg';
import { nike, adidas, puma, reebok, vans, jordan } from './index';

import '../pagesStyles/Brands.css';

const Collections = () => {
    const brands = ['NIKE', 'ADIDAS', 'PUMA', 'REEBOK', 'VANS', 'JORDAN'];
    const logos = [nike, adidas, puma, reebok, vans, jordan];
    return (
        <main>
            <CategoryCard category="Collections" categoryBgImage={bgCategory} />
            <div className='brands-grid'>
                {
                    Array(6).fill(1).map((el, i) =>
                        <BrandCard brandLogo={logos[i]} brandName={brands[i]} key={brands[i]} />
                    )
                }
            </div>
        </main>
    );
}

export default Collections;