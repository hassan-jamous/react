import * as React from 'react';
import Login from './components/presentational/stateful/Login/Login';
import ClickerContainer from './components/containers/Clicker/ClickerContainer';
import ClickerStateful from './components/presentational/stateful/Clicker/ClickerStateful';

class App extends React.Component {
  public render() {
    return (
      <div>
        <ClickerStateful />
        <ClickerContainer someProps = "anyProps"/>
        <Login onClickHandler = {this.test} />
      </div >
    );
  }

  private test = (userName: string, password: string) => {
    alert(userName + '  ' + password);
  }
}

export default App;
