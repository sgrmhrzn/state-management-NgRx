import { createAction } from '@ngrx/store';
export enum Actions {
    AddToCart = '[Cart] Add',
    RemoveFromCart = '[Cart] Remove'
}

export const addBook = createAction(Actions.AddToCart);
export const deleteBook = createAction(Actions.RemoveFromCart);
