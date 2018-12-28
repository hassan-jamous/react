import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import ClickerContainer from 'components/containers/Clicker/ClickerContainer';
import ClickerStateful from '../Clicker_Stateful/ClickerStateful';
import AnotherLayout from 'components/layouts/Another/Another';
import { History } from 'history';
import LoginConteainer from 'components/containers/Login/LoginConteainer';
import MainLayout from 'components/layouts/Main/Main';

interface Props {
  history: History;
}

const Routing: React.FunctionComponent<Props> = (props: Props) => (
  <ConnectedRouter history={props.history}>
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

export default Routing;