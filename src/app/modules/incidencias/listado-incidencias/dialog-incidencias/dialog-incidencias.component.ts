import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    details: any;
}
@Component({
    selector: 'app-dialog-incidencias',
    templateUrl: './dialog-incidencias.component.html',
    styleUrls: ['./dialog-incidencias.component.scss'],
})
export class DialogIncidenciasComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogIncidenciasComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
        console.log(data.details);
    }
    createDetailIsOpen: boolean = false;
    detalleIncidencia = {
        name: '',
        description: '',
    };

    onClose(): void {
        this.dialogRef.close();
    }
    saveData() {
        console.log('Saving Data');
    }

    addDetailToData() {
        console.log('Adding Data');
        console.log(this.detalleIncidencia);
    }
    showNewDetail() {
        console.log(this.createDetailIsOpen);
        this.createDetailIsOpen = true;
    }
}
