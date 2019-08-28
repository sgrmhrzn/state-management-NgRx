import { createAction, Action } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';
export enum CartActionType {
    AddToCart = '[Cart] Add',
    RemoveFromCart = '[Cart] Remove'
}

export class AddToCart implements Action {
    readonly type = CartActionType.AddToCart;

    constructor(public payload: CartModel) { }
}

export class RemoveFromCart implements Action {
    readonly type = CartActionType.RemoveFromCart;

    constructor(public payload: number) { }
}

// Union the valid types
export type CartActions = AddToCart | RemoveFromCart;