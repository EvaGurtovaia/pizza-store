import "../scss/app.scss";

const Categories = () => {
    return (
        <div className="categories">
            <ul>
                <li className="active">All pizzas</li>
                <li>Meat</li>
                <li>Veggie</li>
                <li>Seafood</li>
                <li>Spicy</li>
                <li>Stuffed</li>
            </ul>
        </div>
    );
};

export default Categories;