
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as CallAction from './call.actions';

export interface State {
    value: boolean;
}

export const initialState: State = {
    value: false
};

export interface BookAction extends Action {
    value: any;
};

const scoreboardReducer = createReducer(
    initialState,
    on(CallAction.addBook, state => ({ ...state, value: true })),
    on(CallAction.deleteBook, state => ({ ...state, value: false })),
);

const scoreboardReducer2 = createReducer(
    initialState,
    on(CallAction.addBook, state => ({ ...state, value: true })),
    on(CallAction.deleteBook, state => ({ ...state, value: false })),
);

export function reducer(state: State | undefined, action: BookAction): any {
    // return scoreboardReducer(state, action);
    switch (action.type) {
        case CallAction.Actions.Add:
            return {
                ...state,
                value: action.value
            };
        case CallAction.Actions.Delete:
            return {
                ...state,
                books: action.value
            };


    }
}

export function reducer2(state: State | undefined, action: Action): any {
    return scoreboardReducer2(state, action);
}