import { Component, OnInit, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utente } from '../model/utente';
import { ConnessioneService } from '../services/utente/connessione.service';


@Component({
  selector: 'app-form-registrazione',
  templateUrl: './form-registrazione.component.html',
  styleUrls: ['./form-registrazione.component.css']
})
export class FormRegistrazioneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(form)

  }
}
