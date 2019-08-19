import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    pageLoaded = false;

    constructor() { }
}
