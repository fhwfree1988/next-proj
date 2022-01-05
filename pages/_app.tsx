import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom";
import HomePage from "./MyTest/Components/HomePage";
import React from "react";

const User = () => {
    return <div>This is the user page</div>;
};

const Home = () => {
    return <div>This is the home page</div>;
};
function MyApp({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  return (
      <Router>
          {/*<AllTogether/>*/}
          {/*<ComponentdidUBP foo={2}></ComponentdidUBP>*/}
          {/*<MainRouter/>*/}
          {/*<Routes>*/}
          {/*    <Route path="/"  children={<HomePage />}/>*/}
          {/*</Routes>*/}
          {/*<Routes>*/}
          {/*    <Route path={"/"} element={<HomePage />}></Route>*/}
          {/*</Routes>*/}
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
      </Router>

  )

}

export default MyApp
