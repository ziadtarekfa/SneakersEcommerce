import '../ComponentsStyles/CategoryCard.css';

const CategoryCard = ({ category }) => {
    return (
        <div className="category-card">
            <h1>{category}</h1>
        </div>
    );
}

export default CategoryCard;