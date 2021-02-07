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

        let correo = $("#correo").val();
        console.log(correo);

        let contraseña = $("#password").val();
        console.log(contraseña);

        let usuario = {
            "usuario": nombre ,
            "correo": correo,
            "password": contraseña,
        }

        $.ajax({
            type: "POST",
            url: 'http://localhost:5000/api/usuario/crear',
            contentType: "application/json",
            data: JSON.stringify(usuario),
            success: function(response){
                if(response["existe"] === true){
                    alert("Correo ya registrado, por favor intentar con otro");
                }
            }
        })


    });
});



