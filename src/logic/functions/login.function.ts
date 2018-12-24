import { LoginRequest } from '../domains/loginRequest.domain';

export function tryLogin(loginRequest: LoginRequest): boolean {
  alert(loginRequest.uName + "   " + loginRequest.pWord);
  if (loginRequest.uName === 'asdf') {
    return true;
  } else {
    return false;
  }
}