import '../ComponentsStyles/BenefitCard.css';

const BenefitCard = ({ image, alternateText, heading, paragraph }) => {

    return (
        <div className="BenefitCard">
            <div className='benefit-image-container'>
                <img src={image} alt={alternateText} />
            </div>
            <h3>{heading}</h3>
            <p>
                {paragraph}
            </p>
        </div>
    );
}

export default BenefitCard;