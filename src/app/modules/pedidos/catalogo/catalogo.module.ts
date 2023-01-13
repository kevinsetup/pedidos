import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo.component';
import {MatIconModule} from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';

const exampleRoutes: Route[] = [
  {
    path: '',
    component: CatalogoComponent
  }
];

@NgModule({
  declarations: [
    CatalogoComponent
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule,
    MatIconModule,
    FuseCardModule
  ]
})
export class CatalogoModule { }
