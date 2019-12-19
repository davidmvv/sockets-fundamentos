var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});
//Escuchar  
socket.on('disconnect', function() {

    console.log('Perdimos conexi+on con el servidor');

});
// Enviar informaciónn
socket.emit('enviarMensaje', {
    usuario: 'David',
    message: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(resp) {

    console.log('Servidor: ', resp);

});