import '../ComponentsStyles/CategoryCard.css';

const CategoryCard = ({ category, categoryBgImage }) => {
    return (

        <div className='wrap'>
            <img src={categoryBgImage} alt="bg-category" />
            <div className="category-card">
                <h1>{category}</h1>
            </div>
        </div>

    );
}

export default CategoryCard;