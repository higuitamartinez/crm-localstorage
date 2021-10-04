import {cliente, formularioClientes} from './selectores.js';

import {validarFormulario, comprobarExistenciaDB} from './funciones.js';

document.addEventListener('DOMContentLoaded', () =>{
    comprobarExistenciaDB();
    formularioClientes.addEventListener('submit', validarFormulario);
})

