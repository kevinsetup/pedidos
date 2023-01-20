import { Component } from '@angular/core';
import { customConfirm2, customMessage } from '../../../utils/dialog.util';

@Component({
  selector: 'app-hacerpedidos',
  templateUrl: './hacerpedidos.component.html',
  styleUrls: ['./hacerpedidos.component.scss']
})
export class HacerpedidosComponent {
  final:number = 3.70;

  fechaActual = new Date().toISOString().split('T')[0];
  showModal(){
   
    customConfirm2('¿Desea crear o confirmar el pedido?','¡Esta acción no se podrá revertir!', {buttonAccept: 'Crear', buttonCancel: 'Confirmar'}).then((result) => {
      if(result.isConfirmed){
        customMessage('¡Éxito!','Se ha creado el pedido')
      }else{
        customMessage('¡Éxito!','Se ha confirmado el pedido')

      }
    })
  }
}
