import { UserTryLoginAction } from "../../store/actions/user.actions";
import { LoginRequest } from '../../logic/domains/loginRequest.domain';

export function mapActionToDomain(action: UserTryLoginAction): LoginRequest {
    return { uName: action.userName, pWord: action.password };
}