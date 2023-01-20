import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HacerpedidosComponent } from './hacerpedidos.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

const exampleRoutes: Route[] = [
  {
      path     : '',
      component: HacerpedidosComponent
  }
];


@NgModule({
  declarations: [
    HacerpedidosComponent
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule,
    MatIconModule,
    FormsModule
  ]
})
export class HacerpedidosModule { }
