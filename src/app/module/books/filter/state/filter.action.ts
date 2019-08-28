import { createAction, Action } from '@ngrx/store';
import { FilterModel } from 'src/app/models/filter.model';
export enum FilterTypes {
    ToggleLanguage = '[LanguageFilter] Language',
    ToggleGenre = '[LanguageFilter] Genre',
}

export class ToggleLanguageFilter implements Action {
    readonly type = FilterTypes.ToggleLanguage;

    constructor(public payload: FilterModel) { }
}

export class ToggleGenreFilter implements Action {
    readonly type = FilterTypes.ToggleGenre;

    constructor(public payload: FilterModel) { }
}

// Union the valid types
export type FilterActions = ToggleLanguageFilter
    | ToggleGenreFilter;
