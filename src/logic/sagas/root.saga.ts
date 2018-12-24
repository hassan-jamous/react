import { loginSaga } from './login.saga';
import { routerSaga } from './router.saga';
import { all } from 'redux-saga/effects'


export default function* rootSaga() {
    yield all([
        loginSaga(),
        routerSaga()
    ])
}