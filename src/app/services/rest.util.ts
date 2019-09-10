import { Injectable } from '@angular/core';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestUtil {

    constructor() { }

    public extractJSON(res: any) {
        return res.json() || {};
    }

    public handleError(error: any): ErrorObservable<any> {
        return Observable.throw(error);
    }

    public getHeaders(selectedOrganization?: string) : HttpHeaders {
        let headers = new HttpHeaders();
        if (selectedOrganization) {
            headers.set('selectedOrganization', selectedOrganization);
        } else if (sessionStorage.get('selectedOrganization')){
            headers.set('selectedOrganization', sessionStorage.get('selectedOrganization'));
        }
        headers.set('Content-Type', 'application/json');
        return headers;
    }
}
