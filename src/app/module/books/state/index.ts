import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './book.reducer';

// Selector functions
const getBookFeatureState = createFeatureSelector<BookState>('books');

export const getBooks = createSelector(
    getBookFeatureState,
    state => state.value
);

// export const getMaskUserName = createSelector(
//   getBookFeatureState,
//   state => state.maskUserName
// );
