import Header from "./components/Header";
import Home from "./pages/Home";
import "./scss/app.scss";
import React from "react";

const App = (props) => {
    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <Home />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
