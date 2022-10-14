import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utente } from '../utente';

const baseUrl = "http://localhost:8080/utenti";

@Injectable({
  providedIn: 'root'
})
export class ConnessioneService {

  constructor(private http: HttpClient) { }

  get(nome: string) {
    return this.http.get(`${baseUrl}/all?nome=${nome}`);
  }

}
