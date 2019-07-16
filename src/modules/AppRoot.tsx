import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import { store, history } from './state-mgmt/store';

const Login = lazy(() => import('./views/login'));
const TodoList = lazy(() => import('./views/todo-list'));
const TodoItem = lazy(() => import('./views/todo-item'));

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact={true} path="/" render={() => <Suspense fallback={<p>loading</p>}><Login /></Suspense>} />
            <Route exact={true} path="/todo-list" render={() => <Suspense fallback={<p>loading</p>}><TodoList /></Suspense>} />
            <Route
              exact={true}
              path="/todo-item/:todoId"
              render={props => (<Suspense fallback={<p>loading</p>}>
                  <TodoItem todoId={props.match.params.todoId} />
                </Suspense>
              )}
            />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
