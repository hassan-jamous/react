import { LoginRequest } from '../../logic/domains/loginRequest.domain';

export function tryLogin(loginRequest: LoginRequest): boolean {
  if (loginRequest.uName === 'asdf') {
    return true;
  } else {
    return false;
  }
}