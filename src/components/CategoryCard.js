import '../ComponentsStyles/CategoryCard.css';

const CategoryCard = ({ category, categoryBgImage }) => {
    return (
        <div className="category-card">
            <h1>{category}</h1>
        </div>
    );
}

export default CategoryCard;