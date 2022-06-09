import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaItem from "./components/PizzaItem";
import "./scss/app.scss";

const App = (props) => {
    return (
        <div>
            <div class="wrapper">
                <Header />
                <div class="content">
                    <div class="container">
                        <div class="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <div>
                            <h2 class="content__title">All pizzas</h2>
                            <div class="content__items">
                                <PizzaItem
                                    title="Cheeseburger pizza"
                                    price="21.99"
                                />
                                <PizzaItem
                                    title="Four Cheese Pizza"
                                    price="25.99"
                                />
                                <PizzaItem
                                    title="Pepperoni Pizza"
                                    price="24.99"
                                />
                                <PizzaItem
                                    title="Sausage Pizza"
                                    price="24.99"
                                />
                                <PizzaItem
                                    title="Corn and Jalapenos Pizza"
                                    price="23.99"
                                />
                                <PizzaItem
                                    title="Mushrooms Pizza"
                                    price="21.99"
                                />
                                <PizzaItem title="White Pizza" price="24.99" />
                                <PizzaItem
                                    title="Chicken Pizza"
                                    price="23.99"
                                />
                                <PizzaItem
                                    title="Veggie Stuffed Pizza"
                                    price="31.99"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
