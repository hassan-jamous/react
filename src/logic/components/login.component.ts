import { LoginRequest } from '../domains/loginRequest.domain';

// add response validation
// make it class
// use axios

export function tryLogin(loginRequest: LoginRequest) {
  alert(loginRequest.pWord + "   " + loginRequest.pWord);
}