import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { GestionpedidosComponent } from './gestionpedidos.component';
import { FormsModule } from '@angular/forms';
import { DetallepedidoComponent } from './detallepedido/detallepedido.component';
import { MatIconModule } from '@angular/material/icon';
import { ModificarpedidoComponent } from './modificarpedido/modificarpedido.component';
import { VerdetalleComponent } from './detallepedido/verdetalle/verdetalle.component';
import { DetallepedidoModule } from './detallepedido/detallepedido.module';
const exampleRoutes: Route[] = [
  {
      path     : '',
      component: GestionpedidosComponent
  }
];

@NgModule({
  declarations: [
    GestionpedidosComponent,
    ModificarpedidoComponent  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule,
    FormsModule,
    MatIconModule,
    DetallepedidoModule
  ]
})
export class GestionpedidosModule { }
