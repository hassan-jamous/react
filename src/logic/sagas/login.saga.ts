import { takeLatest, call, put } from "redux-saga/effects";
import { UserActionTypes, UserTryLoginAction } from 'src/store/actions/user.actions';
import { tryLogin } from '../components/login.component';
import { LoginRequest } from '../domains/loginRequest.domain';

export function* loginSaga() {
  yield takeLatest(UserActionTypes.USER_TRY_LOGIN, loginService);
}

function* loginService(action: UserTryLoginAction) {
  const loginRequest: LoginRequest = mapActionToDomain(action);
  yield call(tryLogin, loginRequest);
  yield put({ type: UserActionTypes.USER_LOGIN_ERROR });
}

function mapActionToDomain(action: UserTryLoginAction): LoginRequest {
  return { uName: action.userName, pWord: action.password };
}