import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallepedidoComponent } from './detallepedido.component';
import { VerdetalleComponent } from './verdetalle/verdetalle.component';



@NgModule({
  declarations: [
    DetallepedidoComponent,
    VerdetalleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetallepedidoComponent,
    VerdetalleComponent
  ],
})
export class DetallepedidoModule { }
