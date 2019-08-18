import { ActionType, createReducer } from 'typesafe-actions';

import { demoActions } from 'store/demo/demoActions';

export type DemoActions = ActionType<typeof demoActions>;

export interface DemoState {
  isLoading: boolean;
  err: string;
}

const initialState = {
  isLoading: false,
  err: '',
} as DemoState;

export const demoReducer = createReducer<DemoState, DemoActions>(initialState)
  .handleAction([
    demoActions.getAccountDetail,
  ], (state) => ({ ...state, isLoading: true }))
;
