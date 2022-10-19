import { Component, OnInit, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utente } from '../model/utente';
import { ConnessioneService } from '../services/utente/connessione.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-registrazione',
  templateUrl: './form-registrazione.component.html',
  styleUrls: ['./form-registrazione.component.css']
})
export class FormRegistrazioneComponent implements OnInit {

  isLoggedin:any;
  utente: Utente = {
    nome: '',
    cognome: '',
    email: '',
    password: '',
    dataDiNascita: undefined,
    codiceFiscale: '',
    paeseDiNascita: '',
    azienda: undefined,
  };
  submitted = false;

  constructor(private connessioneService: ConnessioneService, private route:Router) { 
    this.isLoggedin = sessionStorage.getItem('loggato');
    if (this.isLoggedin === 'true'){
      this.route.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

  salvaUtente(): void{
  
    console.log(this.utente)
    this.connessioneService.create(this.utente).subscribe(
      response => {
        this.submitted = true;
        window.sessionStorage.setItem('loggato', 'true');
        window.dispatchEvent( new Event('storage'))
        this.connessioneService.getAll().subscribe(
          data => {
            data.forEach(utente => {
              console.log(this.utente.email);
              console.log(utente.email)

              if (this.utente.email === utente.email){
                console.log('ok')

                window.sessionStorage.setItem('whoLog', utente.email);
                window.dispatchEvent( new Event('storage'))
              }
            })
          },
          error => {
            console.log(error)
          }
        );
      },
      error => {
        console.log(error);
      }
      );
      
  }
  @HostListener('window:storage')
   onStorageChange() {
    this.isLoggedin =  sessionStorage.getItem('loggato');
    if (this.isLoggedin === 'true'){
      this.route.navigate(['/']);
    }
   }



  }

  /*onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(form)

  }
}*/

