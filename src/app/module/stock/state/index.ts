import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StockState } from './stock.reducer';
import { BookModel } from 'src/app/models/book.model';

// Selector functions
const getBookFeatureState = createFeatureSelector<StockState>('stock');

export const getBooks = createSelector(
    getBookFeatureState,
    state => state.books
);

export const getCurrentStock = createSelector(
    getBookFeatureState,
    state => state.currentStockId
);

export const getBook = createSelector(
    getBookFeatureState,
    getCurrentStock,
    (state, selectedStockId) => {
        if (selectedStockId === 0) {
            const book: BookModel = {
                Name: '',
                id: 0,
                Price: 0,
                Language: {
                    DisplayTitle: '',
                    Key: ''
                },
                Genre: {
                    DisplayTitle: '',
                    Key: ''
                }
            }
            return book;
        } else {
            return selectedStockId ? state.books.find(p => p.id === selectedStockId) : null;
        }
    }
);

export const getLanguages = createSelector(
    getBookFeatureState,
    state => state.language
);

export const getGenres = createSelector(
    getBookFeatureState,
    state => state.genre
);
// export const getMaskUserName = createSelector(
//   getBookFeatureState,
//   state => state.maskUserName
// );
