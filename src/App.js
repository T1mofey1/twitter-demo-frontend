/* @flow */
import React from 'react';
import 'flexboxgrid2';
import 'normalize.css';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import links from './links';
import Header from './Header';
import ProfilePage from './Profile';

export default function () {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/media" component={links} />
          <Route exact path="/moments" component={links} />
          <Route exact path="/messages" component={links} />
          <Route exact path="/notifications" component={links} />
          <Route exact path="/view_all" component={links} />
          <Route exact path="/change" component={links} />
          <Route exact path="/all_people" component={links} />
          <Route exact path="/about" component={links} />
          <Route exact path="/support" component={links} />
          <Route exact path="/terms" component={links} />
          <Route exact path="/privacy_policy" component={links} />
          <Route exact path="/cookies" component={links} />
          <Route exact path="/ads" component={links} />
          <Route exact path="/search" component={links} />
          <Route path="/:id" component={ProfilePage} />
          <Redirect from="/" to="/1" />
        </Switch>
      </div>
    </Router>
  );
}
