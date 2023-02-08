import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoTablasComponent } from './listado-tablas.component';
import { Route, RouterModule } from '@angular/router';
import { CreateTableModalComponent } from './components/create-table-modal/create-table-modal.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { FuseConfirmationModule } from '@fuse/services/confirmation';
import { SharedModule } from '../../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
const exampleRoutes: Route[] = [
    {
        path: '',
        component: ListadoTablasComponent,
    },
];

@NgModule({
    declarations: [ListadoTablasComponent, CreateTableModalComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(exampleRoutes),
        MatFormFieldModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        FuseConfirmationModule,
        MatTabsModule,
        MatSelectModule,
    ],
})
export class ListadoTablasModule {}
