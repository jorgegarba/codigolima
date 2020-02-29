import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getProductos() {
    let url = 'https://5dc194f36ca10a0014d5d95d.mockapi.io/producto';
    // Cuando se pasa como parámetro sólo la URL, se asume que el 
    // verbo HTTP es GET, que no hay 'headers' ni 'body'
    return fetch(url);
  }

}
