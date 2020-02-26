import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitadoComponent } from './invitado.component';
import { LandingInvitadoComponent } from './components/landing-invitado/landing-invitado.component';

const routes: Routes = [
  {
    path: '',
    component: InvitadoComponent,
    children: [
      { path: '', component: LandingInvitadoComponent }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitadoRoutingModule { }
