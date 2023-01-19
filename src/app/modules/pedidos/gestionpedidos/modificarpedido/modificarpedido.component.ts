import { Component } from '@angular/core';
import { showSaveConfirm, showAddSucces } from '../../../../utils/dialog.util';

@Component({
  selector: 'app-modificarpedido',
  templateUrl: './modificarpedido.component.html',
  styleUrls: ['./modificarpedido.component.scss']
})
export class ModificarpedidoComponent {
  final:number = 10;
  
  showModal(){
    showSaveConfirm().then((res)=>{
      if(res.isConfirmed){
        showAddSucces()
      }
    })
  }
}
