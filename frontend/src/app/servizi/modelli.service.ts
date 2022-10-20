import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modelli } from '../model/modelli';

const baseUrl = "http://localhost:8080/modelli";

@Injectable({
  providedIn: 'root'
})
export class ModelliService {

  constructor(private http: HttpClient) { }

  getNome(nome: string) {
    return this.http.get(baseUrl+'/nome?nome=Roma');
  }
  getNomeInserito() {
    return sessionStorage.getItem("NomeInserito");
  }
}
