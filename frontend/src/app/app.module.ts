import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { FormRegistrazioneComponent } from './formregistrazione/form-registrazione.component';
import { AutoComponent } from './auto/auto.component';
import { AziendeComponent } from './aziende/aziende.component';
import { DashboardUtenteComponent } from './dashboardUtente/dashboard-utente.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    LoginComponent,
    FormRegistrazioneComponent,
    AutoComponent,
    AziendeComponent,
    DashboardUtenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
