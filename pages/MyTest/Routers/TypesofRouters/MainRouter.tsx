import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const User = () => {
    return <div>This is the user page</div>;
};

const Home = () => {
    return <div>This is the home page</div>;
};

//export default function App() {
const MainRouter= ()=>{
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/user/:id">User</Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/user/:id">
                        <User />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default MainRouter