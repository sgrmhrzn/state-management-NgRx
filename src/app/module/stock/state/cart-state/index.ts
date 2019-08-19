import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";


const getCartFeatureState = createFeatureSelector<CartState>('cart');

export const getCartItems = createSelector(
    getCartFeatureState,
    state => state.items
);
