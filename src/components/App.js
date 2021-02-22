import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

import Footer from "./Footer";
class App extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(/doge-background.jpg)",
        }}
      >
        <div className="ui container">
          <div
            className="ui raised segment"
            style={{ backgroundImage: "url(pink-background.jpg)" }}
          >
            <Router history={history}>
              <Header />
              <div className="ui divider" />
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
              </Switch>
            </Router>
          </div>

          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
