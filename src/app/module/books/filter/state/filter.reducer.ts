
import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import * as fromFilterActions from './filter.action';
import { FilterModel } from 'src/app/models/filter.model';


export interface FilterState {
    FilterLanguage: FilterModel;
    FilterGenre: FilterModel;
}

export const InitialState: FilterState = {
    FilterLanguage: {
        IsActive: false,
        Value: ''
    },
    FilterGenre: {
        IsActive: false,
        Value: ''
    }
};

export function reducer(state: FilterState = InitialState, action: fromFilterActions.FilterActions): FilterState {
    switch (action.type) {
        case fromFilterActions.FilterTypes.Language:
            return {
                ...state,
                FilterLanguage: action.payload
            };
        case fromFilterActions.FilterTypes.Genre:
            return {
                ...state,
                FilterGenre: action.payload
            };
        default:
            return state;

    }
}

