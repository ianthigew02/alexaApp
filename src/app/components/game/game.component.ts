import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GamesComponent implements OnInit {
  content?: string;

  constructor() { }

  ngOnInit(): void {

  }
}
