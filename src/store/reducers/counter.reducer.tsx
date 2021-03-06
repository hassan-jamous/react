import { Reducer } from 'redux'
import { CounterAction, CounterActionTypes } from '../actions/counter.actions';
import { CounterState } from '../../store/App.state';
const initialState: CounterState = {
    counter: 5
};

const reducer: Reducer<CounterState> = (state: CounterState = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case CounterActionTypes.COUNTER_INCREAS: {
            return { ...state, counter: state.counter + 1}
        }
        case CounterActionTypes.COUNTER_DECREASE: {
            return { ...state, counter: state.counter - action.decreaseValue}
        }
        default: {
            return state
        }
    }
}

export { reducer as counterReducer }