import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utente } from 'src/app/model/utente';

const baseUrl = "http://localhost:8080/utenti";

@Injectable({
  providedIn: 'root'
})
export class ConnessioneService {

  constructor(private http: HttpClient) { }

  getNome(nome: string) {
    return this.http.get(baseUrl+'/nome?nome='+ nome);
  }

  getAll(): Observable<Utente[]> {
    return this.http.get<Utente[]>(baseUrl+'/all');
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add`, data);
  }

  update(idUtente: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${idUtente}`, data);
  }

  getIsLoggedIn():boolean{
    if(sessionStorage.getItem("login")=="true"){
        return true;
    }
    return false;
}

getNomeLoggato() {
    return sessionStorage.getItem("nomeUtenteLoggato");
}

setIsLoggedIn(){
  sessionStorage.setItem("login", "true");
}

setLogout(){
    sessionStorage.setItem("login", "false");
    sessionStorage.setItem("id", "0");
}

}
