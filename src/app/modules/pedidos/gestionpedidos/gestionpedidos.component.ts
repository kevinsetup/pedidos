import { Component, ElementRef, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-gestionpedidos',
  templateUrl: './gestionpedidos.component.html',
  styleUrls: ['./gestionpedidos.component.scss']
})
export class GestionpedidosComponent {
  activeModalRegCompra = false;
  activeModalTransCompra = false;
  activeModalProvCompra = false;
  activeModalProvCompra2 = false;
  activeModalCuentaPagar = false;


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
}
