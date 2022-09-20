import '../ComponentsStyles/BenefitCard.css';

const BenefitCard = ({ image, alternateText, heading, paragraph }) => {

    return (
        <div className="BenefitCard">
            <div className='image-container'>
                <img src={image} alt={alternateText} />
            </div>
            <h1>{heading}</h1>
            <p>
                {paragraph}
            </p>
        </div>
    );
}

export default BenefitCard;