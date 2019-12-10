import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { HomePage, FilmDetailsPage } from './pages';
import { Routes } from './services';
import { ErrorBoundary } from './components';

export class Router extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <Route path={Routes.home} component={FilmDetailsPage} exact />
          <Route path={Routes.filmDetail} component={FilmDetailsPage} exact />
          <Route path={Routes.error} component={HomePage} exact />
        </Switch>
      </ErrorBoundary>
    );
  }
}
