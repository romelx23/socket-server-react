// Servidor de Express
const express = require('express');
// Servidor de sockets
const http    = require('http');
const socketio= require('socket.io');
// Modulo nativo de node para formar el path
const path    = require('path');
const cors=require('cors');
const Sockets = require('./sockets');
class Server{

    constructor(){
        this.app = express();
        this.port=process.env.PORT;

        // Http Server
        this.server= http.createServer(this.app);

        // Consfiguracion del Socket server
        this.io=socketio(this.server,{/*consfiguraciones */});

    }

    middlewares(){
        // Desplegar el Directorio Publico
        this.app.use(express.static('public'));
        // Cors
        this.app.use(cors());
    }
    configurarSockets(){
        new Sockets( this.io );
    }

    execute(){
        // Iniciarlizar Middlewares
        this.middlewares();
        console.log('holaa')
        
        // Inicializar Sockets
        this.configurarSockets();
        
        // Inicializar Server
        this.server.listen(this.port,()=>{
            console.log('server corriendo: ',this.port)
        });
    }
}

module.exports=Server;