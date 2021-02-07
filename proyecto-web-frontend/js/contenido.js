$(document).ready(function(){///tipo main

    console.log("Página de Registro Cargada!"); //cuando recargues la pagina
    $("#nombre").text("Bienvenido, "+localStorage["usuario"]);

    ///Nuestra primera función
    //es el boton

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