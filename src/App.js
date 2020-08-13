import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import User from "./User";
import Search from "./Search";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const Name = () => {
    return <h1 className="mt-5">Welcome Sam</h1>;
  };
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/about" component={() => <About name="Sameer" />} />
        <Route
          exact
          path="/contact"
          component={() => <Contact name="Sameer" />}
        />
        <Route
          path="/User/:fname/:lname"
          component={() => <User greet="Hey, " />}
        />
        <Route exact path="/" component={Name} />
        <Route exact path="/search" component={Search} />
        <Route component={Error} />
        {/* <Redirect to="/" /> */}
      </Switch>
      {/* <About />
      <Contact /> */}
    </div>
  );
}

export default App;
