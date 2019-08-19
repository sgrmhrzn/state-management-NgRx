import { BookState } from '../module/books/state/book.reducer';
import { CartState } from '../module/books/state/cart-state/cart.reducer';
import { FilterState } from '../module/books/filter/state/filter.reducer';

export interface State {
    // State: BookState;
    CartState: CartState;
    FilterState: FilterState;

}