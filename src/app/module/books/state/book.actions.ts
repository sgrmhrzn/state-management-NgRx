import { createAction } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
export enum Actions {
    Add = '[Books] Add',
    Delete = '[Books] Delete',
    AddToCart = '[Cart] Add',
    RemoveFromCart = '[Cart] Remove'
}

export const addBook = createAction(Actions.Add);
export const deleteBook = createAction(Actions.Delete);
export const isOnUnhold2 = createAction(Actions.Delete);
