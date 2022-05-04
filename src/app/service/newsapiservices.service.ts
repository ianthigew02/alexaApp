import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  // newsApiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?sources=CNN,bloomberg,fox-news,newsy,cnbc,abc-news&sortBy=popularity&apiKey=bbbd56acf7054e27a34704667b4dc5b6";

  // technewsapiurl
  techApiUrL = "https://newsapi.org/v2/top-headlines?sources=fox-news&sortBy=popularity&apiKey=bbbd56acf7054e27a34704667b4dc5b6";

  // businessnewsapiurl
  businessApiUrL = "https://newsapi.org/v2/top-headlines?sources=CNN&sortBy=popularity&apiKey=bbbd56acf7054e27a34704667b4dc5b6";

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
