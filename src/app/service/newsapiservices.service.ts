import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  // newsApiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  // technewsapiurl
  techApiUrL = "https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  // businessnewsapiurl
  businessApiUrL = "https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  // topheading()
  topHeading():Observable<any>
  {
      return this._http.get(this.newsApiUrl);
  }

  // technews()
  techNews():Observable<any>
  {
      return this._http.get(this.techApiUrL);
  }

  // businessnews()
  businessNews():Observable<any>
  {
      return this._http.get(this.businessApiUrL);
  }
}
