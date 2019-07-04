import { createAction } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
export enum Actions {
    Hold = '[Active Call] On Hold',
    Unhold = '[Active Call] On Unhold'
}

export const isOnHold = createAction(Actions.Hold);
export const isOnUnhold = createAction(Actions.Unhold);
export const isOnUnhold2 = createAction(Actions.Unhold);
