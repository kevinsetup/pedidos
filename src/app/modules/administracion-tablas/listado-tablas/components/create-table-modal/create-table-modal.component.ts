import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TablasService } from 'app/services/tablas.service';

@Component({
    selector: 'app-create-table-modal',
    templateUrl: './create-table-modal.component.html',
    styleUrls: ['./create-table-modal.component.scss'],
})
export class CreateTableModalComponent {
    constructor(
        public dialogRef: MatDialogRef<CreateTableModalComponent>,
        private tablesService: TablasService
    ) {}
    tableBody: {
        name: string;
        description: string;
    } = {
        name: '',
        description: '',
    };

    columnsBody: { name: string; description: string; state: number }[] = [
        {
            name: '',
            description: '',
            state: 1,
        },
    ];
    columnStates: { id: number; name: string }[] = [
        {
            id: 0,
            name: 'Inactive',
        },
        {
            id: 1,
            name: 'Active',
        },
    ];

    saveTable() {
        const { name, description } = this.tableBody;
        if (name && description) {
            this.tablesService
                .createMasterTable(this.tableBody)
                .subscribe((result) => {
                    console.log(result);
                    this.closeModal('created');
                    return;
                });
        } else {
            console.log('Campos incompletos');
        }
    }

    closeModal(result: any = undefined) {
        this.dialogRef.close(result);
    }
    deleteRow(index: number) {
        console.log(index);
        this.columnsBody.splice(index, 1);
    }
    addRow() {
        this.columnsBody.push({
            name: '',
            description: '',
            state: 1,
        });
    }
}
