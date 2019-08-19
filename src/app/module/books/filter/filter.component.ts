import { Component, OnInit } from '@angular/core';
import * as fromFeature from './state/filter.reducer';
import * as actions from './state/filter.action';
import * as fromFilter from './state/index';
import { Store, select } from '@ngrx/store';
import { takeWhile, map } from 'rxjs/operators';
import { FilterModel } from 'src/app/models/filter.model';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
    languageFilter: FilterModel;
    genreFilter: FilterModel;
    componentActive: boolean;
    filters: FilterModel;

    constructor(private store: Store<fromFeature.FilterState>) { }

    ngOnInit() {
        this.componentActive = true;
        this.store.pipe(
            select(fromFilter.getFilters),
        ).subscribe(
            filters => {
                // this.filters = filters;
                console.log(filters);
                this.languageFilter = filters.FilterLanguage;
                this.genreFilter = filters.FilterGenre;
            }
        );

    }

    filterOptionChange(type: number) {

        switch (type) {
            case 0:
                this.store.dispatch({ type: actions.FilterTypes.Language, payload: this.languageFilter });
                break;
            case 1:
                this.store.dispatch({ type: actions.FilterTypes.Genre, payload: this.genreFilter });
        }

    }
}
