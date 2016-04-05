var server = 'http://192.168.37.12:8080/CE/';

$(document).ready(function(){
    
    $("#cerrarSesion").on("click",function(event) {
        localStorage.removeItem("usuario"); // Para cerrar sesion
        window.location.replace('login.html');
    });

    $("#salir").on("click",function(event) {
        navigator.app.exitApp();
    });

    $("#volver").on("click",function(event) {
        window.location.replace('encuestas.html?subscripcion=Encuestas');
    });


    $("#encuestas_pendientes").on("click", function(event) {
        window.location.replace('encuestas.html?subscripcion=Encuestas');
    });
    
    $("#encuestas_finalizadas").on("click", function(event) {
        window.location.replace('finalizadas.html?subscripcion=Encuestas');
    });

    $('#cuenta').on("click",function(event) {
        window.location.replace('cuenta.html');
    });

    $('#notificaciones').on("click",function(event) {
        window.location.replace('notificaciones.html');
    });


});