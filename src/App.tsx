import * as React from 'react';
import { history } from 'src';
import Routing from './components/presentational/Routing/Routing';

class App extends React.Component {
  public render() {
    return (
      <Routing history={history} />
    );
  }
}

export default App;
