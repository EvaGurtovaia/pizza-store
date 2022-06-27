import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import PizzaItem from "../components/PizzaItem";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortType, setSortType] = useState({
        name: "most popular",
        sortProperty: "rating",
    });
    const [categoryId, setCategoryId] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
        const sortBy = sortType.sortProperty.replace("-", "");
        const category = categoryId > 0 ? `category=${categoryId}` : " ";
        fetch(
            `https://62aa13613b3143855441902b.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
        )
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType]);
    return (
        <>
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onClickCategory={(idx) => setCategoryId(idx)}
                />
                <Sort
                    value={sortType}
                    onChangeSort={(idx) => setSortType(idx)}
                />
            </div>
            <div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                    {isLoading
                        ? [...new Array(6)].map((_, idx) => (
                              <Skeleton key={idx} />
                          ))
                        : items.map((pizza) => (
                              <PizzaItem
                                  key={pizza.key}
                                  title={pizza.title}
                                  price={pizza.price}
                                  image={pizza.imageUrl}
                                  sizes={pizza.sizes}
                                  types={pizza.types}
                              />
                          ))}
                </div>
            </div>
        </>
    );
};

export default Home;
