import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-cnn-news',
  templateUrl: './cnn-news.component.html',
  styleUrls: ['./cnn-news.component.css']
})
export class CNNnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  page:number = 1;
  totalLength:any;

  cnnnewsDisplay:any = [];

  ngOnInit(): void {

    this._services.cnnNews().subscribe((result)=>{
      this.cnnnewsDisplay = result.articles;
      this.totalLength = result.length;
    })
  }

}
