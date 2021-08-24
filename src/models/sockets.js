
class Sockets{
    constructor( io ){

        this.io=io;

        this.socketEvents();

    }
    
    socketEvents(){
        // On connection
        this.io.on('connection', ( socket ) => {
            // emit es para emitir un evento,
            // su primer parametro es un evento
            //  y su segundo parametro es un payload
        
            // socket.emit('mensaje-bienvenida',{
            //     msg:'Bienvenido al server',
            //     fecha:new Date()
            // });
        
            //* console.log(socket.id);
            //* Escuchar el evento :mensaje-to-server
            socket.on('mensaje-to-server',(data)=>{
                console.log(data);
                // * Con socket solo oye el cliente que emitio ese evento
                // * Con el Namespace io notifica a todos los clientes conectados
                this.io.emit('mensaje-from-server',data);
            })
        });
    }

}

module.exports=Sockets;