import { AuthRoutingModule } from './auth.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverComponent } from './components/recover/recover.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RecoverComponent,
    RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
