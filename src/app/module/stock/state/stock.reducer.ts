
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { BookModel, KeyValueModel } from 'src/app/models/book.model';
import { StockActionTypes } from './stock.actions';

export interface StockState {
    books: BookModel[];
    currentStockId: number;
    language: KeyValueModel[];
    genre: KeyValueModel[];
    error: any;
}

export const initialState: StockState = {
    books: [],
    currentStockId: 0,
    language: [],
    genre: [],
    error: null
};


export interface StockAction extends Action {
    payload: any;
}

export function reducer(state: StockState = initialState, action: StockAction): any {

    switch (action.type) {
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
            };
        case StockActionTypes.AddBookInStockSuccess:
            return {
                ...state,
                books: [...state.books, action.payload],
                error: ''
            };
        case StockActionTypes.UpdateBookInStockSuccess:
            const updatedBooks = state.books.map(
                item => action.payload.id === item.id ? action.payload : item);
            return {
                ...state,
                books: updatedBooks,
                currentStockId: action.payload.id,
                error: ''
            };
        case StockActionTypes.Delete:
            return {
                ...state,
                books: action.payload
            };
        default:
            return state;
    }
}
