import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegistrazioneComponent } from './formregistrazione/form-registrazione.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'formregistrazione', component: FormRegistrazioneComponent },
  { path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
