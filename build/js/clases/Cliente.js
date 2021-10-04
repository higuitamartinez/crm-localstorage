
export default class Cliente{

    static create(cliente){
        const clientes = [...this.all(), cliente];
        localStorage.setItem('clientes', JSON.stringify(clientes));
    }

    static all(){
        const clientes = JSON.parse(localStorage.getItem('clientes'));
        return clientes;
    }

    static findById(id){
        const clientes = [...this.all()];
        const findCliente = clientes.find( cliente => cliente.id === id );
        return findCliente;
    }

    static update(clienteUpdate){
        const clientes = [...this.all()];
        const clientesUpdate = clientes.map( cliente => {
            if(cliente.id === clienteUpdate.id){
                cliente.nombre = clienteUpdate.nombre;
                cliente.email = clienteUpdate.email;
                cliente.telefono = clienteUpdate.telefono;
                cliente.empresa = clienteUpdate.empresa;
            }
            return cliente;
        } );
        
        localStorage.setItem('clientes', JSON.stringify(clientesUpdate));
    }

    static delete(id){
        const clientes = [...this.all()];
        const clientesUpdate = clientes.filter( cliente => cliente.id !== id );
        localStorage.setItem('clientes', JSON.stringify(clientesUpdate));
    }
}