import { Component } from '@angular/core';
import { ConnessioneService } from './services/utente/connessione.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  nome!: string;

  constructor() {}

  
}
