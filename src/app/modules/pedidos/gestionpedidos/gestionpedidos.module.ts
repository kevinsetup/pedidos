import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { GestionpedidosComponent } from './gestionpedidos.component';
import { FormsModule } from '@angular/forms';
import { DetallepedidoComponent } from './detallepedido/detallepedido.component';
import { MatIconModule } from '@angular/material/icon';
import { ModificarpedidoComponent } from './modificarpedido/modificarpedido.component';
const exampleRoutes: Route[] = [
  {
      path     : '',
      component: GestionpedidosComponent
  }
];

@NgModule({
  declarations: [
    GestionpedidosComponent,
    DetallepedidoComponent,
    ModificarpedidoComponent
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule,
    FormsModule,
    MatIconModule
  ]
})
export class GestionpedidosModule { }
