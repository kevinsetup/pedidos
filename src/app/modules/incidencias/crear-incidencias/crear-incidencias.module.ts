import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearIncidenciasComponent } from './crear-incidencias.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: CrearIncidenciasComponent,
    },
];

@NgModule({
    declarations: [CrearIncidenciasComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        FuseCardModule,
    ],
})
export class CrearIncidenciasModule {}
