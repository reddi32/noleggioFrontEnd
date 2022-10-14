import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-utente',
  templateUrl: './dashboard-utente.component.html',
  styleUrls: ['./dashboard-utente.component.css']
})
export class DashboardUtenteComponent implements OnInit {

  idUtente: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
