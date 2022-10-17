import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegistrazioneComponent } from './formregistrazione/form-registrazione.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { AziendeComponent } from './aziende/aziende.component';
import { AutoComponent } from './auto/auto.component';
import { DashboardUtenteComponent } from './dashboardUtente/dashboard-utente.component';
import { AuthGuard } from './auth/auth.guard'
import { ListaAutoComponent } from './lista-auto/lista-auto.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'formregistrazione', component: FormRegistrazioneComponent },
  { path: 'aziende', component: AziendeComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'auto', component: AutoComponent},
  { path: 'dashboardUtente', component: DashboardUtenteComponent, canActivate: [AuthGuard]},
  { path: 'listaAuto', component: ListaAutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
