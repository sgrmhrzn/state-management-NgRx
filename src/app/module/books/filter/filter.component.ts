import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromFeature from './state/filter.reducer';
import * as actions from './state/filter.action';
import * as fromFilter from './state/index';
import { Store, select } from '@ngrx/store';
import { takeWhile, map } from 'rxjs/operators';
import { FilterModel } from 'src/app/models/filter.model';
import { SharedService } from 'src/app/shared/service/shared.service';
import { KeyValueModel } from 'src/app/models/book.model';
import { zip, Subscription } from 'rxjs';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

    languageFilter: FilterModel;
    genreFilter: FilterModel;
    componentActive: boolean;
    filters: FilterModel;
    languages: KeyValueModel[];
    genres: KeyValueModel[];
    subscriptions: Subscription[] = [];
    constructor(private store: Store<fromFeature.FilterState>, private shareService: SharedService) { }

    ngOnInit() {
        this.componentActive = true;
        const sub: Subscription = zip(this.shareService.getGenres(), this.shareService.getLanguages()).subscribe(([genres, languages]) => {
            this.genres = genres;
            this.languages = languages;
        })

        this.subscriptions.push(sub);

        const subfilter: Subscription = this.store.pipe(select(fromFilter.getFilters)).subscribe(
            filters => {
                // this.filters = filters;
                console.log(filters);
                this.languageFilter = filters.FilterLanguage;
                this.genreFilter = filters.FilterGenre;
            }
        );

        this.subscriptions.push(subfilter);
    }

    filterOptionChange(type: number) {

        switch (type) {
            case 0:
                this.store.dispatch(new actions.ToggleLanguageFilter(this.languageFilter));
                break;
            case 1:
                this.store.dispatch(new actions.ToggleGenreFilter(this.genreFilter));
                break;
        }

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(x => x.unsubscribe());
    }

}
