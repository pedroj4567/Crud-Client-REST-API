import { obtenerCliente, editarCliente } from './API.js'
import { validar,mostrarAlerta } from './funciones.js'
(
    function(){

        //campos del formulario
        const nombreInput = document.querySelector('#nombre');
        const correoInput = document.querySelector('#email');
        const telefonoInput = document.querySelector('#telefono');
        const empresaInput = document.querySelector('#empresa');
        const idInput = document.querySelector('#id');
        
    document.addEventListener('DOMContentLoaded', async()=>{
        //tomamos el id que se envia por parametro
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));

        const data = await obtenerCliente(idCliente)
        mostrarCliente(data)

        //mandamos la informacion 
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit',validarCliente)
    })

    function mostrarCliente(cliente){
        
        const {nombre,email,telefono,empresa,id} = cliente;

        nombreInput.value = nombre;
        correoInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;

    }

    function validarCliente(e){
        e.preventDefault();
        //organizamos la data nueva
        const clienteNuevaData = {
            nombre: nombreInput.value,
            correo : correoInput.value,
            telefono : telefonoInput.value,
            empresa : empresaInput.value,
            id : parseInt(idInput.value)
        }


        if(validar(clienteNuevaData)){
            console.log('no paso'); 
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        editarCliente(clienteNuevaData);

    }

})()