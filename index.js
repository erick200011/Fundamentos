const http = require("http");

const server = http.createServer((req,res)=>{
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hola mundo</h1>");
    res.write("<h2>mi nombre es:</h2>")
    res.write("<h3>Erick Palomo</h3>")
    res.end()
})

server.listen(3000)

console.log("Servidor ejecutandose en el puerto 3000");