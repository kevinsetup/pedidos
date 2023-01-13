import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { GestionpedidosComponent } from './gestionpedidos.component';
import { FormsModule } from '@angular/forms';

const exampleRoutes: Route[] = [
  {
      path     : '',
      component: GestionpedidosComponent
  }
];

@NgModule({
  declarations: [
    GestionpedidosComponent
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule,
    FormsModule
  ]
})
export class GestionpedidosModule { }
