import * as React from 'react';
import ClickerStateful from './components/presentational/stateful/Clicker/ClickerStateful';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './App.route';
import MainLayout from './components/layouts/Main/Main';
import LoginConteainer from './components/containers/Login/LoginConteainer';
import AnotherLayout from './components/layouts/Another/Another';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <AppRoute path="/" exact={true} layout={MainLayout} component={LoginConteainer} />
          <AppRoute path="/clicker" layout={AnotherLayout} component={ClickerStateful} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
