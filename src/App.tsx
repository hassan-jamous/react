import * as React from 'react';
import Routing from 'components/presentational/Routing/Routing';
import { history } from 'index';

class App extends React.Component {
  public render() {
    return (
      <Routing history={history} />
    );
  }
}

export default App;
