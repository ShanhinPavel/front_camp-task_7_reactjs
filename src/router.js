import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { HomePage } from './pages';
import { Routes } from './services';
import { ErrorBoundary } from './components';

export const Router = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path={Routes.home} component={HomePage} exact />
        <Route path={Routes.error} component={HomePage} exact />
      </Switch>
    </ErrorBoundary>
  );
};
