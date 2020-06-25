import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { SoldeComponent } from './solde/solde.component';
import {FormInscriptionComponent}from './form-inscription/form-inscription.component';
import {LoginComponent} from './login/login.component'
import { from } from 'rxjs';
import { RootNavComponent } from './root-nav/root-nav.component';
import { CompteComponent } from './compte/compte.component';
import { VirementComponent } from './virement/virement.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [ 
  {path: 'login' , component: LoginComponent},
  {path: 'forgot',component: ForgotComponent},
  {path: 'inscription' , component: FormInscriptionComponent},
  {path: '' ,redirectTo: '/login' ,pathMatch:'full'},
  {path:'discon', redirectTo:'/login',pathMatch:'full'},
  {path:'client' , component: RootNavComponent,
   children:[
  {path:'contact' , component:ContactComponent},
  {path: 'solde' , component: SoldeComponent},
  {path:'compte', component: CompteComponent},
  {path:'virement', component: VirementComponent},
  {path:'trans',component:TransactionComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
