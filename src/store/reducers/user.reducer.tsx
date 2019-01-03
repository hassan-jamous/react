import { Reducer } from 'redux'
import { UserAction, UserActionTypes } from '../actions/user.actions';
import { UserState } from '../../store/App.state';
const initialState: UserState = {
    isLoading: false,
    isLogInError: false,
    isLoggedIn: false,
    userName: ''
};

const reducer: Reducer<UserState> = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.USER_TRY_LOGIN: {
            return { ...state, isLoading: true }
        }
        case UserActionTypes.USER_LOGIN_SUCCESS: {
            return { ...state, isLoading: false, isLoggedIn: true, userName: action.userName }
        }
        case UserActionTypes.USER_LOGIN_ERROR: {
            return { ...state, isLoading: false, isLogInError: true, isLoggedIn: false, userName: '' }
        }
        default: {
            return state
        }
    }
}

export { reducer as userReducer }