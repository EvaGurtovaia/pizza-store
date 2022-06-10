import { useState } from "react";
import "../scss/app.scss";

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const onClickCategory = (idx) => {
        setActiveCategory(idx);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onClickCategory(0)}
                    className={activeCategory === 0 ? "active" : " "}
                >
                    All pizzas
                </li>
                <li
                    onClick={() => onClickCategory(1)}
                    className={activeCategory === 1 ? "active" : " "}
                >
                    Meat
                </li>
                <li
                    onClick={() => onClickCategory(2)}
                    className={activeCategory === 2 ? "active" : " "}
                >
                    Veggie
                </li>
                <li
                    onClick={() => onClickCategory(3)}
                    className={activeCategory === 3 ? "active" : " "}
                >
                    Seafood
                </li>
                <li
                    onClick={() => onClickCategory(4)}
                    className={activeCategory === 4 ? "active" : " "}
                >
                    Spicy
                </li>
                <li
                    onClick={() => onClickCategory(5)}
                    className={activeCategory === 5 ? "active" : " "}
                >
                    Stuffed
                </li>
            </ul>
        </div>
    );
};

export default Categories;
