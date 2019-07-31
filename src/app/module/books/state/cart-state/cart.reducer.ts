
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as CartActions from './cart.action';
import { BookModel } from '../../../../models/book.model';
import { CartModel } from 'src/app/models/cart.model';

export interface CartState {
    items: CartModel[];
}

export interface CartAction extends Action {
    items: CartModel[];
}

export const InitialState: CartState = {
    items: []
};

export function reducer(state: CartState = InitialState, action: CartAction): CartState {
    // return scoreboardReducer(state, action);
    switch (action.type) {
        case CartActions.Actions.AddToCart:
            return {
                ...state,
                items: action.items
            };
        case CartActions.Actions.RemoveFromCart:
            return {
                ...state,
                items: action.items
            };
        default:
            return state;
    }
}

