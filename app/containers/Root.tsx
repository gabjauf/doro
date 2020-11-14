import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Link } from 'react-router-dom';
import { Store } from '../store';
import styles from './Root.css';
import Routes from '../Routes';
import routes from '../constants/routes.json';

type Props = {
  store: Store;
  history: History;
};

const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Link to={routes.HOME} className={styles.menuItem}>
        <i className="fas fa-home" />
        Home
      </Link>
      <Link to={routes.KANBAN} className={styles.menuItem}>
        <i className="fab fa-trello" />
        Kanban
      </Link>
      <Link to={routes.TIMER} className={styles.menuItem}>
        <i className="far fa-clock" />
        Timer
      </Link>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default hot(Root);
