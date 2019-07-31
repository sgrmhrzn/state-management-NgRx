
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as CallAction from './book.actions';
import { BookModel } from 'src/app/models/book.model';

export interface BookState {
    value: BookModel[];
}

export const initialState: BookState = {
    value: []
};


export interface BookAction extends Action {
    value: any;
}

// const scoreboardReducer = createReducer(
//     initialState,
//     on(CallAction.addBook, state => ({ ...state, value: true })),
//     on(CallAction.deleteBook, state => ({ ...state, value: false })),
// );

// const scoreboardReducer2 = createReducer(
//     initialState,
//     on(CallAction.addBook, state => ({ ...state, value: true })),
//     on(CallAction.deleteBook, state => ({ ...state, value: false })),
// );

export function reducer(state: BookState = initialState, action: BookAction): any {

    switch (action.type) {
        case CallAction.Actions.Add:
            return {
                ...state,
                value: action.value
            };
        case CallAction.Actions.Delete:
            return {
                ...state,
                value: action.value
            };
        default:
            return state;
    }
}

// export function reducer2(state: State | undefined, action: Action): any {
//     return scoreboardReducer2(state, action);
// }