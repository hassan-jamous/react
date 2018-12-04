import { Action } from 'redux';

export const enum CounterActionTypes {
    COUNTER_INCREAS = '@@counter/COUNTER_INCREASE',
    COUNTER_DECREASE = '@@counter/COUNTER_DECREASE',
}


export interface CounterIncreaseAction extends Action {
    readonly type: CounterActionTypes.COUNTER_INCREAS;
  }
  
  export interface CounterDecreaseAction extends Action {
    readonly type: CounterActionTypes.COUNTER_DECREASE;
    decreaseValue: number;
  }
  
  export type CounterAction = CounterIncreaseAction | CounterDecreaseAction;
