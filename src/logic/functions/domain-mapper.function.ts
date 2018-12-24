import { UserTryLoginAction } from "src/store/actions/user.actions";
import { LoginRequest } from '../domains/loginRequest.domain';

export function mapActionToDomain(action: UserTryLoginAction): LoginRequest {
    return { uName: action.userName, pWord: action.password };
}