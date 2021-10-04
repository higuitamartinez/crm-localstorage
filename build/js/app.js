import UI from './clases/UI.js';
import {comprobarExistenciaDB} from './funciones.js';

document.addEventListener('DOMContentLoaded', () => {
    comprobarExistenciaDB();
    UI.clientesHTML();
})




