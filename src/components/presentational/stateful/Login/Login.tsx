import * as React from 'react';
import Aux from 'src/components/hocs/Aux';
import { LoginElements } from './LoginElements';

interface State {
    userName: string;
    password: string;
    loginError: boolean;
}

const initialState: State = { userName: "", password: "", loginError: false };

interface Props {
    onClickHandler: (userName: string, password: string) => void;
}

class Login extends React.Component<Props, State> {
    private readonly identifiers = LoginElements;

    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    public render() {
        return (
            <Aux>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" name={this.identifiers.userName} onChange={this.inputTextChangeHandler} />
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name={this.identifiers.password} onChange={this.inputTextChangeHandler} />
                    {this.rednerErrorMessage()}
                    <button onClick={() => {
                        this.props.onClickHandler(this.state.userName, this.state.password);
                    }}>Login</button>
                </div>
            </Aux>
        );
    }

    private rednerErrorMessage() {
        let errorElement = null;
        if (this.state.loginError === true) {
            errorElement = (<div> Error </div>);
        }
        return errorElement;
    }

    private inputTextChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === this.identifiers.userName) {
            this.setState({ ...this.state, userName: event.target.value });
        } else {
            this.setState({ ...this.state, password: event.target.value });
        }
    }
}

export default Login;