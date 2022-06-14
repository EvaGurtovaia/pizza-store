import { useState, useEffect } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaItem from "./components/PizzaItem";
import Skeleton from "./components/Skeleton";
import "./scss/app.scss";
import React from "react";

const App = (props) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://62aa13613b3143855441902b.mockapi.io/items`)
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, []);
    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
