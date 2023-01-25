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
import { DialogIncidenciasComponent } from './dialog-incidencias/dialog-incidencias.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DialogChildrenComponent } from './dialog-children/dialog-children.component';

const exampleRoutes: Route[] = [
    {
        path: '',
        component: ListadoIncidenciasComponent,
    },
];

@NgModule({
    declarations: [ListadoIncidenciasComponent, DialogIncidenciasComponent, DialogChildrenComponent],
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
        MatButtonModule,
        FormsModule,
    ],
})
export class ListadoIncidenciasModule {}
