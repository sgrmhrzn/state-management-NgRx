
import * as fromFilterActions from './filter.action';
import { FilterModel } from 'src/app/models/filter.model';
import { FilterTypes } from './filter.action';


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
        case FilterTypes.ToggleLanguage:
            return {
                ...state,
                FilterLanguage: action.payload
            };
        case FilterTypes.ToggleGenre:
            return {
                ...state,
                FilterGenre: action.payload
            };
        default:
            return state;

    }
}

