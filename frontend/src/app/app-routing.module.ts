import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegistrazioneComponent } from './formregistrazione/form-registrazione.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { AziendeComponent } from './aziende/aziende.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'formregistrazione', component: FormRegistrazioneComponent },
  { path: 'aziende', component: AziendeComponent},
  { path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
