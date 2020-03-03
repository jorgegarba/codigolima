import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = [];
  cargando = true;

  constructor(public _sProducto: ProductoService) { }

  /**
   * Funcion del ciclo de vida de toooodos los componentes en
   * Angular
   * Investigar: Ciclo de vida de los componentes en Angular
   */
  ngOnInit(): void {
    this._sProducto.getProductos()
      .then((peticion) => {
        return peticion.json();
      }).then((prods) => {
        console.log(prods);
        this.productos = prods;
        this.cargando = false;
      });
  }

}
