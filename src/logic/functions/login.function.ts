import { LoginRequest } from '../domains/loginRequest.domain';

export function tryLogin(loginRequest: LoginRequest) {
  alert(loginRequest.pWord + "   " + loginRequest.pWord);
}