import '../ComponentsStyles/BrandCard.css';

const BrandCard = ({ brandLogo, brandName }) => {
    return (

        <>
            {/* <div className='try'>NIKE</div> */}
            <div className="brand-card">
                <img src={brandLogo} alt={brandName} />

            </div>

        </>



    );
}

export default BrandCard;