import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TablasService } from 'app/services/tablas.service';
import { CreateTableModalComponent } from './components/create-table-modal/create-table-modal.component';

@Component({
    selector: 'app-listado-tablas',
    templateUrl: './listado-tablas.component.html',
    styleUrls: ['./listado-tablas.component.scss'],
})
export class ListadoTablasComponent implements OnInit {
    masterTables: any;
    constructor(
        private tablesService: TablasService,
        private dialog: MatDialog,
        private fuseCofirmationService: FuseConfirmationService
    ) {}
    ngOnInit(): void {
        this.getTables();
    }
    getTables() {
        this.tablesService.getMastersTables().subscribe((e) => {
            this.masterTables = e;
        });
    }
    deleteTable(id: number) {
        const dialogRef = this.fuseCofirmationService.open({
            title: '¿Estás Seguro?',
            message: 'Esta Acción no es reversible.',
        });
        dialogRef.afterClosed().subscribe((result: string) => {
            if (result && result == 'confirmed') {
                this.tablesService.deleteMasterTable(id).subscribe((res) => {
                    this.getTables();
                });
            }
        });
    }
    updateTable(id: number) {}

    openCreateModal() {
        const dialogRef = this.dialog.open(CreateTableModalComponent, {});
        dialogRef.afterClosed().subscribe((res) => {
            if (res && res == 'created') {
                this.getTables();
            }
        });
    }
}
