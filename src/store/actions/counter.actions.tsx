import { Action } from 'redux';

export enum CounterActionTypes {
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

export function createCounterIncreaseAction(): CounterIncreaseAction {
  return { type: CounterActionTypes.COUNTER_INCREAS }
}

export function createCounterDecreaseAction(decreaseValue: number): CounterDecreaseAction {
  return { type: CounterActionTypes.COUNTER_DECREASE, decreaseValue }
}
