import React from 'react';
import { Route, Switch } from "react-router";

import AuthForm from './core/AuthForm';
import { Main } from './core/Main';
import { Routes } from './route.constants';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={Routes.login} component={AuthForm} />
        <Route path={Routes.main} component={Main} />
      </Switch>
    </div>
  );
}

export default App;
