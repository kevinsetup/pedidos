import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

export function showDeleteConfirm(): Promise<SweetAlertResult> {
    return Swal.fire({
        title: '¿Estas seguro?',
        text: "¡No podrás revertir este cambio!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Eliminar'
    });
}
export function showSaveConfirm(): Promise<SweetAlertResult> {
    return Swal.fire({
        title: '¿Estas seguro?',
        text: "Se guardaran los datos ingresados",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Guardar'
    });
}

export function showNewConfirm(): Promise<SweetAlertResult> {
    return Swal.fire({
        title: '¿Estas seguro?',
        text: "Se agregará un nuevo registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Guardar'
    });
}

export function showUpdateConfirm(): Promise<SweetAlertResult> {
    return Swal.fire({
        title: '¿Estas seguro?',
        text: "Se actualizarán los datos del registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Actualizar'
    });
}

export function showExitConfirm(): Promise<SweetAlertResult> {
    return Swal.fire({
        title: '¿Desea Salir?',
        text: "Perderá los cambios al cerrar. ¿Realmente desea salir?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Continuar'
    });
}
export function showDeleteSucces(): Promise<SweetAlertResult> {
    return Swal.fire(
        '¡Éxito!',
        'El registro se ha eliminado',
        'success'
    )
}

export function showAddSucces(): Promise<SweetAlertResult> {
    return Swal.fire(
        '¡Éxito!',
        'El registro se ha guardado',
        'success'
    )
}

export function showUpdateSucces(): Promise<SweetAlertResult> {
    return Swal.fire(
        '¡Éxito!',
        'El registro se ha actualizado',
        'success'
    )
}

export function $showError(): Promise<SweetAlertResult> {
    return Swal.fire(
        '¡Error!',
        'Ha ocurrido un error en el servidor',
        'error'
    );
}

export function customConfirm(
    title: string,
    msg: string,
    options?: { buttonCancel: string, buttonAccept: string }
): Promise<SweetAlertResult> {

    return Swal.fire({
        heightAuto: false,
        title: title,
        icon: 'warning',
        text: msg,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonText: options?.buttonCancel ? options.buttonCancel : 'Cancelar',
        confirmButtonText: options?.buttonAccept ? options.buttonAccept : 'Continuar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    });
}

export function customMessage(title: string, msg: string): Promise<SweetAlertResult> {
    return Swal.fire({
        icon: 'success',
        title: title,
        text: msg
    });
}