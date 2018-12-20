import * as React from 'react';
import { connect } from 'react-redux';
import Aux from 'src/components/hocs/Aux';
import { CounterActionTypes, CounterAction } from 'src/store/actions/counter.actions';
import ClickerStateLess from 'src/components/presentational/Clicker_Stateless/ClickerStateless';

interface ComponentProps {
    someProps: string;
}

interface ReduxStateProps {
    counter: number;
}

interface DispatchProps {
    handleDecrement: () => void;
    handleIncrment: () => void;
}

type Props = ComponentProps & DispatchProps & ReduxStateProps;

class ClickerContainer extends React.Component<Props, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Aux>
                <ClickerStateLess counter={this.props.counter} onIncrement ={this.props.handleIncrment} onDecrement = {this.props.handleDecrement} />
            </Aux>
        );
    }

}

const mapReduxStateToComponentProps = (state: any): ReduxStateProps => {
    return {
        counter: state.counterReducer.counter
    };
}

const mapDispatchToComponentProps = (dispatch: React.Dispatch<CounterAction>): DispatchProps => {
    return {
        handleDecrement: () => dispatch({ type: CounterActionTypes.COUNTER_DECREASE, decreaseValue: 5}),
        handleIncrment: () => dispatch({ type: CounterActionTypes.COUNTER_INCREAS })
    }
}

export default connect<ReduxStateProps, DispatchProps, ComponentProps>(mapReduxStateToComponentProps, mapDispatchToComponentProps)(ClickerContainer);