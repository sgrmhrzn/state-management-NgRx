
import { Action } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';
import { CartActionType } from './cart.action';

export interface CartState {
    items: CartModel[];
}

export interface CartAction extends Action {
    payload: any;
}

export const InitialState: CartState = {
    items: []
};

export function reducer(state: CartState = InitialState, action: CartAction): CartState {
    let existingItem;
    switch (action.type) {
        case CartActionType.AddToCart:
            existingItem = state.items.find(x => x.id === action.payload.id);

            if (existingItem) {
                existingItem.Quantity += 1;
                existingItem.Total = existingItem.Price * existingItem.Quantity;
            } else {
                action.payload.Quantity = 1;
                action.payload.Total = action.payload.Price * action.payload.Quantity;
                state.items.push(action.payload);
            }

            return {
                ...state,
                items: state.items
            };
        case CartActionType.RemoveFromCart:
            existingItem = state.items
                                .find(x => x.id === action.payload);
            const index = state.items.indexOf(existingItem);
            state.items.splice(index, 1);
            return {
                ...state,
                items: state.items
            };
        default:
            return state;

    }
    // localStorage.setItem(key, JSON.stringify(nextState));
}

