import * as React from 'react';
import ClickerContainer from './components/containers/Clicker/ClickerContainer';
import ClickerStateful from './components/presentational/stateful/Clicker/ClickerStateful';
import LoginContainer from './components/containers/Login/LoginConteainer';

class App extends React.Component {
  public render() {
    return (
      <div>
        <ClickerStateful />
        <ClickerContainer someProps = "anyProps"/>
        <LoginContainer />
      </div >
    );
  }
}

export default App;
