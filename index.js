// Configuracion de nuestro servidor http
import http from "node:http";
import app from "./src/app.js";


// Crear el servidor
const server = http.createServer(app);

const PORT = process.env.PORT || process.env.SERV_PORT

server.listen(PORT);

// Dos funciones
// funcion que me dice que el servidor esta encendido
server.on('listening', () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})


//funcion que me dice si el servidor ha tenido un error
server.on("error", (error) => {
    console.log(error)
})
