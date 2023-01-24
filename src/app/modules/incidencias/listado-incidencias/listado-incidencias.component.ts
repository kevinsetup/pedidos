import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
    MatTreeFlatDataSource,
    MatTreeFlattener,
} from '@angular/material/tree';
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
                            },
                            {
                                id: 6,
                                name: 'Windows 10',
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
    constructor() {
        this.dataSource.data = incidencias;
    }

    hasChild = (_: number, node: FlatNode) => node.expandable;
}
