const url = `http://localhost:4000/clientes`

//agrega un cliente
export const nuevoCliente = async cliente =>{
    try {
        await fetch(url, {
            method: "POST",
            body:JSON.stringify(cliente), //manda un objeto o un string,
            headers: {
                'Content-type':'application/json'
            }
        })
        window.location.href = "index.html"
    } catch (error) {
        console.error(error);
    }   
}

// listamos los clientes
export const obtenerClientes = async ()=>{
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.error(error)
    }
}
//eliminamos un cliente
export const eliminarCliente = async (id) =>{
    try {
        console.log(id)
        await fetch(`${url}/${id}`,{
            method: "DELETE"
        });

    } catch (error) {
        console.log(error);
    }
}

//solicitamos el cliente individual 
export const obtenerCliente = async (id) =>{
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json()
        return cliente
    } catch (error) {
        console.log(error);
    }
}

export const editarCliente = async cliente =>{
   
    const {nombre, correo,empresa,telefono,id} = cliente;

    try {
        const response = await fetch(`${url}/${id}`,{
            method: 'PUT',
            body:JSON.stringify(cliente), //se parsea el cuerpo con JSON.stringify
            headers:{
                'Content-type' :"application/json"
            }
        })

       
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
}