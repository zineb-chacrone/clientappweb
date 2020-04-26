import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { SoldeComponent } from './solde/solde.component';
import { ComptesComponent } from './comptes/comptes.component';
import { VirementComponent } from './virement/virement.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'forgot', component:ForgotComponent},
  {path:'inscription',component:FormInscriptionComponent},
  {path:'',redirectTo: '/login',pathMatch:'full'},
  {path:'client',component:MenuNavComponent,
     children:[
       {path:'solde', component:SoldeComponent},
       {path:'compte', component:ComptesComponent},
       {path:'virement', component:VirementComponent},
       {path:'discon',redirectTo:'/login',pathMatch:'full'},
       {path:'trans',component:TransactionsComponent},
       {path:'contact',component:ContactComponent}

       
     ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
