import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import { Home } from '../Home/Home';
import { Repository } from '../Repository/Repository';
import { RepositoryIssueDetail  } from '../Repository/RepositoryIssueDetail';

import './App.scss';

export const App: React.SFC<object> = (props) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/repo/:owner/:name"
          component={Repository}
        />
        <Route
          path="/issue/:owner/:name/number/:number"
          component={RepositoryIssueDetail}
        />
      </Switch>
    </BrowserRouter>
  );
}

App.displayName = 'App';
