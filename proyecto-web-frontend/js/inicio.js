// seccion para el registro

/* El js todo lo que tenemos que usar el tipo main de la pagina es.........
..........................................................................*/
///el simbolo de $ es que estamos usando Jquery

$(document).ready(function(){///tipo main

    console.log("Página de Registro Cargada!"); //cuando recargues la pagina

    ///Nuestra primera función
    //es el boton

    $("#registro").click(function(){
        //Aviso de que entraste
        // alert("MI PRIMER ENTRADA");
        ///2do paso obtener datos del usuario
        let nombre = $("#username").val();
        console.log(nombre);

        let contraseña = $("#password").val();
        console.log(contraseña);

        let usuario = {
            "usuario": nombre,
            "password": contraseña,
        }
        $.ajax({
            type: "POST",
            url: 'http://localhost:5000/api/usuario/logear',
            contentType: "application/json",
            data: JSON.stringify(usuario),
            success: function(response){
                if(response["existe"] === false){
                    alert("Usuario y/o contraseña incorrectos, intente de nuevo");
                }
                else{
                    localStorage["usuario_id"] = response["usuario_id"]
                    localStorage["usuario"] = response["usuario"]
                    localStorage["correo"] = response["correo"]
                    //mandar al contenido
                    alert("Gracias por visitar nuestra pagina, nos vamos a la pagina del contenido")
                    location.href="contenido.html"

                }
            }
        })
        //para el contenido  botón cerrar sesión
        $("#logout").click(function(){
            
            localStorage["usuario_id"] = ''
            localStorage["usuario"] = ''
            localStorage["correo"] = ''
            //redireccionar al login
            alert("Vuelva Pronto, reedireccionando al login");
            location.href="login2.html"
        });

    });

    async function registrar(url='', data= {}){
        const response = await fetch(url,{
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });

        return response.json();
    }

});