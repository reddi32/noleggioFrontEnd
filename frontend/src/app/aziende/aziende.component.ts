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
      new Azienda ("car.png", "Niente più compromessi. Siamo molto flessibili sul noleggio a lungo termine. Gestiamo noi la flotta per te.")
    );
    this.listaAutoAziendale.push (
      new Azienda ("check.png", "Ti rendiamo più semplice la gestione dei costi di viaggio. Avrai a disposizione una panoramica completa di tutti i viaggi di lavoro dei tuoi dipendenti con gli orari e la posizione esatta.")
    );
    this.listaAutoAziendale.push (
      new Azienda ("financial-report.png", "Come cliente aziendale potrai inoltre richiedere tariffe aziendali adatta alla tua azienda ed avere sempre a disposizione una sola fattura mensile con tutti i costi dichiarati, accessibile tramite la tua pagina riservata.")
    );
  }

  ngOnInit(): void {
  }

}
