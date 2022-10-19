import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utente } from 'src/app/model/utente';

const baseUrl = "http://localhost:8080/utenti/all";

@Injectable({
  providedIn: 'root'
})
export class ConnessioneService {

  constructor(private http: HttpClient) { }

  get(nome: string) {
    return this.http.get(`${baseUrl}/all?nome=${nome}`);
  }

  getAll(): Observable<Utente[]> {
    return this.http.get<Utente[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(idUtente: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${idUtente}`, data);
  }

 



}
