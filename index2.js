const http = require("http");

const server = http.createServer((req,res)=>{
    user = {
        user:"Erick",
        email:"epalomo154@gmail.com"
    }
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(user));
    res.end()
})

server.listen(3001)

console.log("Servidor ejecutandose en el puerto 3001");