import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-verdetalle',
    templateUrl: './verdetalle.component.html',
    styleUrls: ['./verdetalle.component.scss'],
})
export class VerdetalleComponent {
    @Output() hideDetail = new EventEmitter<Boolean>();
    detailProducts: any = [
        {
            productId: '216714852',
            productName: 'Chancay',
            quantity: 3,
            unitPrice: 0.9,
        },
        {
            productId: '216714852',
            productName: 'Chancay',
            quantity: 3,
            unitPrice: 0.9,
        },
        {
            productId: '216714852',
            productName: 'Chancay',
            quantity: 3,
            unitPrice: 0.9,
        },
        {
            productId: '216714852',
            productName: 'Chancay',
            quantity: 3,
            unitPrice: 0.9,
        },
        {
            productId: '216714852',
            productName: 'Chancay',
            quantity: 3,
            unitPrice: 0.9,
        },
        {
            productId: '216714852',
            productName: 'Chancay',
            quantity: 3,
            unitPrice: 0.9,
        },
        {
            productId: '216714852',
            productName: 'Chancay',
            quantity: 3,
            unitPrice: 0.9,
        },
    ];
    hideOrder() {
        this.hideDetail.emit(false);
    }
}
