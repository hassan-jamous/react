import * as React from 'react';
import { connect } from 'react-redux';
import { CounterAction, createCounterDecreaseAction, createCounterIncreaseAction } from '../../../store/actions/counter.actions';
import ClickerStateLess from '../../presentational/Clicker_Stateless/ClickerStateless';
import Aux from '../../hocs/Aux';

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
        handleDecrement: () => dispatch(createCounterDecreaseAction(5)),
        handleIncrment: () => dispatch(createCounterIncreaseAction())
    }
}

export default connect<ReduxStateProps, DispatchProps, ComponentProps>(mapReduxStateToComponentProps, mapDispatchToComponentProps)(ClickerContainer);