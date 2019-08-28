import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";


const getCartFeatureState = createFeatureSelector<CartState>('cart');

export const getCartItems = createSelector(
    getCartFeatureState,
    state => state.items
);

export const getCartItem = (id) => createSelector(
    getCartFeatureState,
    state => state.items.find(x => x.id === id) || { id: 0, Name: '', Price: 0, Total: 0, Quantity: 0 }
);
