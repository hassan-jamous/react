import { Action } from 'redux';

export const enum UserActionTypes {
  USER_TRY_LOGIN = '@@user/TRY_LOGIN',
  USER_LOGIN_SUCCESS = '@@user/LOGIN_SUCCESS',
  USER_LOGIN_ERROR = '@@user/LOGIN_ERROR'
}


export interface UserTryLoginAction extends Action {
  readonly type: UserActionTypes.USER_TRY_LOGIN;
  userName: string;
  password: string;
}

export interface UserLoginSuccessAction extends Action {
  readonly type: UserActionTypes.USER_LOGIN_SUCCESS;
  userName: string;
}

export interface UserLoginErrorAction extends Action {
  readonly type: UserActionTypes.USER_LOGIN_ERROR;
}

export type UserAction = UserTryLoginAction | UserLoginSuccessAction | UserLoginErrorAction;

export function createUserTryLoginAction(userName: string, password: string): UserTryLoginAction {
  return { type: UserActionTypes.USER_TRY_LOGIN, userName, password }
}
