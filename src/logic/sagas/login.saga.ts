import { takeLatest, call, put } from "redux-saga/effects";
import { UserActionTypes, UserTryLoginAction } from 'store/actions/user.actions';
import { LoginRequest } from 'logic/domains/loginRequest.domain';
import { mapActionToDomain } from 'logic/functions/domain-mapper.function';
import { tryLogin } from 'logic/functions/login.function';

export function* loginSaga() {
  yield takeLatest(UserActionTypes.USER_TRY_LOGIN, loginService);
}

function* loginService(action: UserTryLoginAction) {
  const loginRequest: LoginRequest = mapActionToDomain(action);
  const isCredentialCorrect: boolean = yield call(tryLogin, loginRequest);
  if (isCredentialCorrect) {
    yield put({ type: UserActionTypes.USER_LOGIN_SUCCESS });
  } else {
    yield put({ type: UserActionTypes.USER_LOGIN_ERROR });
  }
}
