import '../styles/CategoryCard.css';

const CategoryCard = ({ headerImage, category }) => {
    return (
        <div className="category-card">
            <h1>{category}</h1>
        </div>
    );
}

export default CategoryCard;