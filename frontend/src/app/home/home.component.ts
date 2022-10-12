import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { Lista } from '../model/lista';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaCard: Card[] = [];
  listaNecessita: Lista[] = [];
  constructor() { 
    this.listaCard.push (
      new Card ("Vieni a trovarci nelle nostre sedi dalle h 9:00 alle h 18:00 e scegli l'auto che desideri. Puoi anche prenotare tramite il nostro sito e terminare la procedura di noleggio in sede. A te la scelta.", "digital-watch.png")
    );
    this.listaCard.push (
      new Card ("Una volta scelta la tua auto sei libero di andare dove vuoi. Ricordati di guidare con prudenza e mi raccomando, non mancare la data di riconsegna. Potrebbero essere applicati costi aggiuntivi.", "car-rent.png")
    );

    //componente lista delle necessità per registrarsi
    this.listaNecessita.push (
      new Lista ("", "Patente di guida")
    );
  }

  ngOnInit(): void {
  }

}
