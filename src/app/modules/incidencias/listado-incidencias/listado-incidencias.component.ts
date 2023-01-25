import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    MatTreeFlatDataSource,
    MatTreeFlattener,
} from '@angular/material/tree';
import { DialogChildrenComponent } from './dialog-children/dialog-children.component';
import { DialogIncidenciasComponent } from './dialog-incidencias/dialog-incidencias.component';
interface DetalleIncidencia {
    id: number;
    name: string;
    description: string;
}
interface Incidencia {
    id: number;
    name: string;
    details?: DetalleIncidencia[];
    children?: Incidencia[];
}
interface FlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

const incidencias: Incidencia[] = [
    {
        id: 1,
        name: 'Usuario | Área | Anexo',

        children: [
            {
                id: 2,
                name: 'Accesorios',
                children: [
                    {
                        id: 3,
                        name: 'Software',
                        children: [
                            {
                                id: 5,
                                name: 'Office 365 / Clave',
                                details: [
                                    {
                                        id: 1,
                                        name: 'Falta de software',
                                        description:
                                            'se necesita atención tal tal ta',
                                    },
                                ],
                            },
                            {
                                id: 6,
                                name: 'Windows 10',
                                details: [
                                    {
                                        id: 2,
                                        name: 'Clave de instalación',
                                        description: 'blablabla-blabla-blabla',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Hardware',
                        children: [
                            {
                                id: 7,
                                name: 'Computadora Escritorio',
                            },
                            {
                                id: 8,
                                name: 'Teléfono',
                            },
                            {
                                id: 9,
                                name: 'Historial Mantenimientos',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

@Component({
    selector: 'app-listado-incidencias',
    templateUrl: './listado-incidencias.component.html',
    styleUrls: ['./listado-incidencias.component.scss'],
})
export class ListadoIncidenciasComponent {
    private _transformer = (node: Incidencia, level: number) => ({
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        level,
        details: node.details,
    });

    treeControl = new FlatTreeControl<FlatNode>(
        (node) => node.level,
        (node) => node.expandable
    );
    treeFlattener = new MatTreeFlattener(
        this._transformer,
        (node) => node.level,
        (node) => node.expandable,
        (node) => node.children
    );
    dataSource = new MatTreeFlatDataSource(
        this.treeControl,
        this.treeFlattener
    );
    constructor(public dialog: MatDialog) {
        this.dataSource.data = incidencias;
    }

    hasChild = (_: number, node: FlatNode) => node.expandable;
    openDetailsDialog(details: any) {
        const dialogRef = this.dialog.open(DialogIncidenciasComponent, {
            data: {
                details,
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }
    openChildrenDialog() {
        const dialogRef = this.dialog.open(DialogChildrenComponent, {});
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);
        });
    }
}
