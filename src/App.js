/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
// const url = "https://jsonplaceholder.typicode.com/todos/";

import "./App.css";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { nameTodo } from "./redux/actionCreators";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { HOME, LOGIN, PROFILE } from "./pages/pageType";
import Profile from "./pages/Profile";
import TodoDetail from "./pages/TodoDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
  //
  // let [pageType, setPageType] = useState(LOGIN);
  // const handleChangePageType = (pageType) => {
  //   setPageType(pageType);
  // };
  // const renderApp = () => {
  //   switch (pageType) {
  //     case HOME: {
  //       return <Home handleChangePageType={handleChangePageType}></Home>;
  //     }
  //     case LOGIN: {
  //       return <Login handleChangePageType={handleChangePageType}></Login>;
  //     }
  //     case PROFILE: {
  //       return <Profile handleChangePageType={handleChangePageType}></Profile>;
  //     }
  //     default: {
  //       return <Login handleChangePageType={handleChangePageType}></Login>;
  //     }
  //   }
  // };
  return (
    <div className="App">
      <Router >
        <nav>
          <ul>
            <li>
              <Link to="/">Login </Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/home/:slug">
            <TodoDetail></TodoDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
// export default App;
const mapStateToProps = (state) => {
  console.log("APP.js State", state.todos);
  return { Name: state.todos };
};
const mapDispatchToProps = { nameTodo };
export default connect(mapStateToProps, mapDispatchToProps)(App);

//
