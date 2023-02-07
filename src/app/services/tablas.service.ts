import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './global';

@Injectable({
    providedIn: 'root',
})
export class TablasService {
    private tableUrl: string = `${baseUrl}/tables`;
    private masterTableUrl: string = `${this.tableUrl}/master`;
    private detailTableUrl: string = `${this.tableUrl}/detail`;

    constructor(private httpClient: HttpClient) {}

    public getMastersTables() {
        return this.httpClient.get(`${this.masterTableUrl}`);
    }
    public getDetailTablesByMasterId(id: number) {
        return this.httpClient.get(`${this.detailTableUrl}`);
    }

    createMasterTable(tableBody: any) {
        return this.httpClient.post(`${this.masterTableUrl}`, tableBody);
    }

    createMasterDetail(detailBody: any) {
        return this.httpClient.post(`${this.detailTableUrl}`, detailBody);
    }
}
