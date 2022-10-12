import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaCard: Card[] = [];
  constructor() { 
    this.listaCard.push (
      new Card ("blahblahblahblahblah", "digital-watch.png")
    );
    this.listaCard.push (
      new Card ("blahblahblahblahblah", "car-rent.png")
    );
  }

  ngOnInit(): void {
  }

}
