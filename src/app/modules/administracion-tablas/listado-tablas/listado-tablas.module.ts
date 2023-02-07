import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoTablasComponent } from './listado-tablas.component';
import { Route, RouterModule } from '@angular/router';
const exampleRoutes: Route[] = [
    {
        path: '',
        component: ListadoTablasComponent,
    },
];

@NgModule({
    declarations: [ListadoTablasComponent],
    imports: [CommonModule, RouterModule.forChild(exampleRoutes)],
})
export class ListadoTablasModule {}
