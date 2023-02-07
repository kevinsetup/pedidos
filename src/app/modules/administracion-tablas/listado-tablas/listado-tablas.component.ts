import { Component, OnInit } from '@angular/core';
import { TablasService } from 'app/services/tablas.service';

@Component({
    selector: 'app-listado-tablas',
    templateUrl: './listado-tablas.component.html',
    styleUrls: ['./listado-tablas.component.scss'],
})
export class ListadoTablasComponent implements OnInit {
    masterTables: any;
    constructor(private tablesService: TablasService) {}
    ngOnInit(): void {
        this.tablesService.getMastersTables().subscribe((e) => {
            this.masterTables = e;
        });
    }
}
