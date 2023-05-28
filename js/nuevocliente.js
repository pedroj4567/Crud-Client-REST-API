//para que las variables se queden en este archivo y no salgan a otros modulos
//usamos una funcion Ifee 
import {mostrarAlerta, validar} from './funciones.js'
import { nuevoCliente } from './API.js'
(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',validarCliente);

    function validarCliente(e){
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        //validacion 
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if( validar(cliente) ){
           mostrarAlerta("Todos los campos son obligatorios");
           return;
        }

        //enviamos los datos por post 
        nuevoCliente(cliente);


    }
   
})();