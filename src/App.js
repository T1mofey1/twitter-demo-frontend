import React from 'react';
import 'flexboxgrid2';
import 'normalize.css';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import ProfilePage from './Profile';

export default function () {
  return (
    <Router>
      <div className="App">
        <Helmet title="EveryInteract (@EveryInteract) | Twitter" />
        <Header />
        <Redirect from="/" to="/EveryInteract" />

        <Route path="/EveryInteract" component={ProfilePage} />
      </div>
    </Router>
  );
}
