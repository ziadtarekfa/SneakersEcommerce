import '../ComponentsStyles/BrandCard.css';

const BrandCard = ({ brandLogo, brandName }) => {
    return (
        <div className="brand-card">
            <img src={brandLogo} alt={brandName} />
            <div className='try'></div>
        </div>
    );
}

export default BrandCard;