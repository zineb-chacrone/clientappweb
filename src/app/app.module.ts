import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { ClientSpaceComponent } from './client-space/client-space.component';
import {FormsModule} from '@angular/forms'
import {RouterModule,Routes}from '@angular/router'
import { from } from 'rxjs';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { LoginComponent } from './login/login.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatIconModule}from '@angular/material/icon';
import{MatListModule} from '@angular/material/list';

import { LayoutModule } from '@angular/cdk/layout';
import {ReactiveFormsModule} from '@angular/forms';
import { ForgotComponent } from './forgot/forgot.component';
import { SoldeComponent } from './solde/solde.component';
import { VirementComponent } from './virement/virement.component';
import { ContactComponent } from './contact/contact.component';

import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { ComptesComponent } from './comptes/comptes.component';
import { TransactionsComponent } from './transactions/transactions.component';
const routes: Routes = [ 
  {path: 'solde' , component: SoldeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'inscription' , component: FormInscriptionComponent},
  {path: '' ,redirectTo: '/accueil' ,pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ClientSpaceComponent,
    FormInscriptionComponent,
    LoginComponent,
    
    ForgotComponent,
    SoldeComponent,
    VirementComponent,
    ContactComponent,
    
    MenuNavComponent,
    ComptesComponent,
    TransactionsComponent,
    
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
