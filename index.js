const {createServer} = require('http');
let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(`
    <h1>Ola</h1>
    <p>Voce esta procurando por <code>${request.url}</code></p>
    `)
    response.end()
})

server.listen(8000);
console.log("Magica acontencendo na porta 8000!");