import { RegisterComponent } from './components/register/register.component';
import { RecoverComponent } from './components/recover/recover.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'recover', component: RecoverComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
