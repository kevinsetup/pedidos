import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
    details: any;
}
@Component({
    selector: 'app-dialog-children',
    templateUrl: './dialog-children.component.html',
    styleUrls: ['./dialog-children.component.scss'],
})
export class DialogChildrenComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogChildrenComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    childrenName: string;
    onClose(childrenName: string = '') {
        this.dialogRef.close({ childrenName });
    }
    saveChildrenName() {
        this.childrenName
            ? this.onClose(this.childrenName)
            : console.log('Nombre Invalido');
    }
}
