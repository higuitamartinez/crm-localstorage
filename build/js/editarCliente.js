import {
    formularioClientes
} from './selectores.js';

import {
    llenarCampos,
    validarFormulario,
    comprobarExistenciaDB
}from './funciones.js';

document.addEventListener('DOMContentLoaded', () => {
    comprobarExistenciaDB();

    const parametrosURL = new URLSearchParams(window.location.search);
    const idCliente = parametrosURL.get('id');

    llenarCampos(Number(idCliente));
    formularioClientes.addEventListener('submit', validarFormulario);
})