import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";

const App = (props) => {
    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue);
    return (
        <div>
            <div className="wrapper">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home searchValue={searchValue} />} />
                            <Route path="cart" element={<Cart />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
