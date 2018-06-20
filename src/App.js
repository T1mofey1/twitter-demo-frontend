import React, { Component } from "react";
import "flexboxgrid2";
import "normalize.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ProfilePage from "./Profile/ProfilePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Redirect from="/" to="/EveryInteract" />

          <Route path="/EveryInteract" component={ProfilePage} />
        </div>
      </Router>
    );
  }
}

export default App;
