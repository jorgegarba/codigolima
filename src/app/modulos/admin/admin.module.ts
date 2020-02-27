import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AdminRoutingModule } from './admin.routes';



@NgModule({
  declarations: [
    AdminComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
