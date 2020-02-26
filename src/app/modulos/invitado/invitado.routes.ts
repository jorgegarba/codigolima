import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitadoComponent } from './invitado.component';
import { LandingInvitadoComponent } from './components/landing-invitado/landing-invitado.component';
import { NosotrosInvitadoComponent } from './components/nosotros-invitado/nosotros-invitado.component';

const routes: Routes = [
  {
    path: '',
    component: InvitadoComponent,
    children: [
      { path: '', component: LandingInvitadoComponent },
      { path: 'nosotros', component: NosotrosInvitadoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitadoRoutingModule { }
