
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { BookModel, KeyValueModel } from 'src/app/models/book.model';
import { StockActionTypes } from './stock.actions';

export interface StockState {
    books: BookModel[];
    currentStockId: number;
    language: KeyValueModel[];
    genre: KeyValueModel[];
}

export const initialState: StockState = {
    books: [],
    currentStockId: 0,
    language: [],
    genre: []
};


export interface StockAction extends Action {
    payload: any;
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

export function reducer(state: StockState = initialState, action: StockAction): any {

    switch (action.type) {
        case StockActionTypes.Add:
            return {
                ...state,
                books: action.payload
            };
        case StockActionTypes.LoadSuccess:
            return {
                ...state,
                books: action.payload.books,
                genre: action.payload.genre,
                language: action.payload.language
            };
        case StockActionTypes.SelectedStockId:
            return {
                ...state,
                currentStockId: action.payload
            }
        case StockActionTypes.Delete:
            return {
                ...state,
                books: action.payload
            };
        default:
            return state;
    }
}

// export function reducer2(state: State | undefined, action: Action): any {
//     return scoreboardReducer2(state, action);
// }