import '../ComponentsStyles/BrandCard.css';
// import addidas from '../assets/collections/adidas-logo.svg';

const BrandCard = ({ brandLogo, brandName }) => {
    return (
        <div className="brand-card">
            <img src={brandLogo} alt={brandName} />
        </div>
    );
}

export default BrandCard;