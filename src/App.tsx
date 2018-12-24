import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import AnotherLayout from './components/layouts/Another/Another';
import MainLayout from './components/layouts/Main/Main';
import ClickerContainer from './components/containers/Clicker/ClickerContainer';
import LoginConteainer from './components/containers/Login/LoginConteainer';
import ClickerStateful from './components/presentational/Clicker_Stateful/ClickerStateful';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'src';

class App extends React.Component {
  public render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact={true} render={() => {
            const login = <LoginConteainer />
            return <MainLayout mainComponent={login} />
          }} />
          <Route path="/clicker" render={() => {
            const mc = <ClickerContainer someProps="asdf" />;
            const ac = <ClickerStateful />;
            return <AnotherLayout mainComponent={mc} anotherComponent={ac} />
          }} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;
