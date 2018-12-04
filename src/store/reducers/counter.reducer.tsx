import { CounterState } from '../App.state';
import { Reducer } from 'redux'
import { CounterAction, CounterActionTypes } from '../actions/counter.actions';
const initialState: CounterState = {
    counter: 5
};

const reducer: Reducer<CounterState> = (state: CounterState = initialState, action: CounterAction): CounterState => {
    switch (action.type) {
        case CounterActionTypes.COUNTER_INCREAS: {
            return { ...state, counter: state.counter + 1}
        }
        case CounterActionTypes.COUNTER_DECREASE: {
            return { ...state, counter: state.counter - 1 }
        }
        default: {
            return state
        }
    }
}

export { reducer as counterReducer }