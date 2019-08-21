import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BookModel, KeyValueModel } from 'src/app/models/book.model';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    url = 'api/';

    pageLoaded = false;

    constructor(private http: HttpClient) { }

    getStock(): Observable<BookModel[]> {
        return this.http.get<BookModel[]>(`${this.url}stock`)
            .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }


    getLanguages(): Observable<KeyValueModel[]> {
        return this.http.get<KeyValueModel[]>(`${this.url}languages`)
            .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }


    getGenres(): Observable<KeyValueModel[]> {
        return this.http.get<KeyValueModel[]>(`${this.url}genres`)
            .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }
}
