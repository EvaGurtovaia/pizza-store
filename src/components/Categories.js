import { useState } from "react";
import "../scss/app.scss";

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const onClickCategory = (idx) => {
        setActiveCategory(idx);
    };

    const listOfCategories = [
        "All Pizzas",
        "Meat",
        "Veggie",
        "Seafood",
        "Spicy",
        "Gluten Free",
    ];

    return (
        <div className="categories">
            <ul>
                {listOfCategories.map((category, idx) => (
                    <li
                        onClick={() => onClickCategory(idx)}
                        className={activeCategory === idx ? "active" : " "}
                    >
                        {category}
                    </li>
                ))}
                ;
            </ul>
        </div>
    );
};

export default Categories;
