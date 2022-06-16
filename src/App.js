import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./scss/app.scss";

import NotFound from "./pages/NotFound";

const App = (props) => {
    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route part="/cart" element={<Cart />}/>
                            <Route path="*" element={<NotFound />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
