import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModelliService } from '../servizi/modelli.service';

@Component({
  selector: 'app-lista-auto',
  templateUrl: './lista-auto.component.html',
  styleUrls: ['./lista-auto.component.css']
})
export class ListaAutoComponent implements OnInit {

  classe_emissioni: any;
  nome: any;
  potenza_motore: any;
  numero_posti: any;
  numero_porte: any;
  tipo_di_alimentazione: any;
  tipo_di_cambio: any;
  colore: any;


  constructor( private http: HttpClient, private modelliService: ModelliService) { 
    this.nome = ((this.modelliService.getNomeInserito()))
    this.modelliService.getNome(this.modelliService.getNomeInserito()!).subscribe(
      (response: any) => {
        this.classe_emissioni=response?.classe_emissioni;
        this.nome=response?.nome;
        this.potenza_motore=response?.potenza_motore;
        this.numero_posti=response?.numero_posti;
        this.numero_porte=response?.numero_porte;
        this.tipo_di_alimentazione=response?.tipo_di_alimentazione;
        this.tipo_di_cambio=response?.tipo_di_cambio;
        this.colore=response?.colore;
      }, 
      (error: any) => {

      },
    )
  }

  ngOnInit(): void {
  }

}
