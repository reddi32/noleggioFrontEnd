import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Utente } from '../model/utente';

@Component({
  selector: 'app-dashboard-utente',
  templateUrl: './dashboard-utente.component.html',
  styleUrls: ['./dashboard-utente.component.css']
})
export class DashboardUtenteComponent implements OnInit {

  idUtente: any | undefined

  numeroUtente: Utente[] = [];
  constructor( private http: HttpClient ) { 
    this.numeroUtente.push(
      new Utente (1, '', '', '', '*******', new Date(), '', '', true, '' )
    );
  }

  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/utenti/all");
    response.subscribe((data) => data);
  }

}
