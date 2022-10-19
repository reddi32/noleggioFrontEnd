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

  nome: any;
  cognome: any;
  dataNascita: any;
  luogoNascita: any;
  codiceFiscale: any;
  email: any;

  constructor( private http: HttpClient, private connessioneService: ConnessioneService  ) { 
    console.log((this.connessioneService.getNomeLoggato()!))
  this.connessioneService.getNome(this.connessioneService.getNomeLoggato()!).subscribe (
  (response: any) => {
    this.nome=response.nome;
    this.cognome=response.cognome;
    this.codiceFiscale=response.codice_fiscale;
    this.email=response.email;
  },
  (error: any) => {
    
   },
  )
  console.log(this.email)
  }
  

  ngOnInit(): void {
   /* let response = this.http.get("http://localhost:8080/utenti");
    response.subscribe((data) => data);*/
  }


  logout() {
    window.sessionStorage.setItem('loggato', "false");
    window.sessionStorage.setItem('whoLog', '');
    window.dispatchEvent( new Event('storage'))
    this.loggato = sessionStorage.getItem('loggato');
  }
}
