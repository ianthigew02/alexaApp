import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './foxnews.component.html',
  styleUrls: ['./foxnews.component.css']
})
export class FoxnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  technewsDisplay:any = [];
  page:number = 1;
  totalLength:any;

  ngOnInit(): void {

    this._services.foxNews().subscribe((result)=>{
      this.technewsDisplay = result.articles;
      this.totalLength = result.length;
    })
  }

}
