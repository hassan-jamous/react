
export interface AppState {
    userState: UserState;
    counterState: CounterState;
}

export interface UserState {
    isLoading: boolean;
    isLoggedIn: boolean;
    userName: string;
}

export interface CounterState {
    counter: number;
}