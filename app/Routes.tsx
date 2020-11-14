/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import KanbanPage from './containers/KanbanPage';
import TimerPage from './containers/TimerPage';

// Lazily load routes and code split with webpack
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ './containers/KanbanPage')
);

const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.KANBAN} component={KanbanPage} />
        <Route path={routes.TIMER} component={TimerPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
