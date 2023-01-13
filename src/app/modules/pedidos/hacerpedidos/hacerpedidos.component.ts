import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hacerpedidos',
  templateUrl: './hacerpedidos.component.html',
  styleUrls: ['./hacerpedidos.component.scss']
})
export class HacerpedidosComponent {
  final:number = 10;
  viewProduct() {
    Swal.fire({
      imageUrl: 'https://metroio.vtexassets.com/arquivos/ids/198256/Aceite-Vegetal-Cil-Balde-20-Litros-1-239226.jpg?v=637713860628630000',
      imageAlt: 'ACEITE BALDE',
    })
  }
}
