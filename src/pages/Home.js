import React from "react";
import { useState, useEffect } from "react";
import { omitBy, isNull } from "lodash";
import { SearchContext } from "../App";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import PizzaItem from "../components/PizzaItem";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";

const Home = () => {
    const { searchValue } = React.useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortType, setSortType] = useState({
        name: "most popular",
        sortProperty: "rating",
    });
    const [categoryId, setCategoryId] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        const params = new URLSearchParams(
            omitBy(
                {
                    order: sortType.sortProperty.includes("-") ? "asc" : "desc",
                    sortBy: sortType.sortProperty.replace("-", ""),
                    category: categoryId > 0 ? categoryId : null,
                    search: searchValue ? searchValue : null,
                },
                isNull
            )
        );

        fetch(
            `https://62aa13613b3143855441902b.mockapi.io/items?${params.toString()}`
        )
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue]);

    const skeleton = [...new Array(6)].map((_, idx) => <Skeleton key={idx} />);

    const pizzas = items
        //.filter((pizza) => {
        //  if (pizza.title.toLowerCase().includes(searchValue.toLowerCase())) {
        //      return true;
        // }
        // return false;
        //  })
        .map((pizza) => (
            <PizzaItem
                key={pizza.key}
                title={pizza.title}
                price={pizza.price}
                image={pizza.imageUrl}
                sizes={pizza.sizes}
                types={pizza.types}
            />
        ));

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
                    {isLoading ? skeleton : pizzas}
                </div>
                <Pagination />
            </div>
        </>
    );
};

export default Home;
