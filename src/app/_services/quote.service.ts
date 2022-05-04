import { Injectable } from '@angular/core';
//import { Jsonp, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';

import { Quote } from './quote';

@Injectable()
export class QuoteService {

    url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=JSONP_CALLBACK";;
    constructor(private http:HttpClient) { }

    getQuotes(): Observable<any> {
        return this.http.jsonp(this.url, 'callback')
    }

   private extractData(res: Response) {
        let body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.call(error.message || error);
    }
}