import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  // arreglo de rutas
  {
    path: 'invitado',
    // loadChildren: './modulos/invitado/invitado.module#InvitadoModule',
    loadChildren: () => import('./modulos/invitado/invitado.module').then(m => m.InvitadoModule)
  },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
