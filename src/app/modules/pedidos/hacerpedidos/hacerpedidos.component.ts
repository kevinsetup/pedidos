import { Component } from '@angular/core';
import { showSaveConfirm, showAddSucces } from '../../../utils/dialog.util';

@Component({
  selector: 'app-hacerpedidos',
  templateUrl: './hacerpedidos.component.html',
  styleUrls: ['./hacerpedidos.component.scss']
})
export class HacerpedidosComponent {
  final:number = 3.70;

  fechaActual = new Date().toISOString().split('T')[0];
  showModal(){
    showSaveConfirm().then((res)=>{
      if(res.isConfirmed){
        showAddSucces()
      }
    })
  }
}
