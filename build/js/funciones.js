/**Funciones */
import Cliente from './clases/Cliente.js';
import {cliente,
    inputNombre,
    inputEmail,
    inputTelefono,
    inputEmpresa,
    formularioClientes} from './selectores.js';

import UI from './clases/UI.js';


export function validarFormulario(e){
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const telefono = inputTelefono.value.trim();
    const empresa = inputEmpresa.value.trim();

    if(nombre === '' || email === '' || telefono === '' || empresa === ''){
        UI.mostrarAlerta({categoria: 'error', mensaje: 'Todos los campos son obligatorios'});
        return;
    }

    cliente.nombre = nombre;
    cliente.email = email;
    cliente.telefono = telefono;
    cliente.empresa = empresa;

    if(typeof e.target.dataset.idCliente === 'undefined'){
        cliente.id = Date.now();
        Cliente.create(cliente);
    }else{
        cliente.id = Number(e.target.dataset.idCliente);
        Cliente.update(cliente);
    }
    window.location = 'index.html';
}


export function llenarCampos(idCliente){
    const cliente = Cliente.findById(idCliente);
    const {id, nombre, email, telefono, empresa} = cliente;

    formularioClientes.dataset.idCliente = `${id}`;

    inputNombre.value = nombre;
    inputEmail.value = email;
    inputTelefono.value = telefono;
    inputEmpresa.value = empresa;
}

export function comprobarExistenciaDB(){
    const clientesLS = localStorage.getItem('clientes');

    if(!clientesLS){
        localStorage.setItem('clientes', '[]');
    }
}