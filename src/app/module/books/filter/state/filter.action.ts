import { createAction, Action } from '@ngrx/store';
import { FilterModel } from 'src/app/models/filter.model';
export enum FilterTypes {
    Language = '[LanguageFilter] Language',
    Genre = '[LanguageFilter] Genre',
}

export class ToogleLanguageFilter implements Action {
    readonly type = FilterTypes.Language;

    constructor(public payload: FilterModel) { }
}

export class ToogleGenreFilter implements Action {
    readonly type = FilterTypes.Genre;

    constructor(public payload: FilterModel) { }
}

// export class ToogleHindiFilter implements Action {
//     readonly type = FilterTypes.Hindi;

//     constructor(public payload: boolean) { }
// }

// Union the valid types
export type FilterActions = ToogleLanguageFilter
    | ToogleGenreFilter
