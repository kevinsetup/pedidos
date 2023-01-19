import { Component, EventEmitter, Output } from '@angular/core';
import { showUpdateSucces, showUpdateConfirm } from '../../../../utils/dialog.util';
import { showExitConfirm } from '../../../../utils/dialog.util';

@Component({
  selector: 'app-modificarpedido',
  templateUrl: './modificarpedido.component.html',
  styleUrls: ['./modificarpedido.component.scss']
})
export class ModificarpedidoComponent {
  final:number = 10;
  @Output() eventEmitter = new EventEmitter<Boolean>(); 

  showModal(){
    showUpdateConfirm().then((res)=>{
      if(res.isConfirmed){
        showUpdateSucces()
        this.eventEmitter.emit(false)

      }
    })
  }
  showModal3() {
    showExitConfirm().then((res)=>{
      if(res.isConfirmed){
        this.eventEmitter.emit(false)

      }
    })

}
}
