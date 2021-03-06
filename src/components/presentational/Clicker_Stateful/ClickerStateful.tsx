import * as React from 'react';
import Aux from '../../../components/hocs/Aux';
import { ClickerElements } from './ClickerElements';

interface State {
    counter: number;
}

const initialState: State = { counter: 0 };

class ClickerStateful extends React.Component<{}, State> {
    private readonly identifiers = ClickerElements;

    constructor(props: {}) {
        super(props);
        this.state = initialState;
    }

    public render() {
        return (
            <Aux>
                <div id={this.identifiers.clickerTextId}>
                    this is stateful counter with react state, counter value is {this.state.counter}
                    <button onClick={this.incrementHandler}> increment </button>
                    <button onClick={this.decrementHandler}> decrement </button>
                </div>
                
            </Aux>
        );
    }

    private incrementHandler = () => {
        this.setState({counter: this.state.counter + 1})
    }
    private decrementHandler = () => {
        this.setState({counter: this.state.counter - 1})
    }
}

export default ClickerStateful;