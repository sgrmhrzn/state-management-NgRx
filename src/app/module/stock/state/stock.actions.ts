import { createAction, Action } from '@ngrx/store';
import { BookModel } from 'src/app/models/book.model';
import { StockState } from './stock.reducer';
export enum StockActionTypes {
    Add = '[Books] Add',
    Delete = '[Books] Delete',
    Load = '[Books] Load',
    LoadSuccess = '[Books] LoadSuccess',
    LoadFail = '[Books] LoadFail',
    SelectedStockId = '[Stocks] selectedStockId',
    AddBookInStockSuccess = '[Stocks] Add',
    AddBookInStockError = '[Stocks] AddError',
    Update = '[Stocks] Update',
    UpdateBookInStockSuccess = '[Stocks] UpdateSuccess',
    UpdateBookInStockError = '[Stocks] UpdateError',

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

export class Update implements Action {
    readonly type = StockActionTypes.Update;

    constructor(public payload: any) { }
}

export class UpdateSuccess implements Action {
    readonly type = StockActionTypes.UpdateBookInStockSuccess;

    constructor(public payload: any) { }
}

export class UpdateBookError implements Action {
    readonly type = StockActionTypes.UpdateBookInStockError;

    constructor(public payload: string) { }
}

export class SelectedStockId implements Action {
    readonly type = StockActionTypes.SelectedStockId;

    constructor(public payload: number) { }
}
export class AddBook implements Action {
    readonly type = StockActionTypes.Add;

    constructor(public payload: BookModel) { }
}
export class AddBookSuccess implements Action {
    readonly type = StockActionTypes.AddBookInStockSuccess;

    constructor(public payload: BookModel) { }
}
// Union the valid types
export type StockActions =
    LoadSuccess | LoadFail | Load
    | SelectedStockId | AddBook | AddBookSuccess
    | Update | UpdateSuccess | UpdateBookError;