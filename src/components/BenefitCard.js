import '../ComponentsStyles/BenefitCard.css';

const BenefitCard = ({ image, heading, paragraph }) => {

    return (
        <div className="BenefitCard">
            <div className='benefit-image-container'>
                <img src={image} alt="icon" />
            </div>
            <h3>{heading}</h3>
            <p>
                {paragraph}
            </p>
        </div>
    );
}

export default BenefitCard;