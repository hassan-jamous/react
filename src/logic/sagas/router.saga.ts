import { takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from 'store/actions/user.actions';
import { push } from 'connected-react-router'

export function* routerSaga() {
    yield takeLatest(UserActionTypes.USER_LOGIN_SUCCESS, routingFunction);
}

function* routingFunction() {
    yield put(push('/clicker'))
}