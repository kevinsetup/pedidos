import { Component, ElementRef, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';
import { customConfirm, customMessage } from '../../../utils/dialog.util';

@Component({
  selector: 'app-gestionpedidos',
  templateUrl: './gestionpedidos.component.html',
  styleUrls: ['./gestionpedidos.component.scss']
})
export class GestionpedidosComponent {
  activeModalRegCompra = false;
  activeModificar = false;
  activeVerDetalle = false;

  openTab = 1;
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
  
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  expectedChangeInModule(event : any){
    this.activeModalRegCompra = event

    console.log(event)

  }
  confirmar(){
    customConfirm('¿Desea confirmar el pedido?', '¡Esta acción no se podrá revertir!')
    .then((res)=>{
      if(res.isConfirmed){
        customMessage('¡Éxito!', 'Se ha confirmado el pedido')
      }
    })
  }
  modificar(){
    this.activeModificar = true;
  }
  cancelar(){
    customConfirm('¿Desea cancelar el pedido?', '¡Esta acción no se podrá revertir!')
    .then((res)=>{
      if(res.isConfirmed){
        customMessage('¡Éxito!', 'Se ha cancelado el pedido')
      }
    })
  }
  aprobar(){
    customConfirm('¿Desea aprobar el pedido?', '¡Esta acción no se podrá revertir!')
    .then((res)=>{
      if(res.isConfirmed){
        customMessage('¡Éxito!', 'Se ha aprobado el pedido')
      }
    })
  }

}
