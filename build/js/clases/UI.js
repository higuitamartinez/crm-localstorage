import Cliente from './Cliente.js';
import {tablaClientes, contenidoPrincipal, formularioClientes} from '../selectores.js';

export default class UI{

    static clientesHTML(){
        this.#limpiarHTML();
        const clientes = Cliente.all();
        
        clientes.forEach( cliente => {
            const {id, nombre, email, telefono, empresa} = cliente;

            const tr = document.createElement('TR');
            const tdDatos = document.createElement('TD');
            const tdTelefono = document.createElement('TD');
            const tdEmpresa = document.createElement('TD');
            const tdAcciones = document.createElement('TD');
            const divAcciones = document.createElement('DIV');

            const pNombre = document.createElement('P');
            const pEmail = document.createElement('P');
            const aActualizar = document.createElement('A');
            const aEliminar = document.createElement('A');

            pNombre.textContent = nombre;
            pNombre.classList.add('nombre');
            pEmail.textContent = email;
            pEmail.classList.add('correo');
            tdTelefono.textContent = telefono;
            tdEmpresa.textContent = empresa;
            tdEmpresa.classList.add('tabla-empresa');

            aActualizar.textContent = 'Actualizar';
            aActualizar.href = `editar-cliente.html?id=${id}`;
            aActualizar.classList.add('actualizar')
            aEliminar.textContent = 'Eliminar';
            aEliminar.href = '#';
            aEliminar.onclick = () =>{
                Cliente.delete(id);
                this.clientesHTML();
            }
            aEliminar.classList.add('eliminar');

            tdDatos.classList.add('tabla-datos');
            tdDatos.appendChild(pNombre);
            tdDatos.appendChild(pEmail);
            divAcciones.classList.add('tabla-acciones');
            divAcciones.appendChild(aActualizar);
            divAcciones.appendChild(aEliminar);
            tdAcciones.appendChild(divAcciones);

            tr.appendChild(tdDatos);
            tr.appendChild(tdTelefono);
            tr.appendChild(tdEmpresa);
            tr.appendChild(tdAcciones);

            tablaClientes.appendChild(tr);
        }) 
    }

    static #limpiarHTML(){
        while(tablaClientes.firstChild){
            tablaClientes.removeChild(tablaClientes.firstChild);
        }
    }

    static mostrarAlerta(opciones){
        const existencia = document.querySelector('.alerta');
        if(existencia){
            existencia.remove();
        }

        const {categoria, mensaje} = opciones;
        const alerta = document.createElement('DIV');
        alerta.textContent = mensaje;
        alerta.classList.add('alerta', categoria);
        contenidoPrincipal.insertBefore(alerta, formularioClientes);

        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }

}