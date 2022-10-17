import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConnessioneService } from '../services/utente/connessione.service';
import { Router } from '@angular/router';
import { Utente } from '../model/utente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  password_modello: any;
  email_modello: any;


  loggato:any;
  utentiRegistrati: Utente[] = [];
  constructor(private connessioneService: ConnessioneService, private route: Router) { 
    this.connessioneService.getAll().subscribe(
      data =>{
        this.utentiRegistrati = data;
      },
      error => {
        console.log(error);
      }
    );
    this.loggato = sessionStorage.getItem('loggato');
    if(this.loggato === 'true'){
      this.route.navigate(['/']);
    }
  }


  login() {
    this.utentiRegistrati.forEach(ur => {
      if (ur.email === this.email_modello) {
        if (ur.password === this.password_modello) {
          window.sessionStorage.setItem('loggato', "true");
          window.sessionStorage.setItem('whoLog', ur.idUtente);
          window.dispatchEvent( new Event('storage'))
          this.loggato = sessionStorage.getItem('loggato');
          this.email_modello = '';
          this.password_modello = '';
        }
      }
    });
  }



  
  
  
  
  ngOnInit(): void {
  }

  
  
  
  /*onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
  }
  */

}
