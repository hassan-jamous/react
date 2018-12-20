import * as React from 'react';
import { UserAction, UserActionTypes } from 'src/store/actions/user.actions';
import { connect } from 'react-redux';
import Login from 'src/components/presentational/Login_Stateful/Login';

interface DispatchProps {
  handleLogin: (userName: string, password: string) => void;
}

interface ReduxStateProps {
  isLoginError: boolean;
}

type Props = DispatchProps & ReduxStateProps;

class LoginContainer extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <Login onClickHandler={this.props.handleLogin} loginError={this.props.isLoginError}/>
      </div >
    );
  }
}

const mapReduxStateToComponentProps = (state: any): ReduxStateProps => {
  return {
      isLoginError: state.userReducer.isLogInError
  };
}

const mapDispatchToComponentProps = (dispatch: React.Dispatch<UserAction>): DispatchProps => {
  return {
    handleLogin: (uName: string, pass: string) => dispatch({ type: UserActionTypes.USER_TRY_LOGIN, userName: uName, password: pass}),
  }
}

export default connect<ReduxStateProps, DispatchProps>(mapReduxStateToComponentProps, mapDispatchToComponentProps)(LoginContainer);