import { InvitadoRoutingModule } from './invitado.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitadoComponent } from './invitado.component';
import { LandingInvitadoComponent } from './components/landing-invitado/landing-invitado.component';
@NgModule({
  declarations: [InvitadoComponent, LandingInvitadoComponent],
  imports: [
    CommonModule,
    InvitadoRoutingModule
  ],
})
export class InvitadoModule { }