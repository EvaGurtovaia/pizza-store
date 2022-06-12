import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaItem from "./components/PizzaItem";
import pizzas from "./Data/pizzas.json";
import "./scss/app.scss";

const App = (props) => {
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
                                {pizzas.map((pizza) => (
                                    <PizzaItem
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
