import * as React from 'react';
import Login from 'src/components/presentational/stateful/Login/Login';
import { UserAction, UserActionTypes } from 'src/store/actions/user.actions';
import { connect } from 'react-redux';


interface DispatchProps {
  handleLogin: (userName: string, password: string) => void;
}

type Props = DispatchProps;

class LoginContainer extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <Login onClickHandler={this.props.handleLogin} />
      </div >
    );
  }
}

const mapDispatchToComponentProps = (dispatch: React.Dispatch<UserAction>): DispatchProps => {
  return {
    handleLogin: (uName: string, pass: string) => dispatch({ type: UserActionTypes.USER_TRY_LOGIN, userName: uName, password: pass}),
  }
}

export default connect<DispatchProps>(null, mapDispatchToComponentProps)(LoginContainer);