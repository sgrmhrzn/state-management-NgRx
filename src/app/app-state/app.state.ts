import { CartState } from '../module/books/state/cart-state/cart.reducer';
import { FilterState } from '../module/books/filter/state/filter.reducer';

export interface State {
    CartState: CartState;
    FilterState: FilterState;
};