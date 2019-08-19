import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FilterState } from "./filter.reducer";


const getFilterFeatureState = createFeatureSelector<FilterState>('filters');

export const getFilters = createSelector(
    getFilterFeatureState,
    state => state
);
