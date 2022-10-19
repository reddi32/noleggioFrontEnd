import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Utente } from '../model/utente';
import { ConnessioneService } from '../services/utente/connessione.service';

@Component({
  selector: 'app-dashboard-utente',
  templateUrl: './dashboard-utente.component.html',
  styleUrls: ['./dashboard-utente.component.css']
})
export class DashboardUtenteComponent implements OnInit {

  idUtente: any | undefined
  loggato: any;
  constructor( private http: HttpClient, private connessioneService: ConnessioneService  ) { 
    
  }

  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/utenti/all");
    response.subscribe((data) => data);
  }

  logout() {
    window.sessionStorage.setItem('loggato', "false");
    window.sessionStorage.setItem('whoLog', '');
    window.dispatchEvent( new Event('storage'))
    this.loggato = sessionStorage.getItem('loggato');
  }
}
