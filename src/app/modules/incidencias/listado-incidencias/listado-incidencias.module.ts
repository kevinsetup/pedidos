import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoIncidenciasComponent } from './listado-incidencias.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { FuseConfirmationModule } from '@fuse/services/confirmation';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: ListadoIncidenciasComponent,
    },
];

@NgModule({
    declarations: [ListadoIncidenciasComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(exampleRoutes),
        MatIconModule,
        FuseCardModule,
        FuseAlertModule,
        MatFormFieldModule,
        MatSelectModule,
        FuseAlertModule,
        MatInputModule,
        MatTreeModule,
        FuseConfirmationModule,
    ],
})
export class ListadoIncidenciasModule {}
