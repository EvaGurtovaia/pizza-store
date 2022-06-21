import { useState } from "react";
import "../scss/app.scss";

const Categories = ({ value, onClickCategory}) => {
    const [activeCategory, setActiveCategory] = useState(0);
    //const onClickCategory = (idx) => {
     //   setActiveCategory(idx);
    //};

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
                {listOfCategories.map((categoryName, idx) => (
                    <li
                        onClick={() => onClickCategory(idx)}
                        className={value === idx ? "active" : " "}
                        key={idx}
                    >
                        {categoryName}
                    </li>
                ))}
                ;
            </ul>
        </div>
    );
};

export default Categories;
