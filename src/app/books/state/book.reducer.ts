
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as CallAction from './call.actions';

export interface State {
    value: boolean;
}

export const initialState: State = {
    value: false
};

const scoreboardReducer = createReducer(
    initialState,
    on(CallAction.isOnHold, state => ({ ...state, value: true })),
    on(CallAction.isOnUnhold, state => ({ ...state, value: false })),
);

const scoreboardReducer2 = createReducer(
    initialState,
    on(CallAction.isOnHold, state => ({ ...state, value: true })),
    on(CallAction.isOnUnhold, state => ({ ...state, value: false })),
);

export function reducer(state: State | undefined, action: Action): any {
    return scoreboardReducer(state, action);
}

export function reducer2(state: State | undefined, action: Action): any {
    return scoreboardReducer2(state, action);
}