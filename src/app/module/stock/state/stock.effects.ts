import { Observable, of, forkJoin, observable, zip } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { SharedService } from 'src/app/shared/service/shared.service';
import * as stockActions from './stock.actions';
import { Injectable } from '@angular/core';
import { StockActionTypes } from './stock.actions';

@Injectable()
export class StockEffects {

    constructor(private actions$: Actions, private sharedService: SharedService) {

    }

    @Effect()
    loadBooks$: Observable<Action> = this.actions$.pipe(
        ofType(StockActionTypes.Load),
        mergeMap(action =>
            zip(this.sharedService.getStock(),
                this.sharedService.getGenres(),
                this.sharedService.getLanguages()).pipe(
                    map(([stock, genreData, languageData]) => {
                        const payload = {
                            books: stock,
                            genre: genreData,
                            language: languageData
                        };
                        return new stockActions.LoadSuccess(payload);
                    }),
                    catchError(err => of(new stockActions.LoadFail(err)))
                )
        )
    );

    @Effect()
    addBook$: Observable<Action> = this.actions$.pipe(
        ofType(StockActionTypes.Add),
        map((action: stockActions.AddBook) => action.payload),
        mergeMap(book =>
            this.sharedService.add(book).pipe(
                map(() => {
                    return new stockActions.AddBookSuccess(book);
                }),
                catchError(err => of(new stockActions.LoadFail(err)))
            )
        )
    );

    @Effect()
    update$: Observable<Action> = this.actions$.pipe(
        ofType(StockActionTypes.Update),
        map((action: stockActions.Update) => action.payload),
        mergeMap(book =>
            this.sharedService.update(book).pipe(
                map(() => {
                    return new stockActions.UpdateSuccess(book);
                }),
                catchError(err => of(new stockActions.LoadFail(err)))
            )
        )
    );
}