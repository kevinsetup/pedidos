import { Component, EventEmitter, Output } from '@angular/core';
import { showExitConfirm } from '../../../../utils/dialog.util';

@Component({
    selector: 'app-detallepedido',
    templateUrl: './detallepedido.component.html',
    styleUrls: ['./detallepedido.component.scss'],
})
export class DetallepedidoComponent {
    @Output() eventEmitter = new EventEmitter<Boolean>();

    verdetalle: boolean = false;
    showModal3() {
        this.eventEmitter.emit(false);
    }
}
