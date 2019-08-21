import { createAction, Action } from '@ngrx/store';
import { BookModel } from 'src/app/models/book.model';
import { StockState } from './stock.reducer';
export enum StockActionTypes {
    Add = '[Books] Add',
    Delete = '[Books] Delete',
    Load = '[Books] Loaded',
    LoadSuccess = '[Books] LoadSuccess',
    LoadFail = '[Books] LoadFail',
    SelectedStockId = '[Stocks] selectedStockId'
}

// export const addBook = createAction(Actions.Add);
// export const deleteBook = createAction(Actions.Delete);
// export const isOnUnhold2 = createAction(Actions.Delete);

export class NewBookAdd implements Action {
    readonly type = StockActionTypes.Add;

    constructor(public payload: BookModel[]) { }
}

export class Load implements Action {
    readonly type = StockActionTypes.Load;

    constructor() { }
}

export class LoadSuccess implements Action {
    readonly type = StockActionTypes.LoadSuccess;

    constructor(public payload: any) { }
}

export class LoadFail implements Action {
    readonly type = StockActionTypes.LoadFail;

    constructor(public payload: string) { }
}

export class SelectedStockId implements Action {
    readonly type = StockActionTypes.SelectedStockId;

    constructor(public payload: number) { }
}

// Union the valid types
export type StockActions = NewBookAdd
    | LoadSuccess | LoadFail | Load | SelectedStockId;