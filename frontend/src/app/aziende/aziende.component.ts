import { Component, OnInit } from '@angular/core';
import { Azienda } from '../model/azienda';

@Component({
  selector: 'app-aziende',
  templateUrl: './aziende.component.html',
  styleUrls: ['./aziende.component.css']
})
export class AziendeComponent implements OnInit {

  listaAutoAziendale: Azienda[] = [];
  constructor() { 
    this.listaAutoAziendale.push (
      new Azienda ("car-rent.png", "Niente più compromessi. Siamo molto flessibili sul noleggio a lungo termine. Gestiamo noi la flotta per te.")
    );
    this.listaAutoAziendale.push (
      new Azienda ("car-rent.png", "Niente più compromessi. Siamo molto flessibili sul noleggio a lungo termine. Gestiamo noi la flotta per te.")
    );
  }

  ngOnInit(): void {
  }

}
