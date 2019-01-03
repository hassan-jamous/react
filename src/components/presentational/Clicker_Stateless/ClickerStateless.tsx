

import * as React from 'react';
import Aux from '../../../components/hocs/Aux';

interface Props {
    counter: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const ClickerStateLess: React.FunctionComponent<Props> = (props: Props) => (
    <Aux>
        <div>
            This is functional counter, value is {props.counter}
            <button onClick={props.onIncrement}> increment </button>
            <button onClick={props.onDecrement}> decrement </button>
        </div>
    </Aux>
);

export default ClickerStateLess;
